import { Role } from "./role";

export interface User {
    _id: string;
    name: string;
    email: string;
    age:number;
    password:string;
    role: Role;
    token?: string;
}                       