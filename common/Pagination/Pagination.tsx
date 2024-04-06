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
    <div className="flex justify-center gap-2 items-center">
      <h3 className="text-gray-200">Page: {page}</h3>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        color="standard"
        variant="outlined"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white", // Text color for all items
          },
          "& .Mui-selected": {
            color: "white", // Text color for the active item
            borderColor: "white", // Border color for the active item
            "&.MuiButtonBase-root": {
              border: "1px solid", // Apply border
            },
          },
          "& .MuiPaginationItem-ellipsis": {
            color: "white", // Color for the ellipsis
          },
        }}
      />
    </div>
  );
};
export default PaginationComponent;
