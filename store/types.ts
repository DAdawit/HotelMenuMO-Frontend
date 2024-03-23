import { ILogin, UserI, UserOut } from "../types/User";

export interface ErrorWithBody {
  body?: {
    detail?: string;
  };
}

export interface IUser {
  user: UserI | null;
  token: string | null;
  auth: boolean;
  loading: boolean;
  pageLoade: boolean;
  error: string | null;
  setUser: (user: UserI | null) => void;
  setAuthTrue: () => void;
  setAuthFalse: () => void;

}interface RootObject {
  id: number;
  name: string;
  image: string;
  created_at: string;
  updated_at: string;
  _fullImagePath: string;
}
