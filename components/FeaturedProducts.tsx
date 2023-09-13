import useSWR from "swr";
import { getFeaturedProducts } from "@/lib/data";
export default function FeaturedProducts() {
	const { data, isLoading } = useSWR(
		"featured products",
		getFeaturedProducts
	);
	if (isLoading) return <div>loading featured products</div>;
	return (
		<div className="mt-6">
			<h3 className="mb-4 font-medium text-xl">Часто заказывают</h3>
			{data && (
				<div className="flex gap-6 py-2 flex-wrap">
					{data.map((item) => (
						<div
							key={item.slug}
							className="flex items-center border gap-4 rounded-lg px-4 py-4 max-w-[250px]"
						>
							<img className="w-1/3 object-cover" src={item.image} alt="" />
							<div className="flex-1">
								<p className="font-medium">{item.title}</p>
								<p className="text-sm">{item.price} сом</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
