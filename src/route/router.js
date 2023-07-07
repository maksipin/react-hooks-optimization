import { createBrowserRouter } from "react-router-dom";
import { configPages } from "../config/configPages";

import Navbar from "../component/NavBar/Navbar";
import CommonPage from "../pages/CommonPage/CommonPage";

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

export const route = createBrowserRouter([
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
