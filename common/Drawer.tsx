import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
type Anchor = "right";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ContactPageIcon from "@mui/icons-material/ContactPage";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button></button>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            <Box
              sx={{
                width: 250,
                backgroundColor: "black",
                height: "100%",
              }}
              role="presentation"
              onClick={toggleDrawer("right", false)}
              onKeyDown={toggleDrawer("right", false)}
            >
              <div className="overflow-x-hidden px-3">
                <div className="flex px-5 text-white mt-8">
                  <IconButton
                    sx={{
                      color: "white",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className=" flex justify-center mt-8">
                  <Image
                    src="/delici2.png"
                    alt="spector"
                    width={150}
                    height={100}
                    className="self-center object-contain"
                  />
                </div>
                <section className="mt-10 flex flex-col gap-2 pl-3">
                  <Link
                    href="/"
                    className="font-medium font-sans tracking-wider flex justify-start items-center gap-2 text-primary  border-2 border-primary rounded-lg px-2"
                  >
                    <HomeIcon className="text-2xl" />
                    Home
                  </Link>
                  <Link
                    href="/menu"
                    className="font-medium font-sans tracking-wider flex justify-start items-center gap-2 text-primary  border-2 border-primary rounded-lg px-2"
                  >
                    <RestaurantIcon className="text-2xl" />
                    Menu
                  </Link>
                  <Link
                    href="/about"
                    className="font-medium font-sans tracking-wider flex justify-start items-center gap-2 text-primary  border-2 border-primary rounded-lg px-2"
                  >
                    <ReadMoreIcon className="text-2xl" />
                    About us
                  </Link>
                  <Link
                    href="/contact"
                    className="font-medium font-sans tracking-wider flex justify-start items-center gap-2 text-primary  border-2 border-primary rounded-lg px-2"
                  >
                    <ContactPageIcon className="text-2xl" />
                    Contact us
                  </Link>
                </section>

                <section className="mt-14">
                  <h1 className="text-white text-center font-serif tracking-wider text-2xl ">
                    Visit Us
                  </h1>
                  <h3 className="text-gray-300 text-center text-sm font-medium tracking-wide">
                    Restaurant St, Delicious City,
                  </h3>
                  <h3 className="text-gray-300 text-center text-sm font-medium tracking-wide">
                    London 9578, UK
                  </h3>
                  <h3 className="text-gray-300 text-center text-sm font-medium tracking-wide">
                    Open: 9.30 am - 2.30pm
                  </h3>
                  <h3 className="text-gray-300 text-center text-sm font-medium tracking-wide">
                    booking@domainame.com
                  </h3>
                </section>

                <section className="mt-5 text-white">
                  <h2 className="text-center text-gray-200 font-bold tracking-wider">
                    Booking Request
                  </h2>
                  <h2 className="text-center text-primary font-bold text-2xl">
                    +88-123-123456
                  </h2>
                </section>
              </div>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
