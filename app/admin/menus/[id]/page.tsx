"use client";
import {
  addMenus,
  fetchCategoriesWithSubcategory,
  fetchMealTimes,
  fetchMenuById,
  updateMenus,
} from "@/services/admin.services";
import Select from "react-select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { MenuInput } from "@/types/Menu";
import { zodResolver } from "@hookform/resolvers/zod";
import { notify } from "@/app/toast";
import { Spinner } from "@/assets/icons/Spinner";
import Link from "next/link";
import PageTitle from "@/common/PageTitle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";

type Option = {
  value: number;
  label?: string; // Include other properties as needed, like label
};

const schema: ZodType<MenuInput> = z.object({
  name: z.string().min(3, "Name is required"),
  price: z.number().min(1, "Price is required"),
  description: z.string().optional(),
  ingredients: z.string().optional().nullable(),
  categoryId: z.string().min(1, "Category required!"),
  available_meal_times: z.array(z.number()).optional(),
  subCategoryId: z.string().optional().nullable(),
  special: z.boolean().optional(),
  avaliable_all_day: z.boolean().optional(),
  mainDishes: z.boolean().optional(),
});

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [subCategories, setSubCategories] = useState<
    { id: number; name: string }[]
  >([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Fetch menu item data
  const {
    data: menuItem,
    isLoading,
    error: menuItemError,
  } = useQuery({
    queryKey: ["fetchMenuById", params.id],
    queryFn: () => fetchMenuById(Number(params.id)),
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

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<MenuInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      available_meal_times: [],
    },
  });

  const selectedCategoryId = watch("categoryId");

  // Transform available_meal_times for react-select
  useEffect(() => {
    console.log("Selected Category ID:", selectedCategoryId); // Debugging line

    if (menuItem) {
      const transformedMealTimes = menuItem.available_meal_times.map(
        (mealTime) => ({
          label: mealTime.name,
          value: mealTime.id,
        })
      );
      setSelectedOption(transformedMealTimes);
      reset({
        name: menuItem.name,
        description: menuItem.description,
        price: menuItem.price,
        ingredients: menuItem.ingridiants,
        avaliable_all_day: menuItem.avaliable_all_day,
        mainDishes: menuItem.mainDishes,
        special: menuItem.special,
        categoryId: menuItem.category?.id.toString(),
        subCategoryId: menuItem.subCategory?.id?.toString() || null,
      });
    }
    setIsInitialLoad(false); // Prevent further resets due to dependency changes

    const category =
      categories &&
      categories.find((c) => c.id.toString() === selectedCategoryId);
    if (category) {
      setIsInitialLoad(false);
      setSubCategories(category.subCategory);
    } else {
      setSubCategories([]);
    }
  }, [
    menuItem,
    categories,
    selectedCategoryId,
    reset,
    isInitialLoad,
    isLoading,
  ]);

  const mealtimeOptions =
    mealtimes &&
    mealtimes.map((mealtime) => ({
      label: mealtime.name,
      value: mealtime.id,
    }));

  const UpdateMenu = useMutation({
    mutationFn: ({ id, data }: { id: string; data: MenuInput }) =>
      updateMenus(id, data),
    onError: (error: unknown) => {
      setLoading(false);
      console.log(error);
      notify("something went wrong. try Again!", "error");
    },
    onSuccess: (data) => {
      console.log(data);
      // setResult(data);
      // setOpen(true);
      notify("Menu updated successfully!", "success");
      setLoading(false);
      reset();
      router.push("/admin/menus");
    },
  });

  const submitData = (values: MenuInput) => {
    setError("");
    setLoading(true);
    const updatedMealTimes = selectedOption.map((item) => item.value);
    const updatedValues = {
      ...values,
      available_meal_times: updatedMealTimes,
    };

    // setLoading(false);
    // console.log(updatedValues);
    // console.log(typeof values);

    UpdateMenu.mutate({ id: params.id, data: updatedValues });
  };

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>An error occurred: {error?.message}</div>;

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
        <PageTitle title="Update New" />

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
              value={selectedOption}
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
            <div className="flex items-center gap-2 mt-5">
              <input
                {...register("mainDishes")}
                name="mainDishes"
                id="mainDishes"
                className="rounded-md"
                type="checkbox"
              />
              <label
                htmlFor="mainDishes"
                className="capitalize text-gray-600 text-sm"
              >
                mainDishes
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
}
