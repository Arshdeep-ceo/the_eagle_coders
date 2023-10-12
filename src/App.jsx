import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./features/home/Home";
import About from "./features/about/About";
import { NextUIProvider } from "@nextui-org/react";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);

function App() {
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;
