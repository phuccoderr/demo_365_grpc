import { RessponseCommon } from "../../../types/utils/response.type"
import {
  Int32Value,
  StringValue,
} from "google-protobuf/google/protobuf/wrappers_pb"
import { CreateUser, UpdateUser } from "../../../types/users/request/user.type"
import {
  CreateSampleRequest,
  DeleteSampleRequest,
  UpdateSampleRequest,
} from "./protos/user_sample_command_pb"
import { UserSampleCommandClient } from "./protos/User_sample_commandServiceClientPb"
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb"
import { handleResponse, metadataQuery } from "../../../utils/api.util"
import { MESSAGE_ERROR } from "../../../constants/message"

const BASE_URL = "https://external.365sharing.org/api/test"
const command = new UserSampleCommandClient(BASE_URL)

export const usersCommandApi = {
  createUser: async (body: CreateUser) => {
    try {
      const request = new CreateSampleRequest()

      if (body.description) {
        request.setDescription(new StringValue().setValue(body.description))
      }

      if (body.title) {
        request.setTitle(new StringValue().setValue(body.title))
      }

      if (body.dueDate) {
        const seconds = Number(Math.floor(body.dueDate.getTime() / 1000))
        const nanos = body.dueDate.getMilliseconds() * 1e6
        request.setDuedate(new Timestamp().setNanos(nanos).setSeconds(seconds))
      }

      const response = await command.createSample(request, metadataQuery)
      return handleResponse<RessponseCommon>(response, {} as RessponseCommon)
    } catch (error) {
      console.error(MESSAGE_ERROR.ERROR_GRPC, error)
      throw error
    }
  },
  updateUser: async (body: UpdateUser) => {
    try {
      const request = new UpdateSampleRequest()

      request.setId(new Int32Value().setValue(body.id))

      if (body.description) {
        request.setDescription(new StringValue().setValue(body.description))
      }

      if (body.title) {
        request.setTitle(new StringValue().setValue(body.title))
      }

      if (body.dueDate) {
        const seconds = Number(Math.floor(body.dueDate.getTime() / 1000))
        const nanos = body.dueDate.getMilliseconds() * 1e6
        request.setDuedate(new Timestamp().setNanos(nanos).setSeconds(seconds))
      }

      const response = await command.updateSample(request, {})
      return handleResponse<RessponseCommon>(response, {} as RessponseCommon)
    } catch (error) {
      console.error(MESSAGE_ERROR.ERROR_GRPC, error)
      throw error
    }
  },
  deleteUser: async (id: number) => {
    try {
      const request = new DeleteSampleRequest()
      request.setId(new Int32Value().setValue(id))
      const response = await command.deleteSample(request, {})
      return handleResponse<RessponseCommon>(response, {} as RessponseCommon)
    } catch (error) {
      console.error(MESSAGE_ERROR.ERROR_GRPC, error)
      throw error
    }
  },
}
