import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { useStore } from "@/state/store";
import Image from "next/image";
import defaultImage from "../public/default.png";
import { useToast } from "./ui/use-toast";

export default function ProductDialog({
  slug,
  image,
  title,
  price,
  weight,
  description = "nothing",
}: Product) {
  const { products, addProduct } = useStore((state) => state);
  const added = !!products.find((item) => item.slug === slug);
  const { toast } = useToast();
  return (
    <Dialog>
      <DialogTrigger className="text-gray-700 border rounded-md hover:bg-gray-50 transition-colors text-sm font-medium px-4 py-1.5">
        Подробнее
      </DialogTrigger>
      <DialogContent className="w-fit px-12 sm:px-6 sm:grid sm:grid-cols-2 gap-12 w-[90vw] max-w-3xl">
        <div className="flex-1 flex items-center max-w-[300px] mx-auto">
          <Image
            className="aspect-square"
            width={500}
            height={500}
            placeholder={defaultImage}
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <DialogTitle className="mb-2 text-2xl font-medium tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="mb-4 mt-auto">
            {description}
          </DialogDescription>
          <p className="mt-auto text-gray-600 text-sm pb-4 flex items-center">
            Вес: {weight} г.
          </p>
          <div className="flex justify-between items-center">
            <Button
              onClick={() => {
                if (!added) {
                  addProduct({
                    weight,
                    slug,
                    title,
                    image,
                    description,
                    price,
                    quantity: 1,
                  });
                  console.log("nigger");
                  toast({ title: "Продукт добавлен в корзину" });
                } else {
                  toast({ title: "Продукт уже был добавлен в корзину" });
                }
              }}
              className="bg-rose-500 hover:bg-rose-600 w-full max-w-[200px]"
              disabled={added}
            >
              <span className="text-white font-bold">
                {!added ? "В корзину" : "В корзине"}
              </span>
            </Button>
            <span className="whitespace-nowrap font-medium">
              {price} <span className="font-normal">c</span>
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
