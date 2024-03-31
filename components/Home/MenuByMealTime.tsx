import React from "react";
import { fetchMenuByMealtimes } from "@/services/main.services";
import Image from "next/image";
import Link from "next/link";

export default async function MenuByMealTime() {
  const data = await fetchMenuByMealtimes();
  let activeTab = data[0].name;
  const handleTabClick = (tabName: string) => {
    activeTab = tabName;
  };
  return (
    <div className="container mx-auto px-5">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* MenuByMealTime */}
      {data.map((menu, index) => (
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

            //   className="grid grid-cols-1 md:flex md:justify-evenly  gap-2 "
          >
            <div className="w-full">
              {/* eslint-disable-next-line */}
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
                  className="py-4 px-6 text-center text-primary border-2 border-primary mt-4 hover:bg-primary hover:text-black transition-all tracking-wider font-medium font-mono w-max"
                >
                  View all menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
