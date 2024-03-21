"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";
import { notify } from "@/app/toast";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import { Spinner } from "@/assets/icons/Spinner";
import { min } from "moment";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import api from "@/services/axios";

type FormType = {
  title: string;
  description: string;
  image?: FileList;
};

const schema: ZodType<FormType> = z.object({
  title: z.string().min(3, { message: "Title is required" }),
  description: z.string().min(3, { message: "Description is required" }),
  image: z.any(),
});

type PropType = {
  refetch: () => void;
};

const AddHero: React.FC<PropType> = ({ refetch }) => {
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
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitData = (values: FormType) => {
    setError("");
    setLoading(true);
    console.log(values);

    let formdata = new FormData();
    formdata.append("title", values.title);
    formdata.append("description", values.description);
    if (values.image && values.image[0]) {
      formdata.append("image", values.image[0]);
    }

    api
      .post(`/hero`, formdata)
      .then((res) => {
        refetch();
        handleClose();
        notify("Hero section added successfully !", "success");
        reset();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Tooltip title="Edit" placement="top">
        <button
          className="text-white bg-primary rounded-full px-4 py-2 flex items-center justify-center gap-x-2"
          onClick={handleClickOpen}
        >
          <span>Add Hero Section</span>
          <HomeMaxIcon fontSize="small" />
        </button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Hero Section"}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(submitData)} className="max-w-sm">
            <section className="grid gap-x-5 gap-y-1">
              <div>
                <label htmlFor="title" className="capitalize pl-3 lightText">
                  Title *
                </label>
                <input
                  {...register("title")}
                  placeholder="Name"
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
                  htmlFor="description"
                  className="capitalize pl-3 lightText"
                >
                  Description *
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                  className="h-36"
                ></textarea>
                {errors?.description && (
                  <small className="text-red-500 pl-2">
                    {errors.description.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="account_number"
                  className="capitalize pl-3 lightText"
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
                  required
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
                <span>Submit</span>
                <span>{loading ? <Spinner /> : null}</span>
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddHero;
