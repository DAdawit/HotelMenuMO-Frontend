// export async function fetchLogos(): Promise<LogoOut[]> {
//   try {
//     const response = await api.get<LogoOut[]>("/admin/logos");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

import { HeroSection } from "@/types/Hero";
import api from "./axios";
import { CategoryOut } from "@/types/Category";

export async function fetchHero(): Promise<HeroSection> {
  try {
    const response = await api.get<HeroSection>("/heros");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function homeFetchCategories(): Promise<CategoryOut[]> {
  try {
    const response = await api.get<CategoryOut[]>("/categories");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function homeFetchMealTime(): Promise<CategoryOut[]> {
  try {
    const response = await api.get<CategoryOut[]>("/categories");
    return response.data;
  } catch (error) {
    throw error;
  }
}
