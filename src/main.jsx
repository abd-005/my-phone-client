import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import Main from "./components/Main.jsx";
import Phone from "./components/Phone.jsx";
// import Phones from "./components/Phones.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: "/phone",
        Component: Phone,
        loader: () => fetch("http://localhost:5000/phones"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading component...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
