import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route } from "react-router-dom";

export default function SwitchMotion({ routes }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        {Array.from(routes).map((route, index) => (
          <Route
            key={`route-${route.path}`}
            exact={route.exact}
            path={route.path}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  ease: "easeInOut",
                  duration: 0.15,
                },
              }}
              exit={{
                opacity: 0,
              }}
            >
              <route.component />
            </motion.div>
          </Route>
        ))}
      </Switch>
    </AnimatePresence>
  );
}
