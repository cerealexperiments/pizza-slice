import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import defaultImage from "../public/default.png";
import ComboDialog from "./ComboDialog";

type ComboCardProps = {
  image: string;
  description: string;
  title: string;
  slug: string;
};

export default function ComboCard({
  image,
  description,
  title,
  slug,
}: ComboCardProps) {
  return (
    <Card className="max-w-[350px] pt-4 xl:max-w-[290px] overflow-hidden border-0 rounded flex flex-col">
      <CardContent>
        <Image
          width={500}
          className="w-full object-cover border border-gray-200 overflow-hidden aspect-square"
          placeholder={defaultImage}
          height={500}
          src={image}
          alt={`${image} image`}
        />
      </CardContent>
      <CardHeader className="pb-4">
        <CardTitle className="font-medium">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto flex-col items-start">
        <div className="flex justify-center w-full">
          <ComboDialog title={title} image={image} description={description} />
        </div>
      </CardFooter>
    </Card>
  );
}
