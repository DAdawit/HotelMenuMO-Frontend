import { FoodAndDrinkIcon } from "@/assets/icons/FoodAndDrinkIcon";
import HeroMenuByCategoy from "@/common/Menu/HeroMenuByCategoy";
import MealTimeHeroSection from "@/common/Menu/HeroMenuByCategoy";
import HeroMenuByMealTime from "@/common/Menu/HeroMenuByMealTime";
import { lunchs } from "@/data/foods";
import {
  MenuByMealtimeId,
  fetchMenuByCategory,
  fetchMenuByMealtimes,
} from "@/services/main.services";
import Image from "next/image";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await MenuByMealtimeId(params.id);

  return (
    <div className="bg-[#131415] min-h-screen">
      <HeroMenuByMealTime mealTime={data.mealTime} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/* {params.id} */}
      <div className="min-h-96 container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {data && (data?.menus?.length ?? 0) == 0 && (
            <div className="text-white">empty !</div>
          )}

          {data?.menus?.map((menu, index) => (
            <div
              key={index}
              className="flex items-center gap-3 shadow-md py-3 px-2 rounded-lg bg-bgPrimary opacity-90"
            >
              <div className="text-white">
                {menu.image ? (
                  <Image
                    src={`${menu?._imageUrl}`}
                    alt="spector"
                    width={100}
                    height={200}
                    className="rounded-2xl w-24 h-20 object-cover"
                  />
                ) : (
                  <FoodAndDrinkIcon />
                )}
              </div>
              <div className="w-full">
                <h1 className="text-gray-400 text-lg font-medium capitalize">
                  {menu?.name}
                </h1>
                <p className="text-gray-400 text-sm font-mono">
                  {menu?.ingridiants}
                </p>
                <h1 className="text-primary">${menu?.price}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
