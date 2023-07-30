"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useStore } from "@/state/store";

export default function CartMenu() {
  const products = useStore((state) => state.products);
  return (
    <Dialog>
      <DialogTrigger>
        <ShoppingBagIcon className="h-6" />
      </DialogTrigger>
      <DialogContent className="max-w-xl w-full">
        <DialogHeader>
          <DialogTitle className="mb-2">Корзина</DialogTitle>
          <DialogDescription>
            {products.length > 0 ? "Продукты в корзине:" : "Корзина пуста"}
          </DialogDescription>
        </DialogHeader>
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
                            className="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {product.title}
                          </a>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">
                          {product.price} сом
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.size}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      <p className="flex items-center space-x-2 text-sm text-gray-700">
                        <span>Количество: {product.quantity}</span>
                      </p>
                      <div className="ml-4">
                        <button
                          type="button"
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
      </DialogContent>
    </Dialog>
  );
}
