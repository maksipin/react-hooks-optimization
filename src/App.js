import { RouterProvider, useLocation, useRoutes } from "react-router";
import { route } from "./route/router";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { configPages } from "./config/configPages";
import CommonPage from "./pages/CommonPage/CommonPage";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./component/NavBar/Navbar";

function App() {
  const pages = Object.keys(configPages).map((page) => {
    const config = configPages[page].content;
    return {
      path: configPages[page].linkPage,
      element: <CommonPage config={[...config]} />,
    };
  });
  pages.push({
    path: "",
    element: <CommonPage config={[...configPages.main.content]} />,
  });

  const route = useRoutes([
    {
      path: "/",
      element: <Navbar />,
      children: pages,
    },
    {
      path: "*",
      element: <Navbar />,
    },
  ]);
  const location = useLocation();
  return (
    // <AnimatePresence mode="wait">
    //   <RouterProvider router={route} />
    // </AnimatePresence>
    <AnimatePresence mode="wait">
      {React.cloneElement(route, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
