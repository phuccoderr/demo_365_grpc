import React from "react"
import Forbidened from "./403"

interface AuthenProps {
  children?: React.ReactNode
  allowedRoles: string
}

const Authen: React.FC<AuthenProps> = ({ allowedRoles, children }) => {
  const fakeRoles = "user"
  if (!allowedRoles.includes(fakeRoles)) {
    return <Forbidened />
  }

  return children
}

export default Authen
