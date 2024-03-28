"use client";
import React, { useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import AdminDrawer from "./AdminDrawer";
import api from "@/services/axios";
import useStore from "@/store/useStore";
import AuthCheck from "@/common/AuthCheck";
import { useQuery } from "@tanstack/react-query";
import { verifToken } from "@/services/auth.services";
const AdminNavBar = () => {
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);

  const router = useRouter();
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["verifToken"],
  //   queryFn: verifToken,
  // });

  // if (data) {
  //   setUser(data);
  //   router.push("/admin/dashboard/");
  // }

  // if (error) {
  //   const errorMessage = (error as any).response?.data?.detail || error.message;

  //   console.log(errorMessage);

  //   setUser(null);
  //   // localStorage.removeItem("access_token");
  //   // if (errorMessage == "Unauthorized") {
  //   //   router.push("/admin/login/");
  //   // }
  // }

  const logout = async () => {
    localStorage.removeItem("access_token");
    api.defaults.headers.common["Authorization"] = "";
    setUser(null);
    // setAuthFalse();
    router.push("/admin/login/");
  };

  // if (!user) {
  //   return null;
  // }
  return (
    <>
      {user && (
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
      )}
    </>
  );
};

export default AdminNavBar;
