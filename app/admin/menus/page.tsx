"use client";
import React from "react";
import { Spinner } from "@/assets/icons/Spinner";
import PageTitle from "@/common/PageTitle";
import { fetchMenus } from "@/services/admin.services";
import { useQuery } from "@tanstack/react-query";
import AddMenu from "@/components/Admin/Menus/AddMenu";
import MenusList from "@/components/Admin/Menus/MenusList";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

const Page = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchMenus"],
    queryFn: fetchMenus,
  });
  return (
    <div className="container mx-auto  p-5 ">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="flex justify-between items-center py-6">
        <PageTitle title="Menues" />
        <Link
          href="/admin/menus/add"
          className="text-white bg-primary rounded-full px-4 py-2 flex items-center justify-center gap-x-2 h-max"
        >
          <span>Add Menu</span>
          <AddIcon fontSize="small" />
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full mt-8 overflow-x-auto">
          <thead className="text-start text-gray-500 uppercase border-b font-base bg-white">
            <tr className="text-start">
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap  text-start"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                name
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                price
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                ingridiants
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                avaliable_all_day
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                available_meal_times
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                created-at
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="gap-y-2">
            {isLoading ? <Spinner /> : null}
            <>
              {data && data.length === 0 && (
                <p>You have not added any Trainings yet!.</p>
              )}
              {data &&
                Array.isArray(data) &&
                data.map((menu, index) => (
                  <MenusList
                    key={index}
                    menu={menu && menu}
                    index={index}
                    refetch={refetch}
                  />
                ))}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
