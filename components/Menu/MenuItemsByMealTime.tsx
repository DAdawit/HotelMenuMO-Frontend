"use client";
import { MenuByMealtimeId } from "@/services/main.services";
import { useQuery } from "@tanstack/react-query";
import React, { Suspense, useState } from "react";
import MenuCard2 from "./MenuCard2";
import { Spinner } from "@/assets/icons/Spinner";
import PaginationComponent from "@/common/Pagination/Pagination";
import { useParams } from "next/navigation";
import MenuCard2Skeleton from "../Skeletons/MenuCard2Skeleton";

const MenuItemsByMealTime = () => {
  const { id } = useParams();

  const [page, setPage] = React.useState(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["MenuByMealtimeId", page],
    queryFn: () => MenuByMealtimeId(+id, page as number),
  });
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div>
      {/* <pre>{JSON.stringify(page, null, 2)}</pre> */}
      {isLoading && (
        <div className="mt-8">
          <MenuCard2Skeleton />
        </div>
      )}

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

      {data?.hasNext || data?.hasPrev ? (
        <PaginationComponent
          count={data?.totalPages}
          page={data?.currentPage}
          handleChange={handleChange}
        />
      ) : null}
    </div>
  );
};

export default MenuItemsByMealTime;
