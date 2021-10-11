/* eslint-disable no-restricted-globals */

import { clientsClaim } from "workbox-core";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate, CacheFirst } from "workbox-strategies";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { ExpirationPlugin } from "workbox-expiration";

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== "navigate") {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith("/_")) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html"),
);

registerRoute(
  ({ request }) =>
    request.destination === "script" || request.destination === "style",
  new StaleWhileRevalidate({
    cacheName: "static-resources",
  }),
);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "images",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
