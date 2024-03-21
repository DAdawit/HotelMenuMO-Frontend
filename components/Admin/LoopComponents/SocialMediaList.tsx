"use client";
import { BookType, SocialMediaType } from "@/Types";
import BookCourseDetail from "@/common/BookCourseDetail";
import Approved from "@/common/status/Approved";
import Pending from "@/common/status/Pending";
import React, { useState } from "react";
import api from "@/app/axios";
import toast from "react-hot-toast";
import { notify } from "@/app/toast";
import Rejected from "@/common/status/Rejected";
import { Spinner } from "@/assets/icons/Spinner";
import ConfirmDelete from "@/common/ConfirmDelete";
import EditSocialMedaiaLinks from "../Admin/SocialMedia/EditSocialMedaiaLinks";
type PropType = {
  media: SocialMediaType | undefined;
  index: number;
  refetch: () => void;
};

const SocialMediaList: React.FC<PropType> = ({ media, index, refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteError, setdeleteError] = useState<string>("");
  const confirm = async (id: string) => {
    setdeleteError("");
    setLoading(true);

    await api
      .delete(`/social-media/${id}`, { params: { id } })
      .then((res) => {
        notify("Deleted successfully", "success");
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
      <tr className="bg-white border-b">
        <td className="px-6 py-4 row-span-2">{index + 1}</td>
        <td className="px-6 py-4 row-span-2">{media?.attributes.facebook}</td>
        <td className="px-6 py-4 row-span-2">{media?.attributes.instagram}</td>
        <td className="px-6 py-4 row-span-2">{media?.attributes.linkedin}</td>
        <td className="px-6 py-4 row-span-2">{media?.attributes.whatsUp}</td>

        <td className="px-6 py-4 row-span-2 flex items-center justify-center gpa-x-3">
          <ConfirmDelete
            confirm={confirm}
            id={String(media?.id)}
            text="Are you sure you went to delete !"
            loading={loading}
          />
          <EditSocialMedaiaLinks
            media={media}
            refetch={() => refetch()}
            id={String(media?.id)}
          />
        </td>
      </tr>
    </>
  );
};

export default SocialMediaList;
