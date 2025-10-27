import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Main from "./components/Main.jsx";
import Contact from "./components/Contact.jsx";

createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [{ path: "phones", Component: Contact }],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
