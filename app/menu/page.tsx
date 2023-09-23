"use client";
import useSWR from "swr";
import { getProductsByCategory } from "@/lib/data";
import { useState, useEffect } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import ProductsList from "@/components/ProductsList";
import { useSearchParams } from "next/navigation";
import useProductCategories from "../hooks/useProductCategories";

export default function MenuPage() {
  const [categoryFilter, setCategoryFilter] = useState("pizza");
  const productsQuery = useSWR(categoryFilter, () =>
    getProductsByCategory(categoryFilter),
  );
  const searchParams = useSearchParams();
  const productCategoriesQuery = useProductCategories();
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
      <ProductsList
        isLoading={productsQuery.isLoading}
        products={productsQuery.data ? productsQuery.data : null}
      />
    </main>
  );
}
