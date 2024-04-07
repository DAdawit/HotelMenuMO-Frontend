import { SpecialFoodOut } from "@/types/Menu";
import Image from "next/image";
import React from "react";
type PropType = {
  menu: SpecialFoodOut;
};

const MenuCard: React.FC<PropType> = ({ menu }) => {
  return (
    <div>
      {" "}
      <div className="grid items-center justify-center shadow-xl rounded-md p-2 ">
        <div className="h-80">
          {menu.image ? (
            <Image
              src={`${menu._imageUrl}`}
              height={300}
              width={200}
              alt="breakfast"
              className="w-full rounded-md object-cover h-80"
            />
          ) : (
            <Image
              src="/menuPlaceholder.jpg"
              height={300}
              width={200}
              alt="breakfast"
              className="w-full rounded-md object-cover h-80 brightness-75 blur-sm"
            />
          )}
        </div>

        <div className="grid min-h-36 py-2">
          <h1 className="text-secondary text-center tracking-wider font-sans mt-5 text-2xl">
            {menu.name}
          </h1>
          <p className="text-gray-400 text-sm font-mono text-center align-bottom">
            {menu.ingridiants}
          </p>
          <h1 className="text-primary text-center">{menu.price} ETB</h1>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
