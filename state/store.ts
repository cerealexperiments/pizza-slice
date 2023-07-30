import { create } from "zustand";

type ProductType = {
  slug: string;
  title: string;
  description: string;
  quantity: number;
  image: string;
  price: number;
  size: string;
};

type ProductsStore = {
  products: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (product: ProductType) => void;
  changeProductQuantity: (product: ProductType, quantity: number) => void;
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
