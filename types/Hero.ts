export interface HeroOut {
  id: number;
  slogan: string;
  title: string;
  content: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}

export interface HeroCreate {
  slogan: string;
  title: string;
  content: string;
  image: string;
}

export interface HeroSection {
  hero: HeroOut;
  logo: Logo;
}

interface Logo {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  _fullImagePath: string;
}

export interface HeroOut {
  id: number;
  slogan: string;
  title: string;
  content: string;
  image: string;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}

export interface HeroAdminOut {
  data: HeroOut[];
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  perPage: number;
  currentPage: number;
}
