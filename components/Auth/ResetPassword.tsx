"use client";
import axios from "axios";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { notify } from "@/app/toast";
import { Spinner } from "@/assets/icons/Spinner";
import { LoginIcon } from "@/assets/icons/loginIcon";
type PropType = {
  setLogin: () => void;
};
const ResetPassword: React.FC<PropType> = ({ setLogin }) => {
  const [resetPassword, setResetPassword] = useState<boolean>(false);

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [data, setData] = useState();
  type FormDataType = {
    email: string;
  };

  const schema: ZodType<FormDataType> = z.object({
    email: z.string().email(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const submitData = (values: FormDataType) => {
    setError("");
    setLoading(true);
    try {
      axios
        .put("https://api.ethiooneequb.com/api/v1/reset-password", values)
        .then((res) => {
          console.log(res.data);
          notify(res.data.message, "success");
          setMessage("new password sent, please check your email address !");
        })
        .catch((err) => {
          setError(err.response.data.errors.detail[0]);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {}
  };
  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="grid py-10 sm:w-96 flex-1"
    >
      <h1 className="text-3xl font-semibold text-primary text-center tracking-wide">
        Welcome back !
      </h1>
      <p className="text-lg font-medium text-center text-gray-800 my-2">
        Forget Your Password ?
      </p>

      <div className="grid mt-2">
        <label htmlFor="name" className="pl-3">
          Email *
        </label>
        <input
          {...register("email")}
          placeholder="email"
          type="text"
          className="rounded-full"
        />
        {errors?.email && (
          <small className="text-red-500 pl-2">{errors.email.message}</small>
        )}
      </div>

      <small className="text-red-500 pl-2">{error}</small>
      <small className="text-primary pl-2 mt-3">{message}</small>

      <button
        className="mt-5 w-full bg-primary text-white  py-2 flex justify-center items-center gap-x-2 hover:-translate-y-px rounded-full"
        disabled={loading}
      >
        <span className="">Reset</span>
        {loading ? <Spinner /> : <LoginIcon />}
      </button>
      <div className="flex text-sm gap-1 mt-5">
        <button>
          Back to login?
          <span
            className="text-primary cursor-pointer font-normal underline"
            onClick={setLogin}
          >
            Click here.
          </span>
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;
