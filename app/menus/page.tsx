import MenuByMealTime from "@/components/Home/MenuByMealTime";
import MoveToTop from "@/components/Home/MoveToTop";
import Appetizers from "@/components/Menu/Appetizers";
import ChefSpecial from "@/components/Menu/ChefSpecial";
import Hero from "@/components/Menu/Hero";
import MainDishes from "@/components/Menu/MainDishes";
import Reservations from "@/components/Menu/Reservations";
import SpecialMenu from "@/components/Menu/SpecialMenu";

const page = () => {
  return (
    <div className="bg-[#131415]">
      <section>
        <Hero />
      </section>
      <section>
        <MenuByMealTime />

        {/* <Appetizers /> */}
      </section>
      <section>
        <MainDishes />
      </section>
      <section>
        <SpecialMenu />
      </section>
      <section>
        <ChefSpecial />
      </section>
      <section>
        <Reservations />
      </section>
      <MoveToTop />
    </div>
  );
};

export default page;
