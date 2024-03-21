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
    <div className="container mx-auto px-5 ">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <PageTitle title="Hero Sections" />
      <div className="flex justify-end py-6">
        <AddHero refetch={() => refetch()} />
      </div>
      <div className="relative overflow-x-auto">
        <table className="text-center w-full mt-8 overflow-x-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
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
                    hero={hero}
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
