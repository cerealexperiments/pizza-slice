"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useStore } from "@/state/store";
import Link from "next/link";

export default function CartMenu() {
  const { products, removeProduct, changeProductQuantity } = useStore(
    (state) => state
  );
  return (
    <Sheet>
      <SheetTrigger className="relative">
        <ShoppingBagIcon className="h-7" />
        {products.length > 0 && (
          <div className="w-3.5 transition-all font-medium h-3.5 bg-rose-500 rounded-full absolute bottom-0 right-0 text-xs text-white flex justify-center items-center">
            {products.length}
          </div>
        )}
      </SheetTrigger>
      <SheetContent className="max-w-screen-xl flex flex-col overflow-y-scroll sm:max-w-lg w-full">
        <SheetHeader>
          <SheetTitle className="mb-2">Корзина</SheetTitle>
          <SheetDescription className="pb-4">
            {products.length > 0 ? "Продукты в корзине:" : "Корзина пуста"}
          </SheetDescription>
        </SheetHeader>
        {products.length > 0 && (
          <div className="flex flex-col flex-1">
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
                            {product.size && (
                              <span className="ml-2 font-normal text-gray-600">
                                ({product.size})
                              </span>
                            )}
                          </a>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">
                          {product.price * product.quantity} сом
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 w-4/5">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <span>Количество: </span>
                          <div className="flex border py-0.5 gap-1 items-center">
                            <button
                              onClick={() =>
                                changeProductQuantity(
                                  product,
                                  product.quantity - 1
                                )
                              }
                              className="px-1.5 flex-1 border-r"
                            >
                              -
                            </button>
                            <span className="px-2.5 flex-1">
                              {product.quantity}
                            </span>
                            <button
                              onClick={() => {
                                changeProductQuantity(
                                  product,
                                  product.quantity + 1
                                );
                              }}
                              className="px-1.5 flex-1 border-l"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
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
            <div className="border-t mt-auto border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Итого</p>
                <p>
                  {products.reduce(
                    (accumulator, currentItem) =>
                      accumulator + currentItem.price * currentItem.quantity,
                    0
                  )}{" "}
                  сом
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Стоимость заказа без учета доставки
              </p>
              <div className="mt-6">
                <SheetClose asChild>
                  <Link
                    href="/checkout"
                    className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700"
                  >
                    К оплате
                  </Link>
                </SheetClose>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
