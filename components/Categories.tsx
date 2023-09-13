import Link from "next/link";
import Balance from "react-wrap-balancer";
import { Category } from "@/lib/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

type CategoriesProps = {
  categories: Category[] | null;
};

export default function Categories({ categories }: CategoriesProps) {
  if (categories === null) {
    return <div>loading</div>;
  }
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-6 py-6 md:pt-10 lg:pt-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-2xl font-bold leading-[1.1] text-gray-800 sm:text-3xl md:text-4xl">
          Категории
        </h2>
        <Balance className="max-w-[46rem] leading-normal text-gray-800 text-muted-foreground sm:text-lg sm:leading-7">
          Наше главное преимущество – разнообразие (чего...)
        </Balance>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            aria-label={`Go to ${category.title}`}
            key={category.title}
            href={`/menu?category=${category.value}`}
          >
            <div className="group relative overflow-hidden rounded-md">
              <AspectRatio ratio={4 / 5}>
                <div className="absolute inset-0 z-10 bg-black/60 transition-colors group-hover:bg-black/70" />
                <Image
                  src={category.image}
                  alt={category.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  priority
                />
              </AspectRatio>
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-3xl font-semibold capitalize text-slate-100 md:text-2xl">
                  {category.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
