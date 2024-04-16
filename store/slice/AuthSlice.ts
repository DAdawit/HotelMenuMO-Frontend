import { StateCreator } from "zustand";
import { IUser } from "../types";

export const CreateAuthSlice: StateCreator<IUser> = (set, get) => ({
  user: null,
  token: null,
  error: null,
  organizations: null,
  profile: {},
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
  async setProfile(data) {
    set((state) => ({ ...state, profile: data }));
  },
});
