import { RouterProvider } from "react-router";
import { route } from "./route/router";
import React from "react";

function App() {
  return <RouterProvider router={route} />;
}

export default App;
