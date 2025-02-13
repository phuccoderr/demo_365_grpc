import { useMutation } from '@tanstack/react-query'
import { clientUser } from '../api/user-proto'
import { RessponseCommon } from '../types/response.type'
import { DeleteSampleRequest } from '../proto/user_sample_command_pb'
import { Int32Value } from 'google-protobuf/google/protobuf/wrappers_pb'

export const deleteUser = () => {
  const { command } = clientUser()

  return useMutation<RessponseCommon, void, { id: number }>({
    mutationFn: async ({ id }) => {
      const request = new DeleteSampleRequest()
      request.setId(new Int32Value().setValue(id))
      return new Promise((resolve, reject) => {
        command.deleteSample(request, {}, (err, response) => {
          if (err) reject(err)

          const body = response.toObject() as unknown as RessponseCommon

          if (body.statuscode === 200) {
            resolve(body)
          } else {
            reject(body)
          }
        })
      })
    },
  })
}
