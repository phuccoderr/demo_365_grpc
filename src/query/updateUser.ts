import { useMutation } from '@tanstack/react-query'
import { clientUser } from '../api/user-proto'
import { RessponseCommon } from '../types/response.type'
import { UpdateSampleRequest } from '../proto/user_sample_command_pb'
import {
  Int32Value,
  StringValue,
} from 'google-protobuf/google/protobuf/wrappers_pb'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'

export const updateUser = () => {
  const { command } = clientUser()

  return useMutation<
    RessponseCommon,
    void,
    { id: number; title: string; description: string; dueDate: Date }
  >({
    mutationFn: async (body: {
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

      return new Promise((resolve, reject) => {
        command.updateSample(request, {}, (err, response) => {
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
