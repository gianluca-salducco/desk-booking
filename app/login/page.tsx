"use client";

import { useForm } from "react-hook-form";
import { signIn } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter()

const onSubmit = async (data: any) => {
  const response = await signIn(data)
  if(response)
    router.push('/')
};

  return (
    <div className="flex flex-1">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(147,197,253,1) 0%, rgba(153,201,255,1) 35%, rgba(255,255,255,1) 100%)",
        }}
        className="w-1/2 h-full flex justify-center items-center"
      >
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center gap-8">
        <div className="flex flex-col mx-14">
          <h1>Hey, hello 👋</h1>
          <p className="text-slate-500">
            Enter the information you entered while registering
          </p>
        </div>

        <form className="flex flex-col mx-14 gap-5">
          <input
            className="p-3 border-[1px] border-slate-300 rounded-lg"
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className="p-3 border-[1px] border-slate-300 rounded-lg"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <button
            className="p-3 border-[1px] rounded-lg bg-blue-300"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </button>
        </form>
        <div className="flex items-center mx-14 gap-6">
          <div className="w-1/2 h-0 border-[1px] border-slate-300"></div>
          <p className="text-slate-400">or</p>
          <div className="w-1/2 h-0 border-[1px] border-slate-300"></div>
        </div>
        <button className="p-3 mx-14 border-[1px] border-slate-300 rounded-lg">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
