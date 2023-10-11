import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image"

type ComboType = {
  title: string,
  description: string,
  image: string
}

export default function ComboDialog({
  image,
  description,
  title,
}: ComboType) {
  return (
    <Dialog>
      <DialogTrigger className="text-gray-700 border rounded-md hover:bg-gray-50 transition-colors text-sm font-medium px-4 py-1.5">
        Подробнее
      </DialogTrigger>
      <DialogContent className="px-12 sm:px-6 sm:grid sm:grid-cols-2 gap-12 w-[90vw] max-w-3xl">
        <div className="flex-1 flex items-center max-w-[300px] mx-auto">
          <Image width={400} className="min-h-[200px] object-cover" height={400} src={image} alt="" />
        </div>
        <div>
          <DialogTitle className="mb-2 text-2xl font-medium tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="mb-4">{description}</DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
