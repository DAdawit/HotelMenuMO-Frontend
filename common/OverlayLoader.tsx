"use client";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import useStore from "@/store/useStore";

export default function OverlayLoader() {
  const pageLoader = useStore((state) => state.pageLoade);
  const [open, setOpen] = React.useState(pageLoader);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
