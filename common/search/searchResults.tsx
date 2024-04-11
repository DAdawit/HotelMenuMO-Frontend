"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { MenuOut } from "@/types/Menu";
import SearchIcon from "@mui/icons-material/Search";
import api from "@/services/axios";
import { SearchResultI } from "@/types/SearchResultT";
import CloseIcon from "@mui/icons-material/Close";
import MenuCard2Skeleton from "@/components/Skeletons/MenuCard2Skeleton";
import MenuCard2 from "@/components/Menu/MenuCard2";
import PaginationComponent from "../Pagination/Pagination";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    // This targets the inner Paper component
    width: "95%", // Set the width to 100%
    height: "95%", // Set the height to 100%
    maxWidth: "95%", // Override the maxWidth to be 100%
    maxHeight: "95%", // Override the maxHeight to be 100%
    margin: 0, // Remove any margin
    borderRadius: 0, // Optional: if you want to remove the border radius
    backgroundColor: "#121414", // Set the background color to #121414
  },
}));

type PropType = {
  open: boolean;
  handleClose: () => void;
  searchResult: MenuOut | null;
};
const SearchResults = () => {
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");
  const [searchResult, setSearchResult] = React.useState<SearchResultI | null>(
    null
  );
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSearch = (data: string, pageNUmber: number = page) => {
    setSearch(data);
    if (data.length > 0) {
      setLoading(true);
      api
        .get(`/search?search=${data}&page=${pageNUmber}`)
        .then((res) => {
          setSearchResult(res.data);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setSearchResult(null);
    }
  };
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    handleSearch(search, value);
  };

  return (
    <React.Fragment>
      <button
        className="border-[1px] border-primary text-primary px-5 py-2 rounded-lg flex gap-x-1 items-center"
        onClick={handleClickOpen}
      >
        <span>
          <SearchIcon />
        </span>
        <span>Search</span>
      </button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="Organizations"
        open={open}
      >
        <DialogTitle>
          <div className="w-full flex justify-end">
            <div className="flex items-center gap-x-2">
              <div>
                <input
                  placeholder="search"
                  name="search"
                  id="search"
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full h-min rounded-lg"
                />
              </div>

              <button
                className="h-9 w-9 rounded-full border-2 border-white text-white flex justify-center items-center"
                onClick={handleClose}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div>
            {loading && (
              <div className="mt-8">
                <MenuCard2Skeleton />
              </div>
            )}
            <div className="text-white">
              <div className="min-h-96 container mx-auto px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {searchResult && (searchResult?.data?.length ?? 0) == 0 && (
                    <div className="text-white">empty !</div>
                  )}

                  {searchResult?.data?.map((menu, index) => (
                    <MenuCard2 key={menu.id} menu={menu} />
                  ))}
                </div>
              </div>
            </div>
            <PaginationComponent
              count={searchResult?.totalPages}
              page={searchResult?.currentPage}
              handleChange={handleChange}
            />
          </div>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default SearchResults;
