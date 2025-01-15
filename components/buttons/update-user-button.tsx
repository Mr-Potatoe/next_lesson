'use client'

import { useState } from 'react'
import UpdateUser from '../users/update-user'
import { User } from '@/interfaces/types'
import { 
    Button, 
    Dialog, 
    DialogTitle, 
    DialogContent,
    IconButton
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'

interface UpdateUserButtonProps {
    user: User
}

export default function UpdateUserButton({ user }: UpdateUserButtonProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<EditIcon />}
                onClick={() => setIsOpen(true)}
            >
                Edit
            </Button>

            <Dialog
                open={isOpen}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>
                    Update User
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <UpdateUser user={user} onClose={handleClose} />
                </DialogContent>
            </Dialog>
        </>
    )
}