import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useStore } from "@/state/store";
import { Product } from "@/lib/types";
import ProductDialog from "./ProductDialog";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({
  slug,
  title,
  image,
  description,
  price,
}: Product) {
  const { products, addProduct } = useStore((state) => state);
  const added = !!products.find((item) => item.slug === slug);
  return (
    <Card className="max-w-[350px] pt-4 xl:max-w-[290px] border-0 rounded flex flex-col">
      <CardContent>
        <img className="aspect-square" src={image} alt={`${title} image`} />
      </CardContent>
      <CardHeader className="pb-4">
        <CardTitle className="font-medium">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto flex-col items-start">
        <p className="mb-4 font-semibold text-gray-700">
          <span className="font-normal">от</span> {price} с.
        </p>
        <div className="flex justify-between w-full">
          <ProductDialog
            slug={slug}
            title={title}
            image={image}
            price={price}
            description={description ? description : "something"}
          />
          <Button
            onClick={() =>
              !added
                ? addProduct({
                    slug,
                    title,
                    image,
                    description,
                    price,
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
