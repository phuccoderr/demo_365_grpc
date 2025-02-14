import React, { useState } from 'react'
import './style.css'
import { getAllUsers } from './query/getAllUsers'
import { getUser } from './query/getUser'
import { createUser } from './query/createUser'
import { useQueryClient } from '@tanstack/react-query'
import { updateUser } from './query/updateUser'
import { deleteUser } from './query/deleteUser'

const App = () => {
  const queryClient = useQueryClient()
  const [idUser, setIdUser] = useState<number>(0)
  const [titleInput, setTitleInput] = useState<string>('')
  const [descriptionInput, setDescriptionInput] = useState<string>('')
  // GET ALL
  const { data: listUsers } = getAllUsers({
    pageNumber: 1,
    pageSize: 10,
    skip: 0,
    take: 10,
  })

  // GET
  const mutateGet = getUser()
  const handleGetUser = (id: number) => {
    mutateGet.mutate(
      { id },
      {
        onSuccess: (res) => {
          setTitleInput(res.Title)
          setDescriptionInput(res.Description)
          setIdUser(res.Id)
        },

        onError: (error) => {
          console.log('error apptsx', error)
        },
      }
    )
  }

  // CREATE
  const mutateCreate = createUser()
  const handleCreate = () => {
    mutateCreate.mutate(
      {
        title: titleInput,
        description: descriptionInput,
        dueDate: new Date(),
      },
      {
        onSuccess: (res) => {
          alert('Thêm Thành công, isSuccess: ' + res.issuccess)
          queryClient.refetchQueries({ queryKey: ['users'] })
        },
      }
    )
  }

  // UPDATE
  const mutateUpdate = updateUser()
  const handleUpdate = () => {
    mutateUpdate.mutate(
      {
        id: idUser,
        title: titleInput,
        description: descriptionInput,
        dueDate: new Date(),
      },
      {
        onSuccess: (res) => {
          alert('thay đổi Thành công, isSuccess: ' + res.issuccess)
          queryClient.refetchQueries({ queryKey: ['users'] })
        },
      }
    )
  }

  // DELETE
  const mutateDelete = deleteUser()
  const handleDelete = (id: number) => {
    mutateDelete.mutate(
      {
        id,
      },
      {
        onSuccess: (res) => {
          alert('Xoá Thành công, isSuccess: ' + res.issuccess)
          queryClient.refetchQueries({ queryKey: ['users'] })
        },
      }
    )
  }

  const handleClear = () => {
    setDescriptionInput('')
    setTitleInput('')
    setIdUser(0)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', gap: '10px' }}>
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
          onClick={idUser > 0 ? () => handleUpdate() : () => handleCreate()}
        >
          {' '}
          {idUser > 0 ? 'Update' : 'Create'}
        </button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        {listUsers?.Items.map((user) => (
          <div key={user.Id}>
            <h1 onClick={() => handleGetUser(user.Id)}>Id: {user.Id}</h1>
            <span style={{ cursor: 'pointer', backgroundColor: '#956721' }}>
              {user.Title}
            </span>
            <button onClick={() => handleDelete(user.Id)}>Delete</button>
          </div>
        ))}
        <div>
          <h1 onClick={() => handleGetUser(19)}>Id: {19}</h1>
          <span style={{ cursor: 'pointer', backgroundColor: '#956721' }}>
            Luôn sai
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
