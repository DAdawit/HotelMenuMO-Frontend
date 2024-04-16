"use client";
import PageTitle from "@/common/PageTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { Spinner } from "@/assets/icons/Spinner";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ChangePassword } from "@/services/admin.services";
import axios from "axios";
import { notify } from "@/app/toast";

type FormValues = {
  old_password: string;
  new_password: string;
  confirm_password: string;
};
const schema: ZodType<FormValues> = z
  .object({
    old_password: z.string().min(5).max(30),
    new_password: z.string().min(6).max(30),
    confirm_password: z.string().min(6).max(30),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"], // Corrected path to match the field name exactly
  });

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const changePassword = useMutation({
    mutationFn: (data: any) => ChangePassword(data),
    onError: (error: unknown, variables, context) => {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.detail);
        notify(error.response?.data.detail, "error");
        setLoading(false);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    },
    onSuccess: async (data, variables, context) => {
      setLoading(false);
      reset();
      notify("password changed successfully !", "success");
    },
  });
  const submitData = (values: FormValues) => {
    // console.log(values);
    setLoading(true);
    changePassword.mutate(values);
  };
  return (
    <div className="px-7 py-7">
      <div className="container mx-auto p-5">
        <form
          onSubmit={handleSubmit(submitData)}
          className="max-w-xl mx-auto bg-white px-8 pb-8 rounded-lg shadow-lg"
        >
          <PageTitle title="Change Password" />
          <section className="grid grid-cols-1 gap-x-5 gap-y-1 ">
            <div className="grid gap-y-1">
              <label
                htmlFor="old_password"
                className="capitalize pl-3 lightText"
              >
                Old Password *
              </label>
              <input
                type="password"
                {...register("old_password")}
                placeholder="old password"
                name="old_password"
                id="old_password"
                className="w-full rounded-lg"
              />
              {errors?.old_password && (
                <small className="text-red-500 pl-2">
                  {errors.old_password.message}
                </small>
              )}
            </div>
            <small className="text-red-500 pl-2">{error}</small>

            <div className="grid gap-y-1">
              <label htmlFor="link" className="capitalize pl-3 lightText">
                New Password *
              </label>
              <input
                {...register("new_password")}
                type="password"
                placeholder="New password"
                name="new_password"
                id="new_password"
                className="w-full rounded-lg"
              />
              {errors?.new_password && (
                <small className="text-red-500 pl-2">
                  {errors.new_password.message}
                </small>
              )}
            </div>
            <div className="grid gap-y-1">
              <label htmlFor="link" className="capitalize pl-3 lightText">
                Confirm Password *
              </label>
              <input
                {...register("confirm_password")}
                type="password"
                placeholder="Confirm password"
                name="confirm_password"
                id="confirm_password"
                className="w-full rounded-lg"
              />
              {errors?.confirm_password && (
                <small className="text-red-500 pl-2">
                  {errors.confirm_password.message}
                </small>
              )}
            </div>
          </section>
          <div className="flex items-center justify-center mt-7 max-w-2xl">
            <button
              type="submit"
              className="px-10 py-2 bg-primary text-white rounded-full flex items-center gap-2"
            >
              <span>Change password</span>
              <span>{loading ? <Spinner /> : null}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
