"use client";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import { urlFor } from "@/lib/sanity";
import useProductCategories from "./hooks/useProductCategories";
import Testimonials from "@/components/Testimonials";
import ComboCard from "@/components/ComboCard";
import defaultImage from "../public/default.png"
import Balance from "react-wrap-balancer"
import useSWR from "swr"
import { getAllDeals } from "@/lib/data";

export default function Home() {
  const dealsQuery = useSWR("combos", getAllDeals)
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
        <div className="max-w-screen-xl pt-24 mx-auto px-8 xl:px-0">
          <Categories categories={productCategories} />
        </div>
      )}
      <Testimonials/>
      {dealsQuery.data && <div className="max-w-screen-xl pb-24 mx-auto px-8 text-center">
        <h2 className="text-2xl font-bold leading-[1.1] text-gray-800 sm:text-3xl md:text-4xl">
          Комбо и акции
        </h2>
        <Balance className="max-w-[46rem] pb-4 leading-normal text-gray-800 text-muted-foreground sm:text-lg sm:leading-7">
          Наше главное преимущество – разнообразие (чего...) (change later)
        </Balance>
        {dealsQuery.data.map(item => <ComboCard key={item.slug} slug={item.slug} title={item.title} description={item.description} image={item.image}/>)}
      </div>}
    </div>
  );
}
