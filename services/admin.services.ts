import api from "@/services/axios";
import { CategoryOut, SubCategoryOut } from "@/types/Category";
import { HeroCreate, HeroOut } from "@/types/Hero";
import { LogoOut } from "@/types/Logo";
import { ILogin, UserI, UserOut } from "@/types/User";

export async function fetchLogos(): Promise<LogoOut[]> {
  try {
    const response = await api.get<LogoOut[]>("/admin/logos");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addLogo(data: any): Promise<LogoOut[]> {
  try {
    const res = await api.post<LogoOut[]>("/admin/logos", data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function editLogo(id: number, data: any): Promise<LogoOut> {
  try {
    const res = await api.put(`/admin/logos/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteLogo(id: number): Promise<any> {
  try {
    const res = await api.delete(`/admin/logos/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function addHeroSection(data: any): Promise<HeroOut[]> {
  try {
    const response = await api.post<HeroOut[]>("/admin/heros", data);
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

export async function fetchCategories(): Promise<CategoryOut[]> {
  try {
    const response = await api.get<CategoryOut[]>("/admin/categories");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addCategory(data: any): Promise<CategoryOut[]> {
  try {
    const res = await api.post<CategoryOut[]>("/admin/categories", data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function updateCategory(
  id: number,
  data: any
): Promise<CategoryOut> {
  try {
    const res = await api.put(`/admin/categories/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteCategory(id: number): Promise<any> {
  try {
    const res = await api.delete(`/admin/categories/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchSubCategories(): Promise<SubCategoryOut[]> {
  try {
    const response = await api.get<SubCategoryOut[]>("/admin/sub-categories");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addSubCategory(data: any): Promise<SubCategoryOut[]> {
  try {
    const res = await api.post<SubCategoryOut[]>("/admin/sub-categories", data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function updateSubCategory(
  id: number,
  data: any
): Promise<SubCategoryOut> {
  try {
    const res = await api.put(`/admin/sub-categories/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteSubCategory(id: number): Promise<any> {
  try {
    const res = await api.delete(`/admin/sub-categories/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}
