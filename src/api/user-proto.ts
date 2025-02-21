import { UserSampleCommandClient } from "../proto/User_sample_commandServiceClientPb"
import { UserSampleQueryClient } from "../proto/User_sample_queryServiceClientPb"
import { opts } from "./grpc-client"
import {
  CreateSampleRequest,
  DeleteSampleRequest,
  UpdateSampleRequest,
} from "../proto/user_sample_command_pb"
import {
  Int32Value,
  StringValue,
} from "google-protobuf/google/protobuf/wrappers_pb"
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb"
import { handleResponse } from "./util-client"
import { User } from "../types/user.type"
import { Pagination } from "../types/pagination.type"
import { RessponseCommon } from "../types/response.type"
import { PagingOption, SkipTakeOption } from "../proto/common_pb"
import {
  GetAllSamplesRequest,
  GetSampleRequest,
} from "../proto/user_sample_query_pb"

const BASE_URL = "https://external.365sharing.org/api/test"
const query = new UserSampleQueryClient(BASE_URL, null, opts)
const command = new UserSampleCommandClient(BASE_URL, null, opts)

export const clientUser = {
  createUser: async (body: {
    title: string
    description: string
    dueDate: Date
  }): Promise<RessponseCommon> => {
    const seconds = Number(Math.floor(body.dueDate.getTime() / 1000))

    const nanos = body.dueDate.getMilliseconds() * 1e6

    const request = new CreateSampleRequest()
    request.setDescription(new StringValue().setValue(body.description))
    request.setTitle(new StringValue().setValue(body.title))
    request.setDuedate(new Timestamp().setNanos(nanos).setSeconds(seconds))

    const response = await command.createSample(request, {})
    return handleResponse<RessponseCommon>(response)
  },
  deleteUser: async ({ id }: { id: number }) => {
    const request = new DeleteSampleRequest()
    request.setId(new Int32Value().setValue(id))
    const response = await command.deleteSample(request, {})
    return handleResponse<RessponseCommon>(response)
  },
  getAllUsers: async (body: {
    skip: number
    take: number
    pageNumber: number
    pageSize: number
  }) => {
    const pagination = new PagingOption()
    pagination.setPagenumber(new Int32Value().setValue(body.pageNumber))
    pagination.setPagesize(new Int32Value().setValue(body.pageSize))

    const skipTakeOption = new SkipTakeOption()
    skipTakeOption.setSkip(new Int32Value().setValue(body.skip))
    skipTakeOption.setTake(new Int32Value().setValue(body.take))

    const request = new GetAllSamplesRequest()
    request.setPagingoption(pagination)

    const response = await query.getAllSamples(request, {
      required: "false",
    })

    return handleResponse<Pagination<User>>(response)
  },
  getUser: async ({ id }: { id: number }) => {
    const request = new GetSampleRequest()
    request.setId(new Int32Value().setValue(id))
    const response = await query.getSample(request, {})
    return handleResponse<User>(response)
  },
  updateUser: async (body: {
    id: number
    title: string
    description: string
    dueDate: Date
  }) => {
    const seconds = Number(Math.floor(body.dueDate.getTime() / 1000))

    const nanos = body.dueDate.getMilliseconds() * 1e6

    const request = new UpdateSampleRequest()
    request.setId(new Int32Value().setValue(body.id))
    request.setDescription(new StringValue().setValue(body.description))
    request.setTitle(new StringValue().setValue(body.title))
    request.setDuedate(new Timestamp().setNanos(nanos).setSeconds(seconds))

    const response = await command.updateSample(request, {})
    return handleResponse<RessponseCommon>(response)
  },
}
