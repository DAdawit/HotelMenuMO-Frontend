"use client";
import Image from "next/image";
import { useState } from "react";
import ConfirmDelete from "@/common/Alerts/ConfirmDelete";
import dayjs from "dayjs";
import { useMutation } from "@tanstack/react-query";
import { deleteSubCategory } from "@/services/admin.services";
import EditCategory from "./EditSubCategory";
import { SubCategoryOut } from "@/types/Category";
import { notify } from "@/app/toast";
type PropType = {
  subCategory: SubCategoryOut;
  index: number;
  refetch: () => void;
};

const SubCategoryLists: React.FC<PropType> = ({ subCategory, refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteError, setdeleteError] = useState<string>("");

  const DeleteSubCategory = useMutation({
    mutationFn: async (id: number) => deleteSubCategory(id), // Assuming deleteHeroById is the correct function to call
    onError: (error: unknown) => {
      setLoading(false);
    },
    onSuccess: async (data) => {
      notify("SubCategory deleted successfully !", "success");
      setLoading(false);
      refetch();
    },
  });

  const confirm = (id: number) => {
    console.log(id);

    setdeleteError("");
    setLoading(true);
    DeleteSubCategory.mutate(id);
  };
  return (
    <tr className="border-b text-gray-500 text-sm mb-2 bg-white text-start">
      <td className="px-6 py-4 gap-2 ">
        <Image
          loading="lazy"
          height={1000}
          width={1000}
          src={`${subCategory?.imageUrl}`}
          alt={`${subCategory?.name}`}
          className="h-12 w-12 object-cover rounded-md shadow-md"
        />
      </td>
      <td className="px-6 py-4">{subCategory?.name}</td>
      <td className="px-6 py-4">{subCategory?.category.name}</td>

      <td className="px-6 py-4">
        {dayjs(subCategory?.created_at).format("MMM-D-YYYY")}
      </td>
      <td className="px-6 py-4 text-start   gap-2 flex items-center gap-x-3">
        <ConfirmDelete
          confirm={confirm}
          id={subCategory && subCategory?.id}
          text="Are you sure you went to delete !"
          loading={loading}
        />
        <EditCategory subCategory={subCategory} refetch={() => refetch()} />
      </td>
    </tr>
  );
};

export default SubCategoryLists;
