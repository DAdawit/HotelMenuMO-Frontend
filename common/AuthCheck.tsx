"use client";
import React, { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { verifToken } from "@/services/auth.services";
import OverlayLoader from "./OverlayLoader";
import useStore from "@/store/useStore";

const AuthCheck = () => {
  const setUser = useStore((state) => state.setUser);
  const setAuthTrue = useStore((state) => state.setAuthTrue);
  const pathname = usePathname();
  const router = useRouter();
  const { data, isLoading, error } = useQuery({
    queryKey: ["verifToken"],
    queryFn: verifToken,
  });

  useEffect(() => {
    if (data) {
      setUser(data);
      setAuthTrue();
      if (data.role == "admin") {
        if (pathname == "/admin/login") {
          console.log(true);
          router.push("/admin/dashboard");
        }
        // router.push(pathname);
      }
    } else if (error) {
      if (error.response.data.detail === "Unauthorized") {
        console.log(true);

        router.push("/admin/login");
      }
      console.log();
    }
  }, [data, error, pathname, router, setUser, setAuthTrue]);

  if (isLoading) {
    return <OverlayLoader />;
  }

  return null;
};

export default AuthCheck;
