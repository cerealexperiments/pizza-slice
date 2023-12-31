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
import CartProduct from "@/components/CartProduct";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useStore } from "@/state/store";
import Link from "next/link";

export default function CartMenu() {
  const { products } = useStore((state) => state);
  const total = products.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0,
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
                <CartProduct key={product.slug} product={product} />
              ))}
            </ul>
            <div className="border-t mt-auto border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Итого</p>
                <p>{total} сом</p>
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
