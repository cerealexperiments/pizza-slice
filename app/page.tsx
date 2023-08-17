"use client";
import PizzasList from "@/components/PizzasList";
import CategoryTabs from "@/components/CategoryTabs";
import ProductsList from "@/components/ProductsList";
import Hero from "@/components/Hero";
import Categories2 from "@/components/Categories2";
import useSWR from "swr";
import { getProductCategories } from "@/lib/data";
import { urlFor } from "@/lib/sanity";

export default function Home() {
  const productCategoriesQuery = useSWR(
    "productCategories",
    getProductCategories
  );
  const productCategories = productCategoriesQuery.data
    ? productCategoriesQuery.data?.map((item) => {
        return {
          title: item.title,
          value: item.value,
          image: urlFor(item.image).url(),
        };
      })
    : null;
  return (
    <div>
      <Hero />
      {productCategoriesQuery.data && (
        <div className="max-w-screen-xl mx-auto px-8 xl:px-0">
          <Categories2 categories={productCategories} />
        </div>
      )}
    </div>
  );
}
