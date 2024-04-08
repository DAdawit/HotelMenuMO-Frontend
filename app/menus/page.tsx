import MenuByMealTime from "@/components/Home/MenuByMealTime";
import MoveToTop from "@/components/Home/MoveToTop";
import Appetizers from "@/components/Menu/Appetizers";
import ChefSpecial from "@/components/Menu/ChefSpecial";
import Hero from "@/components/Menu/Hero";
import MainDishes from "@/components/Menu/MainDishes";
import MenuBySubCategories from "@/components/Menu/MenuBySubCategories";
import Reservations from "@/components/Menu/Reservations";
import SpecialMenu from "@/components/Menu/SpecialMenu";
import { fetchMenuBySubCategory } from "@/services/main.services";

export default async function Page() {
  const data = await fetchMenuBySubCategory();

  return (
    <div className="bg-[#131415]">
      <section>
        <Hero />
      </section>
      <div className="container mx-auto px-5">
        <section>
          <MenuBySubCategories menus={data} />
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
    </div>
  );
}
