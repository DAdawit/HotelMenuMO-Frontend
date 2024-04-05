"use client";
import React, { useState } from "react";
import PaginationComponent from "./Pagination";
type PropType = {
  count: number;
  page: number;
};
const ParentPaginator: React.FC<PropType> = ({ count, page }) => {
  const [current_page, setCurrentPage] = useState<number>(1);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <PaginationComponent
        count={count}
        page={page}
        handleChange={handlePageChange}
      />
    </div>
  );
};

export default ParentPaginator;
