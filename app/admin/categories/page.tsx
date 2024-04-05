"use client";
import React from "react";
import { Spinner } from "@/assets/icons/Spinner";
import PageTitle from "@/common/PageTitle";
import AddLogo from "@/components/Admin/Logos/AddLogo";
import { fetchCategories } from "@/services/admin.services";
import { useQuery } from "@tanstack/react-query";

import CategoryLists from "@/components/Admin/Categories/CategoryLists";
import AddCategory from "@/components/Admin/Categories/AddCategory";
const Page = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: fetchCategories,
  });
  if (error) {
    const errorMessage = (error as any).response?.data?.detail || error.message;
    return errorMessage === "Unauthorized" ? (
      <span>Unauthorized</span>
    ) : (
      <span>{errorMessage}</span>
    );
  }
  return (
    <div className="container mx-auto  ">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="flex justify-between items-center py-6">
        <PageTitle title="Categories" />
        <AddCategory refetch={() => refetch()} />
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
              {data && data.length === 0 && <p>empty!.</p>}
              {data &&
                Array.isArray(data) &&
                data.map((category, index) => (
                  <CategoryLists
                    key={index}
                    category={category && category}
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
