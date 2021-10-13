import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route } from "react-router-dom";

export default function SwitchMotion({ routes, initial, animate, exit }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        {Array.from(routes).map((route) => (
          <Route
            key={`route-${route.path}`}
            exact={route.exact}
            path={route.path}
          >
            <motion.div initial={initial} animate={animate} exit={exit}>
              <route.component />
            </motion.div>
          </Route>
        ))}
      </Switch>
    </AnimatePresence>
  );
}
