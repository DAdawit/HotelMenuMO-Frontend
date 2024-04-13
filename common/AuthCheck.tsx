"use client";
import React, { useContext, useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/axios";
import useStore from "@/store/useStore";
import OverlayLoader from "./OverlayLoader";
const AuthCheck = () => {
  const router = useRouter();
  const setUser = useStore((state) => state.setUser);
  const [loading, setLoadingFalse] = useState<boolean>(false);
  const verifyToken = useCallback(() => {
    api
      .post("/verifyToken")
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data);
        router.push("/admin/dashboard");
      })
      .catch((err) => {
        setLoadingFalse(false);
        localStorage.removeItem("access_token");
        api.defaults.headers.common["Authorization"] = "";
        router.push("/admin/login");
      })
      .finally(() => {
        setLoadingFalse(false);
      });
  }, [router, setLoadingFalse, setUser]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (loading) {
    return <OverlayLoader />;
  }
  return null;
};

export default AuthCheck;
