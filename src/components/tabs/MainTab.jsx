"use client";
import Hero from "@components/sections/Hero";
import { Tabs } from "@components/ui/tabs";

export function MainTab() {
  const div_tab_className =
    "w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-foreground dark:bg-gradient-dark bg-gradient-light";
  const tabs = [
    {
      title: "Home",
      value: "home",
      content: (
        <div className={div_tab_className}>
          <h1 className="font-mono">Home</h1>
          <Hero />
        </div>
      ),
    },
    {
      title: "About",
      value: "About",
      content: (
        <div className={div_tab_className}>
          <h1>About</h1>
        </div>
      ),
    },
    {
      title: "Projects",
      value: "Projects",
      content: (
        <div className={div_tab_className}>
          <h1>Projects</h1>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-screen relative flex flex-col items-start justify-start p-1 md:p-2 lg:px-5 lg:pt-2 lg:pb-5">
      <Tabs tabs={tabs} />
    </div>
  );
}
