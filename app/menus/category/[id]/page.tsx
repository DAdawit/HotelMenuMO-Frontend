import { FoodAndDrinkIcon } from "@/assets/icons/FoodAndDrinkIcon";
import HeroMenuByCategoy from "@/common/Menu/HeroMenuByCategoy";
import MealTimeHeroSection from "@/common/Menu/HeroMenuByCategoy";
import MenuCard2 from "@/components/Menu/MenuCard2";
import { lunchs } from "@/data/foods";
import { fetchMenuByCategory } from "@/services/main.services";
import Image from "next/image";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchMenuByCategory(params.id);

  return (
    <div className="bg-[#131415] min-h-screen">
      <HeroMenuByCategoy category={data.category} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/* {params.id} */}
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
    </div>
  );
}
