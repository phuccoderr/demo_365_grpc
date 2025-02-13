import { useMutation } from '@tanstack/react-query'
import { clientUser } from '../api/user-proto'
import { CreateSampleRequest } from '../proto/user_sample_command_pb'
import { StringValue } from 'google-protobuf/google/protobuf/wrappers_pb'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'
import { RessponseCommon } from '../types/response.type'

export const createUser = () => {
  const { command } = clientUser()

  return useMutation<
    RessponseCommon,
    void,
    { title: string; description: string; dueDate: Date }
  >({
    mutationFn: async (body: {
      title: string
      description: string
      dueDate: Date
    }) => {
      const seconds = Number(Math.floor(body.dueDate.getTime() / 1000))

      const nanos = body.dueDate.getMilliseconds() * 1e6

      const request = new CreateSampleRequest()
      request.setDescription(new StringValue().setValue(body.description))
      request.setTitle(new StringValue().setValue(body.title))
      request.setDuedate(new Timestamp().setNanos(nanos).setSeconds(seconds))

      return new Promise((resolve, reject) => {
        command.createSample(request, {}, (err, response) => {
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
