"use client";
import { Spinner } from "@/assets/icons/Spinner";
import PageTitle from "@/common/PageTitle";
import AdminPagination from "@/common/Pagination/AdminPagination";
import AddHero from "@/components/Admin/Hero/AddHero";
import HeroSectionLists from "@/components/Admin/Hero/HeroSectionLists";
import { fetchHeroSection } from "@/services/admin.services";
import { useQuery } from "@tanstack/react-query";

import React from "react";

const Page = () => {
  const [page, setPage] = React.useState(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchHeroSection", page],
    queryFn: () => fetchHeroSection(page as number),
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
        <PageTitle title="Hero Sections" />
        <AddHero refetch={() => refetch()} />
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
                slogan
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                title
              </th>

              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                content
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
                data.data.map((hero, index) => (
                  <HeroSectionLists
                    key={index}
                    hero={hero && hero}
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
