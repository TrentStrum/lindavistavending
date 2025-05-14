"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const MountainBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 flex items-center justify-center"
      style={{ y }}
    >
      <Image
        src="/images/logo-mountains-only.png"
        alt="Mountain Background"
        fill
        className="object-contain opacity-30"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
        priority
      />
    </motion.div>
  );
};