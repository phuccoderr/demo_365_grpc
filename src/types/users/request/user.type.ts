export type GetAllUser = {
  skipTakeOption?: {
    skip?: number
    take?: number
  }
  pagingOption?: {
    pageNumber: number
    pageSize: number
  }
}

export type CreateUser = {
  title: string
  description: string
  dueDate: Date
}

export type UpdateUser = Pick<
  CreateUser,
  "title" | "description" | "dueDate"
> & { id: number }
