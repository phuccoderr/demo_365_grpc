import { createRoot } from "react-dom/client"
import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)
