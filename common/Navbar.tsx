"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TemporaryDrawer from "./Drawer";
import { usePathname } from "next/navigation";
import SearchResults from "./search/searchResults";
import { fetchProfile } from "@/services/main.services";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const pathname = usePathname();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchProfile"],
    queryFn: () => fetchProfile(),
  });

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <div id="Nav" className="flex justify-between bg-bgPrimary py-5 px-10">
        <Link href="/">
          <Image
            src="/delici.png"
            alt="spector"
            width={100}
            height={200}
            className="text-center"
          />
        </Link>
        <div className="flex justify-evenly gap-3">
          <div>
            <SearchResults />
          </div>
          <div>
            <TemporaryDrawer profile={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
