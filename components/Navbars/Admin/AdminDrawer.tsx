"use client";
import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BentoIcon from "@mui/icons-material/Bento";
import VrpanoIcon from "@mui/icons-material/Vrpano";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FitbitIcon from "@mui/icons-material/Fitbit";
type Anchor = "left";
export default function AdminDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  // console.log(user?.level);
  return (
    <div>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <Box
              sx={{
                width: 250,
                backgroundColor: "#fff",
                height: "100%",
              }}
              role="presentation"
              onKeyDown={toggleDrawer("left", false)}
            >
              <div className="h-full w-full ">
                <div className="w-fll flex justify-center mt-3">
                  {/* <Link href="/">
                    <Image
                      src={(data && data[1]?._fullImagePath) || ""}
                      alt="logo"
                      width={1000}
                      height={1000}
                      className="h-12 w-24 xxl:h-24 xxl:w-32 object-contain"
                    />
                  </Link> */}
                </div>
                <section className="">
                  <div className="grid gap-y-3 mt-5">
                    <Link
                      href="/admin/dashboard"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <DashboardIcon />
                        <h3>Dashboard</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/hero-section"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <VrpanoIcon />
                        <h3>Hero Section</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/logos"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <FitbitIcon />
                        <h3>Logos</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/mealtimes"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <WatchLaterIcon />
                        <h3>Mealtimes</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/categories"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <BentoIcon />
                        <h3>Categories</h3>
                      </div>
                    </Link>

                    <Link
                      href="/admin/sub-categories"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <BentoIcon />
                        <h3>Sub Categories</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/menus"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <MenuBookIcon />
                        <h3>Menus</h3>
                      </div>
                    </Link>

                    <Link
                      href="/admin/change-password"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <SettingsIcon />
                        <h3>Change Password</h3>
                      </div>
                    </Link>
                  </div>
                </section>
              </div>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
