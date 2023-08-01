import { client } from "@/lib/sanity";
import { Pizza } from "@/lib/types";

type PizzaType = Omit<Pizza, "slug"> & { slug: { current: string } };

export const getProductsByCategory = async (category: string) => {
  return await client.fetch<PizzaType[]>(`*[_type == "${category}"]`);
};
