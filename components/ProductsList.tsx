import PizzaCardSkeleton from "@/components/PIzzaCardSkeleton";
import { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

type ProductsListProps = {
  isLoading: boolean;
  products: Product[] | null;
};

const skeletons = Array.from({ length: 8 }, (_, index) => (
  <PizzaCardSkeleton key={index} />
));

export default function ProductsList({
  isLoading,
  products,
}: ProductsListProps) {
  return (
    <div className="py-8 px-4 mx-auto flex flex-wrap justify-center xl:justify-start gap-7 gap-y-8 md:mx-none">
      {isLoading
        ? skeletons
        : products
        ? products.map((product) => (
            <ProductCard
              key={product.title}
              slug={product.slug}
              title={product.title}
              image={product.image}
              description={
                product.description ? product.description : "Нет описания"
              }
              price={product.price}
            />
          ))
        : null}
    </div>
  );
}
