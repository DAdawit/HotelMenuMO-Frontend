"use client";
import React, { useContext, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { verifToken } from "@/services/auth.services";
import { PageLoader } from "@/assets/icons/pageLoader";
import OverlayLoader from "./OverlayLoader";

const AuthCheck = () => {
  const router = useRouter();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["verifToken"],
    queryFn: verifToken,
  });
  if (isLoading) {
    return <OverlayLoader />;
  }
  if (data) {
    if (data.role == "admin") {
      router.push("/admin/dashboard");
    }
  }
  return null;
};

export default AuthCheck;
