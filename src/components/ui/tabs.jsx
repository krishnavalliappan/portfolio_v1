"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@lib/utils/utils";
import { Separator } from "@components/ui/separator";
import { useWindowSize } from "@lib/utils/screeSize";
import Image from "next/image";
import Link from "next/link";
import { Theme } from "@components/interface/ThemeSwitch";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);
  const { width } = useWindowSize();

  // Use null when no tab is hovered
  const [hoveredTab, setHoveredTab] = useState(null);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const goToHome = () => {
    moveSelectedTabToTop(0);
    setHoveredTab(null);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-between [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        <div className="h-full align-middle">
          <Link href={"/"} onClick={() => goToHome()}>
            <Image
              src="/logo-1715038220451.png"
              alt="logo"
              width={70}
              height={70}
            />
          </Link>
        </div>
        <div className=" h-full flex flex-row items-center">
          <div className="h-full flex items-center space-x-4">
            {propTabs.map((tab, idx) => (
              <>
                <button
                  key={tab.title}
                  onClick={() => {
                    moveSelectedTabToTop(idx);
                    setHoveredTab(null);
                  }}
                  onMouseEnter={() =>
                    width > 768 ? setHoveredTab(tab.value) : null
                  }
                  onMouseLeave={() => setHoveredTab(null)}
                  className={cn(
                    "relative px-4 py-2 rounded-full",
                    tabClassName
                  )}
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      hoveredTab === tab.value ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {active.value === tab.value && (
                    <motion.div
                      layoutId="clickedbutton"
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.6,
                      }}
                      className={cn(
                        "absolute inset-0  rounded-full ",
                        activeTabClassName
                      )}
                    >
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-border "></div>
                    </motion.div>
                  )}

                  <span className="relative block text-black dark:text-white font-mono">
                    {tab.title}
                  </span>
                </button>
                <Separator orientation="vertical" />
              </>
            ))}
          </div>
          <div className="ml-10">
            <Theme />
          </div>
        </div>
      </div>
      <Separator className="my-2" />
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hoveredTab !== null}
        className={cn(contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({ className, tabs, active, hovering }) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.05,
            top: hovering ? idx * -30 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full pt-10 absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
