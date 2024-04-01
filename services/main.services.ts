// export async function fetchLogos(): Promise<LogoOut[]> {
//   try {
//     const response = await api.get<LogoOut[]>("/admin/logos");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

import { HeroSection } from "@/types/Hero";
import api, { prodBaseUrl } from "./axios";
import { CategoryOut } from "@/types/Category";
import {
  MealTimeOut,
  MenuByCategoryOut,
  MenuItemsByMealTimeOut,
} from "@/types/MealTime";
import { MenusByMealTimeOUt, SpecialFoodOut } from "@/types/Menu";

export async function fetchHero(): Promise<HeroSection> {
  const res = await fetch(`${prodBaseUrl}/heros`, {
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

export async function MenuByMealtimeId(
  id: string
): Promise<MenuItemsByMealTimeOut> {
  const res = await fetch(`${prodBaseUrl}/menus/mealtime/${id}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function fetchMenuByCategory(
  id: string
): Promise<MenuByCategoryOut> {
  const res = await fetch(`${prodBaseUrl}/menus/category/${id}`, {
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
export async function fetchSpecialFoods(): Promise<SpecialFoodOut[]> {
  const res = await fetch(`${prodBaseUrl}/menu/special-foods`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
