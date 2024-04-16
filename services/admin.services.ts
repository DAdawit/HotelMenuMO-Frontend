import api from "@/services/axios";
import { ProfileI, SatatesMenuI, StatesI } from "@/types";
import {
  AdimSubCategoryI,
  AdminCategoryI,
  CategoriesWithSubCategoriesOut,
  CategoryOut,
  SubCategoryOut,
} from "@/types/Category";
import { HeroAdminOut, HeroOut } from "@/types/Hero";
import { AdminLogos, LogoOut } from "@/types/Logo";
import { MealTimeOut } from "@/types/MealTime";
import { MenuDetailOut, MenuInput, MenuOut, AdminMenuOut } from "@/types/Menu";

export async function fetchLogos(page: number): Promise<AdminLogos> {
  try {
    const response = await api.get<AdminLogos>(`/admin/logos?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function addLogo(data: any): Promise<LogoOut[]> {
  try {
    const res = await api.post<LogoOut[]>("/admin/logos", data);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function editLogo(id: number, data: any): Promise<LogoOut> {
  try {
    const res = await api.put(`/admin/logos/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function deleteLogo(id: number): Promise<any> {
  try {
    const res = await api.delete(`/admin/logos/${id}`);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function addHeroSection(data: any): Promise<HeroOut[]> {
  try {
    const response = await api.post<HeroOut[]>("/admin/heros", data);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function fetchHeroSection(page: number): Promise<HeroAdminOut> {
  try {
    const response = await api.get<HeroAdminOut>(`/admin/heros?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
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
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function deleteHeroById(id: number): Promise<any> {
  try {
    const response = await api.delete(`/admin/heros/${id}`);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function fetchCategories(page: number): Promise<AdminCategoryI> {
  try {
    const response = await api.get<AdminCategoryI>(
      `/admin/categories?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function fetchCategoriesWithSubcategory(): Promise<
  CategoriesWithSubCategoriesOut[]
> {
  try {
    const response = await api.get<CategoriesWithSubCategoriesOut[]>(
      "/admin/categories-with-subcategories"
    );
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function addCategory(data: any): Promise<CategoryOut[]> {
  try {
    const res = await api.post<CategoryOut[]>("/admin/categories", data);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
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
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function deleteCategory(id: number): Promise<any> {
  try {
    const res = await api.delete(`/admin/categories/${id}`);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function fetchSubCategories(
  page: number
): Promise<AdimSubCategoryI> {
  try {
    const response = await api.get<AdimSubCategoryI>(
      `/admin/sub-categories?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function addSubCategory(data: any): Promise<SubCategoryOut[]> {
  try {
    const res = await api.post<SubCategoryOut[]>("/admin/sub-categories", data);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
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
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function deleteSubCategory(id: number): Promise<any> {
  try {
    const res = await api.delete(`/admin/sub-categories/${id}`);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function fetchMenus(page: number): Promise<AdminMenuOut> {
  try {
    const response = await api.get<AdminMenuOut>(`/admin/menus?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function fetchMenuById(id: number): Promise<MenuDetailOut> {
  try {
    const response = await api.get<MenuDetailOut>(`/admin/menus/${id}`);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
export async function addMenus(data: MenuInput): Promise<MenuOut> {
  try {
    const res = await api.post<MenuOut>("/admin/add-menu", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function addOrUpdateMenuImage(
  id: number,
  data: any
): Promise<MenuOut[]> {
  try {
    const res = await api.put<MenuOut[]>(`/admin/add-menuImage/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function updateMenus(id: string, data: any): Promise<MenuOut> {
  try {
    const res = await api.put(`/admin/menu/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function deleteMenus(id: number): Promise<any> {
  try {
    const res = await api.delete(`/admin/menus/${id}`);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function fetchMealTimes(): Promise<MealTimeOut[]> {
  try {
    const response = await api.get<MealTimeOut[]>("/admin/mealtimes");
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function addMealTime(data: any): Promise<MealTimeOut> {
  try {
    const res = await api.post<MealTimeOut>("/admin/mealTimes", data);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
export async function updateMealTime(
  id: number,
  data: any
): Promise<SubCategoryOut> {
  try {
    const res = await api.put(`/admin/mealTimes/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function deleteMealTime(id: number): Promise<any> {
  try {
    const res = await api.delete<MealTimeOut>(`/admin/mealTimes/${id}`);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function getStates(): Promise<StatesI> {
  try {
    const res = await api.get<StatesI>(`admin/states`);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function getStatesCountByMealtime(): Promise<SatatesMenuI[]> {
  try {
    const res = await api.get<SatatesMenuI[]>(`admin/states/mealtime`);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function getStatesCountByCategory(): Promise<SatatesMenuI[]> {
  try {
    const res = await api.get<SatatesMenuI[]>(`admin/states/menuByCategory`);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function getStatesCountBySubCategory(): Promise<SatatesMenuI[]> {
  try {
    const res = await api.get<SatatesMenuI[]>(`admin/states/menuBysubCategory`);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function addProfile(data: any): Promise<ProfileI> {
  try {
    const res = await api.post<ProfileI>("/admin/profile", data);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function EditProfile(id: number, data: any): Promise<ProfileI> {
  try {
    const res = await api.put<ProfileI>(`/admin/profile/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
export async function ChangePassword(data: any): Promise<ProfileI> {
  try {
    const res = await api.post<ProfileI>(`/admin/changePassword`, data);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
