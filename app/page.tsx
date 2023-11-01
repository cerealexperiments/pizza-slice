"use client";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import { urlFor } from "@/lib/sanity";
import useProductCategories from "./hooks/useProductCategories";
import Testimonials from "@/components/Testimonials";
import ComboCard from "@/components/ComboCard";
import defaultImage from "../public/default.png";
import Balance from "react-wrap-balancer";
import useSWR from "swr";
import { getAllDeals } from "@/lib/data";
import CombosAndDeals from "@/components/CombosAndDeals";

export default function Home() {
  const dealsQuery = useSWR("combos", getAllDeals);
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
      {productCategoriesQuery.data && (
        <div className="max-w-screen-xl mx-auto px-8 xl:px-0">
          <Categories categories={productCategories} />
        </div>
      )}
      <CombosAndDeals />
      <Testimonials />
    </div>
  );
}
