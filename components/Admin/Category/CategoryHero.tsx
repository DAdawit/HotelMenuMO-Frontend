import Image from "next/image";
import React from "react";
import SearchCourse from "../../common/SearchCourse";

const CategoryHero = () => {
  return (
    <>
      <div className="h-[70vh]  xl:max-h-[60vh] xll:max-h-[60vh] relative">
        <Image
          src="/about 1.png"
          alt="hero image"
          height={2000}
          width={2000}
          className="h-[70vh] xl:max-h-[60vh] xll:max-h-[60vh] w-screen object-fill object-left-top brightness-75"
        />
        <div className="absolute h-full top-0 w-full flex  text-white ">
          <div className="flex flex-col justify-center w-full col-span-2 px-5">
            <div className="align-middle sm:pl-8">
              <h1 className="text-3xl  xl:text-4xl  xxl:text-6xl font-bold ">
                Executive Development
              </h1>
              <h1 className="text-3xl  xl:text-4xl  xxl:text-6xl font-bold mt-5">
                Training Courses
              </h1>
              <p className="text-sm mt-8 xxl:text-lg ">
                Explore Powerful Executive Learning Opportunities <br />
                that Help You Achieve your Potential Consulting For Entrepreneur
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bgPrimary py-8 px-5">
        <SearchCourse />
      </div>
    </>
  );
};

export default CategoryHero;
