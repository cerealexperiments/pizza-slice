"use client";
import useSWR from "swr";
import { getAllProducts, getProductsByCategory } from "@/lib/data";
import { useState, useEffect } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import ProductsList from "@/components/ProductsList";
import { useSearchParams } from "next/navigation";
import useProductCategories from "../hooks/useProductCategories";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MenuPage() {
  const searchParams = useSearchParams();
  const [categoryFilter, setCategoryFilter] = useState("all");
  const productCategoriesQuery = useProductCategories();
  const productCategories = productCategoriesQuery.data;
  const productsQuery = useSWR(productCategories ? "all products" : null, () =>
    getAllProducts(productCategories!.map((item) => item.value)),
  );
  const products = categoryFilter !== "all" ? productsQuery.data!.filter(item => item._type === categoryFilter): productsQuery.data;
  return (
    <main className="max-w-screen-xl flex-1 mx-auto w-full px-8 xl:px-0">
      <div className="mt-8 mb-8 justify-between flex flex-col sm:flex-row gap-4">
        <h3 className="text-3xl font-semibold">Наше меню</h3>
        <Select onValueChange={(value) => setCategoryFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Все продукты" />
          </SelectTrigger>
          <SelectContent>
            {productCategories && (
              <SelectGroup>
                <SelectLabel>Категории</SelectLabel>
                <SelectItem value="all">Все продукты</SelectItem>
                {productCategories.map((item) => (
                  <SelectItem key={item.value} value={item.value}>{item.title}</SelectItem>
                ))}
              </SelectGroup>
            )}
          </SelectContent>
        </Select>
      </div>
      <ProductsList
        isLoading={productsQuery.isLoading}
        products={products ? products : null}
      />
    </main>
  );
}
