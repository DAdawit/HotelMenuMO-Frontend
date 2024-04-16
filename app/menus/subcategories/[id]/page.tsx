import HeroMenuByCategoy from "@/common/Menu/HeroMenuByCategoy";
import MenuItemsByCategory from "@/components/Menu/MenuItemsByCategory";
import { lunchs } from "@/data/foods";
import { SubCategoryById } from "@/services/main.services";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await SubCategoryById(params.id);

  return (
    <div className="bg-[#131415] min-h-screen pb-8">
      <HeroMenuByCategoy category={data} />
      {/* <MenuCard2Skeleton /> */}
      <MenuItemsByCategory />
    </div>
  );
}
