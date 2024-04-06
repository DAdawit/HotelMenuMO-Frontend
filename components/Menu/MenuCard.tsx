import Image from "next/image";
import React from "react";

const MenuCard = () => {
  return (
    <div>
      {" "}
      <div className="p-3 grid items-center justify-center ">
        <Image
          src="/public/banner10.jpg"
          height={300}
          width={200}
          alt="breakfast"
          className="w-full rounded-md object-cover h-80"
        />
        <h1 className="text-secondary text-center tracking-wider font-sans mt-5 text-2xl">
          name
        </h1>
        <p className="text-gray-400 text-sm font-mono text-center">
          ingridient{" "}
        </p>
        <h1 className="text-primary text-center">price</h1>
      </div>
    </div>
  );
};

export default MenuCard;
