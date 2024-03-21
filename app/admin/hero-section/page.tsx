"use client";
import { Spinner } from "@/assets/icons/Spinner";
import PageTitle from "@/common/PageTitle";
import AddHero from "@/components/Admin/Hero/AddHero";
import HeroSectionLists from "@/components/Admin/LoopComponents/HeroSectionLists";
import { fetchHeroSection } from "@/services/admin.services";
import { useQuery } from "@tanstack/react-query";

import React from "react";

const Page = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchHeroSection"],
    queryFn: fetchHeroSection,
  });
  return (
    <div className="container mx-auto  p-5 ">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <PageTitle title="Hero Sections" />
      <div className="flex justify-end py-6">
        <AddHero refetch={() => refetch()} />
      </div>
      <div className="relative overflow-x-auto">
        <table className="text-center w-full mt-8 overflow-x-auto">
          <thead className="text-sm text-gray-500 uppercase border-b font-base bg-white">
            <tr>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Image
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                slogan
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                title
              </th>

              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                content
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                created-at
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
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
                data.map((hero, index) => (
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
    </div>
  );
};

export default Page;
