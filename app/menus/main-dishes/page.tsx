import HeroMainDishes from "@/common/Menu/HeroMainDishes";
import AllMainDishes from "@/components/Menu/AllMainDishes";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#131415] min-h-screen pb-8">
      <HeroMainDishes />
      <AllMainDishes />
    </div>
  );
};

export default page;
