export async function fetchLogos(): Promise<LogoOut[]> {
  try {
    const response = await api.get<LogoOut[]>("/admin/logos");
    return response.data;
  } catch (error) {
    throw error;
  }
}

import { HeroOut, HeroSection } from "@/types/Hero";
import api, { prodBaseUrl } from "./axios";
import { CategoryOut, SubCategory } from "@/types/Category";
import {
  MealTimeOut,
  Mealtime,
  MenuByCategoryOut,
  MenuItemsByMealTimeOut,
} from "@/types/MealTime";
import {
  MenuOut,
  MenusByCategoryOut,
  MenusByMealTimeOUt,
  SpecialFoodOut,
} from "@/types/Menu";
import { LogoOut } from "@/types/Logo";
import { MenuBySubCategoryOut } from "@/types/SubCategory";
import { ProfileI } from "@/types";

export async function fetchHero(): Promise<HeroSection> {
  const res = await fetch(`${prodBaseUrl}/heros`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function getAllHeroSection(): Promise<HeroOut[]> {
  const res = await fetch(`${prodBaseUrl}/all-heros`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function homeFetchCategories(): Promise<CategoryOut[]> {
  try {
    const response = await api.get<CategoryOut[]>("/categories");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function homeFetchMealTime(): Promise<MealTimeOut[]> {
  try {
    const response = await api.get<MealTimeOut[]>("/mealtimes");
    return response.data;
  } catch (error) {
    throw error;
  }
}
// fetch("https://...", { next: { revalidate: 3600 } });

export async function fetchMealtimes(): Promise<MealTimeOut[]> {
  const res = await fetch(`${prodBaseUrl}/mealtimes`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function MealTimeById(id: string): Promise<MealTimeOut> {
  const res = await fetch(`${prodBaseUrl}/mealtime/${id}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function CategoryById(id: string): Promise<CategoryOut> {
  const res = await fetch(`${prodBaseUrl}/category/${id}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchMenuByMealtimes(): Promise<MenusByMealTimeOUt[]> {
  const res = await fetch(`${prodBaseUrl}/menus/mealtimes`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchMenuBySubCategory(): Promise<
  MenuBySubCategoryOut[]
> {
  const res = await fetch(`${prodBaseUrl}/menus/subcategories`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchSpecialFoods(): Promise<SpecialFoodOut[]> {
  const res = await fetch(`${prodBaseUrl}/menu/special-foods`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchMenusByCategory(): Promise<MenusByCategoryOut[]> {
  const res = await fetch(`${prodBaseUrl}/menus/menusbyCategory`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
export async function fetchMainDishes(): Promise<MenuOut[]> {
  const res = await fetch(`${prodBaseUrl}/menus/main-dishes`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function MenuByMealtimeId(
  id: number,
  page: number
): Promise<MenuItemsByMealTimeOut> {
  try {
    const res = await api.get<MenuItemsByMealTimeOut>(
      `/menus/mealtime/${id}?page=${page}`
    );
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function fetchMenuByCategory(
  id: number,
  page: number
): Promise<MenuByCategoryOut> {
  try {
    const res = await api.get<MenuByCategoryOut>(
      `/menus/category/${id}?page=${page}`
    );
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function fetchAllMainDishes(
  page: number
): Promise<MenuByCategoryOut> {
  try {
    const res = await api.get<MenuByCategoryOut>(
      `/menus/all-main-dishes?page=${page}`
    );
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function fetchAllSpecialDishes(
  page: number
): Promise<MenuByCategoryOut> {
  try {
    const res = await api.get<MenuByCategoryOut>(
      `/menus/all-special-foods?page=${page}`
    );
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function SubCategoryById(id: string): Promise<SubCategory> {
  const res = await fetch(`${prodBaseUrl}/sub-category/${id}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchMenuBySubCategoryId(
  id: number,
  page: number
): Promise<MenuByCategoryOut> {
  try {
    const res = await api.get<MenuByCategoryOut>(
      `/menus/subCategory/${id}?page=${page}`
    );
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function fetchProfile(): Promise<ProfileI> {
  try {
    const res = await api.get<ProfileI>(`/profile`);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
