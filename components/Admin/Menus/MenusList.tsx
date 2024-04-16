"use client";
import { useState } from "react";
import ConfirmDelete from "@/common/Alerts/ConfirmDelete";
import dayjs from "dayjs";
import { useMutation } from "@tanstack/react-query";
import { deleteSubCategory } from "@/services/admin.services";
import { notify } from "@/app/toast";
import { AdminMenu } from "@/types/Menu";
import Approved from "@/common/status/Approved";
import Pending from "@/common/status/Pending";
import Chip from "@/common/Chip";
import AddOrChangeImage from "./AddOrChangeImage";

import EditMenu from "./EditMenu";
type PropType = {
  menu: AdminMenu;
  index: number;
  refetch: () => void;
};

const MenusList: React.FC<PropType> = ({ menu, refetch }) => {
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
        <AddOrChangeImage menu={menu} refetch={refetch} />
      </td>
      <td className="px-6 py-4">{menu?.name}</td>
      {/* <td className="px-6 py-4">{menu?.price}</td> */}
      <td className="px-6 py-4 grid">
        <h4>{menu?.category?.name}</h4>
        <h4>{menu?.subCategory?.name}</h4>
      </td>
      <td className="px-6 py-4 text-xs">{menu?.ingridiants}</td>
      <td className="px-6 py-4 flex gap-x-2">
        {menu?.available_meal_times.map((mealtime) => (
          <Chip key={mealtime.id} content={mealtime.name} />
        ))}
      </td>
      <td className="px-6 py-4">
        {menu?.avaliable_all_day ? (
          <Approved content="All Day" />
        ) : (
          <Pending content="No" />
        )}
      </td>

      <td className="px-6 py-4">
        {menu?.special ? <Approved content="Yes" /> : <Pending content="No" />}
      </td>
      <td className="px-6 py-4">
        {menu?.mainDishes ? (
          <Approved content="Yes" />
        ) : (
          <Pending content="No" />
        )}
      </td>
      <td className="px-6 py-4">
        {dayjs(menu?.created_at).format("MMM-D-YYYY")}
      </td>
      <td className="px-6 py-4 text-start   gap-2 flex items-center gap-x-3">
        <ConfirmDelete
          confirm={confirm}
          id={menu?.id}
          text="Are you sure you went to delete !"
          loading={loading}
        />
        <EditMenu menu={menu} refetch={refetch} />
        {/* <Link href={`/admin/menus/${menu.id}`} className="text-orange-500">
          <EditIcon fontSize="small" />{" "}
        </Link> */}
        {/* <EditCategory subCategory={menu} refetch={() => refetch()} /> */}
      </td>
    </tr>
  );
};

export default MenusList;
