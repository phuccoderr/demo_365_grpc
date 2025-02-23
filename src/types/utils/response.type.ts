export type RessponseCommon = {
  statuscode: number
  issuccess: boolean
  data?: string
  datatype?: string
  error?: {
    detail: string[]
    stackTrace: string
  }
  messagecode?: string
}
