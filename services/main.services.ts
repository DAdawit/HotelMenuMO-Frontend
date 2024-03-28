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

export async function fetchHero(): Promise<HeroSection> {
  try {
    const response = await api.get<HeroSection>("/heros");
    return response.data;
  } catch (error) {
    throw error;
  }
}
