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
      <main id="Home" className="overflow-hidden">
        <Hero />

        <div className="bg-bgPrimary  mt-15">
          <div className="flex flex-col justify-center items-center gap-5 pt-10">
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
              industry lorem Ipsum has been the industrys standard dummy text
              ever.
            </p>
          </div>
          <div className="grid  sm:flex sm:flex-row justify-evenly w-full mt-5">
            <div className="py-3 grid items-center">
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
              <Link
                href="/menu"
                className="text-primary hover:underline transition-all underline-offset-4 text-center"
              >
                View Menu
              </Link>
            </div>
            <div className=" py-3 sm:mt-16 grid items-center">
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
              <Link
                href="/menu"
                className="text-primary hover:underline transition-all underline-offset-4 text-center"
              >
                View Menu
              </Link>
            </div>
            <div className="py-3 grid items-center">
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
              <Link
                href="/menu"
                className="text-primary hover:underline transition-all underline-offset-4 text-center"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>

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
            <h1 className=" text-secondary text-4xl font-serif">
              Delicious Menu
            </h1>
          </div>
          <div className=" pt-5">
            {/* <Box sx={{ width: "100%", typography: "body1" }} mt={3}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }} px={2}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    centered
                    textColor="secondary"
                  >
                    <Tab
                      label="MORNING"
                      value="1"
                      color="white"
                      style={{ color: "white" }}
                    />
                    <Tab label="LUNCH" value="2" style={{ color: "white" }} />
                    <Tab label="DINNER" value="3" style={{ color: "white" }} />
                    <Tab label="WINS" value="4" style={{ color: "white" }} />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Morrning />
                </TabPanel>
                <TabPanel value="2">
                  <Lunch />
                </TabPanel>
                <TabPanel value="3">
                  <Dinner />
                </TabPanel>
                <TabPanel value="4">
                  <Drinks />
                </TabPanel>
              </TabContext>
            </Box> */}
            <div className="flex justify-center pt-5 pb-10">
              <Link
                href="/menu"
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
