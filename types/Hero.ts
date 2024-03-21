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
