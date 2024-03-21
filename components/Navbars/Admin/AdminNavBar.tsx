"use client";
import React, { useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import AdminDrawer from "./AdminDrawer";
import api from "@/services/axios";
import useStore from "@/store/useStore";
const AdminNavBar = () => {
  const auth = useStore((state) => state.auth);
  const setAuthFalse = useStore((state) => state.setAuthFalse);
  const setUser = useStore((state) => state.setUser);

  const router = useRouter();

  const logout = async () => {
    localStorage.removeItem("access_token");
    api.defaults.headers.common["Authorization"] = "";
    setUser(null);
    setAuthFalse();
    router.push("/admin/login");
  };

  if (!auth) {
    return null;
  }
  return (
    <>
      <nav className="flex justify-between px-5 items-center bg-primary text-white py-3">
        <div className="flex gap-x-3 items-center">
          <AdminDrawer />
        </div>
        <div className="flex gap-x-3 items-center">
          <button
            className="flex items-center gap-2 px-5 py-2 border-2 border-white rounded-full text-sm"
            onClick={logout}
          >
            <span>Logout</span>
            <span>
              <LogoutIcon fontSize="small" />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default AdminNavBar;
