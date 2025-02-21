import Product from "./Product"
import React from "react"
import ProductDetail from "./ProductDetail"

export const productRoutes = {
  path: "products",
  element: <Product />,
  children: [
    {
      path: "detail",
      element: <ProductDetail />,
    },
  ],
}
