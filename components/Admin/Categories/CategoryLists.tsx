"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import ConfirmDelete from "@/common/Alerts/ConfirmDelete";
import dayjs from "dayjs";
import { useMutation } from "@tanstack/react-query";
import { deleteCategory } from "@/services/admin.services";
import EditCategory from "./EditCategory";
import { CategoryOut } from "@/types/Category";
import { notify } from "@/app/toast";
type PropType = {
  category: CategoryOut;
  index: number;
  refetch: () => void;
};

const CategoryLists: React.FC<PropType> = ({ category, refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteError, setdeleteError] = useState<string>("");

  const DeleteCategory = useMutation({
    mutationFn: async (id: number) => deleteCategory(id), // Assuming deleteHeroById is the correct function to call
    onError: (error: unknown) => {
      setLoading(false);
    },
    onSuccess: async (data) => {
      notify("Category deleted successfully !", "success");
      setLoading(true);
      refetch();
    },
  });

  const confirm = (id: number) => {
    setdeleteError("");
    setLoading(true);
    DeleteCategory.mutate(id);
  };
  return (
    <>
      <tr className="border-b text-gray-500 text-sm mb-2 bg-white text-start">
        <td className="px-6 py-4 gap-2 ">
          <Image
            loading="lazy"
            height={1000}
            width={1000}
            src={`${category?.imageUrl}`}
            alt={`${category?.name}`}
            className="h-12 w-12 object-cover rounded-md shadow-md"
          />
        </td>
        <td className="px-6 py-4">{category?.name}</td>

        <td className="px-6 py-4">
          {dayjs(category?.created_at).format("MMM-D-YYYY")}
        </td>
        <td className="px-6 py-4 text-start   gap-2 flex items-center gap-x-3">
          <ConfirmDelete
            confirm={confirm}
            id={category && category?.id}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditCategory category={category} refetch={() => refetch()} />
        </td>
      </tr>
    </>
  );
};

export default CategoryLists;
