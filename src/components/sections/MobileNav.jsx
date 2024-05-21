"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries, CiHome, CiUser } from "react-icons/ci";
import {
  AiOutlineProject,
  AiOutlineTool,
  AiOutlineBook,
  AiOutlinePhone,
} from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import { AnimatePresence, motion } from "framer-motion";

const links = [
  {
    path: "/",
    name: "Home",
    icon: <CiHome size={26} />,
  },
  {
    path: "/about",
    name: "About",
    icon: <CiUser size={26} />,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <AiOutlineProject size={26} />,
  },
  {
    path: "/skills",
    name: "Skills",
    icon: <AiOutlineTool size={26} />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    icon: <AiOutlineBook size={26} />,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <AiOutlinePhone size={26} />,
  },
];

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        onClick={toggleOpen}
      >
        <CiMenuFries className="text-3xl text-foreground hover:text-primary" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVars}
            className="fixed left-0 top-0 w-full h-screen origin-top bg-oppositeBackground z-50"
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full items-center"
            >
              <div className="cursor-pointer" onClick={toggleOpen}>
                <IoMdClose className="absolute right-0 m-4 mr-2 text-3xl hover:text-oppositePrimary text-oppositeForeground transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
              </div>
              <div className="mt-24 mb-24 text-center text-2xl">
                <Link href="/" onClick={toggleOpen}>
                  <h1 className="text-oppositeForeground first:text-4xl relative font-semibold">
                    krishna
                    <span className="ml-[-26] text-oppositePrimary">.py</span>
                  </h1>
                </Link>
              </div>
              <div className="flex flex-col justify-center gap-8">
                {links.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={mobileLinkVars}
                    className="uppercase"
                  >
                    <Link
                      href={link.path}
                      onClick={toggleOpen}
                      className={`${
                        link.path === pathname
                          ? "text-oppositePrimary border-b-2 border-primary"
                          : "text-oppositeForeground"
                      } capitalize relative hover:text-primary transition-all text-xl`}
                    >
                      <div className="flex flex-row gap-2 items-center">
                        {link.icon}
                        {link.name}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
