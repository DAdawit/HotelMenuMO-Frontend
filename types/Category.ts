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