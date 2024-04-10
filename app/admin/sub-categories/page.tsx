"use client";
import React from "react";
import { Spinner } from "@/assets/icons/Spinner";
import PageTitle from "@/common/PageTitle";
import AddLogo from "@/components/Admin/Logos/AddLogo";
import { fetchCategories, fetchSubCategories } from "@/services/admin.services";
import { useQuery } from "@tanstack/react-query";

import CategoryLists from "@/components/Admin/Categories/CategoryLists";
import AddCategory from "@/components/Admin/Categories/AddCategory";
import SubCategoryLists from "@/components/Admin/SubCategories/SubCategoryLists";
import AddSubCategory from "@/components/Admin/SubCategories/AddSubCategory";
import AdminPagination from "@/common/Pagination/AdminPagination";

const Page = () => {
  const [page, setPage] = React.useState(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchSubCategories", page],
    queryFn: () => fetchSubCategories(page as number),
  });

  if (error) {
    const errorMessage = (error as any).response?.data?.detail || error.message;
    return errorMessage === "Unauthorized" ? (
      <span>Unauthorized</span>
    ) : (
      <span>{errorMessage}</span>
    );
  }
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div className="container mx-auto  p-5 ">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="flex justify-between items-center py-6">
        <PageTitle title="SubCategories" />
        <AddSubCategory refetch={() => refetch()} />
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
                category
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
              {data && data.data.length === 0 && <p>empty!.</p>}
              {data &&
                Array.isArray(data.data) &&
                data.data.map((subCategory, index) => (
                  <SubCategoryLists
                    key={index}
                    subCategory={subCategory && subCategory}
                    index={index}
                    refetch={refetch}
                  />
                ))}
            </>
          </tbody>
        </table>
      </div>
      <div className="my-8">
        <AdminPagination
          count={data?.totalPages}
          page={data?.currentPage}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Page;
