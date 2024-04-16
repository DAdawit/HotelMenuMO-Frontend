import * as React from "react";
import Pagination from "@mui/material/Pagination";
type PropType = {
  page: number | undefined;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  count: number | undefined;
};
const AdminPagination: React.FC<PropType> = ({ page, handleChange, count }) => {
  return (
    <div className="flex justify-center gap-2 items-center mt-3">
      <h3 className="text-gray-700">Page: {page}</h3>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </div>
  );
};
export default AdminPagination;
