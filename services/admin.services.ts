import api from "@/services/axios";
import { HeroCreate, HeroOut } from "@/types/Hero";
import { LogoI } from "@/types/Logo";
import { ILogin, UserI, UserOut } from "@/types/User";

export async function fetchLogos(): Promise<LogoI[]> {
  try {
    const response = await api.get<LogoI[]>("/admin/logos");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchHeroSection(): Promise<HeroOut[]> {
  try {
    const response = await api.get<HeroOut[]>("/admin/heros");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateHeroSection(
  id: number,
  formdata: any
): Promise<HeroOut[]> {
  try {
    const response = await api.put<HeroOut[]>(`/admin/heros/${id}`, formdata);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteHeroById(id: number): Promise<any> {
  try {
    const response = await api.delete(`/admin/heros/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
