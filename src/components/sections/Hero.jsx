"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@components/interface/HeroHighlight";

export function HeroHighlightSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          delay: 1.5,
          duration: 1,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
        <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight>
        {/* waving hand animation */}
        <motion.div
          className="text-6xl" // you can adjust the size with Tailwind CSS classes
          style={{ display: "inline-block", transformOrigin: "70% 70%" }}
          animate={{
            rotate: [0, 14, -8, 14, -4, 10, 0, 0], // degrees of rotation
          }}
          transition={{
            duration: 2.5, // total duration of one cycle of the animation
            repeat: Infinity, // repeat the animation infinitely
            repeatType: "loop", // animation type
            ease: "easeInOut", // Framer Motion's predefined ease-in-out function
          }}
        >
          👋
        </motion.div>
      </motion.h1>
    </HeroHighlight>
  );
}
