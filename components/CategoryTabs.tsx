import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CategoryTabsProps = {
  categories:
    | {
        title: string;
        value: string;
      }[]
    | null;
  defaultCategory: string | null;
  changeCategoryFilter: (categoryFilter: string) => void;
};

export default function CategoryTabs({
  categories,
  changeCategoryFilter,
  defaultCategory,
}: CategoryTabsProps) {
  const defaultValue = categories
    ?.map((item) => item.value)
    .includes(defaultCategory!)
    ? defaultCategory
    : "pizza";
  return (
    <Tabs
      onValueChange={(value) => changeCategoryFilter(value)}
      defaultValue={defaultValue!}
      className="max-w-[400px] mt-6"
    >
      <TabsList className="flex-wrap">
        {categories
          ? categories.map((item) => (
              <TabsTrigger
                className="font-semibold"
                key={item.value}
                value={item.value}
              >
                {item.title}
              </TabsTrigger>
            ))
          : null}
      </TabsList>
    </Tabs>
  );
}
