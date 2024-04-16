"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchProfile } from "@/services/main.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { addProfile } from "@/services/admin.services";
import { notify } from "../toast";
import { Spinner } from "@/assets/icons/Spinner";
import PageTitle from "@/common/PageTitle";
import { ProfileInput } from "@/types";
import OverlayLoader from "@/common/OverlayLoader";
import useStore from "@/store/useStore";

const schema: ZodType<ProfileInput> = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z.string().email(),
  address: z.string().min(3, { message: "Address is required" }),
  city: z.string().min(3, { message: "City is required" }),
  phone: z.string().min(3, { message: "Phone is required" }),
  openTime: z.string().min(3, { message: "Open Time is required" }),
  secondaryPhone: z.string().min(3, { message: "Secondary Phone is required" }),
});
const Page = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const setProfile = useStore((state) => state.setProfile);
  const router = useRouter();

  const {
    data,
    isLoading,
    error: profileError,
  } = useQuery({
    queryKey: ["fetchProfile"],
    queryFn: () => fetchProfile(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInput>({
    resolver: zodResolver(schema),
  });

  const AddProfile = useMutation({
    mutationFn: (data: any) => addProfile(data),
    onError: (error: unknown, variables, context) => {
      setLoading(false);
      console.log(error);
    },
    onSuccess: async (data, variables, context) => {
      setLoading(false);
      setProfile(data);
      notify("Profile added successfully !", "success");
      router.push("/admin/dashboard");
    },
  });

  const submitData = (values: ProfileInput) => {
    setError("");
    setLoading(true);
    AddProfile.mutate(values);
  };

  if (isLoading) {
    return <OverlayLoader />;
  }

  if (data) {
    setProfile(data);
    router.push("/admin/dashboard");
  }

  return (
    <>
      {data !== null && (
        <div className="container mx-auto p-5">
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-2xl mx-auto bg-white px-8 pb-8 rounded-lg shadow-lg"
          >
            <PageTitle title="Add Profile" />
            <section className="grid gap-x-5 gap-y-2">
              <div className="grid gap-y-1">
                <label
                  htmlFor="name"
                  className="capitalize text-gray-600 text-pretty font-medium"
                >
                  Name *
                </label>
                <input
                  {...register("name")}
                  placeholder="name"
                  name="name"
                  id="name"
                  className="w-full rounded-lg"
                />
                {errors?.name && (
                  <small className="text-red-500 pl-2">
                    {errors.name.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="email"
                  className="capitalize text-gray-600 text-pretty font-medium"
                >
                  Email *
                </label>
                <input
                  {...register("email")}
                  placeholder="email"
                  name="email"
                  id="email"
                  className="w-full rounded-lg"
                />
                {errors?.email && (
                  <small className="text-red-500 pl-2">
                    {errors.email.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="address"
                  className="capitalize text-gray-600 text-pretty font-medium"
                >
                  address *
                </label>
                <input
                  {...register("address")}
                  placeholder="address"
                  name="address"
                  id="address"
                  className="w-full rounded-lg"
                />
                {errors?.address && (
                  <small className="text-red-500 pl-2">
                    {errors.address.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="city"
                  className="capitalize text-gray-600 text-pretty font-medium"
                >
                  city *
                </label>
                <input
                  {...register("city")}
                  placeholder="city"
                  name="city"
                  id="city"
                  className="w-full rounded-lg"
                />
                {errors?.city && (
                  <small className="text-red-500 pl-2">
                    {errors.city.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="openTime"
                  className="capitalize text-gray-600 text-pretty font-medium"
                >
                  Open Time*
                </label>
                <input
                  {...register("openTime")}
                  placeholder="openTime"
                  name="openTime"
                  id="openTime"
                  className="w-full rounded-lg"
                />
                {errors?.openTime && (
                  <small className="text-red-500 pl-2">
                    {errors.openTime.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="phone"
                  className="capitalize text-gray-600 text-pretty font-medium"
                >
                  Phone *
                </label>
                <input
                  {...register("phone")}
                  placeholder="phone"
                  name="phone"
                  id="phone"
                  className="w-full rounded-lg"
                />
                {errors?.phone && (
                  <small className="text-red-500 pl-2">
                    {errors.phone.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="secondaryPhone"
                  className="capitalize text-gray-600 text-pretty font-medium"
                >
                  Secondary Phone
                </label>
                <input
                  {...register("secondaryPhone")}
                  placeholder="secondaryPhone"
                  name="secondaryPhone"
                  id="secondaryPhone"
                  className="w-full rounded-lg"
                />
              </div>
            </section>
            <small className="text-red-500 pl-2">{error}</small>

            <div className="flex items-center justify-center mt-7">
              <button
                type="submit"
                className="px-10 py-2 bg-primary text-white rounded-full flex items-center gap-x-2"
              >
                <span>Submit</span>
                <span>{loading ? <Spinner /> : null}</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Page;
