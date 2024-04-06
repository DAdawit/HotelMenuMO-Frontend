import HeroMainDishes from "@/common/Menu/HeroMainDishes";
import AllSpecialDishes from "@/components/Menu/AllSpecialDishes";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#131415] min-h-screen pb-8">
      <HeroMainDishes title="Special Dishes" />
      <AllSpecialDishes />
    </div>
  );
};

export default page;
