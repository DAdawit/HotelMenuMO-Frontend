import Image from "next/image";
import React from "react";
import { fetchSpecialFoods } from "@/services/main.services";
import Link from "next/link";
export default async function SpecialMenu() {
  const data = await fetchSpecialFoods();
  return (
    <div className="bg-[#131415]">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5">
          {data?.map((special, index) => (
            <div key={index} className="p-3 grid items-center justify-center ">
              <Image
                src={`${special._imageUrl}`}
                height={300}
                width={200}
                alt={special.name}
                className="w-96 rounded-md object-cover h-80"
              />
              <h1 className="text-secondary text-center tracking-wider font-sans mt-5 text-2xl">
                {special.name}
              </h1>
              <p className="text-gray-400 text-sm font-mono text-center">
                {special.ingridiants}
              </p>
              <h1 className="text-primary text-center">${special.price}</h1>
            </div>
          ))}
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
