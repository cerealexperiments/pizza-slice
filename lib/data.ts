import { client, urlFor } from "@/lib/sanity";
import { Category, Pizza, PizzaSize, Product } from "@/lib/types";

export type PizzaResponse = Omit<Pizza, "slug"> & { slug: { current: string } };

type ProductResponse = Omit<Product, "slug"> & { slug: { current: string } };

export const getProductsByCategory = async (category: string) => {
  const response = await client.fetch<ProductResponse[] | PizzaResponse[]>(
    `*[_type == "${category}"]`,
  );
  if (category === "pizza") {
    return (response as PizzaResponse[]).map((item) => ({
      ...item,
      slug: item.slug.current,
      image: urlFor(item.image).url(),
    }));
  }
  return (response as ProductResponse[]).map((item) => ({
    ...item,
    slug: item.slug.current,
    image: urlFor(item.image).url(),
  }));
};

export const getAllProducts = async (productTypes: string[]) => {
  const productTypesString = productTypes.map((item) => `"${item}"`).join(", ");
  const response = await client.fetch<Array<ProductResponse | PizzaResponse>>(
    `*[_type in [${productTypesString}]] | order(_type)`,
  );
  return response.map((item) => {
    return {
      ...item,
      slug: item.slug.current,
      image: urlFor(item.image).url(),
    };
  });
};

export const getProductCategories = async () => {
  const response = await client.fetch<Category[]>(
    `*[_type == "productType"] | order(_createdAt asc)`,
  );
  return response.map((item) => {
    return {
      title: item.title,
      value: item.value,
      image: urlFor(item.image).url(),
    };
  });
};

export const getAllDeals = async () => {
  const response = await client.fetch<DealResponse[]>(`*[_type == "deal"]`);
  return response.map((item) => {
    return {
      title: item.title,
      slug: item.slug.current,
      description: item.description,
      image: urlFor(item.image).url(),
    };
  });
};

type DealResponse = {
  title: string;
  image: string;
  slug: {
    current: string;
  };
  description: string;
};

export type Deal = {
  title: string;
  image: string;
  description: string;
  slug: string;
};

type FeaturedResponse = {
  product: ProductResponse | PizzaResponse;
};

export const getFeaturedProducts = async () => {
  const response = await client.fetch<Array<FeaturedResponse>>(
    '*[_type == "featured"]{\n' +
      "  product -> {\n" +
      "    title,\n" +
      "    description,\n" +
      "    ingredients,\n" +
      "    image,\n" +
      "    price,\n" +
      "    sizes,\n" +
      "    slug,\n" +
      "    weight,\n" +
      "  }\n" +
      "}",
  );
  return response.map((item) => {
    return {
      ...item.product,
      slug: item.product.slug.current,
      image: urlFor(item.product.image).url(),
    };
  });
};
