import { useQuery } from '@tanstack/react-query'
import { clientUser } from '../api/user-proto'
import { PagingOption, SkipTakeOption } from '../proto/common_pb'
import { GetAllSamplesRequest } from '../proto/user_sample_query_pb'
import { Int32Value } from 'google-protobuf/google/protobuf/wrappers_pb'
import { RessponseCommon } from '../types/response.type'
import { User } from '../types/user.type'
import { Pagination } from '../types/pagination.type'

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
    queryKey: ['users'],
    queryFn: async () => {
      return await new Promise((resolve, reject) => {
        query.getAllSamples(request, {}, (err, response) => {
          if (err) reject(err)

          const body = response.toObject() as unknown as RessponseCommon

          if (body.statuscode === 200) {
            resolve(JSON.parse(body.data ?? '') as Pagination<User>)
          } else {
            reject(body)
          }
        })
      })
    },
  })
}
