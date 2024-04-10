export interface LogoOut {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  _fullImagePath: string;
}

export interface AdminLogos {
  data: LogoOut[];
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  perPage: number;
  currentPage: number;
}
