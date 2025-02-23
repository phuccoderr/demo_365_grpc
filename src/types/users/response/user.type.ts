export type User = {
  Title: string
  Description: string
  DueDate: string
  CreatedAt: string
  UpdatedAt: string
  Id: number
}

export type GetAllUsersResponse = {
  Items: User[]
  TotalItems: number
  PageNumber: number
  PageSize: number
  TotalPages: number
}
