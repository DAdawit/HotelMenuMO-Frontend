"use client";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "@/common/PageTitle";
import { useState } from "react";
import useStore from "@/store/useStore";
import CategoryIcon from "@mui/icons-material/Category";

import {
  getStates,
  getStatesCountByCategory,
  getStatesCountByMealtime,
  getStatesCountBySubCategory,
} from "@/services/admin.services";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BentoIcon from "@mui/icons-material/Bento";

import StatesChart from "@/components/Dashboard/StatesChart";
import { fetchProfile } from "@/services/main.services";
import AddProfile from "@/components/Admin/Profile/AddProfile";
import { set } from "zod";
const Page = () => {
  const profile = useStore((state) => state.profile);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["getStates"],
    queryFn: () => getStates(),
  });

  const {
    data: categoriesMenuCount,
    isLoading: loadCat,
    error: errCat,
    refetch: refetchCat,
  } = useQuery({
    queryKey: ["getStatesCountByCategory"],
    queryFn: () => getStatesCountByCategory(),
  });
  const {
    data: mealTimeMenuCount,
    isLoading: loadMeal,
    error: errorMeal,
    refetch: refetchMeal,
  } = useQuery({
    queryKey: ["getStatesCountByMealtime"],
    queryFn: () => getStatesCountByMealtime(),
  });
  const {
    data: subCategoriesMenuCount,
    isLoading: loadSub,
    error: errorSub,
    refetch: refetchSub,
  } = useQuery({
    queryKey: ["getStatesCountBySubCategory"],
    queryFn: () => getStatesCountBySubCategory(),
  });

  return (
    <div className="container mx-auto px-5 pb-16 min-h-screen">
      {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}
      <div className="py-5">
        <PageTitle title="Dashboard" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-5 w-full  rounded-xl shadow-lg">
          <div className="flex gap-x-5 items-center py-3 ">
            <div className="bg-red-500 h-14 w-14 rounded-lg flex justify-center items-center">
              <span className="text-white">
                <BentoIcon fontSize="large" />
              </span>
            </div>
            <div className=" grid gap-y-2">
              <h1 className="text-gray-500 font-medium font-sans">
                Total Categories
              </h1>
              <h3 className="text-3xl font-semibold text-gray-900">
                {data?.categories}{" "}
              </h3>
            </div>
          </div>
        </div>

        <div className="p-5 w-full  rounded-xl shadow-lg">
          <div className="flex gap-x-5 items-center py-3 ">
            <div className="bg-indigo-500 h-14 w-14 rounded-lg flex justify-center items-center">
              <span className="text-white">
                <CategoryIcon fontSize="large" />
              </span>
            </div>
            <div className=" grid gap-y-2">
              <h1 className="text-gray-500 font-medium font-sans">
                Total SubCategories
              </h1>
              <h3 className="text-3xl font-semibold text-gray-900">
                {data?.subcategories}
              </h3>
            </div>
          </div>
        </div>

        <div className="p-5 w-full  rounded-xl shadow-lg">
          <div className="flex gap-x-5 items-center py-3 ">
            <div className="bg-green-500 h-14 w-14 rounded-lg flex justify-center items-center">
              <span className="text-white">
                <MenuBookIcon fontSize="large" />
              </span>
            </div>
            <div className=" grid gap-y-2">
              <h1 className="text-gray-500 font-medium font-sans">
                Total Menus
              </h1>
              <h3 className="text-3xl font-semibold text-gray-900">
                {data?.menus}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
        <div
          className={loadCat ? "shadow-md p-5 animate-pulse" : "shadow-md p-5"}
        >
          <h1 className="text-lg text-gray-600 font-medium">
            Category Distribution
          </h1>
          <StatesChart chartData={categoriesMenuCount} title="Menus" />
        </div>
        <div
          className={loadSub ? "shadow-md p-5 animate-pulse" : "shadow-md p-5"}
        >
          <h1 className="text-lg text-gray-600 font-medium">
            Subcategory Distribution
          </h1>
          <StatesChart chartData={subCategoriesMenuCount} title="Menus" />
        </div>
        <div
          className={loadMeal ? "shadow-md p-5 animate-pulse" : "shadow-md p-5"}
        >
          <h1 className="text-lg text-gray-600 font-medium">
            Meal Time Distribution
          </h1>
          <StatesChart chartData={mealTimeMenuCount} title="Menus" />
        </div>
      </div>
    </div>
  );
};

export default Page;
