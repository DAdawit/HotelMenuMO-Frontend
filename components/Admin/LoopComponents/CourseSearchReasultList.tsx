"use client";

import React, { useState } from "react";
import { CoursSearch } from "@/Types";

import Link from "next/link";
import BookCourse from "@/common/BookCourse";
import dayjs from "dayjs";

type PropType = {
  course: CoursSearch;
  index: number;
};

const CourseSearchReasultList: React.FC<PropType> = ({ course, index }) => {
  return (
    <>
      <tr
        className={
          (index + 1) % 2 == 0
            ? "bg-[#F3F3F3] h-10 text-[#595959] text-base xll:text-xl"
            : "bg-[#E7E7E7] h-10 text-[#595959] text-base xll:text-xl"
        }
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-2 border-white"
        >
          {index + 1}
        </th>

        <td className="px-6 py-4 row-span-2 border-2 border-white">
          <Link
            // href="#"
            href={`/trainings/${course?.training?.id}/courses/schedules/${course.id}`}
            className="hover:text-primary whitespace-nowrap"
          >
            {course.title}
          </Link>
        </td>
        <td className="px-6 py-4 row-span-2 border-2 border-white text-base whitespace-nowrap">
          {dayjs(course?.start_date).format("MMM-D-YYYY")} -{" "}
          {dayjs(course?.end_date).format("MMM-D-YYYY")}
        </td>

        <td className="px-6 py-4 row-span-2 border-2 border-white whitespace-nowrap">
          {course?.format.name}
        </td>
        <td className="px-6 py-4 row-span-2 border-2 border-white whitespace-nowrap">
          {course?.training?.name}
        </td>
        <td className="px-6 py-4 row-span-2 border-2 border-white whitespace-nowrap">
          {course?.venue.name}
        </td>

        <td className="px-6 py-4 row-span-2 border-2 border-white bg-primary">
          <BookCourse title={course.title} course_id={String(course.id)} />
        </td>
      </tr>
    </>
  );
};

export default CourseSearchReasultList;
