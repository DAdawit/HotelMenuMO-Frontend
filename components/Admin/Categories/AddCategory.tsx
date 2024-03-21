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
import { addHeroSection, addLogo } from "@/services/admin.services";
import DiamondIcon from "@mui/icons-material/Diamond";
type FormType = {
  name: string;
  image?: FileList;
};

const schema: ZodType<FormType> = z.object({
  name: z.string().min(3, { message: "name is required" }),
  image: z
    .instanceof(FileList)
    .refine((fileList) => fileList.length > 0, "Logo is required"),
});

type PropType = {
  refetch: () => void;
};

const AddLogo: React.FC<PropType> = ({ refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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

  const AddLogo = useMutation({
    mutationFn: (data: any) => addLogo(data),
    onError: (error: unknown, variables, context) => {
      setLoading(false);
      console.log(error);
    },
    onSuccess: async (data, variables, context) => {
      setLoading(false);
      reset();
      notify("Hero section added successfully !", "success");
      handleClose();
      refetch();
    },
  });

  const submitData = (values: FormType) => {
    setError("");
    setLoading(true);
    let formdata = new FormData();
    formdata.append("name", values.name);
    if (values.image && values.image[0]) {
      formdata.append("image", values.image[0]);
    }
    AddLogo.mutate(formdata);
  };

  return (
    <div>
      <button
        className="text-white bg-primary rounded-full px-4 py-2 flex items-center justify-center gap-x-2"
        onClick={handleClickOpen}
      >
        <span>Add Logos</span>
        <DiamondIcon fontSize="small" />
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Logo"}</DialogTitle>
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
                  Logo *
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

export default AddLogo;
