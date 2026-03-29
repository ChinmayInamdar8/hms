import {z} from "zod"

export const loginSchema = z.object({
    email : z.string().email(),
    password: z.string()
})

export const RegisterSchema = z.object({
    full_name:z.string(),
    age:z.coerce.number(),
    email : z.string().email(),
    phone_no : z.string().length(10),
    role :z.number(),
    password: z.string()
})