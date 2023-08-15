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

export default function ProductDialog({
  slug,
  image,
  title,
  price,
  description = "nothing",
}: Product) {
  const { products, addProduct } = useStore((state) => state);
  const added = !!products.find((item) => item.slug === slug);
  return (
    <Dialog>
      <DialogTrigger className="text-gray-700 border rounded-md hover:bg-gray-50 transition-colors text-sm font-medium px-4 py-1.5">
        Подробнее
      </DialogTrigger>
      <DialogContent className="w-fit px-12 sm:px-6 sm:grid sm:grid-cols-2 gap-12 w-[90vw] max-w-3xl">
        <div className="flex-1 flex items-center max-w-[300px] mx-auto">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col">
          <DialogTitle className="mb-2 text-2xl font-medium tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="mb-4">{description}</DialogDescription>
          <div className="mt-auto flex justify-between items-center">
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
