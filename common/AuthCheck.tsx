"use client";
import React, { useEffect, useCallback, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import api from "@/services/axios";
import useStore from "@/store/useStore";
import OverlayLoader from "./OverlayLoader";
const AuthCheck = () => {
  const router = useRouter();
  const setUser = useStore((state) => state.setUser);
  const setProfile = useStore((state) => state.setProfile);
  const [loading, setLoadingFalse] = useState<boolean>(false);
  const pathname = usePathname();

  const verifyToken = useCallback(() => {
    api
      .post("/verifyToken")
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data);
      })
      .then(() => {
        api.get("/profile").then((res) => {
          if (res.data) {
            setProfile(res.data);
            router.push(pathname);
          } else {
            router.push("/admin");
          }
        });
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
  }, [router, setLoadingFalse, setUser, pathname, setProfile]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (loading) {
    return <OverlayLoader />;
  }
  return null;
};

export default AuthCheck;
