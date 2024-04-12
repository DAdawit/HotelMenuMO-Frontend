"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenusByMealTimeOUt } from "@/types/Menu";
import MenuCard2 from "./MenuCard2";

type PropType = {
  menus: MenusByMealTimeOUt[];
};
const MenuBySubCategories: React.FC<PropType> = ({ menus }) => {
  const [activeTab, setActiveTab] = useState(menus[0]?.name); // Set the initial active tab

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col justify-center items-center gap-5 pt-10">
        <h1 className=" text-primary font-sans text-sm font-medium uppercase tracking-wider">
          Crafted Classics
        </h1>
        <Image
          src="/separator.png"
          alt="spector"
          width={100}
          height={200}
          className=""
        />
        <h1 className=" text-secondary text-lg font-serif tracking-wider">
          Choose from Our Selection of...
        </h1>
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        {menus &&
          Array.isArray(menus) &&
          menus.map((item, index) => (
            <button
              key={item.id}
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
                    {item.menues &&
                      Array.isArray(item.menues) &&
                      item.menues.map((menu) => (
                        <MenuCard2 menu={menu} key={menu.id} />
                      ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto text-white">
                    <p> empty</p>
                  </div>
                )}
                <div className="flex justify-center mt-5">
                  <Link
                    href={`/menus/subcategories/${item?.id}`}
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

export default MenuBySubCategories;
