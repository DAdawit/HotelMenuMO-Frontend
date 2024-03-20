import Image from "next/image";

const MenuTypes: React.FC = () => {
  return (
    <div className="mt-15">
      <div className="flex flex-col justify-center items-center gap-5 mt-10">
        <h1 className=" text-primary font-sans text-sm font-medium ">
          FLAVORS FOR ROYALTY
        </h1>
        <Image
          src="/separator.png"
          alt="spector"
          width={100}
          height={200}
          className=""
        />
        <h1 className=" text-secondary text-4xl font-serif">
          We Offer Top Notch
        </h1>
        <p className="text-secondary font-mono text-sm  contaner mx-auto max-w-2xl px-5 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry lorem Ipsum has been the industrys standard dummy text ever.
        </p>
      </div>
      <div className="grid  sm:flex sm:flex-row justify-evenly">
        <div className="p-3 grid items-center">
          <Image
            src="/breakfast.jpg"
            height={300}
            width={200}
            alt="breakfast"
            className="w-full rounded-lg hover:scale-110 transition-all object-contain"
          />
          <h1 className="text-secondary text-center tracking-wider font-sans mt-5 text-2xl">
            Breakfast
          </h1>
          <button className="text-primary hover:underline transition-all underline-offset-4 text-center">
            View Menu
          </button>
        </div>
        <div className=" p-3 mt-16 grid items-center">
          <Image
            src="/appetizers.jpg"
            height={300}
            width={200}
            alt="appetizers"
            className="w-full rounded-lg hover:scale-110 transition-all object-contain"
          />
          <h1 className="text-secondary text-center tracking-wider font-sans mt-5 text-2xl">
            Appetizers
          </h1>
          <button className="mt-2 text-primary hover:underline transition-all underline-offset-4 text-center">
            View Menu
          </button>
        </div>
        <div className="p-3 grid items-center">
          <Image
            src="/drinks.jpg"
            height={300}
            width={200}
            alt="drinks"
            className="w-full rounded-lg hover:scale-110 transition-all object-contain"
          />
          <h1 className="text-secondary text-center tracking-wider font-sans mt-5 text-2xl">
            Drinks
          </h1>
          <button className="text-primary hover:underline transition-all underline-offset-4 text-center">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuTypes;
