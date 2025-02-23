import { HTTP_STATUS_CODES } from "../constants/http-status-code"
import { MESSAGE_ERROR } from "../constants/message"
import { parseData } from "./format.util"
import * as grpcWeb from "grpc-web"

export const metadataQuery = {
  "Content-Type": "application/grpc-web",
  Accept: "application/grpc-web",
  // Authorization: `Bearer ${process.env.TOKEN_QUERY}`
}

export const handleResponse = <T>(response: any, defaultValue: T) => {
  try {
    if (response.getStatuscode() === HTTP_STATUS_CODES.OK) {
      const dataString = response?.getData?.()

      console.log("dataString", dataString)

      if (
        dataString === null ||
        dataString === undefined ||
        dataString === ""
      ) {
        return defaultValue
      }

      return parseData<T>(response, defaultValue)
    }
  } catch (error) {
    console.error(MESSAGE_ERROR.AN_UNEXPECTED_ERROR_OCCURRED, error)
    throw error
  }
}

export const checkToken = (request: grpcWeb.Request<any, any>) => {
  const token = ""
  const tokenExpirationDate = new Date()
  tokenExpirationDate.setMinutes(tokenExpirationDate.getMinutes() - 5)

  // IF TOKEN NOT FOUND OR EXPIRED, DONT CALL SERVER
  if (!token) throw new Error("unauthorized")
  if (new Date() > tokenExpirationDate) throw new Error("unauthorized")

  request.getMetadata()["Authorization"] = `Bearer ${token}`
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
      request.getMetadata()["Authorization"] = `Bearer ${newToken}`
      return invoker(request)
    } catch (errorRefresh) {
      // IF RESFRESH TOKEN IS EXPIRED OR INVALID, LOGOUT
      console.log("errorRefresh", errorRefresh)
      throw errorRefresh
    }
  }
}
