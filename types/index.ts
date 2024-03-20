interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface ErrorWithBody {
  body?: {
    detail?: string;
  };
}
export interface ITodo {
  todos: Array<Todo> | null;
  loading: boolean;
  error: string;
  loadTodos: () => void;
  addTodo?: (todo: string) => void;
}
interface Blog {
  title: string;
  description: string;
}

export interface IBlog {
  blogs: Array<Blog>;
  addBlogPost: ({ title, description }: Blog) => void;
}

interface User {
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  first_name: string;
  last_name: string;
  profile_picture: string;
  phone: number;
  is_phone_verified: number;
  id: string;
}

interface ILogin {
  username: string;
  password: string;
}

export interface IUser {
  user: UserOut | null;
  token: Token | null;
  loading: boolean;
  pageLoade: boolean;
  error: string | null;
  LoginUser: (username: string, password: string, router: any) => void;
  Me: (router: any, path: any) => void;
  RegisterUser: (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    router: any
  ) => void;
  SigninInWithGoogle: (router: any, credential: string) => void;
  // fetchOrganizations: () => void;
}
