"use client";
import PizzaCard from "@/components/PizzaCard";
import useSWR from "swr";
import { getAllPizzas } from "@/lib/data";
import { urlFor } from "@/lib/sanity";

export default function Home() {
  const { data, isLoading, error } = useSWR("all pizzas", getAllPizzas);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error occurred</div>;
  const pizzas = data
    ? data.map((item) => {
        return { ...item, image: item.image ? urlFor(item.image).url() : null };
      })
    : null;
  console.log(data);
  console.log(pizzas);

  return (
    <main className="max-w-screen-xl flex-1 mx-auto border-x w-full">
      <div className="py-8 px-4 mx-auto flex flex-wrap justify-center gap-7 gap-y-8 md:mx-none">
        {pizzas
          ? pizzas.map((pizza) => (
              <PizzaCard
                key={pizza.title}
                slug={pizza.title}
                title={pizza.title}
                image={pizza.image}
                description={pizza.description}
                price={pizza.sizes[0].sizePrice}
              />
            ))
          : null}
      </div>
    </main>
  );
}
