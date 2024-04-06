export interface MenuOut {
  id: number;
  name: string;
  description: string;
  price: number;
  special: boolean;
  ingridiants: string;
  avaliable_all_day: boolean;
  image?: string;
  created_at: string;
  updated_at: string;
  available_meal_times: AvailablemealtimeOut[];
  _imageUrl: string;
}

export interface AvailablemealtimeOut {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface MenuInput {
  name: string;
  description?: string;
  price: number;
  special?: boolean;
  ingredients?: string | null;
  avaliable_all_day?: boolean;
  mainDishes?: boolean;
  categoryId: string;
  subCategoryId?: string | null;
  available_meal_times?: number[];
}
export interface MenuDetailOut {
  id: number;
  name: string;
  description?: any;
  price: number;
  special: boolean;
  ingridiants?: any;
  avaliable_all_day: boolean;
  image?: any;
  created_at: string;
  updated_at: string;
  available_meal_times: Availablemealtime[];
  category: Category;
  mainDishes: boolean;
  subCategory?: SubCategory;
  _imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}
export interface SubCategory {
  id: string;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}

interface Availablemealtime {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
export interface MenusByMealTimeOUt {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
  menues: Menues2[];
}

interface Menues2 {
  id: number;
  name: string;
  description: string;
  price: number;
  special: boolean;
  ingridiants: string;
  avaliable_all_day: boolean;
  image: string;
  created_at: string;
  updated_at: string;
  _imageUrl: string;
}
export interface SpecialFoodOut {
  id: number;
  name: string;
  description: string;
  price: number;
  special: boolean;
  ingridiants: string;
  avaliable_all_day: boolean;
  image?: string;
  created_at: string;
  updated_at: string;
  category: Category;
  _imageUrl: string;
}

export interface AdminMenuOut {
  id: number;
  name: string;
  description: string;
  price: number;
  special: boolean;
  ingridiants: string;
  avaliable_all_day: boolean;
  image: string;
  created_at: string;
  updated_at: string;
  mainDishes: boolean;
  available_meal_times: Availablemealtime[];
  category: Category;
  subCategory?: SubCategory;
  _imageUrl: string;
}

interface Availablemealtime {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}

export interface MenusByCategoryOut {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
  menues: Menue[];
}

export interface Menue {
  id: number;
  name: string;
  description: string;
  price: number;
  special: boolean;
  ingridiants: string;
  avaliable_all_day: boolean;
  image: string;
  created_at: string;
  updated_at: string;
  _imageUrl: string;
}
