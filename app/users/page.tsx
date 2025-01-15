'use client'

import CreateUser from '@/components/users/create-user'
import { User } from '@/interfaces/types'
import Navigation from '@/components/about/navigation'
import UpdateUserButton from '@/components/buttons/update-user-button'
import useSWR from 'swr'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Card, 
  CardContent, 
  Typography, 
  CircularProgress,
  Container
} from '@mui/material'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Users() {
  const { data: users, error } = useSWR<User[]>('/api/users', fetcher, {
    refreshInterval: 1000
  })
  
  if (error) return (
    <Card sx={{ p: 2, m: 2 }}>
      <Typography color="error">Failed to load users</Typography>
    </Card>
  )
  
  if (!users) return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <CircularProgress />
    </Container>
  )
  
  return (
    <>
      <Navigation />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <CreateUser />
        
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              User List
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="users table">
                <TableHead>
                  <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell>EMAIL</TableCell>
                    <TableCell>CREATED AT</TableCell>
                    <TableCell>ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <UpdateUserButton user={user} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}