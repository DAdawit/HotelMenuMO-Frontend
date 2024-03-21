"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { notify } from "@/app/toast";
import api from "@/services/axios";
import EditHero from "./EditLogo";
import ConfirmDelete from "@/common/Alerts/ConfirmDelete";
import { HeroOut } from "@/types/Hero";
import dayjs from "dayjs";
import { useMutation } from "@tanstack/react-query";
import { deleteHeroById, deleteLogo } from "@/services/admin.services";
import { LogoOut } from "@/types/Logo";
type PropType = {
  logo: LogoOut;
  index: number;
  refetch: () => void;
};

const LogoLists: React.FC<PropType> = ({ logo, refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteError, setdeleteError] = useState<string>("");

  const deleteHeroSection = useMutation({
    mutationFn: async (id: number) => deleteLogo(id), // Assuming deleteHeroById is the correct function to call
    onError: (error: unknown) => {
      setLoading(false);
    },
    onSuccess: async (data) => {
      setLoading(true);
      refetch();
    },
  });

  const confirm = (id: number) => {
    setdeleteError("");
    setLoading(true);

    deleteHeroSection.mutate(id);
  };
  return (
    <>
      <tr className="border-b text-gray-500 text-sm mb-2 bg-white text-start">
        <td className="px-6 py-4 gap-2 ">
          <Image
            loading="lazy"
            height={1000}
            width={1000}
            src={`${logo?._fullImagePath}`}
            alt={`${logo?.name}`}
            className="h-12 w-16 object-contain rounded-md "
          />
        </td>
        <td className="px-6 py-4">{logo?.name}</td>

        <td className="px-6 py-4">
          {dayjs(logo?.created_at).format("MMM-D-YYYY")}
        </td>
        <td className="px-6 py-4 text-start   gap-2 flex items-center gap-x-3">
          <ConfirmDelete
            confirm={confirm}
            id={logo && logo?.id}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditHero logo={logo} refetch={() => refetch()} />
        </td>
      </tr>
    </>
  );
};

export default LogoLists;
