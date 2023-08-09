import { client } from "@/lib/sanity";
import { Pizza, Product, ProductCategory } from "@/lib/types";

type PizzaType = Omit<Pizza, "slug"> & { slug: { current: string } };

type ProductType = Omit<Product, "slug"> & { slug: { current: string } };

export const getProductsByCategory = async (category: string) => {
  return await client.fetch<PizzaType[] | ProductType[]>(
    `*[_type == "${category}"]`
  );
};

export const getProductCategories = async () => {
  return await client.fetch<ProductCategory[]>(`*[_type == "productType"]`);
};
