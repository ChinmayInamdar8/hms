import {z} from "zod"
import { Role } from '../../generated/prisma/client.js'

export const loginSchema = z.object({
    email : z.string().email(),
    password: z.string()
})

export const RegisterSchema = z.object({
    full_name:z.string(),
    age:z.coerce.number(),
    email : z.string().email(),
    phone_no : z.string().length(10),
    role : z.enum(Role),
    password: z.string()
})