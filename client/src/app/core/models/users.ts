export interface commonUser {
    id: string,
    name: string,
    surname: string,
    username: string,
    mail: string,
    department: string
}


export interface loggedUser {
    id: string,
    name: string,
    surname: string,
    username: string,
    mail: string,
    department: string,
    password: string,
    createdAt: Date,
    updatedAt: Date
}

export interface userList {
    total: number,
    users: loggedUser[]
}
