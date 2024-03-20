import Image from "next/image";
import React from "react";
import { drinks } from "@/data/foods";
const Drinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
      {drinks.map((drink, index) => (
        <div
          key={index}
          className="flex items-center gap-3 shadow-md py-3 px-2 rounded-lg bg-bgPrimary opacity-90"
        >
          <div>
            <Image
              src={`${drink.image}`}
              alt="spector"
              width={100}
              height={200}
              className="text-center rounded-2xl w-24 h-20 object-cover"
            />
          </div>
          <div className="w-full">
            <h1 className="text-gray-400 text-lg font-medium capitalize">
              {drink.name}
            </h1>
            <p className="text-gray-400 text-sm font-mono">
              {drink.ingredients}
            </p>
            <h1 className="text-primary">${drink.price}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Drinks;
