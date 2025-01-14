

export interface User {
    createdAt: string | number | Date;
    id: string;
    name: string;
    email: string;
    image: string;
}

export interface Session {
    user: User;
}