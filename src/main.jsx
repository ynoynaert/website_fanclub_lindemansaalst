import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import GoudenKriekskes from "./pages/GoudenKriekskes.jsx";
import Blocknotjen from "./pages/Blocknotjen.jsx";
import ClubGeschiedenis from "./pages/Clubgeschiedenis.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./components/NotFound.jsx";
import GratisTickets from "./pages/GratisTickets.jsx";
import Levensloop from "./pages/Levensloop.jsx";
import Weekend from "./pages/Weekend.jsx";

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
        path: "/goudenkriekskes",
        element: <GoudenKriekskes />,
      },
      {
        path: "/blocknotjen",
        element: <Blocknotjen />,
      },
      {
        path: "/clubgeschiedenis",
        element: <ClubGeschiedenis />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      // {
      //   path: "/levensloop",
      //   element: <Levensloop />,
      // },
      // {
      //   path: "/weekend",
      //   element: <Weekend />,
      // },
      // {
      //   path: "/gratis",
      //   element: <GratisTickets />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
