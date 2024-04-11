import React from "react";
import HeroMenuByCategoy from "@/common/Menu/HeroMenuByCategoy";
import MenuItemsByCategory from "@/components/Menu/MenuItemsByCategory";
import { CategoryById } from "@/services/main.services";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await CategoryById(params.id);

  return (
    <div className="bg-[#131415] min-h-screen pb-8">
      <HeroMenuByCategoy category={data} />
      <MenuItemsByCategory />
    </div>
  );
}
