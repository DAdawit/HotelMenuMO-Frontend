import { homeFetchCategories, fetchMealtimes } from "@/services/main.services";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default async function Services() {
  const data = await homeFetchCategories();

  return (
    <div className="bg-bgPrimary  mt-15">
      <div className="flex flex-col justify-center items-center gap-5 pt-10">
        <h1 className=" text-primary font-sans text-sm font-medium ">
          FLAVORS FOR ROYALTY
        </h1>
        <Image
          src="/separator.png"
          alt="spector"
          width={100}
          height={200}
          className=""
        />
        <h1 className=" text-secondary text-4xl font-serif">
          We Offer Top Notch
        </h1>
        <p className="text-secondary font-mono text-sm  contaner mx-auto max-w-2xl px-5 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industrys standard dummy text ever.
        </p>
      </div>
      <div className="grid  sm:flex sm:flex-row justify-evenly w-full mt-5">
        {data.map((item) => (
          <div className="py-3 grid items-center" key={item.id}>
            <div className="min-h-82 align-start">
              <Link href={`/menus/category/${item.id}`}>
                <Image
                  src={item.imageUrl}
                  height={1000}
                  width={1000}
                  alt={item.name}
                  className="h-72 w-60 rounded-md  hover:scale-110 transition-all object-cover object-center"
                />
              </Link>
            </div>
            <div className="grid justify-items-center align-end">
              <h1 className="text-secondary text-center tracking-wider font-sans mt-5 text-2xl h-max">
                {item.name}
              </h1>
              <Link
                href={`/menus/category/${item.id}`}
                className="text-primary hover:underline transition-all underline-offset-4 text-center h-max"
              >
                View Menu
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
