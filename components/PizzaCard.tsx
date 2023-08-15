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
import PizzaDialog from "@/components/PizzaDialog";
import { Pizza } from "@/lib/types";

export default function PizzaCard({
  slug,
  title,
  image,
  description,
  ingredients,
  sizes,
}: Pizza) {
  const { products, addProduct } = useStore((state) => state);
  const added = !!products.find((item) => item.slug === slug);
  return (
    <Card className="max-w-[350px] pt-4 xl:max-w-[290px] border-none shadow-custom flex flex-col">
      <CardContent>
        <img src={image} alt={`${title} image`} />
      </CardContent>
      <CardHeader className="pb-4">
        <CardTitle className="font-medium">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto flex-col items-start">
        <p className="mb-4 font-medium text-gray-700">
          <span className="font-normal">от</span> {sizes[0].sizePrice} с.
        </p>
        <div className="flex justify-between w-full">
          <PizzaDialog
            slug={slug}
            title={title}
            image={image}
            description={description}
            sizes={sizes}
            ingredients={ingredients}
          />
          <Button
            onClick={() =>
              !added
                ? addProduct({
                    slug,
                    title,
                    image,
                    description,
                    price: sizes[0].sizePrice,
                    size: sizes[0].sizeTitle,
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
