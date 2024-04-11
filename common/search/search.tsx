"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";
import { notify } from "@/app/toast";
import { Spinner } from "@/assets/icons/Spinner";
import { useMutation } from "@tanstack/react-query";
import { addCategory } from "@/services/admin.services";
import SearchResults from "./searchResults";
import { MenuOut } from "@/types/Menu";

type FormType = {
  search: string;
};

const schema: ZodType<FormType> = z.object({
  search: z.string().min(3, { message: "name is required" }),
});

const Search = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [search, setSearch] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<MenuOut | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const handleChange = (data: string) => {
    setSearch(data);
    if (data.length >= 2) {
      if (!open) {
        // setOpen(true);
      }
    } else {
      // setOpen(false);
    }
    console.log(data);
    console.log(open);
  };

  const submitData = (values: FormType) => {
    setError("");
    setLoading(true);
    console.log(values);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitData)}
        className="max-w-sm flex items-center"
      >
        <div>
          <input
            placeholder="search"
            name="search"
            id="search"
            onChange={(e) => handleChange(e.target.value)}
            className="w-full h-min rounded-lg"
          />
          {errors?.search && (
            <small className="text-red-500 pl-2">{errors.search.message}</small>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
