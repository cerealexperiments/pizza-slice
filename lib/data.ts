import { client } from "@/lib/sanity";

type PizzaSizeType = {
  sizeTitle: string;
  sizePrice: number;
};

type PizzaType = {
  title: string;
  description: string;
  image: string;
  sizes: PizzaSizeType[];
  ingredients: string[];
};

export const getAllPizzas = async () => {
  return await client.fetch<PizzaType[]>(`*[_type == "pizza"]`);
};
