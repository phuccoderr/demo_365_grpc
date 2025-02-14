import * as grpcWeb from "grpc-web"

class MyUnaryInterceptor implements grpcWeb.UnaryInterceptor<any, any> {
  async intercept(
    request: grpcWeb.Request<any, any>,
    invoker: (
      request: grpcWeb.Request<any, any>
    ) => Promise<grpcWeb.UnaryResponse<any, any>>
  ) {
    // FAKE LOGIN IF HAVE TOKEN IN LOCALSTORAGE OR COOKIE
    const token = localStorage.getItem("token")
    if (token) {
      const metaData = request.getMetadata()
      metaData.Authorization = `Bearer ${token}`
    }

    const response = await invoker(request)

    // FAKE LOGIN FAIL
    if (response.getStatus().code === 401) {
      // Log out
    }

    return response
  }
}
export const opts = {
  unaryInterceptors: [new MyUnaryInterceptor()],
}
