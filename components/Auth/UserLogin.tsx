"use client";
import axios, { AxiosError } from "axios";
import api from "@/services/axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@/assets/icons/Spinner";
import { LoginIcon } from "@/assets/icons/loginIcon";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import useStore from "@/store/useStore";
import { ILogin } from "@/types/User";
import { loginUser } from "@/services/auth.services";
import Link from "next/link";

// type PropType = {
//   setLogin: () => void;
// };
const UserLogin = () => {
  const router = useRouter();
  const setUser = useStore((state) => state.setUser);
  const auth = useStore((state) => state.auth);
  const setAuthTrue = useStore((state) => state.setAuthTrue);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const schema: ZodType<ILogin> = z.object({
    email: z.string().email(),
    password: z.string().min(2).max(30),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "admin@gmail.com",
      password: "admin123",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: ILogin) => loginUser(values),
    onError: (error: unknown, variables, context) => {
      console.log(error);

      if (axios.isAxiosError(error)) {
        setError(error.response?.data.detail);
        // console.log(error.response?.data.detail);
        setLoading(false);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    },
    onSuccess: async (data, variables, context) => {
      console.log(data);

      setLoading(false);
      localStorage.setItem("access_token", data.token);
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setUser(data.user);
      // setAuthTrue();
      // if (data.user.role === "admin") {
      router.push("/admin/dashboard/");
      // }
    },
  });

  const submitData = (values: ILogin) => {
    setError("");
    setLoading(true);
    // console.log(values);
    mutation.mutate(values);
  };

  return (
    <>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

      <section className=" shadow-lg max-w-3xl px-10 py-8">
        {/* <pre>{JSON.stringify(auth, null, 2)}</pre> */}
        <h1 className="text-3xl font-semibold text-gray-800 text-center tracking-wide mx-auto mb-3">
          Wellcome <span className="text-sm text-gray-500">(Admin)</span>
        </h1>

        <form
          onSubmit={handleSubmit(submitData)}
          className="grid py-3  mx-auto px-5 text-gray-700 gap-y-3"
        >
          {/* <h1 className="text-2xl font-bold text-center text-gray-800 my-2">
            Welcome back !
          </h1> */}
          <div className="grid mt-2 ">
            <label htmlFor="name" className="pl-3">
              Email *
            </label>
            <input
              {...register("email")}
              placeholder="email"
              type="text"
              className="rounded-lg"
            />
            {errors?.email && (
              <small className="text-red-500 pl-2">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="grid mt-2">
            <label htmlFor="password" className="pl-3">
              Password *
            </label>

            <input
              {...register("password")}
              placeholder="password"
              type="password"
              className="rounded-lg"
            />
            {errors?.password && (
              <small className="text-red-500 pl-2">
                {errors.password.message}
              </small>
            )}
          </div>
          <small className="text-red-500 pl-2">{error}</small>
          <button
            className={`mt-5 w-full bg-tprime text-white py-2 flex justify-center items-center gap-x-2 ${
              loading ? "disabled" : "hover:-translate-y-px"
            } rounded-full`}
            disabled={loading}
          >
            <span className="">Login</span>
            {loading ? <Spinner /> : <LoginIcon />}
          </button>
          <div className="flex justify-between text-sm gap-1 mt-5">
            <Link href="/" className="underline text-primary">
              Home
            </Link>
            <button className="">
              Forgot password?
              <span
                className="text-primary cursor-pointer font-normal underline"
                // onClick={setLogin}
              >
                Click here.
              </span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default UserLogin;
