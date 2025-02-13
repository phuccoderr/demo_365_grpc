import { useMutation } from '@tanstack/react-query'
import { clientUser } from '../api/user-proto'
import { GetSampleRequest } from '../proto/user_sample_query_pb'
import { Int32Value } from 'google-protobuf/google/protobuf/wrappers_pb'
import { RessponseCommon } from '../types/response.type'
import { User } from '../types/user.type'

export const getUser = () => {
  const { query } = clientUser()
  return useMutation<User, void, { id: number }>({
    mutationFn: async ({ id }: { id: number }) => {
      const request = new GetSampleRequest()
      request.setId(new Int32Value().setValue(id))

      return await new Promise((resolve, reject) => {
        query.getSample(request, {}, (err, response) => {
          if (err) reject(err)

          const body = response.toObject() as unknown as RessponseCommon

          if (body.statuscode === 200) {
            resolve(JSON.parse(body.data ?? '') as User)
          } else {
            reject(body)
          }
        })
      })
    },
  })
}
