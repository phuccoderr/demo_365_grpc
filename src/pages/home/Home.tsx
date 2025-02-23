import React, { useState } from "react"
import { useMutation, useQuery } from "@tanstack/react-query"

import { TANSTACK_KEY } from "~/constants/tanstack-key"
import { usersQueryApi } from "~/api/users/query/users.query.api"
import { usersCommandApi } from "~/api/users/command/users.command.api"
import { CreateUser, UpdateUser } from "~/types/users/request/user.type"

const Home = () => {
  const [idUser, setIdUser] = useState<number>(0)
  const [titleInput, setTitleInput] = useState<string>("")
  const [descriptionInput, setDescriptionInput] = useState<string>("")

  // GET ALL
  const { data: listUsers, isLoading: isLoadingGetAllUser } = useQuery({
    queryKey: [TANSTACK_KEY.GET_ALL_USERS],
    queryFn: () =>
      usersQueryApi.getAllUser({
        skipTakeOption: { skip: 0, take: 50 },
        pagingOption: { pageNumber: 1, pageSize: 50 },
      }),
  })

  // GET
  const { refetch: refetchGetUser } = useQuery({
    queryKey: [TANSTACK_KEY.GET_USER_BY_ID],
    queryFn: () => usersQueryApi.getUser(idUser),
    enabled: false,
  })

  const handleGetUser = (id: number) => {
    setIdUser(id)
    refetchGetUser()
  }

  // CREATE
  const mutateCreate = useMutation({
    mutationFn: (body: CreateUser) => usersCommandApi.createUser(body),
  })
  const handleCreate = () => {
    mutateCreate.mutate({
      title: titleInput,
      description: descriptionInput,
      dueDate: new Date(),
    })
  }

  // UPDATE
  const mutateUpdate = useMutation({
    mutationFn: (body: UpdateUser) => usersCommandApi.updateUser(body),
  })
  const handleUpdate = () => {
    mutateUpdate.mutate({
      id: idUser,
      title: titleInput,
      description: descriptionInput,
      dueDate: new Date(),
    })
  }

  // DELETE
  const mutateDelete = useMutation({
    mutationFn: (id: number) => usersCommandApi.deleteUser(id),
  })
  const handleDelete = (id: number) => {
    mutateDelete.mutate(id)
  }

  const handleClear = () => {
    setDescriptionInput("")
    setTitleInput("")
    setIdUser(0)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="title"
        />
        <input
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
          placeholder="description"
        />
        <button
          disabled={mutateCreate.isPending || mutateUpdate.isPending}
          onClick={idUser > 0 ? () => handleUpdate() : () => handleCreate()}
        >
          {" "}
          {idUser > 0 ? "Update" : "Create"}
        </button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {isLoadingGetAllUser && <span>List user loading...</span>}
        {listUsers?.Items?.map((user) => (
          <div key={user.Id}>
            <h1 onClick={() => handleGetUser(user.Id)}>Id: {user.Id}</h1>
            <span style={{ cursor: "pointer", backgroundColor: "#956721" }}>
              {user.Title}
            </span>
            <button
              disabled={mutateDelete.isPending}
              onClick={() => handleDelete(user.Id)}
            >
              Delete
            </button>
          </div>
        ))}
        {}
        <div>
          <h1 onClick={() => handleGetUser(19)}>Id: {19}</h1>
          <span style={{ cursor: "pointer", backgroundColor: "#956721" }}>
            Luôn sai
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
