import { loggedUser } from './users'

export interface responseUser {
    operation: string,
    resultAfterOperation: loggedUser[]
}
