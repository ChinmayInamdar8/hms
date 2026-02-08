import zod from "zod";

const genders = ["male", "female", "other"] as const;
const roles = ["admin", "hospital", "patient", "nurse", "doctor", "lab"] as const;

const SignUp = zod.object({
    full_name: zod.string(),
  email: zod.email(),
  password: zod.string(),
  gender: zod.enum(genders),
  user_img: zod.string(),
  role: zod.enum(roles)
})

const Login = zod.object({
  email: zod.email(),
  password: zod.string(),
})


export {SignUp , Login};