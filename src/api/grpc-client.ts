import * as grpcWeb from "grpc-web"
import { checkToken, refreshToken } from "./util-client"

class MyUnaryInterceptor implements grpcWeb.UnaryInterceptor<any, any> {
  async intercept(
    request: grpcWeb.Request<any, any>,
    invoker: (
      request: grpcWeb.Request<any, any>
    ) => Promise<grpcWeb.UnaryResponse<any, any>>
  ) {
    checkToken(request)

    try {
      const response = await invoker(request)
      return response
    } catch (error) {
      refreshToken(error, request, invoker)
      throw error
    }
  }
}
export const opts = {
  unaryInterceptors: [new MyUnaryInterceptor()],
}
