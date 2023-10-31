import useSWR from "swr";
import { getAllDeals } from "@/lib/data";
import Balance from "react-wrap-balancer";
import ComboCard from "./ComboCard";

export default function CombosAndDeals() {
  const dealsQuery = useSWR("combos", getAllDeals);
  return (
    <section>
      {dealsQuery.data && (
        <div className="max-w-screen-xl pb-24 mx-auto px-8 text-center">
          <h2 className="text-2xl font-bold leading-[1.1] text-gray-800 sm:text-3xl md:text-4xl">
            Комбо и акции
          </h2>
          <Balance className="max-w-[46rem] pt-4 pb-12 leading-normal text-gray-800 text-muted-foreground sm:text-lg sm:leading-7">
            Наше главное преимущество – разнообразие (чего...) (change later)
          </Balance>
          <div className="flex flex-col md:flex-row flex-wrap items-center">
            {dealsQuery.data.map((item) => (
              <ComboCard
                key={item.slug}
                slug={item.slug}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
