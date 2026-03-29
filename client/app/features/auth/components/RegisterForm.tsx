"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useRegister } from "../authHook";
import { RegisterType } from "../authTypes";

const RegisterForm = () => {
  const router = useRouter();

  const { register } = useRegister();

  const SubmitLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const rawData = Object.fromEntries(formData.entries());
    console.log("The formdata is", rawData);

    const mainData: RegisterType = {
      full_name: rawData.full_name as string,
      phone_no: rawData.phone_no as string,
      role: +rawData.role as number,
      email: rawData.email as string,
      password: rawData.password as string,
      age: Number(rawData.age),
    };

    try{
      const response:any = await register(mainData);

    if(response){
        await signIn('credentials', {
          email:mainData.email,
          password:mainData.password,
          redirect:true,
          callbackUrl:"/dashboard/doctor"
        })
    }
    }catch(e){
      console.log("error is ", e);
    }
  };

  const roles = [
    {
      value: 1,
      label: "Doctor",
    },
    {
      value: 2,
      label: "Admin",
    },
    {
      value: 3,
      label: "Super Admin",
    },
    {
      value: 4,
      label: "Nurse",
    },
    {
      value: 5,
      label: "Patient",
    },
    {
      value: 6,
      label: "Lab Operator",
    },
    {
      value: 7,
      label: "Desk Operator",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center mt-5 gap-4">
      <form onSubmit={SubmitLogin}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center gap-3">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Enter your Name"
              className="py-1.5 px-4 rounded-xl outline-none border-2 border-teal-700"
              required
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              id="age"
              placeholder="Enter your Age"
              className="py-1.5 px-4 rounded-xl outline-none border-2 border-teal-700"
              maxLength={2}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
              required
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="py-1.5 px-4 rounded-xl outline-none border-2 border-teal-700"
              required
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <label htmlFor="phone_no">Mobile No.</label>
            <input
              type="text"
              name="phone_no"
              id="phone_no"
              maxLength={10}
              placeholder="Enter your Mobile No."
              className="py-1.5 px-4 rounded-xl outline-none border-2 border-teal-700"
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length === 1 && !/[789]/.test(value)) {
                  value = "";
                }
                e.target.value = value;
              }}
              required
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <label htmlFor="role">Select Role</label>
            <select
              name="role"
              id="role"
              className="py-1.5 px-4 rounded-xl outline-none border-2 border-teal-700"
              required
            >
              <option value="Select_role" disabled>
                Select Role
              </option>
              {roles.map((role, index) => (
                <option value={role.value} key={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="py-1.5 px-4 rounded-xl outline-none border-2 border-teal-700"
              required
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 mt-6">
          <button
            type="submit"
            className="bg-teal-800 py-1.5 text-center rounded-xl shadow-xl text-white cursor-pointer hover:bg-teal-700 transition duration-300 ease-in-out w-50"
          >
            Register
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p>
            ave Account ?{" "}
            <span
              className="text-teal-700 cursor-pointer"
              onClick={() => router.push("/auth/login")}
            >
              Login
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
