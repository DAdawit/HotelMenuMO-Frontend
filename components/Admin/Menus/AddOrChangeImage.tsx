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
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addOrUpdateMenuImage,
  fetchCategories,
  updateSubCategory,
} from "@/services/admin.services";
import { SubCategoryOut } from "@/types/Category";
import { AdminMenu, MenuOut } from "@/types/Menu";
import Image from "next/image";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

type FormType = {
  image?: FileList;
};

const schema: ZodType<FormType> = z.object({
  image: z.any(),
});

type PropType = {
  menu: AdminMenu;
  refetch: () => void;
};

const AddOrChangeImage: React.FC<PropType> = ({ refetch, menu }) => {
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

  const AddOrUpdateMenuImage = useMutation({
    mutationFn: async ({ id, values }: { id: number; values: any }) =>
      addOrUpdateMenuImage(id, values),
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
    // console.log(values);

    let formdata = new FormData();

    if (values.image && values.image[0]) {
      formdata.append("image", values.image[0]);
    }
    AddOrUpdateMenuImage.mutate({ id: menu.id, values: formdata });
  };

  return (
    <div>
      {menu.image ? (
        <Tooltip title="Change Image" placement="top">
          <Image
            onClick={handleClickOpen}
            loading="lazy"
            height={1000}
            width={1000}
            src={menu._imageUrl}
            alt={`${menu?.name}`}
            className="h-12 w-12 object-cover rounded-md shadow-md"
          />
        </Tooltip>
      ) : (
        <Tooltip title="Add Image" placement="top">
          <button className="text-primary" onClick={handleClickOpen}>
            <AddPhotoAlternateIcon fontSize="large" />
          </button>
        </Tooltip>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Menu Image"}</DialogTitle>
        <DialogContent>
          <div className="">
            {menu.image ? (
              <Image
                loading="lazy"
                height={1000}
                width={1000}
                src={menu._imageUrl}
                alt={`${menu?.name}`}
                className="h-28 w-full object-contain rounded-md "
              />
            ) : null}
          </div>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-sm"
            encType="multipart/form-data"
          >
            <section className="grid gap-x-5 gap-y-1">
              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="account_number"
                  className="capitalize text-gray-600 text-sm"
                >
                  Image *
                </label>
                <input
                  {...register("image")}
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

export default AddOrChangeImage;
