"use client";
import React from "react";
import { Spinner } from "@/assets/icons/Spinner";
import PageTitle from "@/common/PageTitle";
import { fetchMenus } from "@/services/admin.services";
import { useQuery } from "@tanstack/react-query";
import MenusList from "@/components/Admin/Menus/MenusList";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import AdminPagination from "@/common/Pagination/AdminPagination";
import api from "@/services/axios";
import CloseIcon from "@mui/icons-material/Close";
import { AdminMenuOut } from "@/types/Menu";

const Page = () => {
  const [page, setPage] = React.useState<number>(1);
  const [searchPage, setSearchPage] = React.useState<number>(1);
  const [searchResult, setSearchResult] = React.useState<AdminMenuOut | null>(
    null
  );
  const [search, setSearch] = React.useState<string>("");
  const [searchOn, setSearchOn] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchMenus", page],
    queryFn: () => fetchMenus(page),
  });
  if (error) {
    const errorMessage = (error as any).response?.data?.detail || error.message;
    return errorMessage === "Unauthorized" ? (
      <span>Unauthorized</span>
    ) : (
      <span>{errorMessage}</span>
    );
  }

  const handleSearch = (data: string, pageNUmber: number = searchPage) => {
    setSearch(data);
    if (data.length >= 1) {
      setSearchOn(true);
      setLoading(true);
      api
        .get(`/admin/menuSearch?search=${data}&page=${pageNUmber}`)
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
      setSearchOn(false);
      setSearchResult(null);
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setSearchPage(value);
    handleSearch(search, value);
  };

  const closeSearch = () => {
    setSearchOn(false);
    setSearch("");
  };
  return (
    <div className="container mx-auto  p-5 ">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="flex justify-between items-center py-6">
        <PageTitle title="Menues" />
        <Link
          href="/admin/menus/add"
          className="text-white bg-primary rounded-full px-4 py-2 flex items-center justify-center gap-x-2 h-max"
        >
          <span>Add Menu</span>
          <AddIcon fontSize="small" />
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <div>
          <input
            placeholder="search"
            name="search"
            id="search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full h-min rounded-lg"
          />
        </div>
        {searchOn && (
          <button
            className="h-9 w-9 rounded-full border-2 border-orange-500 text-orange-500 flex justify-center items-center"
            onClick={closeSearch}
          >
            <CloseIcon />
          </button>
        )}
      </div>{" "}
      <div className="relative overflow-x-auto min-h-96">
        <table className="w-full mt-8 overflow-x-auto">
          <thead className="text-start text-gray-500 uppercase border-b font-base bg-white">
            <tr className="text-start">
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap  text-start"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                name
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                price
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                ingridiants
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                available_meal_times
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                avaliable_all_day
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                special
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                Main Dishe
              </th>

              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                created-at
              </th>
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap text-start"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="gap-y-2">
            {!searchOn ? (
              <>
                {isLoading && <Spinner />}
                {data && data.data.length === 0 && <p>empty!.</p>}
                {data &&
                  Array.isArray(data.data) &&
                  data.data.map((menu, index) => (
                    <MenusList
                      key={menu.id}
                      menu={menu}
                      index={index}
                      refetch={refetch}
                    />
                  ))}
              </>
            ) : (
              <>
                {loading && <Spinner />}
                {searchResult && searchResult.data.length === 0 && (
                  <p>empty!.</p>
                )}
                {searchResult &&
                  Array.isArray(searchResult.data) &&
                  searchResult.data.map((menu, index) => (
                    <MenusList
                      key={menu.id}
                      menu={menu}
                      index={index}
                      refetch={refetch}
                    />
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="my-8">
        {!searchOn ? (
          <AdminPagination
            count={data?.totalPages}
            page={data?.currentPage}
            handleChange={handleChange}
          />
        ) : (
          <AdminPagination
            count={searchResult?.totalPages}
            page={searchResult?.currentPage}
            handleChange={handleSearchChange}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
