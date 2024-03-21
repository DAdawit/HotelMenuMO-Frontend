"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { notify } from "@/app/toast";
import api from "@/services/axios";
import EditHero from "../Hero/EditHero";
import ConfirmDelete from "@/common/Alerts/ConfirmDelete";
import { HeroOut } from "@/types/Hero";
import dayjs from "dayjs";
import { useMutation } from "@tanstack/react-query";
import { deleteHeroById } from "@/services/admin.services";
type PropType = {
  hero: HeroOut;
  index: number;
  refetch: () => void;
};

const HeroSectionLists: React.FC<PropType> = ({ hero, refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteError, setdeleteError] = useState<string>("");

  const deleteHeroSection = useMutation({
    mutationFn: async (id: number) => deleteHeroById(id), // Assuming deleteHeroById is the correct function to call
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
            src={`${hero?.imageUrl}`}
            alt={`${hero?.slogan}`}
            className="h-12 w-12 object-cover rounded-md shadow-md"
          />
        </td>
        <td className="px-6 py-4">{hero?.slogan}</td>

        <td className="px-6 py-4 ">{hero?.title}</td>
        <td className="px-6 py-4 text-start">{hero?.content}</td>
        <td className="px-6 py-4">
          {dayjs(hero?.created_at).format("MMM-D-YYYY")}
        </td>
        <td className="px-6 py-4   gap-2 flex items-center justify-center gap-x-3">
          <ConfirmDelete
            confirm={confirm}
            id={hero && hero?.id}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditHero hero={hero} refetch={() => refetch()} />
        </td>
      </tr>
    </>
  );
};

export default HeroSectionLists;
