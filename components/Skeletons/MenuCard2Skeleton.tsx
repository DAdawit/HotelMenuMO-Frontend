import React from "react";

const MenuCard2Skeleton = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            className="flex items-center gap-3 shadow-md py-3 px-2 rounded-lg bg-black opacity-90 animate-pulse"
            key={item}
          >
            <div className="text-white">
              <div className="h-16 w-16 bg-gray-400 rounded-lg"></div>
            </div>
            <div className="grid gap-y-2">
              <h1 className="h-3 w-20 bg-gray-400 rounded-lg"></h1>
              <p className="h-2 w-36 bg-gray-400 rounded-lg"> </p>
              <h1 className="h-2 w-10 bg-gray-400 rounded-lg"></h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard2Skeleton;
