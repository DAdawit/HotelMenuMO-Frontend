import Image from "next/image";

const OurStrength = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-col justify-center items-center gap-5 pt-16 ">
        <h1 className=" text-primary font-sans text-sm font-medium text-center ">
          WHY CHOOSE US
        </h1>
        <Image
          src="/separator.png"
          alt="spector"
          width={100}
          height={200}
          className="text-center"
        />
        <h1 className=" text-secondary text-4xl font-serif">Our Strength</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-5 mt-10  content-evenly gap-3 justify-evenly ">
        <div className="flex flex-col justify-center items-center gap-2 bg-[#1D1F20] py-5 rounded-md">
          <Image
            src="/strength/str1.png"
            alt="spector"
            width={100}
            height={200}
            className="text-center"
          />
          <h1 className="text-gray-300 text-lg font-medium font-sans">
            Hygienic Food
          </h1>
          <p className="text-sm text-gray-300 text-center font-serif tracking-wide">
            Lorem Ipsum is simply dummy printing and typesetting.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-bgPrimary py-5 rounded-md">
          <Image
            src="/strength/str2.png"
            alt="spector"
            width={100}
            height={200}
            className="text-center"
          />
          <h1 className="text-gray-300 text-lg font-medium font-sans">
            Fresh Environment
          </h1>
          <p className="text-sm text-gray-300 text-center font-serif tracking-wide">
            Lorem Ipsum is simply dummy printing and typesetting.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-[#1D1F20] py-5 rounded-md">
          <Image
            src="/strength/str3.png"
            alt="spector"
            width={100}
            height={200}
            className="text-center"
          />
          <h1 className="text-gray-300 text-lg font-medium font-sans">
            Skilled Chefs
          </h1>
          <p className="text-sm text-gray-300 text-center font-serif tracking-wide">
            Lorem Ipsum is simply dummy printing and typesetting.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 bg-bgPrimary py-5 rounded-md">
          <Image
            src="/strength/str4.png"
            alt="spector"
            width={100}
            height={200}
            className="text-center"
          />
          <h1 className="text-gray-300 text-lg font-medium font-sans">
            Event & Party
          </h1>
          <p className="text-sm text-gray-300 text-center font-serif tracking-wide">
            Lorem Ipsum is simply dummy printing and typesetting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
