'use client'

import CreateUser from '@/components/users/create-user'
import { User } from '@/interfaces/types'
import Navigation from '@/components/about/navigation'
import UpdateUserButton from '@/components/buttons/update-user-button'
import useSWR from 'swr'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Card, CardHeader } from "@nextui-org/react"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Users() {
  const { data: users, error, mutate } = useSWR<User[]>('/api/users', fetcher, {
    refreshInterval: 1000
  })
  
  if (error) return (
    <Card className="p-4">
      <p className="text-danger">Failed to load users</p>
    </Card>
  )
  
  if (!users) return (
    <div className="flex justify-center items-center h-48">
      <Spinner size="lg" />
    </div>
  )
  
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <CreateUser />
        
        <Card className="mt-12">
          <CardHeader>
            <h2 className="text-2xl font-bold">User List</h2>
          </CardHeader>
          <Table aria-label="Users table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>EMAIL</TableColumn>
              <TableColumn>CREATED AT</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <UpdateUserButton user={user} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </>
  )
}