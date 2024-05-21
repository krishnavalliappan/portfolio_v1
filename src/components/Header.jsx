import Link from "next/link";
import Nav from "./sections/Nav";
import { Theme } from "./interface/ThemeSwitch";
import MobileNav from "./sections/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex flex-row justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-foreground text-3xl md:text-4xl relative font-semibold">
            krishna<span className="text-primary">.py</span>
          </h1>
        </Link>

        {/* Navigation only in desktop */}
        <div className="hidden xl:flex md:flex items-center gap-4 md:gap-8">
          <Nav />
          <Theme />
        </div>

        {/* Mobile Navigation */}
        <div className="flex xl:hidden md:hidden justify-between items-center gap-8">
          <Theme />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
