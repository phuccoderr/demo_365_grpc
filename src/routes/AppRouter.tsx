import React from "react"
import { useRoutes } from "react-router-dom"
import { APP_ROUTES } from "../configs/routes"

import { productRouters } from "./ProductRouter"
import Authen from "../pages/Authen"
import Home from "../pages/home"
import About from "../pages/about"
import Admin from "../pages/admin"
import Signin from "../pages/signin"
import Forbidened from "../pages/forbidened"
import NotFoundPage from "../pages/not-found"

export default function AppRouter() {
  const routes = useRoutes([
    // PRIVATE
    {
      element: <Authen allowedRoles="user" />,
      children: [
        { path: APP_ROUTES.HOME, element: <Home /> },
        { path: APP_ROUTES.ABOUT, element: <About /> },
        ...productRouters,
      ],
    },
    {
      element: <Authen allowedRoles="admin" />,
      children: [{ path: APP_ROUTES.ADMIN, element: <Admin /> }],
    },
    // PUBLIC
    {
      path: APP_ROUTES.SIGNIN,
      element: <Signin />,
    },
    {
      path: APP_ROUTES.FORBIDDEN,
      element: <Forbidened />,
    },
    {
      path: APP_ROUTES.NOTFOUND,
      element: <NotFoundPage />,
    },
  ])
  return routes
}
