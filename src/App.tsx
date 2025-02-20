import { useRoutes } from "react-router-dom"
import router from "./router"

const App = () => {
  const routeResult = useRoutes(router)
  return routeResult
}

export default App
