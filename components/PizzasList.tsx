import PizzaCardSkeleton from "@/components/PIzzaCardSkeleton";
import { Pizza } from "@/lib/types";
import PizzaCard from "@/components/PizzaCard";

type PizzasListProps = {
  isLoading: boolean;
  pizzas: Pizza[] | null;
};

const skeletons = Array.from({ length: 8 }, (_, index) => (
  <PizzaCardSkeleton key={index} />
));

export default function PizzasList({ isLoading, pizzas }: PizzasListProps) {
  return (
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
  );
}
