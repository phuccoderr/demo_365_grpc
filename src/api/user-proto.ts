import { UserSampleQueryClient } from './../proto/user_sample_query_grpc_web_pb'
import { UserSampleCommandClient } from './../proto/user_sample_command_grpc_web_pb'

const BASE_URL = 'https://external.365sharing.org/api/test'
export const clientUser = () => {
  const query = new UserSampleQueryClient(BASE_URL)
  const command = new UserSampleCommandClient(BASE_URL)

  return { query, command }
}
