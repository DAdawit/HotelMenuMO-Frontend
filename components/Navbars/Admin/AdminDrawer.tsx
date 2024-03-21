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
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import PlaceIcon from "@mui/icons-material/Place";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import SettingsIcon from "@mui/icons-material/Settings";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import FacebookIcon from "@mui/icons-material/Facebook";
import AddLinkIcon from "@mui/icons-material/AddLink";
import BadgeIcon from "@mui/icons-material/Badge";
import { useQuery } from "@tanstack/react-query";
import { fetchLogos } from "@/services/admin.services";
type Anchor = "left";
export default function AdminDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const [users, setUsers] = useState<boolean>(false);
  const [members, setMemebers] = useState<boolean>(false);
  const [account, setAccount] = useState<boolean>(false);
  const [gifts, setGifts] = useState<boolean>(false);
  const [serviceCharge, setServiceCharge] = useState<boolean>(false);
  const [registrationFee, setRegistrationFee] = useState<boolean>(false);
  const [Message, setMessages] = useState<boolean>(false);
  const [adminFee, setAdminFee] = useState<boolean>(false);
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchLogos"],
    queryFn: fetchLogos,
  });
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
                  <Link href="/">
                    <Image
                      src={(data && data[1]?._fullImagePath) || ""}
                      alt="logo"
                      width={1000}
                      height={1000}
                      className="h-12 w-24 xxl:h-24 xxl:w-32 object-contain"
                    />
                  </Link>
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
                        <HomeMaxIcon />
                        <h3>Hero Section</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/logos"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <HomeMaxIcon />
                        <h3>Logos</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/social-media"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <AddLinkIcon />
                        <h3>Social Media</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/certificates"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <BadgeIcon />
                        <h3>certifications</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/venues"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <PlaceIcon />
                        <h3>Venues</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/training-formats"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <FormatAlignCenterIcon />
                        <h3>Training Formats</h3>
                      </div>
                    </Link>

                    <Link
                      href="/admin/training-categories"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <CategoryIcon />
                        <h3>Training Categories</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/trainings"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <ClassIcon />
                        <h3>Trainings</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/pending-booked-courses"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <PendingActionsIcon />
                        <h3>Pending Booked Courses</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/approved-booked-courses"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <AssignmentTurnedInIcon />
                        <h3>Approved Booked Courses</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/rejected-booked-courses"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <RemoveDoneIcon />
                        <h3>Rejected Booked Courses</h3>
                      </div>
                    </Link>
                    <Link
                      href="/admin/contact-us"
                      className="mt-1 shadow-sm py-2 h-min"
                      onClick={toggleDrawer("left", false)}
                    >
                      <div className="flex gap-x-3 items-center border-b-[1] border-gray-400 px-7 gap-3">
                        <ContactPageIcon />
                        <h3>Contact us</h3>
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
