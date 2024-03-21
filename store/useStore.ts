import { create } from "zustand";
import { IUser } from "./types";
import { CreateAuthSlice } from "./slice/AuthSlice";
type StoreState = IUser;

const useStore = create<StoreState>()((...a) => ({
  ...CreateAuthSlice(...a),
}));

export default useStore;
