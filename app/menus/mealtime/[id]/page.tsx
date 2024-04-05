import HeroMenuByMealTime from "@/common/Menu/HeroMenuByMealTime";
import MenuCard2 from "@/components/Menu/MenuCard2";
import MenuItemsByMealTime from "@/components/Menu/MenuItemsByMealTime";
import { MealTimeById, MenuByMealtimeId } from "@/services/main.services";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await MealTimeById(params.id);

  return (
    <div className="bg-[#131415] min-h-screen pb-8">
      <HeroMenuByMealTime mealTime={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <MenuItemsByMealTime />
    </div>
  );
}
