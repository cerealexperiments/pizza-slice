import { create } from "zustand";
import { CartProduct } from "@/lib/types";

type ProductsStore = {
	products: CartProduct[];
	addProduct: (product: CartProduct) => void;
	removeProduct: (product: CartProduct) => void;
	changeProductQuantity: (
		product: CartProduct,
		operation: "increase" | "decrease"
	) => void;
};

export const useStore = create<ProductsStore>((set) => ({
	products: [],
	addProduct: (product) =>
		set((state) => {
			if (!state.products.find((item) => item.slug == product.slug)) {
				return {
					products: [...state.products, product],
				};
			}
			return {
				products: [...state.products]
			}
		}),
	removeProduct: (product) => {
		set((state) => {
			return {
				products: state.products.filter((item) => item.slug !== product.slug),
			};
		});
	},
	changeProductQuantity: (product, operation: "increase" | "decrease") => {
		set((state) => {
			const foundProduct = state.products.find(
				(item) => item.slug === product.slug
			);
			if (operation === "increase") {
				foundProduct!.quantity += 1;
			} else if (operation === "decrease" && foundProduct!.quantity > 1) {
				foundProduct!.quantity -= 1;
			}
			return { products: [...state.products] };
		});
	},
}));
