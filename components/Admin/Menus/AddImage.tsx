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
import { Spinner } from "@/assets/icons/Spinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addOrUpdateMenuImage } from "@/services/admin.services";
import { MenuOut } from "@/types/Menu";
import { useRouter } from "next/navigation";
import { notify } from "@/app/toast";
import { Button, DialogActions } from "@mui/material";
import Link from "next/link";

type FormType = {
  image?: FileList;
};

const schema: ZodType<FormType> = z.object({
  image: z.any(),
});

type PropType = {
  menu: MenuOut | undefined;
  open: boolean;
  handleClose: () => void;
  handleClickOpen: () => void;
};

const AddImage: React.FC<PropType> = ({
  menu,
  open,
  handleClose,
  handleClickOpen,
}) => {
  const router = useRouter();
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

  const AddOrUpdateMenuImage = useMutation({
    mutationFn: async ({ id, values }: { id: number; values: any }) =>
      addOrUpdateMenuImage(id, values),
    onError: (error: unknown, variables, context) => {
      setLoading(false);
      notify("Something went wrong!", "error");
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
      notify("Menu added successfully!", "success");
      router.push("/admin/menus");
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
    if (menu?.id !== undefined) {
      AddOrUpdateMenuImage.mutate({ id: menu.id, values: formdata });
    } else {
      console.error("Menu ID is undefined.");
    }
  };

  return (
    <div>
      <button onClick={handleClickOpen}>open</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Menu Image"}</DialogTitle>
        <DialogContent>
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

            <div className="flex items-center justify-between mt-7">
              <Link
                href="/admin/menus"
                className="border-2 border-primary px-3 rounded-full py-1 text-primary "
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-8 py-1 bg-primary text-white rounded-full flex items-center gap-x-2"
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

export default AddImage;
