export interface StatesI {
  categories: number;
  subcategories: number;
  menus: number;
}

export interface SatatesMenuI {
  id: number;
  name: string;
  menuItemsCount: string;
}

export interface ProfileI {
  id: number;
  name: string;
  address: string;
  city: string;
  openTime: string;
  email: string;
  phone: string;
  secondaryPhone?: any;
  created_at: string;
  updated_at: string;
}

export interface ProfileInput {
  name: string;
  address: string;
  city: string;
  openTime: string;
  email: string;
  phone: string;
  secondaryPhone?: any;
}
