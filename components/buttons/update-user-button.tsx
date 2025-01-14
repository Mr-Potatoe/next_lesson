'use client'

import { useState } from 'react'
import UpdateUser from '../users/update-user'
import { User } from '@/interfaces/types'
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"

interface UpdateUserButtonProps {
    user: User
}

export default function UpdateUserButton({ user }: UpdateUserButtonProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button 
                color="primary"
                variant="flat"
                onPress={() => setIsOpen(true)}
            >
                Update User
            </Button>

            <Modal 
                isOpen={isOpen} 
                onOpenChange={setIsOpen}
                placement="center"
                size="md"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Update User
                            </ModalHeader>
                            <ModalBody>
                                <UpdateUser user={user} onClose={onClose} />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}