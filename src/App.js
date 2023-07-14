import { useLocation, useRoutes } from "react-router";
import { route } from "./route/router";
import React from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const router = useRoutes(route);
  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(router, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
