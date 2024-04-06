"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import ConfirmDelete from "@/common/Alerts/ConfirmDelete";
import dayjs from "dayjs";
import { useMutation } from "@tanstack/react-query";
import { deleteCategory, deleteMealTime } from "@/services/admin.services";
import EditCategory from "./EditMealTime";
import { CategoryOut } from "@/types/Category";
import { notify } from "@/app/toast";
import { MealTimeOut } from "@/types/MealTime";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
type PropType = {
  mealTime: MealTimeOut;
  index: number;
  refetch: () => void;
};

const MealTimeLists: React.FC<PropType> = ({ mealTime, refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteError, setdeleteError] = useState<string>("");

  const DeleteMealTime = useMutation({
    mutationFn: async (id: number) => deleteMealTime(id), // Assuming deleteHeroById is the correct function to call
    onError: (error: unknown) => {
      setLoading(false);
      notify("something went worng try again!", "error");
    },
    onSuccess: async (data) => {
      notify("MealTime deleted successfully !", "success");
      setLoading(true);
      refetch();
    },
  });

  const confirm = (id: number) => {
    setdeleteError("");
    setLoading(true);
    DeleteMealTime.mutate(id);
  };
  return (
    <>
      <tr className="border-b text-gray-500 text-sm mb-2 bg-white text-start">
        <td className="px-6 py-4 gap-2 ">
          {mealTime.image ? (
            <Image
              loading="lazy"
              height={1000}
              width={1000}
              src={mealTime.imageUrl}
              alt={`${mealTime?.name}`}
              className="h-12 w-12 object-cover rounded-md shadow-md"
            />
          ) : (
            <button className="text-primary">
              <ImageNotSupportedIcon fontSize="large" />
            </button>
          )}
        </td>
        <td className="px-6 py-4">{mealTime?.name}</td>

        <td className="px-6 py-4">
          {dayjs(mealTime?.created_at).format("MMM-D-YYYY")}
        </td>
        <td className="px-6 py-4 text-start   gap-2 flex items-center gap-x-3">
          <ConfirmDelete
            confirm={confirm}
            id={mealTime && mealTime?.id}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditCategory mealTime={mealTime} refetch={() => refetch()} />
        </td>
      </tr>
    </>
  );
};

export default MealTimeLists;
