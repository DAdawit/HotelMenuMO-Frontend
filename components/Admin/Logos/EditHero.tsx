"use client";
import * as React from "react";
import axios, { AxiosError } from "axios";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";
import { notify } from "@/app/toast";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import { Spinner } from "@/assets/icons/Spinner";
import api from "@/services/axios";
import { HeroCreate, HeroOut } from "@/types/Hero";
import { useMutation } from "@tanstack/react-query";
import { updateHeroSection } from "@/services/admin.services";

type FormType = {
  slogan: string;
  title: string;
  content: string;
  image?: FileList;
};

const schema: ZodType<FormType> = z.object({
  slogan: z.string().min(3, { message: "Slogan is required" }),
  title: z.string().min(3, { message: "Title is required" }),
  content: z.string().min(3, { message: "Content is required" }),
  image: z.any(),
});

type PropType = {
  hero: HeroOut | undefined;
  refetch: () => void;
};

const EditHero: React.FC<PropType> = ({ refetch, hero }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      slogan: hero?.slogan,
      title: hero?.title,
      content: hero?.content,
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateHero = useMutation({
    mutationFn: async ({ id, values }: { id: number; values: any }) =>
      updateHeroSection(id, values),
    onError: (error: unknown, variables, context) => {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.detail);
        console.log(error.response?.data.detail);
        setLoading(false);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    },
    onSuccess: async (data, variables, context) => {
      setLoading(false);
      handleClose();
      reset();
      refetch();
    },
  });

  const submitData = async (values: FormType) => {
    setError("");
    setLoading(true);
    console.log(values);

    let formdata = new FormData();

    if (values.slogan) formdata.append("slogan", values.slogan);
    if (values.title) formdata.append("title", values.title);
    if (values.content) formdata.append("description", values.content);

    if (values.image && values.image[0]) {
      formdata.append("image", values.image[0]);
    }
    if (hero?.id !== undefined) {
      updateHero.mutate({ id: hero.id, values: formdata });
    } else {
      // Handle the undefined case, e.g., set an error message
      setError("Hero ID is undefined.");
    } // Handle the undefined case, e.g., set an error message
  };

  return (
    <div>
      <Tooltip title="Edit" placement="top">
        <button className="text-primary" onClick={handleClickOpen}>
          <EditIcon fontSize="small" />
        </button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Hero Section"}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-sm"
            encType="multipart/form-data"
          >
            <section className="grid gap-x-5 gap-y-1">
              <div>
                <label
                  htmlFor="slogan"
                  className="capitalize pl-3 text-gray-600 text-sm"
                >
                  Slogan *
                </label>
                <input
                  {...register("slogan")}
                  placeholder="Slogan"
                  name="slogan"
                  id="slogan"
                  className="w-full"
                />
                {errors?.slogan && (
                  <small className="text-red-500 pl-2">
                    {errors.slogan.message}
                  </small>
                )}
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="capitalize pl-3 text-gray-600 text-sm"
                >
                  Title *
                </label>
                <input
                  {...register("title")}
                  placeholder="Title"
                  name="title"
                  id="title"
                  className="w-full"
                />
                {errors?.title && (
                  <small className="text-red-500 pl-2">
                    {errors.title.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="content"
                  className="capitalize pl-3 text-gray-600 text-sm"
                >
                  Content *
                </label>
                <textarea id="description" {...register("content")}></textarea>
                {errors?.content && (
                  <small className="text-red-500 pl-2">
                    {errors.content.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="account_number"
                  className="capitalize pl-3 text-gray-600 text-sm"
                >
                  Hero Image *
                </label>
                <input
                  {...register("image")}
                  placeholder="Banner Image"
                  name="image"
                  id="image"
                  className="w-full"
                  type="file"
                />
                {errors?.image && (
                  <small className="text-red-500 pl-2">
                    {errors?.image?.message || ""}
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

export default EditHero;
