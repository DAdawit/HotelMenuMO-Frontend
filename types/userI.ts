export interface AuthI {
  user: User;
  token: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  profilePic: string;
  isActive: boolean;
  password: string;
  role: string;
  created_at: string;
  updated_at: string;
  _profilePicUrl: string;
}
export interface LgoinI {
  email: string;
  password: string;
}
