type PizzaSize = {
  sizeTitle: string;
  sizePrice: number;
};

export type Pizza = {
  slug: string;
  title: string;
  image: string;
  description: string;
  sizes: PizzaSize[];
  ingredients: string[];
};

export type Drink = {
  slug: string;
  title: string;
  image: string;
  description: string;
  price: number;
};

export type CartProduct = {
  slug: string;
  productType: string;
  title: string;
  price: string;
  image: string;
  description: string;
  quantity: number;
};
