"use client";
import { Spinner } from "@/assets/icons/Spinner";
import PageTitle from "@/common/PageTitle";
import AddHero from "@/components/Admin/Hero/AddHero";
import AddLogo from "@/components/Admin/Logos/AddLogo";
import HeroSectionLists from "@/components/Admin/Hero/HeroSectionLists";
import { fetchLogos } from "@/services/admin.services";
import { useQuery } from "@tanstack/react-query";

import React from "react";
import LogoLists from "@/components/Admin/Logos/LogoLists";
import { Span } from "next/dist/trace";

const Page = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchLogos"],
    queryFn: fetchLogos,
  });

  if (error) {
    console.log(error);

    const errorMessage = (error as any).response?.data?.detail || error.message;
    return errorMessage === "Unauthorized" ? (
      <span>Unauthorized</span>
    ) : (
      <span>{errorMessage}</span>
    );
  }
  return (
    <div className="container mx-auto  p-5 ">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="flex justify-between items-center py-6">
        <PageTitle title="Logos" />
        <AddLogo refetch={() => refetch()} />
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
              {data && data.length === 0 && (
                <p>You have not added any Trainings yet!.</p>
              )}
              {data &&
                Array.isArray(data) &&
                data.map((logo, index) => (
                  <LogoLists
                    key={index}
                    logo={logo && logo}
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
