import { APP_ROUTES } from "../configs/routes"
import Product from "~/pages/products/Product"
import ProductDetail from "~/pages/product-detail/ProductDetail"

export const productRouters = [
  {
    path: APP_ROUTES.PRODUCT,
    element: <Product />,
  },
  {
    path: APP_ROUTES.PRODUCT_DETAIL,
    element: <ProductDetail />,
  },
]
