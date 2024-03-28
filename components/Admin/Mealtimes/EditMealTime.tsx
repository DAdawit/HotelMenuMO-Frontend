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
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import { Spinner } from "@/assets/icons/Spinner";
import { useMutation } from "@tanstack/react-query";
import { MealTimeOut } from "@/types/MealTime";
import { updateMealTime } from "@/services/admin.services";

type FormType = {
  name: string;
  image?: FileList;
};

const schema: ZodType<FormType> = z.object({
  name: z.string().min(3, { message: "name is required" }),
  image: z.any(),
});

type PropType = {
  mealTime: MealTimeOut;
  refetch: () => void;
};

const EditMealTime: React.FC<PropType> = ({ refetch, mealTime }) => {
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
      name: mealTime?.name,
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const UpdateMealTime = useMutation({
    mutationFn: async ({ id, values }: { id: number; values: any }) =>
      updateMealTime(id, values),
    onError: (error: unknown, variables, context) => {
      setLoading(false);
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

    if (values.name) formdata.append("name", values.name);

    if (values.image && values.image[0]) {
      formdata.append("image", values.image[0]);
    }
    UpdateMealTime.mutate({ id: mealTime.id, values: formdata });
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
        <DialogTitle id="alert-dialog-title">{"Edit Logo"}</DialogTitle>
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
                  Name *
                </label>
                <input
                  {...register("name")}
                  placeholder="Name"
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

              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="account_number"
                  className="capitalize pl-3 text-gray-600 text-sm"
                >
                  Image *
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

export default EditMealTime;
