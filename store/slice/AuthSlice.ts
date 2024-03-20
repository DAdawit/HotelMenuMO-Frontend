import { StateCreator } from "zustand";
import api from "../axios";
import { ErrorWithBody, IUser } from "../../types";
import { LoginService, UsersService, OrganizationService } from "@/src/client";
import { OpenAPI } from "@/src/client";
import { any } from "zod";
import { OrganizationOut } from "@/src/client";
import Cookie from "universal-cookie";
import useStore from "../useStore";

const cookies = new Cookie();
export const CreateAuthSlice: StateCreator<IUser> = (set, get) => ({
  user: null,
  token: null,
  error: null,
  organizations: null,
  pageLoade: true,
  loading: false,
  async LoginUser(username, password, router) {
    // console.log("password updated");
    set((state) => ({ ...state, loading: true }));
    set((state) => ({ ...state, error: null }));

    try {
      const response = await LoginService.loginLoginAccessToken({
        formData: {
          username: username,
          password: password,
        },
      });
      localStorage.setItem("access_token", response.access_token);
      OpenAPI.TOKEN = response.access_token;
      set((state) => ({ ...state, token: response }));
      const me = await UsersService.usersReadUserMe();
      set((state) => ({ ...state, user: me }));
      set((state) => ({ ...state, loading: false }));

      if (me.is_superuser) {
        router.push("/admin/dashboard");
      } else {
        const organization = cookies.get("organization");
        if (organization === null) {
          router.push("/employer");
        } else {
          router.push("/employer/dashboard");
        }
      }
    } catch (error) {
      console.log("login faild", error);
      set((state) => ({ ...state, error: (error as any).body.detail }));
      set((state) => ({ ...state, loading: false }));
    }

    // console.log(response);
    set((state) => ({ ...state, loading: false }));
  },

  async Me(router: any, path) {
    set((state) => ({ ...state, pageLoade: true }));

    try {
      let me = await UsersService.usersReadUserMe();
      set((state) => ({ ...state, user: me }));
      set((state) => ({ ...state, pageLoade: false }));
      const organization = cookies.get("organization");
      if (me.is_superuser) {
        router.push("/admin/dashboard");
      } else {
        if (organization === null) {
          router.push("/employer");
        } else {
          router.push(path);
        }
      }
    } catch (error) {
      const customError = error as ErrorWithBody;
      if (customError.body?.detail === "Not authenticated") {
        router.push("/auth?key=login");
      }
      // console.log(customeError.body?.detail);
      set((state) => ({ ...state, pageLoade: false }));
    }
  },

  async RegisterUser(first_name, last_name, email, password, router) {
    set((state) => ({ ...state, loading: true }));

    try {
      const response = await UsersService.usersCreateUserOpen({
        requestBody: {
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name,
        },
      });
      set((state) => ({ ...state, loading: false }));
      localStorage.setItem("access_token", response.access_token);
      OpenAPI.TOKEN = response.access_token;
      set((state) => ({ ...state, token: response }));
      // alert(response.access_token);
      router.push("/employer");
    } catch (error) {
      set((state) => ({ ...state, loading: false }));
      set((state) => ({ ...state, error: (error as any).body.detail }));
      // console.log(error.body);
    }
  },

  async SigninInWithGoogle(router, credential: string) {
    set((state) => ({ ...state, loading: true }));
    try {
      const response = await LoginService.loginAuthGoogle({
        requestBody: {
          code: credential,
          device: "web",
        },
      });

      localStorage.setItem("access_token", response.access_token);
      OpenAPI.TOKEN = response.access_token;
      set((state) => ({ ...state, token: response }));
      const me = await UsersService.usersReadUserMe();
      set((state) => ({ ...state, user: me }));
      set((state) => ({ ...state, loading: false }));
      if (me.is_superuser) {
        router.push("/admin/dashboard");
      } else {
        router.push("/employer");
      }
      // console.log(response);
    } catch (error) {
      const customeError = error as { body?: { detail?: string } };
      set((state) => ({ ...state, loading: false }));
    }
  },
});
