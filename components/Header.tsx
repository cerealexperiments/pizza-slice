import CartMenu from "@/components/CartMenu";
export default function Header() {
  return (
    <header className="border">
      <div className="max-w-screen-xl py-3 px-8 xl:px-0 flex justify-between mx-auto">
        <h1 className="text-2xl font-bold">
          Pizza<span className="text-red-500">Slice</span>
        </h1>
        <CartMenu />
      </div>
    </header>
  );
}
