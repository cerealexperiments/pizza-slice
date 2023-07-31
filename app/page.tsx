"use client";
import PizzaCard from "@/components/PizzaCard";
import useSWR from "swr";
import { getAllPizzas } from "@/lib/data";
import { urlFor } from "@/lib/sanity";
import { useStore } from "@/state/store";
import PizzaCardSkeleton from "@/components/PIzzaCardSkeleton";

export default function Home() {
  const { data, isLoading, error } = useSWR("all pizzas", getAllPizzas);
  const products = useStore((state) => state.products);
  console.log(products);
  const skeletons = Array.from({ length: 8 }, (_, index) => (
    <PizzaCardSkeleton key={index} />
  ));
  const pizzas = data
    ? data.map((item) => {
        return {
          ...item,
          slug: item.slug.current,
          image: item.image ? urlFor(item.image).url() : null,
        };
      })
    : null;
  console.log(data);

  return (
    <main className="max-w-screen-xl flex-1 mx-auto border-x w-full">
      <div className="py-8 px-4 mx-auto flex flex-wrap justify-center gap-7 gap-y-8 md:mx-none">
        {isLoading
          ? skeletons
          : pizzas
          ? pizzas.map((pizza) => (
              <PizzaCard
                key={pizza.title}
                slug={pizza.slug}
                title={pizza.title}
                image={pizza.image}
                ingredients={pizza.ingredients}
                sizes={pizza.sizes}
                description={pizza.description}
                price={pizza.sizes[0].sizePrice}
              />
            ))
          : null}
      </div>
    </main>
  );
}
