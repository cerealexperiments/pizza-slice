"use client";
import useSWR from "swr";
import {
  getProductCategories,
  getProductsByCategory,
  PizzaType,
} from "@/lib/data";
import { urlFor } from "@/lib/sanity";
import { useEffect, useState } from "react";
import PizzasList from "@/components/PizzasList";
import CategoryTabs from "@/components/CategoryTabs";
import ProductsList from "@/components/ProductsList";
import { Product } from "@/lib/types";
import { useSearchParams } from "next/navigation";

export default function MenuPage() {
  const [categoryFilter, setCategoryFilter] = useState("pizza");
  const searchParams = useSearchParams();
  const productsQuery = useSWR(categoryFilter, () =>
    getProductsByCategory(categoryFilter)
  );
  const productCategoriesQuery = useSWR(
    "productCategories",
    getProductCategories
  );
  const category = searchParams.get("category");
  const pizzas =
    categoryFilter === "pizza" && productsQuery.data
      ? productsQuery.data?.map((item) => {
          const newItem = item as PizzaType;
          return {
            ...newItem,
            slug: item.slug.current,
            image: item.image ? urlFor(item.image).url() : "",
          };
        })
      : null;
  const products = productsQuery.data
    ? productsQuery.data?.map((item) => {
        const newItem = item as Product;
        return {
          ...newItem,
          slug: item.slug.current,
          price: newItem.price,
          image: item.image ? urlFor(item.image).url() : "",
        };
      })
    : null;
  const productCategories = productCategoriesQuery.data
    ? productCategoriesQuery.data?.map((item) => {
        return {
          title: item.title,
          value: item.value,
          image: urlFor(item.image).url(),
        };
      })
    : null;
  useEffect(() => {
    if (
      category &&
      productCategories?.map((item) => item.value).includes(category)
    ) {
      setCategoryFilter(category);
    }
  }, [category]);
  return (
    <main className="max-w-screen-xl flex-1 mx-auto w-full px-8 xl:px-0">
      <h3 className="text-3xl mt-8 mb-8 font-semibold">Наше меню</h3>
      {productCategoriesQuery.data && (
        <CategoryTabs
          defaultCategory={searchParams.get("category")}
          categories={productCategories}
          changeCategoryFilter={setCategoryFilter}
        />
      )}
      {categoryFilter === "pizza" && (
        <PizzasList isLoading={productsQuery.isLoading} pizzas={pizzas} />
      )}
      {categoryFilter !== "pizza" && (
        <ProductsList isLoading={productsQuery.isLoading} products={products} />
      )}
    </main>
  );
}
