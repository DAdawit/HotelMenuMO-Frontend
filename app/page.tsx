// "use client";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";

import Menu from "@/components/Home/Mornning";
import MenuTypes from "@/common/MenuTypes";
import { url } from "inspector";
import Image from "next/image";
// import { useEffect, useState } from "react";
import { morrning } from "@/data/foods";
import Lunch from "@/components/Home/Lunch";
import Dinner from "@/components/Home/Dinner";
import Drinks from "@/components/Home/Drinks";
import Specials from "@/components/Home/Specials";
import OurStrength from "@/components/Home/OurStrength";
import Chefs from "@/components/Home/Chefs";
import SocialMeadiaLinks from "@/components/Home/SocialMeadiaLinks";
import Experiance from "@/components/Home/Experiance";
import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import Link from "next/link";
import MoveToTop from "@/components/Home/MoveToTop";
import Hero from "@/components/Home/Hero";
import Morrning from "@/components/Home/Mornning";
import Services from "@/components/Home/Services";
import MenuByMealTime from "@/components/Home/MenuByMealTime";

export default function Home() {
  // const [value, setValue] = useState("1");

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  const styles = {
    backgroundImage: `url('/banner8.jpg')`,
    backgroundSize: "cover",
    postion: "relative",
  };

  return (
    <>
      {/* <pre>{JSON.stringify(venues, null, 2)}</pre> */}

      <main id="Home" className="overflow-hidden">
        <Hero />
        <Services />
        {/* Menu */}
        <section id="Menu" className="bg-bgSecondary pt-10">
          <div className="flex flex-col justify-center items-center gap-5 pt-10">
            <h1 className=" text-primary font-sans text-sm font-medium text-center ">
              SPECIAL SELECTION
            </h1>
            <Image
              src="/separator.png"
              alt="spector"
              width={100}
              height={200}
              className="text-center"
            />
            {/* <h1 className=" text-secondary text-4xl font-serif">
              Delicious Menu
            </h1> */}
          </div>
          <div className=" pt-5">
            <MenuByMealTime />

            <div className="flex justify-center pt-5 pb-10">
              <Link
                href="/menus"
                className="py-4 px-6 text-center text-primary border-2 border-primary mt-4 hover:bg-primary hover:text-black transition-all tracking-wider font-medium font-mono"
              >
                View all menu
              </Link>
            </div>
          </div>
        </section>
        {/* special offers */}
        <section id="Specials" className="bg-bgPrimary">
          <Specials />
        </section>

        {/* our strength */}
        <section className="bg-bgThird">
          <OurStrength />
        </section>
        {/* chefs */}
        <section className="bg-bgThird">
          <Chefs />
        </section>

        <section className="bg-bgThird">
          <Experiance />
        </section>
        {/* move to top */}
        <MoveToTop />
      </main>
    </>
  );
}
