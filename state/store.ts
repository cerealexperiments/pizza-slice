import { create } from "zustand";
import { CartProduct } from "@/lib/types";

type ProductsStore = {
  products: CartProduct[];
  addProduct: (product: CartProduct) => void;
  removeProduct: (product: CartProduct) => void;
  changeProductQuantity: (product: CartProduct, quantity: number) => void;
};

export const useStore = create<ProductsStore>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => {
      if (!state.products.find((item) => item.slug == product.slug)) {
        return {
          products: [...state.products, product],
        };
      } else {
        return { products: [...state.products] };
      }
    }),
  removeProduct: (product) => {
    set((state) => {
      return {
        products: state.products.filter((item) => item.slug !== product.slug),
      };
    });
  },
  changeProductQuantity: (product, quantity) => {
    set((state) => {
      const foundProduct = state.products.find(
        (item) => item.slug === product.slug
      );
      foundProduct.quantity = quantity;

      return { products: [...state.products] };
    });
  },
}));
