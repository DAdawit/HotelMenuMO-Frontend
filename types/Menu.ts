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
