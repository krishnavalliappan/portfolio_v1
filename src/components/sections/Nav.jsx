"use client";

import { motion } from "framer-motion";
import { cn } from "@lib/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/skills",
    name: "Skills",
  },
  {
    path: "/blogs",
    name: "Blogs",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathname ? "text-primary" : "text-foreground"
          } capitalize relative hover:text-primary transition-all`}
        >
          {link.path === pathname && (
            <motion.div
              layoutId="clickedbutton"
              transition={{
                delay: 2,
                type: "spring",
                bounce: 0.3,
                duration: 0.6,
              }}
              className={cn("absolute h-full inset-0  rounded-full ")}
            >
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary "></div>
            </motion.div>
          )}

          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
