export interface Menu {
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

export interface MealTimeOut {
  id: number;
  name: string;
  image?: any;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}

interface Category {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}

export interface MenuByCategoryOut {
  category: Category;
  data: Menu[];
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  perPage: number;
  currentPage: number;
}

interface Category {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}

export interface MenuItemsByMealTimeOut {
  data: Menu[];
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  perPage: number;
  currentPage: number;
}

export interface Mealtime {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}
