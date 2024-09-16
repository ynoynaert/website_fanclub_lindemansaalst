import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme , ColorModeScript } from "@chakra-ui/react";

import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate replace to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/overons",
        element: <AboutUs />
      }
    ],
  },
]);

const theme = extendTheme({
  config: {
    initialColorMode: "dark", // or 'light'
    useSystemColorMode: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />
      </ChakraProvider>
  </React.StrictMode>,
);
