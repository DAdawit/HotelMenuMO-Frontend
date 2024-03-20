import { lunchs } from "@/data/foods";
import Image from "next/image";

const Reservations = () => {
  return (
    <div className="bg-[#131415] px-5 sm:px-14 pt-10 pb-10">
      <div className="flex flex-col justify-center items-center gap-5 pt-10">
        <h1 className=" text-primary font-sans text-sm font-medium ">
          RESERVATIONS
        </h1>
        <Image
          src="/separator.png"
          alt="spector"
          width={100}
          height={200}
          className=""
        />
        <h1 className=" text-secondary text-4xl font-serif">List Menu</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8">
        {lunchs.map((lunch, index) => (
          <div
            key={index}
            className="flex items-center gap-3 shadow-md py-3 px-2 rounded-lg bg-bgPrimary opacity-90"
          >
            <div>
              <Image
                src={`${lunch.image}`}
                alt="spector"
                width={100}
                height={200}
                className="text-center rounded-2xl w-24 h-20 object-cover"
              />
            </div>
            <div className="w-full">
              <h1 className="text-gray-400 text-lg font-medium capitalize">
                {lunch.name}
              </h1>
              <p className="text-gray-400 text-sm font-mono">
                {lunch.ingredients}
              </p>
              <h1 className="text-primary">${lunch.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservations;
