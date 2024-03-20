import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="h-96 w-screen relative">
        <Image
          src="/bannerAbout.jpg"
          alt="spector"
          fill
          className="w-screen h-96 object-cover brightness-50"
          blurDataURL="/bannerAbout.jpg"
        />
      </div>
      <div className="absolute top-1/3 w-full">
        <div className="flex flex-col justify-center ">
          <Image
            src="/delici2.png"
            alt="spector"
            width={150}
            height={100}
            className="self-center object-contain"
          />
          <h1 className="text-center text-primary font-serif text-lg font-bold tracking-widest mt-10">
            OUR STORY
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className="self-center"
          />
          <div className="text-white content-center flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl text-center  font-serif mt-2 tracking-wide	">
              About Us
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
