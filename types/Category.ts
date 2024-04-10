export interface CategoryOut {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}
export interface SubCategoryOut {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  category: CategoryOut;
  imageUrl: string;
}
export interface CategoriesWithSubCategoriesOut {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  subCategory: SubCategory[];
  imageUrl: string;
}

export interface SubCategory {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}

export interface AdminCategoryI {
  data: CategoryOut[];
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  perPage: number;
  currentPage: number;
}
