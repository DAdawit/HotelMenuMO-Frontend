import { CategoryOut } from "@/types/Category";
import { MealTimeOut } from "@/types/MealTime";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type PropType = {
  category: CategoryOut;
};
const HeroMenuByCategoy: React.FC<PropType> = ({ category }) => {
  return (
    <>
      <div className="h-[70vh]  xl:max-h-[60vh] xll:max-h-[60vh] relative">
        <Image
          src={category?.imageUrl}
          alt="hero image"
          height={2000}
          width={2000}
          className="h-[70vh] xl:max-h-[60vh] xll:max-h-[60vh] w-screen object-cover object-center brightness-50"
        />
        <div className="absolute h-full top-0 w-full flex  text-white ">
          <div className="flex flex-col justify-center w-full col-span-2 px-5">
            <div className="align-middle sm:pl-8">
              <h1 className="text-4xl ` xl:text-5xl  xxl:text-6xl font-bold text-center">
                {category?.name}
              </h1>
              <h4 className="text-md mt-8 xxl:text-lg text-center">
                Menu{" "}
                <span>
                  <Link href="/" className="underline text-sm font-sans">
                    /Home
                  </Link>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMenuByCategoy;
