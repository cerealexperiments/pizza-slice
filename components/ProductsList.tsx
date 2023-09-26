import PizzaCardSkeleton from "@/components/PizzaCardSkeleton";
import { Product, Pizza } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

type ProductsListProps = {
  isLoading: boolean;
  products: Product[] | Pizza[] | null;
};

const skeletons = Array.from({ length: 8 }, (_, index) => (
  <PizzaCardSkeleton key={index} />
));

export default function ProductsList({
  isLoading,
  products,
}: ProductsListProps) {
  return (
    <div className="py-8 mx-auto flex flex-wrap justify-center xl:justify-start gap-7 gap-y-8 md:mx-none">
      {isLoading
        ? skeletons
        : products
        ? products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))
        : null}
    </div>
  );
}
