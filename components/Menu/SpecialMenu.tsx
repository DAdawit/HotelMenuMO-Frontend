import Image from "next/image";
import React from "react";
import { fetchSpecialFoods } from "@/services/main.services";
import Link from "next/link";
import MenuCard from "./MenuCard";
export default async function SpecialMenu() {
  const data = await fetchSpecialFoods();
  return (
    <div className="bg-[#131415]">
      {/* <pre className="text-white">{JSON.stringify(data, null, 2)}</pre> */}
      <div className="container mx-auto px-5">
        <div className="flex flex-col justify-center items-center gap-5 pt-10">
          <h1 className=" text-primary font-sans text-sm font-medium ">
            SPECIAL OFFER
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className=""
          />
          <h1 className=" text-secondary text-4xl font-serif">
            Best Special Menu
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-3 h-max">
          {data &&
            Array.isArray(data) &&
            data.map((special) => <MenuCard key={special.id} menu={special} />)}
        </div>
        <div className="flex flex-col justify-center items-center gap-5 pt-10">
          <Link
            href="/menus/special-dishes"
            className="py-3 px-6 w-max self-center border-2 border-bgButton text-primary mt-4 hover:bg-bgButton rounded-lg  hover:text-white transition-all tracking-wider font-medium font-mono"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
}
