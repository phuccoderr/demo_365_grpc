import { useMutation, useQuery } from "@tanstack/react-query"
import { RessponseCommon } from "../types/response.type"
import { clientUser } from "../api/user-proto"
import { Pagination } from "../types/pagination.type"
import { User } from "../types/user.type"

export const queryUsers = {
  create: () => {
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
        return await clientUser.createUser(body)
      },
    })
  },
  delete: () => {
    return useMutation<RessponseCommon, void, { id: number }>({
      mutationFn: async ({ id }) => clientUser.deleteUser({ id }),
    })
  },
  getAll: (body: {
    skip: number
    take: number
    pageNumber: number
    pageSize: number
  }) => {
    return useQuery<Pagination<User>>({
      queryKey: ["users"],
      queryFn: async () => clientUser.getAllUsers(body),
      // placeholderData: {
      //   Items: [
      //     {
      //       Id: 1,
      //       Title: "",
      //       Description: "",
      //       DueDate: new Date().toISOString(),
      //       CreatedAt: new Date().toISOString(),
      //       UpdatedAt: new Date().toISOString(),
      //     },
      //   ],
      //   TotalItems: 0,
      //   PageNumber: 0,
      //   PageSize: 0,
      //   TotalPages: 0,
      // },
    })
  },
  getOne: () => {
    return useMutation<User, void, { id: number }>({
      mutationFn: async ({ id }: { id: number }) => clientUser.getUser({ id }),
    })
  },
  get: (id: number) => {
    return useQuery<User>({
      queryKey: ["user", id],
      queryFn: async () => clientUser.getUser({ id }),
    })
  },
  update: () => {
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
      }) => clientUser.updateUser(body),
    })
  },
}
