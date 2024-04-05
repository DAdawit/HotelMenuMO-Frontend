"use client";
import { MenuByMealtimeId } from "@/services/main.services";
import { useQuery } from "@tanstack/react-query";
import React, { Suspense, useState } from "react";
import MenuCard2 from "./MenuCard2";
import { Spinner } from "@/assets/icons/Spinner";
import PaginationComponent from "@/common/Pagination/Pagination";

const MenuItemsByMealTime = () => {
  const [page, setPage] = React.useState(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["MenuByMealtimeId", page],
    queryFn: () => MenuByMealtimeId(1, page as number),
  });
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <Suspense fallback={<Spinner />}>
        <div className="min-h-96 container mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {data && (data?.data?.length ?? 0) == 0 && (
              <div className="text-white">empty !</div>
            )}

            {data?.data?.map((menu, index) => (
              <MenuCard2 key={index} menu={menu} />
            ))}
          </div>
        </div>
      </Suspense>

      <PaginationComponent
        count={data?.totalPages}
        page={data?.currentPage}
        handleChange={handleChange}
      />

      <h1>hello</h1>
    </div>
  );
};

export default MenuItemsByMealTime;
