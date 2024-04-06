import { FoodAndDrinkIcon } from "@/assets/icons/FoodAndDrinkIcon";
import HeroMenuByCategoy from "@/common/Menu/HeroMenuByCategoy";
import MealTimeHeroSection from "@/common/Menu/HeroMenuByCategoy";
import MenuCard2 from "@/components/Menu/MenuCard2";
import MenuItemsByCategory from "@/components/Menu/MenuItemsByCategory";
import { lunchs } from "@/data/foods";
import { CategoryById, fetchMenuByCategory } from "@/services/main.services";
import Image from "next/image";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await CategoryById(params.id);

  return (
    <div className="bg-[#131415] min-h-screen pb-8">
      <HeroMenuByCategoy category={data} />
      <MenuItemsByCategory />
    </div>
  );
}
