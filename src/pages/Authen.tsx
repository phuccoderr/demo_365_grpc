import React from "react"
import { Outlet } from "react-router-dom"
import Forbidened from "./forbidened"

interface AuthenProps {
  allowedRoles: string
}

const Authen: React.FC<AuthenProps> = ({ allowedRoles }) => {
  const fakeRoles = "user"
  if (!allowedRoles.includes(fakeRoles)) {
    return <Forbidened />
  }

  return <Outlet />
}

export default Authen
