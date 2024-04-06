import { fetchHero } from "@/services/main.services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Hero() {
  const data = await fetchHero();
  // console.log(data);

  return (
    <div className="overflow-x-hidden">
      <div className="h-screen w-screen relative">
        <Image
          src={data.hero.imageUrl}
          alt="spector"
          fill
          className="w-screen h-96 object-cover brightness-50"
          blurDataURL="/banner7.jpg"
        />
      </div>
      <div className="absolute top-1/3 w-full">
        <div className="flex flex-col justify-center ">
          <Image
            src={data.logo._fullImagePath}
            alt="spector"
            width={150}
            height={100}
            className="self-center object-contain"
          />
          <h1 className="text-center text-primary font-serif text-lg font-bold tracking-widest mt-10">
            {data.hero.slogan}
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className="self-center py-2"
          />
          <div className="text-white content-center flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl text-center  font-serif mt-2 tracking-wide	">
              {data.hero.title}{" "}
            </h1>

            <p className="font-sans mt-2 text-center">{data.hero.content} </p>
            {/* <Link href="/menu" className="text-center w-full content-center"> */}
            <Link
              href="/menus"
              className="py-4 px-6 w-max self-center border-2 border-bgButton text-primary mt-4 hover:bg-bgButton  hover:text-white transition-all tracking-wider font-medium font-mono"
            >
              View our menu
            </Link>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
