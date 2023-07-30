import { Skeleton } from "@/components/ui/skeleton";

export default function PizzaCardSkeleton() {
  return (
    <div className="max-w-[350px] max-h-[550px] w-full xl:max-w-[290px] flex flex-col">
      <Skeleton className="w-[240px] self-center h-[240px] rounded-full m-6 mt-0" />
      <div className="p-6">
        <Skeleton className="h-6 w-2/3"></Skeleton>
        <Skeleton className="h-4 pt-4 mt-4"></Skeleton>
        <Skeleton className="h-4 pt-4 mt-1.5"></Skeleton>
        <Skeleton className="h-4 pt-4 mt-1.5"></Skeleton>
      </div>
      <div className="p-6 pt-0 mt-auto">
        <div className="flex justify-between items-center ">
          <Skeleton className="h-9 rounded-md w-24 px-3" />
          <Skeleton className="h-9 rounded-md w-24 px-3" />
        </div>
      </div>
    </div>
  );
}
