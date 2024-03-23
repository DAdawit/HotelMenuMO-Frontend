import { StateCreator } from "zustand";
import api from "../../services/axios";
import { ErrorWithBody, IUser } from "../types";
import { any } from "zod";
import { loginUser } from "@/services/auth.services";

export const CreateAuthSlice: StateCreator<IUser> = (set, get) => ({
  user: null,
  token: null,
  error: null,
  organizations: null,
  pageLoade: true,
  auth: false,
  loading: false,
  async setUser(data) {
    set((state) => ({ ...state, user: data }));
  },
  async setAuthTrue() {
    set((state) => ({ ...state, auth: true }));
  },
  async setAuthFalse() {
    console.log(false);

    set((state) => ({ ...state, auth: false }));
  },
});
