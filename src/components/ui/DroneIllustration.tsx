"use client";

import { motion } from "framer-motion";

interface DroneIllustrationProps {
  className?: string;
  animate?: boolean;
}

export function DroneIllustration({ className = "", animate = true }: DroneIllustrationProps) {
  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        animate: { y: [0, -10, 0] },
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }
    : {};

  return (
    <Wrapper className={className} {...wrapperProps}>
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Propeller Arms */}
        <g className="propeller-arms">
          {/* Front Left Arm */}
          <path
            d="M120 130 L70 90"
            stroke="#374151"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Front Right Arm */}
          <path
            d="M280 130 L330 90"
            stroke="#374151"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Back Left Arm */}
          <path
            d="M120 170 L70 210"
            stroke="#374151"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Back Right Arm */}
          <path
            d="M280 170 L330 210"
            stroke="#374151"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>

        {/* Propellers */}
        <g className="propellers">
          {/* Front Left Propeller */}
          <motion.ellipse
            cx="60"
            cy="80"
            rx="35"
            ry="8"
            fill="#6B7280"
            opacity="0.6"
            animate={animate ? { rotate: 360 } : undefined}
            transition={animate ? { duration: 0.3, repeat: Infinity, ease: "linear" } : undefined}
            style={{ transformOrigin: "60px 80px" }}
          />
          {/* Front Right Propeller */}
          <motion.ellipse
            cx="340"
            cy="80"
            rx="35"
            ry="8"
            fill="#6B7280"
            opacity="0.6"
            animate={animate ? { rotate: -360 } : undefined}
            transition={animate ? { duration: 0.3, repeat: Infinity, ease: "linear" } : undefined}
            style={{ transformOrigin: "340px 80px" }}
          />
          {/* Back Left Propeller */}
          <motion.ellipse
            cx="60"
            cy="220"
            rx="35"
            ry="8"
            fill="#6B7280"
            opacity="0.6"
            animate={animate ? { rotate: -360 } : undefined}
            transition={animate ? { duration: 0.3, repeat: Infinity, ease: "linear" } : undefined}
            style={{ transformOrigin: "60px 220px" }}
          />
          {/* Back Right Propeller */}
          <motion.ellipse
            cx="340"
            cy="220"
            rx="35"
            ry="8"
            fill="#6B7280"
            opacity="0.6"
            animate={animate ? { rotate: 360 } : undefined}
            transition={animate ? { duration: 0.3, repeat: Infinity, ease: "linear" } : undefined}
            style={{ transformOrigin: "340px 220px" }}
          />
        </g>

        {/* Motors */}
        <g className="motors">
          <circle cx="60" cy="80" r="12" fill="#1F2937" />
          <circle cx="340" cy="80" r="12" fill="#1F2937" />
          <circle cx="60" cy="220" r="12" fill="#1F2937" />
          <circle cx="340" cy="220" r="12" fill="#1F2937" />
        </g>

        {/* Main Body */}
        <g className="body">
          {/* Body Shell */}
          <path
            d="M100 120 C100 100 150 90 200 90 C250 90 300 100 300 120 L300 180 C300 200 250 210 200 210 C150 210 100 200 100 180 Z"
            fill="url(#bodyGradient)"
            stroke="#1F2937"
            strokeWidth="2"
          />

          {/* Camera Gimbal */}
          <rect x="175" y="195" width="50" height="35" rx="8" fill="#374151" />
          <rect x="185" y="205" width="30" height="20" rx="4" fill="#1F2937" />
          <circle cx="200" cy="215" r="8" fill="#0EA5E9" />
          <circle cx="200" cy="215" r="4" fill="#1F2937" />

          {/* Top Details */}
          <rect x="180" y="95" width="40" height="15" rx="4" fill="#4B5563" />

          {/* Status LED */}
          <circle cx="200" cy="110" r="3" fill="#22C55E">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Side Vents */}
          <rect x="115" y="140" width="20" height="3" rx="1" fill="#6B7280" />
          <rect x="115" y="148" width="20" height="3" rx="1" fill="#6B7280" />
          <rect x="115" y="156" width="20" height="3" rx="1" fill="#6B7280" />

          <rect x="265" y="140" width="20" height="3" rx="1" fill="#6B7280" />
          <rect x="265" y="148" width="20" height="3" rx="1" fill="#6B7280" />
          <rect x="265" y="156" width="20" height="3" rx="1" fill="#6B7280" />
        </g>

        {/* Landing Gear */}
        <g className="landing-gear">
          <path
            d="M140 200 L130 250"
            stroke="#4B5563"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M260 200 L270 250"
            stroke="#4B5563"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M110 250 L150 250"
            stroke="#4B5563"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M250 250 L290 250"
            stroke="#4B5563"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="bodyGradient" x1="100" y1="90" x2="300" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4B5563" />
            <stop offset="50%" stopColor="#374151" />
            <stop offset="100%" stopColor="#1F2937" />
          </linearGradient>
        </defs>
      </svg>
    </Wrapper>
  );
}

export function DroneMiniIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Simple drone silhouette */}
      <path
        d="M20 35 L35 25 L50 20 L65 25 L80 35"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="50" cy="40" rx="20" ry="12" fill="currentColor" />
      <rect x="45" y="48" width="10" height="12" rx="2" fill="currentColor" opacity="0.8" />
      <circle cx="20" cy="35" r="8" fill="currentColor" opacity="0.3" />
      <circle cx="80" cy="35" r="8" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
