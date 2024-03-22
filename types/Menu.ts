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
  ingredients: string;
  avaliable_all_day?: boolean;
  categoryId: string;
  subCategoryId?: string;
  available_meal_times?: number[];
}
