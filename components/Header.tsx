import CartMenu from "@/components/CartMenu";
import Link from "next/link";

export default function Header() {
  
  return (
    <header className="border sticky top-0 z-50 bg-white">
      <div className="max-w-screen-xl py-3 px-8 xl:px-0 flex items-center justify-between mx-auto">
        <Link href="/" className="text-2xl font-bold">
          Pizza<span className="text-red-500">Slice</span>
        </Link>
        <CartMenu />
      </div>
    </header>
  );
}
