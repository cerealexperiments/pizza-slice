export type ProductCategory = {
  title: string;
  value: string;
};

export type PizzaSize = {
  sizeTitle: string;
  sizePrice: number;
};

export type Product = {
  slug: string;
  title: string;
  image: string;
  description?: string;
  price: number;
};

export type Pizza = Omit<Product, "price"> & {
  description: string;
  sizes: PizzaSize[];
  ingredients: string[];
};

export type CartProduct = Product & {
  quantity: number;
  size?: string;
};
