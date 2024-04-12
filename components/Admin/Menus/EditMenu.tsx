"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import { Spinner } from "@/assets/icons/Spinner";
import Select from "react-select";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchCategoriesWithSubcategory,
  fetchMealTimes,
  updateMenus,
} from "@/services/admin.services";
import { AdminMenu, MenuInput } from "@/types/Menu";
import { useRouter } from "next/navigation";
import { notify } from "@/app/toast";

type FormType = {
  categoryId: number;
  name: string;
  image?: FileList;
};

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

type PropType = {
  menu: AdminMenu;
  refetch: () => void;
};

const EditMenu: React.FC<PropType> = ({ refetch, menu }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<Option[]>([]);
  const [subCategories, setSubCategories] = useState<
    { id: number; name: string }[]
  >([]);

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: CatError,
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
    formState: { errors },
    reset,
  } = useForm<MenuInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      available_meal_times: [],
      name: menu.name,
      description: menu.description,
      price: menu.price,
      ingredients: menu.ingridiants, // Assuming this is the correct field name
      avaliable_all_day: menu.avaliable_all_day,
      mainDishes: menu.mainDishes,
      special: menu.special,
      categoryId: menu.category?.id.toString() ?? "",
      subCategoryId: menu.subCategory?.id?.toString() ?? null,
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mealtimeOptions = mealtimes?.map((mealtime) => ({
    label: mealtime?.name,
    value: mealtime?.id,
  }));

  const UpdateMenu = useMutation({
    mutationFn: ({ id, data }: { id: string; data: MenuInput }) =>
      updateMenus(id, data),
    onError: (error: unknown) => {
      setLoading(false);
      console.log(error);
      handleClose();
      notify("something went wrong. try Again!", "error");
    },
    onSuccess: (data) => {
      console.log(data);
      handleClose();
      notify("Menu updated successfully!", "success");
      setLoading(false);
      reset();
      refetch();
      router.push("/admin/menus");
    },
  });

  const selectedCategoryId = watch("categoryId");

  const submitData = (values: MenuInput) => {
    setError("");
    setLoading(true);
    const updatedMealTimes = selectedOption.map((item) => item.value);
    const updatedValues = {
      ...values,
      available_meal_times: updatedMealTimes,
    };
    console.log(updatedValues);
    UpdateMenu.mutate({ id: String(menu?.id), data: updatedValues });
  };

  useEffect(() => {
    // console.log("Selected Category ID:", selectedCategoryId);

    if (menu) {
      const transformedMealTimes = menu?.available_meal_times.map(
        (mealTime) => ({
          label: mealTime?.name,
          value: Number(mealTime?.id),
        })
      );
      setSelectedOption(transformedMealTimes);
    }

    const category = categories?.find(
      (c) => c.id.toString() === selectedCategoryId
    );
    if (category) {
      setSubCategories(category.subCategory);
    } else {
      setSubCategories([]);
    }
  }, [categories, selectedCategoryId, menu]);
  return (
    <div>
      <Tooltip title="Edit" placement="top">
        <button className="text-primary" onClick={handleClickOpen}>
          <EditIcon fontSize="small" />
        </button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Menu"}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-2xl mx-auto bg-white px-8 pb-8"
          >
            {/* {menu.id} */}
            {/* <PageTitle title="Update New" /> */}

            <div className="grid gap-2">
              <div>
                <label
                  htmlFor="name"
                  className="capitalize text-gray-600 text-sm"
                >
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
                  <small className="text-red-500 pl-2">
                    {errors.name.message}
                  </small>
                )}
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="capitalize text-gray-600 text-sm"
                >
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
                  {categories?.map((category) => (
                    <option
                      key={category?.id}
                      value={category?.id}
                      className="capitalize"
                    >
                      {category?.name}
                    </option>
                  ))}
                </select>
                {errors?.categoryId && (
                  <small className="text-red-500 pl-2">
                    {errors.categoryId.message}
                  </small>
                )}
              </div>
              {subCategories?.length > 0 && (
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
                  onChange={(newValue) =>
                    setSelectedOption([...newValue] || [])
                  }
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
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditMenu;
