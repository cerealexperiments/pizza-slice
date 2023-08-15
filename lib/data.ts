import { client, urlFor } from "@/lib/sanity";
import { Pizza, PizzaSize, Product, ProductCategory } from "@/lib/types";

type PizzaType = Omit<Pizza, "slug"> & { slug: { current: string } };

type ProductType = Omit<Product, "slug"> & { slug: { current: string } };

type FeaturedProduct = {
  product: {
    slug: {
      current: string;
    };
    title: string;
    price?: number;
    image: string;
    description: string;
    sizes?: PizzaSize[];
  };
};

export const getProductsByCategory = async (category: string) => {
  return await client.fetch<PizzaType[] | ProductType[]>(
    `*[_type == "${category}"]`
  );
};

export const getProductCategories = async () => {
  return await client.fetch<ProductCategory[]>(`*[_type == "productType"]`);
};

export const getFeaturedProducts = async () => {
  const response = await client.fetch<FeaturedProduct[]>(
    '*[_type == "featured"]{\n' +
      "  product -> {\n" +
      "    title,\n" +
      "    description,\n" +
      "    image,\n" +
      "    price,\n" +
      "    sizes,\n" +
      "    slug, \n" +
      "  }\n" +
      "}"
  );
  return response.map((item) => {
    return {
      slug: item.product.slug.current,
      image: urlFor(item.product.image).url(),
      title: item.product.title,
      description: item.product.description,
      price: item.product.price
        ? item.product.price
        : item.product.sizes![0].sizePrice,
    };
  });
};
