"use client";
import PizzaCard from "@/components/PizzaCard";
import useSWR from "swr";
import { getProductsByCategory } from "@/lib/data";
import { urlFor } from "@/lib/sanity";
import PizzaCardSkeleton from "@/components/PIzzaCardSkeleton";
import CategoriesSelector from "@/components/CategoriesSelector";
import { useState } from "react";
import PizzasList from "@/components/PizzasList";

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState("pizza");
  const { data, isLoading, error } = useSWR(categoryFilter, () =>
    getProductsByCategory(categoryFilter)
  );
  const pizzas =
    categoryFilter === "pizza" && data
      ? data.map((item) => {
          return {
            ...item,
            slug: item.slug.current,
            image: item.image ? urlFor(item.image).url() : "",
          };
        })
      : null;
  console.log(data);

  return (
    <main className="max-w-screen-xl flex-1 mx-auto  w-full">
      <CategoriesSelector setCategoryFilter={setCategoryFilter} />
      {categoryFilter === "pizza" && (
        <PizzasList isLoading={isLoading} pizzas={pizzas} />
      )}
    </main>
  );
}
