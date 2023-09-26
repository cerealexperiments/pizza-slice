"use client";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import { urlFor } from "@/lib/sanity";
import useProductCategories from "./hooks/useProductCategories";
import About from "@/components/About";

export default function Home() {
  const productCategoriesQuery = useProductCategories();
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
      <About />
      {productCategoriesQuery.data && (
        <div className="max-w-screen-xl pt-24 mx-auto px-8 xl:px-0">
          <Categories categories={productCategories} />
        </div>
      )}
    </div>
  );
}
