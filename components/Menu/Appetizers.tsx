import Image from "next/image";

const Appetizers = () => {
  return (
    <>
      <div className="bg-[#131415]">
        <div className="flex flex-col justify-center items-center gap-5 pt-10">
          <h1 className=" text-primary font-sans text-sm font-medium ">
            STARTER MENU
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className=""
          />
          <h1 className=" text-secondary text-4xl font-serif">Appetizers</h1>
        </div>

        <div className="px-5 mt-10">
          <div className="grid grid-cols-1 md:flex md:justify-evenly  gap-2 ">
            <div>
              {/* eslint-disable-next-line */}
              <Image
                src="/banner5.jpg"
                alt="spector"
                width={1000}
                height={2000}
                className="w-screen h-60 sm:h-96 object-cover"
              />
            </div>
            <div className="mt-10 md:-mt-3 grid gap-3 justify-center items-start w-full">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div key={index} className="shadow-md  px-3 py-2  w-4/5">
                  <div className="flex justify-between">
                    <h1 className="text-white font-sans font-medium hover:text-primary">
                      Greek Salad
                    </h1>
                    <h1 className="text-primary">$25.50</h1>
                  </div>
                  <p className="text-gray-400 text-sm m">
                    Tomatoes, green bell pepper, sliced cucumber onion, olives,
                    and feta cheese.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appetizers;
