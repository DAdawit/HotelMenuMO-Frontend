export interface UserOut {
  user: UserI;
  token: string;
}

export interface UserI {
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
export interface ILogin {
  email: string;
  password: string;
}
