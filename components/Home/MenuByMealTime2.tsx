"use client";
import React, { useState } from "react";
import { fetchMenuByMealtimes } from "@/services/main.services";
import Image from "next/image";
import Link from "next/link";
import { MenusByMealTimeOUt } from "@/types/Menu";
import { FoodAndDrinkIcon } from "@/assets/icons/FoodAndDrinkIcon";

type PropType = {
  menus: MenusByMealTimeOUt[];
};
const MenuByMealTime2: React.FC<PropType> = ({ menus }) => {
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
                      <div
                        key={index}
                        className="shadow-md  px-3 py-4 w-full flex justify-between"
                      >
                        <div className="flex items-center gap-x-3">
                          <div className="text-gray-200">
                            {menu.image ? (
                              <Image
                                src={`${menu?._imageUrl}`}
                                alt="spector"
                                width={100}
                                height={200}
                                className="rounded-2xl w-20 h-20 object-cover"
                              />
                            ) : (
                              <FoodAndDrinkIcon />
                            )}{" "}
                          </div>
                          <div className="grid gap-2">
                            <h1 className="text-white font-sanshover:text-primary tracking-wider font-semibold">
                              {menu?.name}
                            </h1>
                            <p className="text-gray-200 text-sm font-sans tracking-wide font-medium">
                              {menu?.ingridiants}
                            </p>
                          </div>
                        </div>
                        <div className="grid gap-4">
                          <h1 className="invisible"></h1>
                          <h1 className="text-primary font-semibold tracking-wide">
                            {menu?.price} ETB
                          </h1>
                        </div>
                      </div>
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

      {/* {menus.map((menu, index) => (
        <div className="mt-5" key={menu.id}>
          <h1 className="text-center text-5xl font-medium py-5 font-serif mb-3 text-white">
            {menu.name}
          </h1>
          <div
            className={
              index % 2 == 0
                ? "grid md:flex gap-5"
                : "grid md:flex md:flex-row-reverse gap-5"
            }
          >
            <div className="w-full">
              <Image
                src={menu?.imageUrl}
                alt="spector"
                width={1000}
                height={2000}
                className="w-screen h-60 sm:h-96 object-cover rounded-lg shadow-gray-800 shadow-lg hover:scale- transition duration-500 cursor-pointer"
              />
            </div>
            <div className="mt-10 md:-mt-3 grid gap-3  items-start w-full h-min">
              {menu.menues.map((item, index) => (
                <div key={index} className="shadow-md  px-3 py-3 w-full">
                  <div className="flex justify-between">
                    <h1 className="text-white font-sans font-medium hover:text-primary">
                      {item?.name}
                    </h1>
                    <h1 className="text-primary">{item?.price} ETB</h1>
                  </div>
                  <p className="text-gray-400 text-sm m">{item?.ingridiants}</p>
                </div>
              ))}
              <div className="flex justify-center items-center">
                <Link
                  href={`/menus/mealtime/${menu?.id}`}
                  className="py-2 px-6 text-center text-primary border-2 border-primary mt-4 hover:bg-primary hover:text-black transition-all tracking-wider font-medium w-max"
                >
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default MenuByMealTime2;
