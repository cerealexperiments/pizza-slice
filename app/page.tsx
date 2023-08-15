"use client";
import useSWR from "swr";
import { getProductCategories, getProductsByCategory } from "@/lib/data";
import { urlFor } from "@/lib/sanity";
import { useState } from "react";
import PizzasList from "@/components/PizzasList";
import CategoryTabs from "@/components/CategoryTabs";
import ProductsList from "@/components/ProductsList";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState("pizza");
  const productsQuery = useSWR(categoryFilter, () =>
    getProductsByCategory(categoryFilter)
  );
  const productCategoriesQuery = useSWR(
    "productCategories",
    getProductCategories
  );
  const pizzas =
    categoryFilter === "pizza" && productsQuery.data
      ? productsQuery.data?.map((item) => {
          return {
            ...item,
            slug: item.slug.current,
            image: item.image ? urlFor(item.image).url() : "",
          };
        })
      : null;
  const products = productsQuery.data
    ? productsQuery.data?.map((item) => {
        return {
          ...item,
          slug: item.slug.current,
          price: item.price,
          image: item.image ? urlFor(item.image).url() : "",
        };
      })
    : null;
  console.log(productsQuery.data);
  const productCategories = productCategoriesQuery.data
    ? productCategoriesQuery.data?.map((item) => {
        return {
          title: item.title,
          value: item.value,
        };
      })
    : null;
  console.log(productCategories);

  return (
    <main className="max-w-screen-xl flex-1 mx-auto  w-full px-8 xl:px-0">
      {productCategoriesQuery.data && (
        <CategoryTabs
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
