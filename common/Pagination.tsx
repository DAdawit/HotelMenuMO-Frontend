import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
type PropType = {
  page: number | undefined;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  count: number | undefined;
};
const PaginationComponent: React.FC<PropType> = ({
  page,
  handleChange,
  count,
}) => {
  return (
    <div className="flex justify-center gap-2 items-center my-5">
      <Typography>Page: {page}</Typography>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        sx={{
          "& .MuiPaginationItem-page": {
            color: "white",
            backgroundColor: "#059669",
          },
          "& .Mui-selected": {
            color: "#059669",
            backgroundColor: "white",
            border: "2px solid #059669 ",
          },
        }}
      />
    </div>
  );
};
export default PaginationComponent;
