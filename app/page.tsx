import Menu from "@/components/Home/Mornning";
import MenuTypes from "@/common/MenuTypes";
import { url } from "inspector";
import Image from "next/image";
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
import {
  fetchSpecialFoods,
  fetchMenuByMealtimes,
} from "@/services/main.services";
import MenuByMealTime2 from "@/components/Home/MenuByMealTime2";
export default async function Home() {
  const data = await fetchSpecialFoods();
  const menuByMealtime = await fetchMenuByMealtimes();

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
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <main id="Home" className="overflow-hidden">
        <Hero />
        <Services />
        <section id="Menu" className="bg-bgSecondary py-10">
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
          </div>
          <div className=" pt-5">
            {/* <MenuByMealTime /> */}
            <MenuByMealTime2 menus={menuByMealtime} />
            {/*  */}
          </div>
        </section>
        {/* special offers */}
        <section id="Specials" className="bg-bgPrimary">
          <Specials specials={data} />
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
