import React from "react"
import { useNavigate } from "react-router-dom"

interface AuthenProps {
  children?: React.ReactNode
  allowedRoles: string
}

const Authen: React.FC<AuthenProps> = ({ allowedRoles, children }) => {
  const fakeRoles = "user"
  const navigate = useNavigate()
  if (!allowedRoles.includes(fakeRoles)) {
    navigate("/403")
  }

  return children
}

export default Authen
