import { UserSampleCommandClient } from "../proto/User_sample_commandServiceClientPb"
import { UserSampleQueryClient } from "../proto/User_sample_queryServiceClientPb"
import { opts } from "./grpc-client"

const BASE_URL = "https://external.365sharing.org/api/test"
export const clientUser = () => {
  const query = new UserSampleQueryClient(BASE_URL, null, opts)
  const command = new UserSampleCommandClient(BASE_URL, null, opts)

  return { query, command }
}
