"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";
import { notify } from "@/app/toast";
import { Tooltip } from "@mui/material";
import { Spinner } from "@/assets/icons/Spinner";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import { useMutation } from "@tanstack/react-query";
import { addHeroSection } from "@/services/admin.services";
import AddIcon from "@mui/icons-material/Add";
import { ProfileInput } from "@/types";

type FormType = {
  slogan: string;
  title: string;
  content: string;
  image?: FileList;
};
const isBrowser = () => typeof window !== "undefined";

const schema: ZodType<ProfileInput> = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  address: z.string().min(3, { message: "Address is required" }),
  city: z.string().min(3, { message: "City is required" }),
  openTime: z.string().min(3, { message: "Open Time is required" }),
  open: z.string().min(3, { message: "State is required" }),
  email: z.string().min(3, { message: "Email is required" }),
  Phone: z.string().min(9, { message: "Phone is required" }),
  secondaryPhone: z.string().min(9, { message: "SecondaryPhone is required" }),
});

type PropType = {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
};

const AddProfile: React.FC<PropType> = ({
  open,
  handleClickOpen,
  handleClose,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileInput>({
    resolver: zodResolver(schema),
  });

  const AddHeroSection = useMutation({
    mutationFn: (data: any) => addHeroSection(data),
    onError: (error: unknown, variables, context) => {
      setLoading(false);
      console.log(error);
    },
    onSuccess: async (data, variables, context) => {
      setLoading(false);
      reset();
      notify("Hero section added successfully !", "success");
      handleClose();
      // refetch();
    },
  });

  const submitData = (values: FormType) => {
    setError("");
    setLoading(true);
    let formdata = new FormData();
    formdata.append("slogan", values.slogan);
    formdata.append("title", values.title);
    formdata.append("content", values.content);
    if (values.image && values.image[0]) {
      formdata.append("image", values.image[0]);
    }
    AddHeroSection.mutate(formdata);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Hero Section"}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-sm"
            encType="multipart/form-data"
          >
            <section className="grid gap-x-5 gap-y-1">
              <div>
                <label
                  htmlFor="name"
                  className="capitalize pl-3 text-gray-600 text-sm"
                >
                  Slogan *
                </label>
                <input
                  {...register("name")}
                  placeholder="name"
                  name="name"
                  id="name"
                  className="w-full"
                />
                {errors?.name && (
                  <small className="text-red-500 pl-2">
                    {errors.name.message}
                  </small>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="capitalize pl-3 text-gray-600 text-sm"
                >
                  Email *
                </label>
                <input
                  {...register("email")}
                  placeholder="email"
                  name="email"
                  id="email"
                  className="w-full"
                />
                {errors?.email && (
                  <small className="text-red-500 pl-2">
                    {errors.email.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="address"
                  className="capitalize pl-3 text-gray-600 text-sm"
                >
                  Eddress *
                </label>
                <input type="text" id="address" {...register("address")} />
                {errors?.address && (
                  <small className="text-red-500 pl-2">
                    {errors.address.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="city"
                  className="capitalize pl-3 text-gray-600 text-sm"
                >
                  City *
                </label>
                <input type="text" id="city" {...register("city")} />
                {errors?.city && (
                  <small className="text-red-500 pl-2">
                    {errors.city.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="phone"
                  className="capitalize pl-3 text-gray-600 text-sm"
                >
                  Phone *
                </label>
                <input type="text" id="phone" {...register("phone")} />
                {errors?.phone && (
                  <small className="text-red-500 pl-2">
                    {errors.phone.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="phone"
                  className="capitalize pl-3 text-gray-600 text-sm"
                >
                  Secondary Phone
                </label>
                <input
                  type="text"
                  id="secondaryPhone"
                  {...register("secondaryPhone")}
                />
                {errors?.secondaryPhone && (
                  <small className="text-red-500 pl-2">
                    {errors.secondaryPhone.message}
                  </small>
                )}
              </div>
            </section>
            <small className="text-red-500 pl-2">{error}</small>

            <div className="flex items-center justify-center mt-7">
              <button
                type="submit"
                className="px-10 py-2 bg-primary text-white rounded-full flex items-center gap-x-2"
              >
                <span>Update</span>
                <span>{loading ? <Spinner /> : null}</span>
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProfile;
