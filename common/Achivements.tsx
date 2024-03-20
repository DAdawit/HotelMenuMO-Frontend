import React from "react";

const Achivements = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:flex mt-16 gap-3 justify-evenly content-evenly items-center px-5">
        <div className="flex items-center gap-2 ">
          <h1 className="text-white text-5xl font-medium font-serif">150+</h1>
          <div className="grid items-start text-primary font-mono">
            <h4>DAILY</h4>
            <h4>ORDER</h4>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <h1 className="text-white text-5xl font-medium font-serif">82+</h1>
          <div className="grid items-start text-primary font-mono">
            <h4>SPECIAL</h4>
            <h4>DISHES</h4>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <h1 className="text-white text-5xl font-medium font-serif">10+</h1>
          <div className="grid items-start text-primary font-mono">
            <h4>EXPERT</h4>
            <h4>CHEF</h4>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <h1 className="text-white text-5xl font-medium font-serif">10+</h1>
          <div className="grid items-start text-primary font-mono">
            <h4>AWARDS</h4>
            <h4>WON</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
