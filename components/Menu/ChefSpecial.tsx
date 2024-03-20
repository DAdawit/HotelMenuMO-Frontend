"use client";
import Image from "next/image";
import React from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
const ChefSpecial = () => {
  return (
    <>
      <div className="px-5 md:px-10 lg:px-16 bg-[#131415] py-16 content-center">
        <div className="flex justify-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 rounded-t-2xl rounded-b-2xl sm:rounded-l-3xl sm:rounded-r-3xl">
            <div>
              {/* eslint-disable-next-line */}
              <img
                src="/banner14.jpg"
                alt="spector"
                width={100}
                height={200}
                className="w-screen h-60 sm:h-96 object-cover "
              />
            </div>
            <div className=" bg-bgPrimary flex flex-col justify-center items-center gap-5 pb-5 pt-10">
              <div className="flex justify-center items-center gap-1">
                <span className="text-primary">
                  <StarBorderPurple500Icon />
                </span>
                <h1 className=" text-primary font-sans text-sm font-medium ">
                  CHEF SELECTION
                </h1>
              </div>
              <Image
                src="/separator.png"
                alt="spector"
                width={100}
                height={200}
                className=""
              />
              <h1 className=" text-secondary text-4xl font-serif">
                Lobster Tortellini
              </h1>
              <p className="text-center text-primary text-sm font-sans px-10">
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since.
              </p>
              <div className="flex justify-evenly items-center gap-5">
                <h1 className="text-bgButton text-sm line-through">$40.00</h1>
                <h1 className="text-primary text-lg fong-font-medium">
                  $20.00
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefSpecial;
