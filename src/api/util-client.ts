import * as grpcWeb from "grpc-web"
import { CommonResult } from "../proto/result_pb"
export const checkToken = (request: grpcWeb.Request<any, any>) => {
  if (request.getMetadata().required === "true") {
    const token = ""

    // IF TOKEN NOT FOUND OR EXPIRED, DONT CALL SERVER
    if (!token) throw new Error("unauthorized")

    const tokenExpirationDate = new Date()
    tokenExpirationDate.setMinutes(tokenExpirationDate.getMinutes() - 5)
    if (new Date() > tokenExpirationDate) throw new Error("unauthorized")

    request.getMetadata().Authorization = `Bearer ${token}`
  }
}

export const refreshToken = (
  statusCode: string,
  request: grpcWeb.Request<any, any>,
  invoker: (request: grpcWeb.Request<any, any>) => void
) => {
  if (statusCode === "UNAUTHENTICATED") {
    try {
      // CALL REFRESH TOKEN
      const newToken = ""
      request.getMetadata().Authorization = `Bearer ${newToken}`
      return invoker(request)
    } catch (errorRefresh) {
      // IF RESFRESH TOKEN IS EXPIRED OR INVALID, LOGOUT
      console.log("errorRefresh", errorRefresh)
      throw errorRefresh
    }
  }
}

export const handleResponse = <T>(response: CommonResult): T => {
  const body = response.toObject()
  return JSON.parse(body.data ?? "") as T
}
