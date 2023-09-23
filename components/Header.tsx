import CartMenu from "@/components/CartMenu";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Header() {
  return (
    <header className="border sticky top-0 z-50 bg-white">
      <div className="max-w-screen-xl py-3 px-8 xl:px-0 flex items-center justify-between mx-auto">
        <Link href="/" className="text-2xl font-bold">
          <Image src={logo} width={150} height={25} alt="logo" />
        </Link>
        <CartMenu />
      </div>
    </header>
  );
}
