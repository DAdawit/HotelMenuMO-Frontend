"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { fetchProfile } from "@/services/main.services";
import { useQuery } from "@tanstack/react-query";

const Footer = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchProfile"],
    queryFn: () => fetchProfile(),
  });
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <div className="bg-bgPrimary pt-10 px-5 pb-5">
      <div className="flex items-center gap-2 flex-col justify-center ">
        <Image
          src="/delici.png"
          alt="spector"
          width={100}
          height={200}
          className="text-center"
        />
        <div className="text-primary">
          <h1 className="text-center tracking-widest text-sm font-medium font-sans">
            {data?.city}, {data?.address}
          </h1>
          <h1 className="text-center tracking-widest text-sm font-medium font-sans">
            {data?.email}
          </h1>
          <h1 className="text-center tracking-widest text-sm font-medium font-sans">
            Booking Request : {data?.phone}
          </h1>
          <h1 className="text-center tracking-widest text-sm font-medium font-sans">
            Open : {data?.openTime}
          </h1>
        </div>
        <div className="flex flex-col pb-8">
          <h1 className="text-center text-3xl font-serif font-medium py-5 text-white">
            Get News & Offers
          </h1>
          <form action="" className="flex items-center">
            <input type="email" className="outline-none p-3 " />
            <button className="bg-primary text-white p-3 font-medium">
              submit
            </button>
          </form>
        </div>
        <p className="text-primary text-center text-sm font-sans font-light">
          © 2022 Restaurt. All Rights Reserved | Crafted by Dawit.Di
        </p>
        <p className="text-primary text-center text-sm font-sans font-light">
          dawitccnt@gmail.com [+251936207512]
        </p>
      </div>
    </div>
  );
};

export default Footer;
