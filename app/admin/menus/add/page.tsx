import PageTitle from "@/common/PageTitle";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const page = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex items-center py-6">
        <Link
          href="/admin/menus"
          className="text-white bg-primary rounded-full px-4 py-2 flex items-center justify-center gap-x-2 h-max"
        >
          <ArrowBackIosNewIcon fontSize="small" />
          <span>Back</span>
        </Link>
        <PageTitle title="Add Menue" />
      </div>
    </div>
  );
};

export default page;
