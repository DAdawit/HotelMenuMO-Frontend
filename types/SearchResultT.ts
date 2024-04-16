export interface SearchResultI {
  data: Menu[];
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  perPage: number;
  currentPage: number;
}

export interface Menu {
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
