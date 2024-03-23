"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import UserLogin from "@/components/Auth/UserLogin";
import { useRouter } from "next/navigation";

export default function Login() {
  const [login, setLogin] = useState<boolean>(true);
  const router = useRouter();

  return (
    <>
      <div className="w-screen h-screen max-h-screen  flex justify-center bg-gray-50 ">
        {/* <div className=" grid grid-cols-1 w-full">
          <div className="h-screen flex  justify-center items-center">
            <div className="px-8 h-fit shadow-xl py-5 max-w-lg bg-white rounded-lg mx-auto">
              {login ? (
                <UserLogin setLogin={() => setLogin(false)} />
              ) : (
                <ResetPassword setLogin={() => setLogin(true)} />
              )}
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-full flex items-center justify-center w-full">
            <UserLogin />
          </div>
          <div className="hidden md:flex">
            <Image
              src="/admin-login.jpg"
              width={1000}
              height={1000}
              alt="banner"
              className="h-screen object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
