import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CategoryTabsProps = {
  categories:
    | {
        title: string;
        value: string;
      }[]
    | null;
  changeCategoryFilter: (categoryFilter: string) => void;
};

export default function CategoryTabs({
  categories,
  changeCategoryFilter,
}: CategoryTabsProps) {
  return (
    <Tabs
      onValueChange={(value) => changeCategoryFilter(value)}
      defaultValue="pizza"
      className="max-w-[400px] mt-6"
    >
      <TabsList>
        {categories
          ? categories.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.title}
              </TabsTrigger>
            ))
          : null}
      </TabsList>
    </Tabs>
  );
}
