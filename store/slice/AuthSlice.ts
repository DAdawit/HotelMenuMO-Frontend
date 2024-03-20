import { StateCreator } from "zustand";
import api from "../../services/axios";
import { ErrorWithBody, IUser } from "../../types";
import { any } from "zod";
import { loginUser } from "@/services/auth.services";

export const CreateAuthSlice: StateCreator<IUser> = (set, get) => ({
  user: null,
  token: null,
  error: null,
  organizations: null,
  pageLoade: true,
  loading: false,
  async setUser(data) {
    set((state) => ({ ...state, user: data }));
  },

  async verifyToken(router: any, path) {
    set((state) => ({ ...state, pageLoade: true }));

    // try {
    //   let me = await UsersService.usersReadUserMe();
    //   set((state) => ({ ...state, user: me }));
    //   set((state) => ({ ...state, pageLoade: false }));
    //   const organization = cookies.get("organization");
    //   if (me.is_superuser) {
    //     router.push("/admin/dashboard");
    //   } else {
    //     if (organization === null) {
    //       router.push("/employer");
    //     } else {
    //       router.push(path);
    //     }
    //   }
    // } catch (error) {
    //   const customError = error as ErrorWithBody;
    //   if (customError.body?.detail === "Not authenticated") {
    //     router.push("/auth?key=login");
    //   }
    //   // console.log(customeError.body?.detail);
    //   set((state) => ({ ...state, pageLoade: false }));
    // }
  },

  // async RegisterUser(first_name, last_name, email, password, router) {
  //   set((state) => ({ ...state, loading: true }));

  //   try {
  //     const response = await UsersService.usersCreateUserOpen({
  //       requestBody: {
  //         email: email,
  //         password: password,
  //         first_name: first_name,
  //         last_name: last_name,
  //       },
  //     });
  //     set((state) => ({ ...state, loading: false }));
  //     localStorage.setItem("access_token", response.access_token);
  //     OpenAPI.TOKEN = response.access_token;
  //     set((state) => ({ ...state, token: response }));
  //     // alert(response.access_token);
  //     router.push("/employer");
  //   } catch (error) {
  //     set((state) => ({ ...state, loading: false }));
  //     set((state) => ({ ...state, error: (error as any).body.detail }));
  //     // console.log(error.body);
  //   }
  // },

  // async SigninInWithGoogle(router, credential: string) {
  //   set((state) => ({ ...state, loading: true }));
  //   try {
  //     const response = await LoginService.loginAuthGoogle({
  //       requestBody: {
  //         code: credential,
  //         device: "web",
  //       },
  //     });

  //     localStorage.setItem("access_token", response.access_token);
  //     OpenAPI.TOKEN = response.access_token;
  //     set((state) => ({ ...state, token: response }));
  //     const me = await UsersService.usersReadUserMe();
  //     set((state) => ({ ...state, user: me }));
  //     set((state) => ({ ...state, loading: false }));
  //     if (me.is_superuser) {
  //       router.push("/admin/dashboard");
  //     } else {
  //       router.push("/employer");
  //     }
  //     // console.log(response);
  //   } catch (error) {
  //     const customeError = error as { body?: { detail?: string } };
  //     set((state) => ({ ...state, loading: false }));
  //   }
  // },
});
