import {
  RouterProvider,
  createBrowserRouter,
  // BrowserRouter,
  // Routes,
  // Route,
} from "react-router-dom";
import "./App.css";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Testimonials from "./features/testimonials/Testimonials";
import Contact from "./features/contact/Contact";
import { NextUIProvider } from "@nextui-org/react";
import AppLayout from "./AppLayout";
import Explore from "./features/explore/explore.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: teamLoader,
      },
      { path: "/about", element: <About /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/contact", element: <Contact /> },
      { path: "/explore", element: <Explore /> },
    ],
  },
]);

// const router2 = createBrowserRouter([
// {
//   path: "/",
//   element: <Home />,
//   // loader: teamLoader,
// },
// { path: "/about", element: <About /> },
// { path: "/testimonials", element: <Testimonials /> },
// { path: "/contact", element: <Contact /> },
// ]);
function App() {
  return (
    <NextUIProvider className="dark">
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;
