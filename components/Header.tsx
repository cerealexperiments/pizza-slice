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
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-bold relative">
            <Image
              src={logo}
              className="w-[120px] sm:w-[150px]"
              width={150}
              height={25}
              alt="logo"
            />
            <DropdownMenu>
              <DropdownMenuTrigger className="sm:hidden absolute -right-5 top-2 text-gray-500"><ChevronDown size={28}/></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Link href="/menu">Меню</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/info/about">О нас</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/info/contacts"/>Контакты</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Link>
          <nav className="gap-x-6 hidden sm:flex">
            <Link className="text-sm text-slate-700 font-medium" href="/menu">Меню</Link>
            <Link className="text-sm text-slate-700 font-medium" href="/info/contacts">Контакты</Link>
            <Link className="text-sm text-slate-700 font-medium" href="/info/about">О нас</Link>
          </nav>
        </div>
        <CartMenu />
      </div>
    </header>
  );
}
