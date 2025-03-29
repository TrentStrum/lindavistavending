"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export const MountainBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{ y }}
    >
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-30"
      >
        <defs>
          {/* Enhanced sky gradient with deeper colors */}
          <linearGradient id="skyGradient" x1="0" y1="0" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1a69c4" />
            <stop offset="50%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>

          {/* Enhanced mountain gradients with deeper transitions */}
          <linearGradient id="mountainGradient1" x1="0" y1="400" x2="720" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1a69c4" />
            <stop offset="50%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
          
          <linearGradient id="mountainGradient2" x1="720" y1="600" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#1a69c4" />
          </linearGradient>

          {/* Shadow gradient for depth */}
          <linearGradient id="shadowGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
        </defs>

        {/* Deep sky background */}
        <rect x="0" y="0" width="1440" height="400" fill="url(#skyGradient)" opacity="0.2" />

        {/* Shadow layer for first mountain range */}
        <path
          d="M0 800L360 400L720 600L1080 200L1440 400V800H0Z"
          fill="url(#shadowGradient)"
          transform="translate(20, 20)"
          opacity="0.4"
        />

        {/* First mountain range with enhanced gradient */}
        <path
          d="M0 800L360 400L720 600L1080 200L1440 400V800H0Z"
          fill="url(#mountainGradient1)"
        />

        {/* Second mountain range with enhanced gradient */}
        <path
          d="M720 600L1080 200L1440 400V800H720V600Z"
          fill="url(#mountainGradient2)"
        />

        {/* Enhanced mountain highlights */}
        <path
          d="M360 400L720 600L1080 200"
          stroke="#FFD700"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Mountain ridge details */}
        <path
          d="M360 400L480 500M720 600L600 500M1080 200L960 300"
          stroke="#1a69c4"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Enhanced accent points at peaks */}
        <circle cx="360" cy="400" r="6" fill="#1a69c4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="720" cy="600" r="6" fill="#FFD700">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="1080" cy="200" r="6" fill="#1a69c4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Additional detail lines for depth */}
        <path
          d="M340 420L380 380M700 620L740 580M1060 220L1100 180"
          stroke="#FFD700"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </motion.div>
  );
};