"use client";
import useSWR from "swr";
import { getFeaturedProducts } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import ProductsList from "@/components/ProductsList";
export default function FeaturedProducts() {
  const { data, isLoading } = useSWR("featured products", getFeaturedProducts);
  if (isLoading) return <div>loading featured products</div>;
  return (
    <div className="mt-6">
      <h3 className="mb-4 font-medium text-xl">Часто заказывают</h3>
      {data && <ProductsList isLoading={isLoading} products={data} />}
    </div>
  );
}
