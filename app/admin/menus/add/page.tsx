"use client";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { useState, useEffect } from "react";
import { notify } from "@/app/toast";
import { Spinner } from "@/assets/icons/Spinner";
import { useMutation, useQuery } from "@tanstack/react-query";

import Select from "react-select";
import {
  addMenus,
  addSubCategory,
  fetchCategoriesWithSubcategory,
  fetchMealTimes,
} from "@/services/admin.services";
import Link from "next/link";
import PageTitle from "@/common/PageTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { MenuInput } from "@/types/Menu";
type Option = {
  value: number;
  label?: string; // Include other properties as needed, like label
};

const schema: ZodType<MenuInput> = z.object({
  name: z.string().min(3, "Name is required"),
  price: z.number().min(1, "Price is required"),
  description: z.string().optional(),
  ingredients: z.string().min(3, "Ingredients is required"),
  categoryId: z.string().min(1, "Category required!"),
  available_meal_times: z.array(z.number()).optional(),
  subCategoryId: z.string().optional(),
  special: z.boolean().optional(),
  avaliable_all_day: z.boolean().optional(),
});

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [subCategories, setSubCategories] = useState<
    { id: number; name: string }[]
  >([]);

  const [selectedOption, setSelectedOption] = useState<Option[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm<MenuInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      available_meal_times: [],
      avaliable_all_day: false,
      special: false,
    },
  });

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: subcatError,
    refetch: refetchcategories,
  } = useQuery({
    queryKey: ["fetchCategoriesWithSubcategory"],
    queryFn: fetchCategoriesWithSubcategory,
  });
  const {
    data: mealtimes,
    isLoading: mealtimesLoading,
    error: mealtimesError,
    refetch: refetchMealtimes,
  } = useQuery({
    queryKey: ["fetchMealTimes"],
    queryFn: fetchMealTimes,
  });

  const selectedCategoryId = watch("categoryId");

  useEffect(() => {
    const category =
      categories &&
      categories.find((c) => c.id.toString() === selectedCategoryId);
    if (category) {
      setSubCategories(category.subCategory);
    } else {
      setSubCategories([]);
    }
  }, [categories, selectedCategoryId]);

  const AddMenu = useMutation({
    mutationFn: (data: MenuInput) => addMenus(data),
    onError: (error: unknown) => {
      setLoading(false);
      console.log(error);
    },
    onSuccess: (data) => {
      notify("Menu added successfully!", "success");
      setLoading(false);
      reset();
    },
  });

  const mealtimeOptions =
    mealtimes &&
    mealtimes.map((mealtime) => ({
      label: mealtime.name,
      value: mealtime.id,
    }));

  const submitData = (values: MenuInput) => {
    setError("");
    setLoading(true);
    selectedOption.map((item) => {
      values.available_meal_times?.push(item.value);
    });
    setLoading(false);

    AddMenu.mutate(values);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center ">
        <Link
          href="/admin/menus"
          className="text-white bg-primary rounded-full px-4 py-2 flex items-center justify-center gap-x-2 h-max"
        >
          <ArrowBackIosNewIcon fontSize="small" />
          <span>Back</span>
        </Link>
        <PageTitle title="Menue" />
      </div>
      {/* Your existing UI code remains unchanged */}
      <form
        onSubmit={handleSubmit(submitData)}
        className="max-w-2xl mx-auto bg-white px-8 pb-8 rounded-lg shadow-lg"
      >
        <PageTitle title="Add New" />

        <div className="grid gap-2">
          <div>
            <label htmlFor="name" className="capitalize text-gray-600 text-sm">
              Name *
            </label>
            <input
              {...register("name")}
              placeholder="Name"
              name="name"
              id="name"
              className="w-full rounded-md"
            />
            {errors?.name && (
              <small className="text-red-500 pl-2">{errors.name.message}</small>
            )}
          </div>
          <div>
            <label htmlFor="price" className="capitalize text-gray-600 text-sm">
              Price *
            </label>
            <input
              {...register("price", { valueAsNumber: true })}
              placeholder="price"
              name="price"
              id="price"
              className="w-full rounded-md"
              type="number"
            />
            {errors?.price && (
              <small className="text-red-500 pl-2">
                {errors.price.message}
              </small>
            )}
          </div>
          <div>
            <label
              htmlFor="ingredients"
              className="capitalize text-gray-600 text-sm"
            >
              Ingredients <span className="text-xs">(comma separated)</span>
            </label>
            <input
              {...register("ingredients")}
              placeholder="Ingredients comma separated"
              name="ingredients"
              id="ingredients"
              className="w-full rounded-md"
              type="text"
            />
            {errors?.ingredients && (
              <small className="text-red-500 pl-2">
                {errors.ingredients.message}
              </small>
            )}
          </div>

          <div>
            <label
              htmlFor="categoryId"
              className="capitalize text-gray-600 text-sm"
            >
              Category *
            </label>
            <select
              {...register("categoryId")}
              id="categoryId"
              className="w-full rounded-md"
            >
              <option value="">Select a category</option>
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
            {errors?.categoryId && (
              <small className="text-red-500 pl-2">
                {errors.categoryId.message}
              </small>
            )}
          </div>
          {subCategories.length > 0 && (
            <div>
              <label
                htmlFor="subCategoryId"
                className="capitalize text-gray-600 text-sm"
              >
                Subcategory
              </label>
              <select
                {...register("subCategoryId")}
                id="subCategoryId"
                className="w-full rounded-md"
              >
                <option value="">Select a subcategory</option>
                {subCategories.map((subCategory) => (
                  <option key={subCategory.id} value={subCategory.id}>
                    {subCategory.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="grid mt-2">
            <label
              htmlFor="available_meal_times"
              className="text-sm  text-gray-600"
            >
              Available Meal Time *
            </label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: "#113F57",
                }),
              }}
              isMulti={true}
              defaultValue={selectedOption}
              onChange={(newValue) => setSelectedOption([...newValue] || [])}
              options={mealtimeOptions as any}
              required
            />
          </div>

          <div className="grid gap-1">
            <label
              htmlFor="description"
              className="capitalize text-gray-600 text-sm"
            >
              Description
            </label>
            <textarea
              {...register("description")}
              id="description"
              rows={3}
              className="rounded-md"
            ></textarea>
          </div>
          <div className="flex justify-start gap-5">
            <div className="flex items-center gap-2 mt-5">
              <input
                {...register("special")}
                name="special"
                id="special"
                className="rounded-md"
                type="checkbox"
              />
              <label
                htmlFor="special"
                className="capitalize text-gray-600 text-sm"
              >
                Special
              </label>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <input
                {...register("avaliable_all_day")}
                name="avaliable_all_day"
                id="avaliable_all_day"
                className="rounded-md"
                type="checkbox"
              />
              <label
                htmlFor="avaliable_all_day"
                className="capitalize text-gray-600 text-sm"
              >
                Avaliable All Day
              </label>
            </div>
          </div>
        </div>
        <small className="text-red-500 pl-2">{error}</small>
        <div className="flex justify-center mx-auto mt-7 max-w-sm">
          <button
            type="submit"
            className="px-10 py-2 bg-primary text-white rounded-full flex items-center gap-x-2"
          >
            <span>Submit</span>
            <span>{loading ? <Spinner /> : null}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
