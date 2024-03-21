"use client";
import { Certifcate, HeroType } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import ConfirmDelete from "@/common/ConfirmDelete";
import EditHero from "../Admin/Hero/EditHero";
import EditCertificates from "../Admin/Certificates/EditCertificates";
type PropType = {
  certification: Certifcate | undefined;
  index: number;
  refetch: () => void;
};

const CertificationList: React.FC<PropType> = ({
  certification,
  index,
  refetch,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteError, setdeleteError] = useState<string>("");

  const confirm = (id: string) => {
    setdeleteError("");
    setLoading(true);

    api
      .delete(`/certificates/${id}`)
      .then((res) => {
        notify("seed deleted successfully", "success");
        setLoading(false);
        refetch();
      })
      .catch((err) => {
        console.log(err.message);
        setdeleteError(err.message);
        setLoading(false);
        notify(err.message, "error");
      });
  };
  return (
    <>
      <tr key={index} className="bg-white border-b">
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {index + 1}
        </td>
        <td className="px-6 py-4   gap-2">
          <Image
            height={1000}
            width={1000}
            src={`${certification?.attributes.image}`}
            alt={`${certification?.attributes.title}`}
            className="h-16 w-16 object-fill"
          />
        </td>
        <td className="px-6 py-4  gap-2">{certification?.attributes.name}</td>

        <td className="px-6 py-4   gap-2 flex items-center justify-center gap-x-3">
          <ConfirmDelete
            confirm={confirm}
            id={String(certification?.id)}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditCertificates
            certification={certification}
            refetch={() => refetch()}
          />
        </td>
      </tr>
    </>
  );
};

export default CertificationList;
