"use client";
import { BookType } from "@/Types";
import BookCourseDetail from "@/common/BookCourseDetail";
import Approved from "@/common/status/Approved";
import Pending from "@/common/status/Pending";
import React, { useState } from "react";
import api from "@/app/axios";
import toast from "react-hot-toast";
import { notify } from "@/app/toast";
import Rejected from "@/common/status/Rejected";
import { Spinner } from "@/assets/icons/Spinner";
import dayjs from "dayjs";
type PropType = {
  book: BookType | undefined;
  index: number;
  refetch: () => void;
};

const BookList: React.FC<PropType> = ({ book, index, refetch }) => {
  const [approveLoading, setApproveLoading] = useState(false);
  const [rejectLoading, setRejectLoading] = useState(false);
  const approve = (id: number | undefined) => {
    setApproveLoading(true);
    api
      .patch(`/books/${id}`, { status: "approved" })
      .then(() => {
        notify("approved successfully", "success");
        setApproveLoading(false);
        refetch();
      })
      .catch((error) => {
        setApproveLoading(false);
        notify("error", error.message);
      });
  };
  const reject = (id: number | undefined) => {
    setRejectLoading(true);
    api
      .patch(`/books/${id}`, { status: "rejected" })
      .then(() => {
        notify("rejected ", "success");
        setRejectLoading(false);
        refetch();
      })
      .catch((error) => {
        setRejectLoading(false);
        notify("error", error.message);
      });
  };
  return (
    <>
      <tr className="bg-white border-b">
        <td className="px-6 py-4 row-span-2">{index + 1}</td>
        <td className="px-6 py-4 row-span-2">{book?.firstName}</td>
        <td className="px-6 py-4 row-span-2">{book?.lastName}</td>
        {/* <td className="px-6 py-4 row-span-2">{book?.email}</td> */}
        <td className="px-6 py-4 row-span-2">{book?.phoneNumber}</td>
        {/* <td className="px-6 py-4 row-span-2">{book?.address}</td> */}

        <td className="px-6 py-4 row-span-2">
          {book?.status === "pending" ? <Pending /> : null}
          {book?.status === "approved" ? <Approved /> : null}
          {book?.status === "rejected" ? <Rejected /> : null}
        </td>

        <td className="px-6 py-4 row-span-2">
          {book?.course !== null ? "Course" : "Schedule"}
        </td>
        <td className="px-6 py-4 row-span-2">
          <BookCourseDetail
            course={book?.course}
            schedule={book?.schedule}
            fullName={book?.firstName + "" + book?.lastName}
            email={book?.email}
            phoneNumber={book?.phoneNumber}
            address={book?.address}
          />
        </td>
        <td className="px-6 py-4 row-span-2 whitespace-nowrap">
          {dayjs(book?.created_at).format("MMM-D-YYYY")}
        </td>
        <td className="px-6 py-4 row-span-2 flex gap-x-3">
          <button
            className="bg-green-500 px-5 py-2 text-white rounded-full flex items-center gap-x-2"
            onClick={() => approve(book?.id)}
          >
            <span>Approve</span>
            {approveLoading ? <Spinner /> : null}
          </button>
          <button
            className="bg-red-500 px-5 py-2 text-white rounded-full flex items-center gap-x-2"
            onClick={() => reject(book?.id)}
          >
            <span>Reject</span>
            {rejectLoading ? <Spinner /> : null}
          </button>
        </td>
      </tr>
    </>
  );
};

export default BookList;
