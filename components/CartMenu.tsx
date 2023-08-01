"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useStore } from "@/state/store";

export default function CartMenu() {
  const { products, removeProduct } = useStore((state) => state);
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBagIcon className="h-6" />
      </SheetTrigger>
      <SheetContent className="max-w-screen-xl sm:max-w-lg w-full">
        <SheetHeader>
          <SheetTitle className="mb-2">Корзина</SheetTitle>
          <SheetDescription className="pb-4">
            {products.length > 0 ? "Продукты в корзине:" : "Корзина пуста"}
          </SheetDescription>
        </SheetHeader>
        <div>
          {products.length > 0 && (
            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {products.map((product) => (
                <li key={product.slug} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt="product image"
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <a
                            href={product.slug}
                            className="font-medium text-gray-800 hover:text-gray-800"
                          >
                            {product.title}
                          </a>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">
                          {product.price} сом
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 w-4/5">
                        {product.description}
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        Размер:{" "}
                        <span className="text-gray-600">{product.size}</span>
                      </p>
                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      <p className="flex items-center space-x-2 text-sm text-gray-700">
                        <span>Количество: {product.quantity}</span>
                      </p>
                      <div className="ml-4">
                        <button
                          type="button"
                          onClick={() => removeProduct(product)}
                          className="text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors"
                        >
                          <span>Удалить</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
