export interface SubCategory {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}
export interface MenuBySubCategoryOut {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
  menues: Menue[];
}

interface Menue {
  id: number;
  name: string;
  description: string;
  price: number;
  special: boolean;
  mainDishes: boolean;
  ingridiants: string;
  avaliable_all_day: boolean;
  image: string;
  created_at: string;
  updated_at: string;
  _imageUrl: string;
}
