import { client } from "@/lib/sanity";
import { Pizza } from "@/lib/types";

type PizzaType = Omit<Pizza, "slug"> & { slug: { current: string } };

export const getAllPizzas = async () => {
  return await client.fetch<PizzaType[]>(`*[_type == "pizza"]`);
};
