import Image from "next/image";

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="h-96 w-screen relative pb-5">
        <Image
          src="/banner14.jpg"
          alt="spector"
          fill
          className="w-screen h-96 object-cover brightness-50"
          blurDataURL="/banner14.jpg"
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
          <h1 className="text-center text-primary font-serif text-lg font-medium tracking-widest mt-10">
            DELICIOUS & AMAZING
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className="self-center py-2"
          />
          <h1 className="text-5xl text-center font-serif mt-2 tracking-wide	text-white">
            Our Menu
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
