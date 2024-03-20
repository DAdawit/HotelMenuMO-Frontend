import Achivements from "@/common/Achivements";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="bg-[#131415] pb-10">
      <div className="flex flex-col justify-center items-center gap-5 pt-16 ">
        <h1 className=" text-primary font-sans text-sm font-medium text-center ">
          WHO WE ARE
        </h1>
        <Image
          src="/separator.png"
          alt="spector"
          width={100}
          height={200}
          className="text-center"
        />
        <p className=" text-secondary text-xl font-serif tracking-widest max-w-4xl text-center px-5">
          A modern restaurant with a menu that will make your mouth water.
          Servicing delicious food since 45 years. Enjoy our seasonal menu and
          experience the beauty of naturalness
        </p>
      </div>
      <div className="  px-5 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center gap-3 ">
        <div className=" max-w-full md:max-w-sm grid justify-evenly h-96 w-full">
          <p className="items-start text-center text-sm text-secondary font-medium font-sans ">
            Lorem Ipsum is simply dummy text of the printingand typesetting
            industry lorem Ipsum has been the industrys standard dummy text ever
            since the when an unknown printer took a galley of type and
            scrambled it to make a type specimen book It has survived.
          </p>
          <h1 className="items-center text-center py-5 text-amber-300">
            ANDREW JOE - FOUNDER
          </h1>
          <Image
            src="/chef1.jpg"
            alt="spector"
            width={1000}
            height={2000}
            className="w-full items-end text-center object-cover h-52 object-bottom"
          />
        </div>
        <div className="h-96 max-w-full md:max-w-sm">
          {/* eslint-disable-next-line */}
          <Image
            src="/hotel.jpg"
            alt="spector"
            width={1000}
            height={2000}
            className="text-center h-full w-full object-cover"
          />
        </div>
        <div className="max-w-full lg:max-w-sm md:max-w-full h-96 w-full flex col-span-1 md:col-span-2 lg:col-span-1 border-2 pt-2 border-amber-200">
          <div className="grid justify-evenly w-full">
            <div className="items-start">
              <h1 className="text-center font-bold text-amber-100 pb-3">
                Lunch Time
              </h1>
              <h3 className="text-center text-gray-300">Monday to Sunday</h3>
              <h3 className="text-center text-gray-300"> 11.00 am - 2.30pm</h3>
            </div>
            <div className="items-center">
              <h1 className="text-center font-bold text-amber-100 pb-3">
                Dinner Time
              </h1>
              <h3 className="text-center text-gray-300">Monday to Sunday</h3>
              <h3 className="text-center text-gray-300">5.30 pm - 11.30 pm</h3>
            </div>
            <div className="items-end">
              <h1 className="text-center font-bold text-amber-100 pb-3">
                Contact Us
              </h1>
              <h3 className="text-center text-gray-300">
                Restaurant St, Delicious City,
              </h3>
              <h3 className="text-center text-gray-300">London 9578, UK</h3>
              <h3 className="text-center text-gray-300"> +88-123-123456</h3>
              <h3 className="text-center text-gray-300">
                reservation@restro.com
              </h3>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-5">
        <Achivements />
      </section>
    </div>
  );
};

export default WhoWeAre;
