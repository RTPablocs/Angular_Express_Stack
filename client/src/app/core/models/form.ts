import { loggedUser } from "./users";

export interface formDataEmitter{
    isOpen: boolean,
    userData?: loggedUser
}
