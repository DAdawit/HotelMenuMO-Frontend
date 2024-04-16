"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";

import { ProfileI, ProfileInput } from "@/types";
import { EditProfile, addProfile } from "@/services/admin.services";
import useStore from "@/store/useStore";
import { Spinner } from "@/assets/icons/Spinner";
import PageTitle from "@/common/PageTitle";
import { notify } from "@/app/toast";
import { useRouter } from "next/navigation";
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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const setProfile = useStore((state) => state.setProfile);
  const profile = useStore((state) => state.profile) as ProfileI;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: profile.name,
      address: profile.address,
      city: profile.city,
      openTime: profile.openTime,
      email: profile.email,
      phone: profile.phone,
      secondaryPhone: profile.secondaryPhone,
    },
  });

  const AddProfile = useMutation({
    mutationFn: async ({ id, values }: { id: number; values: any }) =>
      EditProfile(id, values),
    onError: (error: unknown, variables, context) => {
      setLoading(false);
      console.log(error);
    },

    onSuccess: async (data, variables, context) => {
      setLoading(false);
      setProfile(data);
      notify("Profile updated successfully !", "success");
    },
  });

  const submitData = (values: ProfileInput) => {
    setError("");
    setLoading(true);
    AddProfile.mutate({ id: profile.id, values: values });
  };

  return (
    <div>
      <div className="container mx-auto p-5">
        <form
          onSubmit={handleSubmit(submitData)}
          className="max-w-2xl mx-auto bg-white px-8 pb-8 rounded-lg shadow-lg"
        >
          <PageTitle title="Profile" />
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
    </div>
  );
};

export default Page;
