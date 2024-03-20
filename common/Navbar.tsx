"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TemporaryDrawer from "./Drawer";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

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
          <TemporaryDrawer />
        </div>
      </div>
    </>
  );
};

export default Navbar;
