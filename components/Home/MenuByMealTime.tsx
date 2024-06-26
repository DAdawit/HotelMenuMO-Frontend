"use client";
import React, { useState } from "react";
import { fetchMenuByMealtimes } from "@/services/main.services";
import Image from "next/image";
import Link from "next/link";
import { MenusByMealTimeOUt } from "@/types/Menu";
import { FoodAndDrinkIcon } from "@/assets/icons/FoodAndDrinkIcon";
import MenuCard2 from "../Menu/MenuCard2";

type PropType = {
  menus: MenusByMealTimeOUt[];
};
const MenuByMealTime: React.FC<PropType> = ({ menus }) => {
  const [activeTab, setActiveTab] = useState(menus && menus[0]?.name); // Set the initial active tab

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <div className="container mx-auto px-5">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* MenuByMealTime */}
      <div className="flex justify-center gap-5 flex-wrap">
        {menus &&
          Array.isArray(menus) &&
          menus.map((item, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(item.name)}
              className="flex items-center md:justify-center flex-col md:flex-row gap-2 h-full text-primary shadow-lg"
            >
              <span
                className={
                  activeTab === item.name
                    ? `md:text-[15px] xll:text-[20px]  tracking-widest text-3xl font-semibold underline underline-offset-4 rounded-t-lg text-white w-full`
                    : "md:text-[15px]  xll:text-[20px] tracking-widest text-3xl text-white font-semibold w-full "
                }
              >
                {item.name}
              </span>
            </button>
          ))}
      </div>

      <div className="mt-8">
        {menus &&
          Array.isArray(menus) &&
          menus
            .filter((menuitems, index) => menuitems.name === activeTab)
            .map((item) => (
              <div key={item?.id} className="grid ">
                {item?.menues.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {item?.menues.map((menu, index) => (
                      <MenuCard2 menu={menu} key={index} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
                    <p>No trainings available for {item.name}</p>
                  </div>
                )}
                <div className="flex justify-center mt-5">
                  <Link
                    href={`/menus/mealtime/${item?.id}`}
                    className="py-2 px-6 text-center capitalize rounded-lg text-primary border-2 border-primary mt-4 hover:bg-primary hover:text-black transition-all tracking-wider font-medium w-max"
                  >
                    show More
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default MenuByMealTime;
