import { FoodAndDrinkIcon } from "@/assets/icons/FoodAndDrinkIcon";
import { Menu } from "@/types/MealTime";
import Image from "next/image";
import React from "react";

type PropType = {
  menu: Menu;
};
const MenuCard2: React.FC<PropType> = ({ menu }) => {
  return (
    <div className="flex items-center gap-3 shadow-md py-3 px-2 rounded-lg bg-bgPrimary opacity-90">
      <div className="text-white">
        {menu?.image ? (
          <Image
            src={`${menu?._imageUrl}`}
            alt="spector"
            width={100}
            height={200}
            className="rounded-2xl w-24 h-20 object-cover"
          />
        ) : (
          <FoodAndDrinkIcon />
        )}
      </div>
      <div className="w-full">
        <h1 className="text-gray-400 text-lg font-medium capitalize">
          {menu?.name}
        </h1>
        <p className="text-gray-400 text-sm font-mono">{menu?.ingridiants}</p>
        <h1 className="text-primary">{menu?.price} ETB</h1>
      </div>
    </div>
  );
};

export default MenuCard2;
