import CartMenu from "@/components/CartMenu";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="border sticky top-0 z-50 bg-white">
      <div className="max-w-screen-xl py-4 px-8 xl:px-0 flex items-center justify-between mx-auto">
          <Link href="/" className="text-2xl font-bold relative">
            <Image
              src={logo}
              className="w-[120px] sm:w-[150px]"
              width={150}
              height={25}
              alt="logo"
            />
          </Link>
        <CartMenu />
      </div>
    </header>
  );
}
