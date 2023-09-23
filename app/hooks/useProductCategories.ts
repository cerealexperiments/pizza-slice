import { getProductCategories } from "@/lib/data";
import useSWR from "swr";

export default function useProductCategories() {
  return useSWR("productCategories", getProductCategories);
}
