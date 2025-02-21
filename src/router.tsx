import React from "react"
import Forbidened from "./pages/403.tsx"
import Signin from "./pages/Signin.tsx"
import NotFoundPage from "./pages/404.tsx"
import Authen from "./pages/Authen.tsx"
import About from "./pages/About.tsx"
import Admin from "./pages/Admin.tsx"
import Home from "./pages/Home.tsx"
import { productRoutes } from "./pages/products/index.tsx"

const router = [
  // PRIVATE
  {
    path: "/",
    element: (
      <Authen allowedRoles="user">
        <Home />
      </Authen>
    ),
    children: [{ path: "about", element: <About /> }],
  },
  {
    path: "/admin",
    element: (
      <Authen allowedRoles="admin">
        <Admin />
      </Authen>
    ),
    children: [productRoutes],
  },
  // PUBLIC
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/403",
    element: <Forbidened />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]

export default router
