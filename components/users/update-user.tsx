'use client'

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { User } from "@/interfaces/types";
import useSWR from 'swr'
import { Input, Button } from "@nextui-org/react";

interface UpdateUserProps {
    user: User;
    onClose?: () => void;
}

export default function UpdateUser({ user, onClose }: UpdateUserProps) {
    const { mutate } = useSWR('/api/users')
    const [formData, setFormData] = useState<Omit<User, 'id' | 'createdAt' | 'image'>>({
        name: '',
        email: ''
    })
    const [message, setMessage] = useState('')

    useEffect(() => {
        setFormData({
            name: user.name,
            email: user.email
        })
    }, [user])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: user.id,
                    ...formData
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage('User updated successfully!');
                mutate();
                if (onClose) {
                    setTimeout(onClose, 1000);
                }
            } else {
                setMessage(data.error || 'Error updating user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
            setMessage('Error updating user');
        }
    };

    return (
        <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="bordered"
                />
                <Input
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="bordered"
                />
                <Button 
                    type="submit"
                    color="primary"
                    className="w-full"
                >
                    Update
                </Button>
            </form>
            {message && (
                <p className={`text-center ${message.includes('Error') ? 'text-danger' : 'text-success'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}