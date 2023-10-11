import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import defaultImage from "../public/default.png";
import { Button } from "@/components/ui/button";
import { useStore } from "@/state/store";
import { Pizza, Product } from "@/lib/types";
import ProductDialog from "./ProductDialog";
import PizzaDialog from "./PizzaDialog";

type ProductCardProps = {
  product: Pizza | Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { products, addProduct } = useStore((state) => state);
  const added = !!products.find((item) => item.slug === product.slug);
  const price =
    "price" in product && product.price
      ? product.price
      : product.sizes[0].sizePrice;
  return (
    <Card className="max-w-[350px] pt-4 xl:max-w-[290px] overflow-hidden border-0 rounded flex flex-col">
      <CardContent>
        <Image
          width={500}
          className="w-full border border-gray-200 scale-110 overflow-hidden aspect-square"
          placeholder={defaultImage}
          height={500}
          src={product.image}
          alt={`${product.title} image`}
        />
      </CardContent>
      <CardHeader className="pb-4">
        <CardTitle className="font-medium">{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto flex-col items-start">
        <p className="mb-4 font-semibold text-gray-700">
          <span className="font-normal">от</span> {price} с.
        </p>
        <div className="flex justify-between w-full">
          {"price" in product && product.price ? (
            <ProductDialog
              slug={product.slug}
              title={product.title}
              image={product.image}
              price={"price" in product ? product.price : 0}
              description={
                product.description ? product.description : "something"
              }
              weight={product.weight}
            />
          ) : (
            <PizzaDialog
              slug={product.slug}
              title={product.title}
              image={product.image}
              sizes={product.sizes}
              description={product.description}
              ingredients={product.ingredients}
              weight={product.weight}
            />
          )}
          <Button
            onClick={() =>
              !added
                ? addProduct({
                    weight: product.weight,
                    slug: product.slug,
                    title: product.title,
                    image: product.image,
                    description: product.description,
                    price: price,
                    size:
                      "sizes" in product && product.sizes !== null
                        ? product.sizes[0].sizeTitle
                        : undefined,
                    quantity: 1,
                  })
                : console.log("product already added")
            }
            className="bg-rose-500 hover:bg-rose-600"
            disabled={added}
          >
            <span className="text-white font-bold">
              {!added ? "В корзину" : "В корзине"}
            </span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
