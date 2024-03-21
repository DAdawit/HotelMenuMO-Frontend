"use client";
import { ContactType, LatestCoursesType } from "@/Types";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import ConfirmDelete from "@/common/ConfirmDelete";
import Link from "next/link";
import React, { useState } from "react";
import moment from "moment";
import MessageDetail from "@/common/MessageDetail";

type PropType = {
  contact: ContactType | undefined;
  index: number;
  refetch: () => void;
};

const ContactUsList: React.FC<PropType> = ({ contact, index, refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [deleteError, setdeleteError] = useState<string>("");
  const confirm = (id: string) => {
    setdeleteError("");
    setLoading(true);
    api
      .get(`/deleteContact/${id}`)
      .then((res) => {
        notify("training deleted successfully", "success");
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
      <tr>
        <td className="px-6 py-4 row-span-2">{index + 1}</td>
        <td className="px-6 py-4 row-span-2">{contact?.attributes.fullName}</td>
        <td className="px-6 py-4 row-span-2">{contact?.attributes.email}</td>
        <td className="border-2 border-white">
          {contact?.attributes.location}
        </td>
        <td className="px-6 py-4 row-span-2">
          {contact?.attributes.phoneNumber}
        </td>
        <td className="px-6 py-4 row-span-2">
          <MessageDetail message={contact?.attributes.message} />
        </td>
        <td className="px-6 py-4 row-span-2">
          {contact?.attributes?.created_at
            ? moment(contact.attributes.created_at as string).format(
                "MMM Do YYYY"
              )
            : ""}
        </td>
        <td className="px-6 py-4 row-span-2">
          <ConfirmDelete
            confirm={confirm}
            id={String(contact?.id)}
            text="Are you sure you went to delete !"
            loading={loading}
          />
        </td>
      </tr>
    </>
  );
};

export default ContactUsList;
