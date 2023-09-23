"use client";

import { CartProduct } from "@/lib/types";
import { useStore } from "@/state/store";

export default function CartProduct({ product }: { product: CartProduct }) {
  const { changeProductQuantity, removeProduct } = useStore((state) => state);
  return (
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
          <p className="mt-1 text-sm text-gray-500 max-w-[80%]">
            {product.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 flex-1 items-end justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span>Количество: </span>
              <div className="flex border py-0.5 gap-1 items-center">
                <button
                  onClick={() => changeProductQuantity(product, "decrease")}
                  className="px-1.5 flex-1 border-r"
                >
                  -
                </button>
                <span className="px-2.5 flex-1">{product.quantity}</span>
                <button
                  onClick={() => {
                    changeProductQuantity(product, "increase");
                  }}
                  className="px-1.5 flex-1 border-l"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeProduct(product)}
            className="text-sm self-center font-medium text-rose-500 hover:text-rose-600 transition-colors"
          >
            Удалить
          </button>
        </div>
      </div>
    </li>
  );
}
