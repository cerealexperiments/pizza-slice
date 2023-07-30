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

type PizzaCardProps = {
  slug: string;
  title: string;
  image: string;
  description: string;
  price: number;
  size: string;
};

export default function PizzaCard({
  slug,
  title,
  image,
  description,
  price,
  size,
}: PizzaCardProps) {
  const { products, addProduct } = useStore((state) => state);
  const added = !!products.find((item) => item.slug === slug);
  return (
    <Card className="max-w-[350px] xl:max-w-[290px] border-none flex flex-col">
      <CardContent>
        <img src={image} alt={`${title} image`} />
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between mt-auto">
        <Button className="text-gray-700" variant="outline" size="sm">
          Подробнее
        </Button>
        <Button
          onClick={() =>
            !added
              ? addProduct({
                  slug,
                  title,
                  image,
                  description,
                  price,
                  size,
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
      </CardFooter>
    </Card>
  );
}
