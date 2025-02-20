import { useQuery } from "@tanstack/react-query"
import { clientUser } from "../api/user-proto"
import { PagingOption, SkipTakeOption } from "../proto/common_pb"
import { GetAllSamplesRequest } from "../proto/user_sample_query_pb"
import { Int32Value } from "google-protobuf/google/protobuf/wrappers_pb"
import { User } from "../types/user.type"
import { Pagination } from "../types/pagination.type"
import { handleResponse } from "../api/util-client"

export const getAllUsers = (body: {
  skip: number
  take: number
  pageNumber: number
  pageSize: number
}) => {
  const { query } = clientUser()

  const pagination = new PagingOption()
  pagination.setPagenumber(new Int32Value().setValue(body.pageNumber))
  pagination.setPagesize(new Int32Value().setValue(body.pageSize))

  const skipTakeOption = new SkipTakeOption()
  skipTakeOption.setSkip(new Int32Value().setValue(body.skip))
  skipTakeOption.setTake(new Int32Value().setValue(body.take))

  const request = new GetAllSamplesRequest()
  request.setPagingoption(pagination)

  return useQuery<Pagination<User>>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await query.getAllSamples(request, {
        required: "false",
      })

      return handleResponse<Pagination<User>>(response)
    },
    // placeholderData: {
    //   Items: [
    //     {
    //       Id: 1,
    //       Title: "",
    //       Description: "",
    //       DueDate: new Date().toISOString(),
    //       CreatedAt: new Date().toISOString(),
    //       UpdatedAt: new Date().toISOString(),
    //     },
    //   ],
    //   TotalItems: 0,
    //   PageNumber: 0,
    //   PageSize: 0,
    //   TotalPages: 0,
    // },
  })
}
