import { ILogin, UserI, UserOut } from "./User";

export interface ErrorWithBody {
  body?: {
    detail?: string;
  };
}

export interface IUser {
  user: UserI | null;
  token: string | null;
  loading: boolean;
  pageLoade: boolean;
  error: string | null;
  setUser: (user: UserI) => void;
  verifyToken: (router: any, path: any) => void;
  // RegisterUser: (
  //   first_name: string,
  //   last_name: string,
  //   email: string,
  //   password: string,
  //   router: any
  // ) => void;
  // SigninInWithGoogle: (router: any, credential: string) => void;
  // fetchOrganizations: () => void;
}
