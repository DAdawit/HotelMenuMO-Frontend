import Image from "next/image";
const Hero = () => {
  const styles = {
    backgroundImage: `url('/banner8.jpg')`,
    backgroundSize: "cover",
    postion: "relative",
  };
  return (
    <>
      <div style={styles} className="h-screen w-screen overflow-hidden">
        <div className="relative top-1/4 md:top-1/3 text-center text-white">
          <div className="grid justify-center gap-8">
            <h1 className=" text-primary font-sans text-sm font-medium tracking-wide">
              Delightfull Expriance
            </h1>
            <Image
              src="/separator.png"
              alt="spector"
              width={250}
              height={200}
              className="text-center"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl text-center font-serif mt-2 tracking-wide	">
            Flavors inspired by
          </h1>
          <h1 className="text-4xl text-center font-serif mt-2 tracking-wide	">
            the seasones
          </h1>
          <p className="font-mono mt-2 ">
            Come with family & feel the joy of mouthWatering food
          </p>
          <button className="py-4 px-6  border-2 border-primary mt-4 hover:bg-primary hover:text-black transition-all tracking-wider font-medium font-mono">
            View our menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
