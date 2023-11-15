import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="gap-4 w-max py-3 px-8 border border-dark rounded-full font-medium capitalize flex items-center  bg-light/80 backdrop-blur-sm ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="flex gap-6">
        <a> Linkedln </a>
        <a> Twitter </a>
        <a> Github </a>
      </div>
    </header>
  );
};

export default Header;
