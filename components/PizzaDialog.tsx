import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pizza } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { useStore } from "@/state/store";
import { useState } from "react";

export default function PizzaDialog({
  slug,
  image,
  description,
  title,
  sizes,
  ingredients,
}: Pizza) {
  const { products, addProduct } = useStore((state) => state);
  const added = !!products.find((item) => item.slug === slug);
  const [selectedSize, setSelectedSize] = useState(sizes[0].sizeTitle);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [excludedIngredients, setExcludedIngredients] = useState([]);
  console.log(excludedIngredients);
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="text-gray-700" variant="outline" size="sm">
          Подробнее
        </Button>
      </DialogTrigger>
      <DialogContent className="w-fit px-12 sm:px-6 sm:w-full sm:grid sm:grid-cols-2 gap-12 max-w-2xl">
        <img className="flex-1 max-w-[300px] mx-auto" src={image} alt="" />
        <div>
          <DialogTitle className="mb-2 text-2xl font-semibold tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="mb-4">{description}</DialogDescription>
          <p className="mt-4 mb-2 font-medium">Размер</p>
          <Select
            defaultValue={selectedSize}
            onValueChange={(value) => {
              setSelectedSize(value);
              const foundIndex = sizes.findIndex(
                (item) => item.sizeTitle === value
              );
              setSelectedSizeIndex(foundIndex);
            }}
          >
            <SelectTrigger className="w-[180px] focus:ring-0 focus:ring-offset-0">
              <SelectValue defaultValue={selectedSize} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {sizes.map((item) => (
                  <SelectItem key={item.sizeTitle} value={item.sizeTitle}>
                    {item.sizeTitle}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="mt-4 mb-2 font-medium">Ингридиенты</p>
          <div className="flex gap-2">
            {ingredients.map((item) => (
              <Toggle
                className="border font-normal py-1.5 h-fit text-gray-700 data-[state=on]:line-through decoration-rose-500 data-[state=on]:bg-white hover:bg-white hover:line-through hover:text-gray-700"
                onPressedChange={(pressed) => {
                  if (pressed) {
                    setExcludedIngredients((prev) => [...prev, item]);
                  } else {
                    setExcludedIngredients((prev) =>
                      prev.filter((ingredient) => ingredient !== item)
                    );
                  }
                }}
                value={item}
                key={item}
              >
                {item}
              </Toggle>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
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
              className="bg-rose-500 hover:bg-rose-600 w-full max-w-[200px]"
              disabled={added}
            >
              <span className="text-white font-bold">
                {!added ? "В корзину" : "В корзине"}
              </span>
            </Button>
            <span className="whitespace-nowrap font-medium ">
              {sizes[selectedSizeIndex].sizePrice}{" "}
              <span className="font-normal">c</span>
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
