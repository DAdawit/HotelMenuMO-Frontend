"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "@/common/PageTitle";
// import { fetchStatistics } from "@/services/admin";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import PlaceIcon from "@mui/icons-material/Place";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import SchoolIcon from "@mui/icons-material/School";
import useStore from "@/store/useStore";
const Page = () => {
  const auth = useStore((state) => state.auth);

  // const { data, isLoading, error, refetch } = useQuery({
  //   queryKey: ["fetchStatistics"],
  //   queryFn: fetchStatistics,
  // });

  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <MyEditor /> */}
      {/* <pre>{JSON.stringify(auth, null, 2)}</pre> */}

      <div className="container mx-auto px-5 pb-16 min-h-screen">
        <div className="px-7 py-5">
          <PageTitle title="Dashboard" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xll:grid-cols-3 gap-8">
          <div className="p-5 w-full  rounded-xl shadow-lg">
            <div className="flex gap-x-5 items-center py-3 ">
              <div className="bg-red-500 h-14 w-14 rounded-lg flex justify-center items-center">
                <span className="text-white">
                  <FormatAlignCenterIcon fontSize="large" />
                </span>
              </div>
              <div className=" grid gap-y-2">
                <h1 className="text-gray-500 font-medium font-sans">
                  Total Training Formats
                </h1>
                <h3 className="text-3xl font-semibold text-gray-900">30 </h3>
              </div>
            </div>
          </div>

          <div className="p-5 w-full  rounded-xl shadow-lg">
            <div className="flex gap-x-5 items-center py-3 ">
              <div className="bg-indigo-500 h-14 w-14 rounded-lg flex justify-center items-center">
                <span className="text-white">
                  <PlaceIcon fontSize="large" />
                </span>
              </div>
              <div className=" grid gap-y-2">
                <h1 className="text-gray-500 font-medium font-sans">
                  Total Number of Venues
                </h1>
                <h3 className="text-3xl font-semibold text-gray-900">40</h3>
              </div>
            </div>
          </div>

          <div className="p-5 w-full  rounded-xl shadow-lg">
            <div className="flex gap-x-5 items-center py-3 ">
              <div className="bg-green-500 h-14 w-14 rounded-lg flex justify-center items-center">
                <span className="text-white">
                  <CategoryIcon fontSize="large" />
                </span>
              </div>
              <div className=" grid gap-y-2">
                <h1 className="text-gray-500 font-medium font-sans">
                  Total Number of Categories
                </h1>
                <h3 className="text-3xl font-semibold text-gray-900">25</h3>
              </div>
            </div>
          </div>
          <div className="p-5 w-full  rounded-xl shadow-lg">
            <div className="flex gap-x-5 items-center py-3 ">
              <div className="bg-purple-500 h-14 w-14 rounded-lg flex justify-center items-center">
                <span className="text-white">
                  <ClassIcon fontSize="large" />
                </span>
              </div>
              <div className=" grid gap-y-2">
                <h1 className="text-gray-500 font-medium font-sans">
                  Total Number of Trainings
                </h1>
                <h3 className="text-3xl font-semibold text-gray-900">25</h3>
              </div>
            </div>
          </div>
          <div className="p-5 w-full  rounded-xl shadow-lg">
            <div className="flex gap-x-5 items-center py-3 ">
              <div className="bg-teal-500 h-14 w-14 rounded-lg flex justify-center items-center">
                <span className="text-white">
                  <SchoolIcon fontSize="large" />
                </span>
              </div>
              <div className=" grid gap-y-2">
                <h1 className="text-gray-500 font-medium font-sans">
                  Total Number of Courses
                </h1>
                <h3 className="text-3xl font-semibold text-gray-900">30</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
