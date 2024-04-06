import { fetchMainDishes } from "@/services/main.services";
import Image from "next/image";
import Link from "next/link";

export default async function MainDishes() {
  const data = await fetchMainDishes();
  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <div className="bg-[#131415]">
        <div className="flex flex-col justify-center items-center gap-5 pt-10">
          <h1 className=" text-primary font-sans text-sm font-medium ">
            DELICIOUS
          </h1>
          <Image
            src="/separator.png"
            alt="spector"
            width={100}
            height={200}
            className=""
          />
          <h1 className=" text-secondary text-4xl font-serif">Main Dishes</h1>
        </div>

        <div className="px-5 mt-10 w-full ">
          <div className="grid grid-cols-1 md:flex md:justify-evenly md:flex-row-reverse gap-8">
            <div>
              {/* eslint-disable-next-line */}
              <Image
                src="/banner11.jpg"
                alt="spector"
                width={1000}
                height={2000}
                className="w-screen h-60 sm:h-96 object-cover"
              />
            </div>
            <div className="mt-10 md:-mt-3 grid gap-3  w-full ">
              {data.map((item, index) => (
                <div key={index} className="shadow-md  px-3 py-2  w-full">
                  <div className="flex justify-between w-full">
                    <h1 className="text-white font-sans font-medium hover:text-primary">
                      {item.name}
                    </h1>
                    <h1 className="text-primary">{item.price} ETB</h1>
                  </div>
                  <p className="text-gray-400 text-sm m">{item.ingridiants}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 pt-10">
          <Link
            href="/menus/main-dishes"
            className="py-3 px-6 w-max self-center border-2 border-bgButton text-primary mt-4 hover:bg-bgButton rounded-lg  hover:text-white transition-all tracking-wider font-medium font-mono"
          >
            View more
          </Link>
        </div>
      </div>
    </>
  );
}
