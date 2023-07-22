import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PizzaCardProps = {
  slug: string;
  title: string;
  image: string;
  description: string;
  price: number;
  // weight: number;
};

export default function PizzaCard({
  slug,
  title,
  image,
  description,
  price,
}: // weight,
PizzaCardProps) {
  return (
    <Card className="max-w-[350px] xl:max-w-[290px]">
      <CardContent>
        <img src={image} alt={`${title} image`} />
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button className="text-gray-700" variant="outline" size="sm">
          Подробнее
        </Button>
        <Button className="bg-rose-500 hover:bg-rose-600">
          <span className="text-white font-bold">В корзину</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
