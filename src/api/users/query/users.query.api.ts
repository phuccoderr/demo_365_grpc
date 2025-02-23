import { Int32Value } from "google-protobuf/google/protobuf/wrappers_pb"
import {
  GetAllSamplesRequest,
  GetSampleRequest,
  PagingOption,
  SkipTakeOption,
} from "./protos/user_sample_query_pb"
import { UserSampleQueryClient } from "./protos/User_sample_queryServiceClientPb"
import { GetAllUser } from "../../../types/users/request/user.type"
import { MESSAGE_ERROR } from "../../../constants/message"
import { handleResponse, metadataQuery } from "../../../utils/api.util"
import { GetAllUsersResponse, User } from "~/types/users/response/user.type"

const BASE_URL = "https://external.365sharing.org/api/test"
const query = new UserSampleQueryClient(BASE_URL)

export const usersQueryApi = {
  getAllUser: async (body: GetAllUser) => {
    try {
      const request = new GetAllSamplesRequest()

      if (body.pagingOption) {
        request.setPagingoption(
          new PagingOption()
            .setPagenumber(
              new Int32Value().setValue(body.pagingOption.pageNumber)
            )
            .setPagesize(new Int32Value().setValue(body.pagingOption.pageSize))
        )
      }
      if (body.skipTakeOption) {
        request.setSkiptakeoption(
          new SkipTakeOption()
            .setSkip(new Int32Value().setValue(body.skipTakeOption.skip || 0))
            .setTake(new Int32Value().setValue(body.skipTakeOption.take || 8))
        )
      }

      const response = await query.getAllSamples(request, metadataQuery)

      return handleResponse<GetAllUsersResponse>(
        response,
        {} as GetAllUsersResponse
      )
    } catch (error) {
      console.error(MESSAGE_ERROR.ERROR_GRPC, error)
      throw error
    }
  },
  getUser: async (id: number) => {
    try {
      const request = new GetSampleRequest()
      request.setId(new Int32Value().setValue(id))
      const response = await query.getSample(request, metadataQuery)
      return handleResponse<User>(response, {} as User)
    } catch (error) {
      console.error(MESSAGE_ERROR.ERROR_GRPC, error)
      throw error
    }
  },
}
