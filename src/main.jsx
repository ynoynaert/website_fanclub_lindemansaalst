import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";

import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Levensloop from "./pages/Levensloop.jsx";
import GoudenKriekskes from "./pages/GoudenKriekskes.jsx";
import Blocknotjen from "./pages/Blocknotjen.jsx";
import Fotos from "./pages/Fotos.jsx";
import ClubGeschiedenis from "./pages/Clubgeschiedenis.jsx";

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
        element: <AboutUs />,
      },
      {
        path: "/levensloop",
        element: <Levensloop />,
      },
      {
        path: "/goudenkriekskes",
        element: <GoudenKriekskes />,
      },
      {
        path: "/blocknotjen",
        element: <Blocknotjen />,
      },
      {
        path: "/fotos",
        element: <Fotos />,
      },
      {
        path: "/clubgeschiedenis",
        element: <ClubGeschiedenis />,
      }
    ],
  },
]);

const theme = extendTheme({
  config: {
    initialColorMode: "light", // or 'light'
    useSystemColorMode: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
