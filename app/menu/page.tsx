"use client";
import useSWR from "swr";
import {
  getPizzas,
  getProductCategories,
  getProductsByCategory,
} from "@/lib/data";
import { useEffect, useState } from "react";
import PizzasList from "@/components/PizzasList";
import CategoryTabs from "@/components/CategoryTabs";
import ProductsList from "@/components/ProductsList";
import { Pizza, Product } from "@/lib/types";
import { useSearchParams } from "next/navigation";

export default function MenuPage() {
  const [categoryFilter, setCategoryFilter] = useState("pizza");
  const productsQuery = useSWR(categoryFilter, () => {
    if (categoryFilter === "pizza") {
      return getPizzas();
    } else {
      return getProductsByCategory(categoryFilter);
    }
  });
  const searchParams = useSearchParams();
  const productCategoriesQuery = useSWR(
    "productCategories",
    getProductCategories
  );
  const category = searchParams.get("category");
  useEffect(() => {
    if (
      category &&
      productCategoriesQuery.data?.map((item) => item.value).includes(category)
    ) {
      setCategoryFilter(category);
    }
  }, [category]);
  return (
    <main className="max-w-screen-xl flex-1 mx-auto w-full px-8 xl:px-0">
      <h3 className="text-3xl mt-8 mb-8 font-semibold">Наше меню</h3>
      {productCategoriesQuery.data && (
        <CategoryTabs
          categories={productCategoriesQuery.data || null}
          defaultCategory={searchParams.get("category")}
          changeCategoryFilter={setCategoryFilter}
        />
      )}
      {categoryFilter === "pizza" && (
        <PizzasList
          isLoading={productsQuery.isLoading}
          pizzas={productsQuery.data as Pizza[]}
        />
      )}
      {categoryFilter !== "pizza" && (
        <ProductsList
          isLoading={productsQuery.isLoading}
          products={productsQuery.data as Product[]}
        />
      )}
    </main>
  );
}
