"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface VisualProps {
  className?: string;
  isHovered?: boolean;
}

// 01: Laptop & Browser Interface Visual
export function LaptopBrowserVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={cn("flex items-center justify-center pointer-events-none select-none", className)}>
      <motion.svg
        width="760"
        height="500"
        viewBox="0 0 760 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_16px_36px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_20px_48px_rgba(0,0,0,0.65)]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          {/* Display outer bezel gradient */}
          <linearGradient id="lpBezel" x1="380" y1="52" x2="380" y2="348" gradientUnits="userSpaceOnUse">
            <stop stopColor="#282C34" />
            <stop offset="0.5" stopColor="#16181D" />
            <stop offset="1" stopColor="#0A0C0F" />
          </linearGradient>

          {/* Screen surface background */}
          <linearGradient id="lpScreenSurface" x1="180" y1="90" x2="580" y2="330" gradientUnits="userSpaceOnUse">
            <stop stopColor="#12151B" />
            <stop offset="1" stopColor="#080A0D" />
          </linearGradient>

          {/* Aluminum unibody chassis */}
          <linearGradient id="lpBody" x1="120" y1="345" x2="640" y2="430" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F9F9F8" />
            <stop offset="0.4" stopColor="#DCDDE2" />
            <stop offset="1" stopColor="#AEB2B9" />
          </linearGradient>

          {/* Keyboard well */}
          <linearGradient id="lpKeyboardWell" x1="170" y1="355" x2="590" y2="410" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1C1F25" />
            <stop offset="1" stopColor="#0C0E12" />
          </linearGradient>

          {/* Chiclet key gradient */}
          <linearGradient id="lpKey" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#353942" />
            <stop offset="1" stopColor="#22252C" />
          </linearGradient>

          {/* Accent copper */}
          <linearGradient id="lpOrange" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#F27040" />
            <stop offset="1" stopColor="#C84D26" />
          </linearGradient>

          {/* Screen glow filter */}
          <filter id="lpScreenGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="16" />
          </filter>

          {/* Shadow filter */}
          <filter id="lpShadow" x="-30%" y="-50%" width="160%" height="220%">
            <feGaussianBlur stdDeviation="16" />
          </filter>

          {/* Screen clipping mask */}
          <clipPath id="lpScreenClip">
            <rect x="174" y="92" width="412" height="248" rx="6" />
          </clipPath>
        </defs>

        {/* Ground shadow underneath laptop */}
        <motion.ellipse
          cx="380"
          cy="446"
          rx="240"
          ry="24"
          fill="#05070A"
          filter="url(#lpShadow)"
          initial={{ opacity: 0.18 }}
          animate={shouldReduceMotion ? {} : {
            scaleX: effectiveHovered ? 0.93 : [1, 0.96, 1],
            scaleY: effectiveHovered ? 0.85 : [1, 0.92, 1],
            opacity: effectiveHovered ? 0.12 : [0.18, 0.14, 0.18],
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "380px 446px" }}
        />

        {/* Ambient screen copper glow behind display */}
        <motion.ellipse
          cx="380"
          cy="235"
          rx="195"
          ry="135"
          fill="#D85A32"
          filter="url(#lpScreenGlow)"
          initial={{ opacity: 0.08 }}
          animate={shouldReduceMotion ? {} : {
            opacity: effectiveHovered ? 0.20 : [0.07, 0.13, 0.07],
            scale: effectiveHovered ? 1.04 : [1, 1.02, 1],
          }}
          transition={effectiveHovered ? { duration: 0.45 } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "380px 235px" }}
        />

        {/* Subtle decorative technical grid guides */}
        <path d="M108 185V330" stroke="#D65B34" strokeOpacity="0.16" strokeDasharray="4 8" />
        <path d="M652 185V330" stroke="#D65B34" strokeOpacity="0.16" strokeDasharray="4 8" />

        {/* MAIN LAPTOP UNIBODY & DISPLAY LID */}
        <motion.g
          animate={shouldReduceMotion ? {} : {
            y: effectiveHovered ? -5 : [0, -3.5, 0],
            scale: effectiveHovered ? 1.02 : 1,
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "380px 250px" }}
        >
          
          <path
            d="M168 70 C170 59 179 52 191 52 H569 C581 52 590 59 592 70 L620 344 H140 L168 70Z"
            fill="url(#lpBezel)"
            stroke="#40444D"
            strokeWidth="2.5"
          />

          <path
            d="M191 58H569C576 58 582 63 583 70L611 336H149L177 70C178 63 184 58 191 58Z"
            stroke="#FFFFFF"
            strokeOpacity="0.12"
          />

          {/* Camera notch / optical bead */}
          <rect x="368" y="58" width="24" height="6" rx="3" fill="#0A0C0E" />
          <circle cx="380" cy="61" r="1.75" fill="#1C2638" />
          <circle cx="380" cy="61" r="0.75" fill="#4780EE" opacity="0.8" />

          {/* Inner Display Canvas */}
          <rect
            x="174"
            y="92"
            width="412"
            height="248"
            rx="6"
            fill="url(#lpScreenSurface)"
          />

          <g clipPath="url(#lpScreenClip)">
            {/* Top Browser Bar */}
            <rect x="174" y="92" width="412" height="32" fill="#0E1015" />

            {/* macOS traffic light controls */}
            <circle cx="190" cy="108" r="4.5" fill="#F06448" stroke="#D24B32" strokeWidth="0.75" />
            <circle cx="204" cy="108" r="4.5" fill="#E6B84B" stroke="#C89D34" strokeWidth="0.75" />
            <circle cx="218" cy="108" r="4.5" fill="#4DBA73" stroke="#3DA360" strokeWidth="0.75" />

            {/* URL bar pill */}
            <rect
              x="242"
              y="99"
              width="196"
              height="18"
              rx="9"
              fill="#1C2027"
              stroke="#2E333C"
            />
            {/* Padlock icon in URL */}
            <path
              d="M255 106V105C255 103.9 255.9 103 257 103C258.1 103 259 103.9 259 105V106M253.5 106H260.5V111H253.5V106Z"
              stroke="#43D285"
              strokeWidth="1"
            />
            <text
              x="266"
              y="111.5"
              fontFamily="monospace"
              fontSize="7.5"
              fontWeight="600"
              fill="#B0B5BE"
            >
              https://syntaxlab.dev/core
            </text>

            {/* Live latency badge in browser header */}
            <rect x="456" y="99" width="62" height="18" rx="9" fill="#0F2D1C" stroke="#1A5333" />
            <motion.circle
              cx="468"
              cy="108"
              r="3"
              fill="#37D680"
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "468px 108px" }}
            />
            <text
              x="477"
              y="111.5"
              fontFamily="monospace"
              fontSize="7.5"
              fontWeight="700"
              fill="#43E58C"
            >
              0.4s • SSL
            </text>

            {/* Application Navigation Header */}
            <rect x="174" y="124" width="412" height="28" fill="#090B0E" />
            {/* SyntaxLab Monomark */}
            <rect x="190" y="132" width="12" height="12" rx="3" fill="#F27040" />
            <text x="192.5" y="141" fontFamily="monospace" fontSize="8" fontWeight="800" fill="#FFFFFF">SL</text>
            <rect x="210" y="135" width="44" height="6" rx="2" fill="#FFFFFF" />
            <rect x="264" y="136" width="36" height="5" rx="2" fill="#505560" />
            <rect x="308" y="136" width="42" height="5" rx="2" fill="#505560" />

            {/* Production verified tag */}
            <rect x="502" y="131" width="68" height="14" rx="7" fill="#113622" />
            <circle cx="512" cy="138" r="2.5" fill="#32D57D" />
            <text x="520" y="141" fontFamily="monospace" fontSize="6.5" fontWeight="700" fill="#46E88E">
              LIVE PROD
            </text>

            {/* Main Application Area (Split Hero & Telemetry Graph) */}
            {/* Left Hero Column */}
            <rect x="190" y="166" width="148" height="11" rx="3" fill="#FFFFFF" />
            <rect x="190" y="182" width="118" height="8" rx="2" fill="#A4AAB5" />
            <rect x="190" y="194" width="94" height="6" rx="2" fill="#606672" />

            {/* Orange CTA Button */}
            <motion.g
              animate={{
                scale: effectiveHovered ? [1, 1.03, 1] : 1,
              }}
              transition={{
                duration: 1.8,
                repeat: effectiveHovered && !shouldReduceMotion ? Infinity : 0,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "235px 222px" }}
            >
              <rect x="190" y="210" width="90" height="22" rx="5" fill="url(#lpOrange)" />
              <text
                x="201"
                y="224"
                fontFamily="monospace"
                fontSize="8"
                fontWeight="800"
                fill="#FFFFFF"
              >
                EXPLORE →
              </text>
            </motion.g>

            {/* Right Telemetry Dashboard Panel */}
            <rect
              x="346"
              y="162"
              width="224"
              height="124"
              rx="8"
              fill="#181B21"
              stroke="#2D323A"
            />
            {/* Panel Header */}
            <text x="360" y="178" fontFamily="monospace" fontSize="7.5" fontWeight="700" fill="#E2E5EB">
              REAL-TIME TELEMETRY
            </text>
            <text x="514" y="178" fontFamily="monospace" fontSize="7" fontWeight="700" fill="#34D67F">
              99.9%
            </text>

            {/* Sparkline Multi-Point Line Chart with Gradient Fill */}
            <defs>
              <linearGradient id="lpChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#F27040" stopOpacity="0.25" />
                <stop offset="1" stopColor="#F27040" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M360 252 L388 234 L416 242 L444 214 L472 226 L500 198 L534 212 L554 204 V256 H360 Z"
              fill="url(#lpChartFill)"
            />
            <motion.path
              d="M360 252 L388 234 L416 242 L444 214 L472 226 L500 198 L534 212 L554 204"
              stroke="#F27040"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Chart Grid Lines */}
            <path d="M360 256 H554" stroke="#333842" strokeWidth="1.5" />
            <path d="M360 226 H554" stroke="#252A32" strokeWidth="1" strokeDasharray="3 3" />

            {/* 4 Mini KPI Metric Pills */}
            <rect x="360" y="190" width="44" height="17" rx="3" fill="#242830" />
            <text x="366" y="202" fontFamily="monospace" fontSize="7" fontWeight="700" fill="#F27040">99+</text>

            <rect x="410" y="190" width="44" height="17" rx="3" fill="#242830" />
            <text x="416" y="202" fontFamily="monospace" fontSize="7" fontWeight="700" fill="#A8AEB8">&lt;0.8s</text>

            <rect x="460" y="190" width="44" height="17" rx="3" fill="#242830" />
            <text x="466" y="202" fontFamily="monospace" fontSize="7" fontWeight="700" fill="#A8AEB8">100%</text>

            <rect x="510" y="190" width="44" height="17" rx="3" fill="#133824" />
            <text x="516" y="202" fontFamily="monospace" fontSize="7" fontWeight="700" fill="#44E88E">0 ERR</text>

            {/* Bottom Screen Feature Readout Bar */}
            <rect x="174" y="302" width="412" height="38" fill="#0A0C10" />
            <circle cx="190" cy="318" r="4" fill="#35D57E" />
            <text x="200" y="321" fontFamily="monospace" fontSize="7.5" fontWeight="700" fill="#DCE0E7">
              CORE WEB VITALS: 99+
            </text>
            <text x="330" y="321" fontFamily="monospace" fontSize="7" fill="#6A707B">
              ZERO LAYOUT SHIFT
            </text>
            <text x="455" y="321" fontFamily="monospace" fontSize="7" fill="#6A707B">
              HTTP/3 EDGE SSR
            </text>
          </g>

          {/* Screen bottom hinge & bevel */}
          <path d="M140 344H620L634 362H126L140 344Z" fill="#14161A" />

        

          {/* Main unibody bottom deck */}
          <path
            d="M126 362 H634 L688 409 C694 414 690 423 682 424 H78 C70 424 66 414 72 409 L126 362Z"
            fill="url(#lpBody)"
            stroke="#A2A5AC"
            strokeWidth="2"
          />

          {/* Keyboard Recessed Tray */}
          <path
            d="M166 374 H594 L626 404 H134 L166 374Z"
            fill="url(#lpKeyboardWell)"
            stroke="#282C32"
          />

          {/* Realistic Chiclet Keys Rows */}
          <g opacity="0.88">
            {/* Top function row */}
            <g fill="url(#lpKey)">
              <rect x="178" y="378" width="28" height="5" rx="1" />
              <rect x="210" y="378" width="28" height="5" rx="1" />
              <rect x="242" y="378" width="28" height="5" rx="1" />
              <rect x="274" y="378" width="28" height="5" rx="1" />
              <rect x="306" y="378" width="28" height="5" rx="1" />
              <rect x="338" y="378" width="28" height="5" rx="1" />
              <rect x="370" y="378" width="28" height="5" rx="1" />
              <rect x="402" y="378" width="28" height="5" rx="1" />
              <rect x="434" y="378" width="28" height="5" rx="1" />
              <rect x="466" y="378" width="28" height="5" rx="1" />
              <rect x="498" y="378" width="28" height="5" rx="1" />
              <rect x="530" y="378" width="28" height="5" rx="1" />
              <rect x="562" y="378" width="28" height="5" rx="1" />
            </g>

            {/* Middle row */}
            <g fill="url(#lpKey)">
              <rect x="169" y="387" width="37" height="5" rx="1" />
              <rect x="210" y="387" width="28" height="5" rx="1" />
              <rect x="242" y="387" width="28" height="5" rx="1" />
              <rect x="274" y="387" width="28" height="5" rx="1" />
              <rect x="306" y="387" width="28" height="5" rx="1" />
              <rect x="338" y="387" width="28" height="5" rx="1" />
              <rect x="370" y="387" width="28" height="5" rx="1" />
              <rect x="402" y="387" width="28" height="5" rx="1" />
              <rect x="434" y="387" width="28" height="5" rx="1" />
              <rect x="466" y="387" width="28" height="5" rx="1" />
              <rect x="498" y="387" width="28" height="5" rx="1" />
              <rect x="530" y="387" width="28" height="5" rx="1" />
              <rect x="562" y="387" width="44" height="5" rx="1" />
            </g>

            {/* Bottom spacebar row */}
            <g fill="url(#lpKey)">
              <rect x="164" y="396" width="44" height="5" rx="1" />
              <rect x="212" y="396" width="28" height="5" rx="1" />
              <rect x="244" y="396" width="28" height="5" rx="1" />
              <rect x="276" y="396" width="28" height="5" rx="1" />
              <rect x="308" y="396" width="28" height="5" rx="1" />
              <rect x="340" y="396" width="124" height="5" rx="2" fill="#3D424C" />
              <rect x="468" y="396" width="28" height="5" rx="1" />
              <rect x="500" y="396" width="28" height="5" rx="1" />
              <rect x="532" y="396" width="28" height="5" rx="1" />
              <rect x="564" y="396" width="42" height="5" rx="1" />
            </g>
          </g>

          {/* Glass Trackpad */}
          <path
            d="M316 383H444L458 406H302L316 383Z"
            fill="#15171C"
            stroke="#42464E"
            strokeWidth="1.5"
          />
          <path d="M320 385H440" stroke="#FFFFFF" strokeOpacity="0.10" />

          {/* Front deck edge & thumb opening notch */}
          <path d="M72 409H688L682 424H78L72 409Z" fill="#D6D8DC" />
          <path d="M346 414H414L408 420H352L346 414Z" fill="#A6A8AF" />
          <path d="M88 422H672" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" />
        </motion.g>

        {/* Floating status badges with Clerk-inspired smooth micro-motion */}
        <g>
          {/* Left badge: LIVE STATUS */}
          <motion.g
            animate={shouldReduceMotion ? {} : {
              y: effectiveHovered ? -7 : [0, -5, 0],
              x: effectiveHovered ? -3 : 0,
            }}
            transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect
              x="110"
              y="110"
              width="76"
              height="20"
              rx="5"
              fill="#F7F6F3"
              stroke="#D8D5CD"
              className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            />
            <circle cx="122" cy="120" r="3.5" fill="#35D57E" />
            <text
              x="132"
              y="123.5"
              fontFamily="monospace"
              fontSize="7.5"
              fontWeight="700"
              fill="#2E3238"
            >
              LIVE STATUS
            </text>
          </motion.g>

          {/* Right badge: 99+ SCORE */}
          <motion.g
            animate={shouldReduceMotion ? {} : {
              y: effectiveHovered ? -7 : [0, -5, 0],
              x: effectiveHovered ? 3 : 0,
            }}
            transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <rect
              x="570"
              y="140"
              width="74"
              height="20"
              rx="5"
              fill="#F7F6F3"
              stroke="#D8D5CD"
              className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            />
            <circle cx="582" cy="150" r="3.5" fill="#F27040" />
            <text
              x="592"
              y="153.5"
              fontFamily="monospace"
              fontSize="7.5"
              fontWeight="700"
              fill="#2E3238"
            >
              99+ SCORE
            </text>
          </motion.g>
        </g>
      </motion.svg>
    </div>
  );
}

export const LaptopPerspectiveVisual = LaptopBrowserVisual;

// 02: E-Commerce Product Cube Visual
export function CommerceCheckoutVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={cn("flex items-center justify-center pointer-events-none select-none", className)}>
      <motion.svg
        width="220"
        height="180"
        viewBox="0 0 220 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_14px_32px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="ecCubeTop" x1="72" y1="52" x2="143" y2="84" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F7F7F5" />
            <stop offset="1" stopColor="#D9DCE2" />
          </linearGradient>

          <linearGradient id="ecCubeLeft" x1="72" y1="75" x2="72" y2="133" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D8DCE3" />
            <stop offset="1" stopColor="#AEB4C0" />
          </linearGradient>

          <linearGradient id="ecCubeRight" x1="143" y1="75" x2="143" y2="133" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C9CDD5" />
            <stop offset="1" stopColor="#8F96A3" />
          </linearGradient>

          <linearGradient id="ecAccent" x1="105" y1="47" x2="126" y2="71" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F47A4A" />
            <stop offset="1" stopColor="#CF522C" />
          </linearGradient>

          <filter id="ecShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="9" />
          </filter>

          <filter id="ecSoft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Ground shadow (Micro-breathes and reacts subtly on hover) */}
        <motion.ellipse
          cx="111"
          cy="143"
          rx="61"
          ry="11"
          fill="#101319"
          filter="url(#ecShadow)"
          initial={{ opacity: 0.17 }}
          animate={shouldReduceMotion ? {} : {
            scaleX: effectiveHovered ? 0.92 : [1, 0.96, 1],
            scaleY: effectiveHovered ? 0.85 : [1, 0.93, 1],
            opacity: effectiveHovered ? 0.11 : [0.17, 0.13, 0.17],
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "111px 143px" }}
        />

        {/* Product base reflection */}
        <ellipse
          cx="110"
          cy="140"
          rx="35"
          ry="6"
          fill="#000000"
          opacity="0.08"
          filter="url(#ecSoft)"
        />

        {/* Product Cube Group (Moves upward ~3-5px on hover, subtle float) */}
        <motion.g
          animate={shouldReduceMotion ? {} : {
            y: effectiveHovered ? -4 : [0, -3, 0],
            scale: effectiveHovered ? 1.02 : 1,
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] } : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "110px 95px" }}
        >
          {/* Top Face */}
          <path
            d="M71 72L109 51L148 72L109 94L71 72Z"
            fill="url(#ecCubeTop)"
            stroke="#A9AFB9"
            strokeWidth="1.5"
          />

          {/* Left Face */}
          <path
            d="M71 72L109 94V139L71 116V72Z"
            fill="url(#ecCubeLeft)"
            stroke="#9DA4AE"
            strokeWidth="1.5"
          />

          {/* Right Face */}
          <path
            d="M148 72L109 94V139L148 116V72Z"
            fill="url(#ecCubeRight)"
            stroke="#858D99"
            strokeWidth="1.5"
          />

          {/* Top facets */}
          <path
            d="M109 51L148 72L136 79L97 58L109 51Z"
            fill="#E8EAE9"
          />

          <path
            d="M71 72L109 51L121 58L83 79L71 72Z"
            fill="#FFFFFF"
            opacity="0.55"
          />

          {/* Cube highlight */}
          <path
            d="M78 77L104 92V128"
            stroke="#FFFFFF"
            strokeOpacity="0.42"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Tiny data indicator */}
          <motion.circle
            cx="133"
            cy="107"
            r="4"
            fill="#38C878"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.25, 1],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "133px 107px" }}
          />
          <motion.circle
            cx="133"
            cy="107"
            r="7"
            stroke="#38C878"
            strokeWidth="1"
            initial={{ scale: 1, strokeOpacity: 0.25 }}
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.35, 1],
              strokeOpacity: [0.25, 0.05, 0.25],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "133px 107px" }}
          />
        </motion.g>

        {/* Floating connection line */}
        <path
          d="M79 54L91 64"
          stroke="#D75B35"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="3 4"
        />

        {/* Floating commerce badge (Moves slightly independently) */}
        <motion.g
          animate={shouldReduceMotion ? {} : {
            y: effectiveHovered ? -7 : [0, -4.5, 0],
            x: effectiveHovered ? -2 : 0,
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          transform="translate(48 39)"
        >
          <rect
            x="0"
            y="0"
            width="31"
            height="31"
            rx="7"
            fill="url(#ecAccent)"
            className="drop-shadow-[0_4px_12px_rgba(244,122,74,0.35)]"
          />

          {/* Cart */}
          <path
            d="M8 9H11L13.5 19H23L26 12H13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="15" cy="23" r="2" fill="white" />
          <circle cx="22" cy="23" r="2" fill="white" />
        </motion.g>
      </motion.svg>
    </div>
  );
}

export const CommercePerspectiveVisual = CommerceCheckoutVisual;

// 03: Business Tools Dashboard Visual
export function DashboardAnalyticsVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={cn("flex items-center justify-center pointer-events-none select-none", className)}>
      <motion.svg
        width="220"
        height="180"
        viewBox="0 0 220 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_14px_32px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="btMonitor" x1="62" y1="48" x2="162" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22262D" />
            <stop offset="1" stopColor="#080A0D" />
          </linearGradient>

          <linearGradient id="btStand" x1="109" y1="125" x2="109" y2="145" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D7D9DD" />
            <stop offset="1" stopColor="#9EA3AB" />
          </linearGradient>

          <filter id="btShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Ground Shadow */}
        <motion.ellipse
          cx="110"
          cy="149"
          rx="65"
          ry="10"
          fill="#0A0C10"
          filter="url(#btShadow)"
          initial={{ opacity: 0.16 }}
          animate={shouldReduceMotion ? {} : {
            scaleX: effectiveHovered ? 0.92 : [1, 0.96, 1],
            opacity: effectiveHovered ? 0.10 : [0.16, 0.12, 0.16],
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "110px 149px" }}
        />

        {/* MONITOR & STAND (Continuous Subtle Float + Hover Elevation 3-4px) */}
        <motion.g
          animate={shouldReduceMotion ? {} : {
            y: effectiveHovered ? -4 : [0, -3, 0],
            scale: effectiveHovered ? 1.02 : 1,
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] } : { duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "110px 90px" }}
        >
          {/* Monitor Outer Shell */}
          <rect
            x="56"
            y="39"
            width="108"
            height="89"
            rx="8"
            fill="#16191E"
            stroke="#444952"
            strokeWidth="2"
          />

          {/* Inner Screen */}
          <rect
            x="63"
            y="47"
            width="94"
            height="72"
            rx="4"
            fill="url(#btMonitor)"
          />

          {/* Browser Dots */}
          <circle cx="70" cy="54" r="2.5" fill="#F06A3B" />
          <circle cx="78" cy="54" r="2.5" fill="#D8A54B" />
          <circle cx="86" cy="54" r="2.5" fill="#3BC879" />

          {/* Header */}
          <rect x="94" y="51" width="42" height="5" rx="2.5" fill="#363A42" />
          <rect x="140" y="51" width="12" height="5" rx="2.5" fill="#123B27" />

          {/* Sidebar */}
          <rect x="69" y="64" width="19" height="47" rx="3" fill="#111419" />
          <rect x="73" y="70" width="10" height="4" rx="2" fill="#D75B35" />
          <rect x="73" y="79" width="11" height="3" rx="1.5" fill="#555A63" />
          <rect x="73" y="86" width="8" height="3" rx="1.5" fill="#555A63" />
          <rect x="73" y="93" width="12" height="3" rx="1.5" fill="#555A63" />

          {/* Main Chart Panel */}
          <rect
            x="94"
            y="64"
            width="55"
            height="47"
            rx="4"
            fill="#20242A"
            stroke="#30343B"
          />

          {/* Chart Grid */}
          <path d="M100 101H143M100 91H143M100 81H143" stroke="#3A3E46" strokeWidth="1" />
          <path d="M107 70V104M118 70V104M129 70V104" stroke="#30343B" strokeWidth="1" />

          {/* Bars */}
          <rect x="103" y="91" width="7" height="13" rx="1.5" fill="#CF522C" />
          <rect x="114" y="82" width="7" height="22" rx="1.5" fill="#F06A3B" />
          <rect x="125" y="75" width="7" height="29" rx="1.5" fill="#D5D8DD" />
          <rect x="136" y="86" width="7" height="18" rx="1.5" fill="#3BC878" />

          {/* Trend line (Draws on entrance and reacts on hover) */}
          <motion.path
            d="M101 94L111 89L121 93L132 77L143 82"
            stroke="#FFFFFF"
            strokeOpacity="0.65"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Monitor base */}
          <path
            d="M99 128H121L127 143H93L99 128Z"
            fill="url(#btStand)"
          />
          <path
            d="M82 143H138"
            stroke="#8F959E"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Floating data pulse (Green status indicator pulses subtly) */}
        <motion.circle
          cx="170"
          cy="66"
          r="4"
          fill="#3BC878"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.25, 1],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "170px 66px" }}
        />
        <motion.circle
          cx="170"
          cy="66"
          r="9"
          stroke="#3BC878"
          strokeWidth="1"
          initial={{ scale: 1, strokeOpacity: 0.25 }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.35, 1],
            strokeOpacity: [0.25, 0.05, 0.25],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "170px 66px" }}
        />

        {/* Small floating metric */}
        <motion.g
          animate={shouldReduceMotion ? {} : {
            y: effectiveHovered ? -6 : [0, -4, 0],
            x: effectiveHovered ? 2 : 0,
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <rect
            x="157"
            y="92"
            width="34"
            height="18"
            rx="5"
            fill="#F7F6F2"
            stroke="#D8D5CD"
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
          />
          <circle cx="165" cy="101" r="2.5" fill="#F06A3B" />
          <rect x="171" y="98" width="13" height="3" rx="1.5" fill="#343840" />
          <rect x="171" y="104" width="9" height="2" rx="1" fill="#9A9EA5" />
        </motion.g>
      </motion.svg>
    </div>
  );
}

export const DashboardPerspectiveVisual = DashboardAnalyticsVisual;

// 04: Campaign Conversion Visual
export function CampaignConversionVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={cn("flex items-center justify-center pointer-events-none select-none", className)}>
      <motion.svg
        width="220"
        height="180"
        viewBox="0 0 220 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_14px_32px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="cpArea" x1="51" y1="128" x2="169" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D95A32" stopOpacity="0.03" />
            <stop offset="1" stopColor="#F06A3B" stopOpacity="0.28" />
          </linearGradient>

          <filter id="cpShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* Soft ground */}
        <motion.ellipse
          cx="112"
          cy="142"
          rx="57"
          ry="8"
          fill="#111318"
          filter="url(#cpShadow)"
          initial={{ opacity: 0.10 }}
          animate={shouldReduceMotion ? {} : {
            scaleX: effectiveHovered ? 0.92 : [1, 0.96, 1],
            opacity: effectiveHovered ? 0.07 : [0.10, 0.08, 0.10],
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "112px 142px" }}
        />

        {/* Main Chart Panel (Extremely subtle movement on hover) */}
        <motion.g
          animate={shouldReduceMotion ? {} : {
            y: effectiveHovered ? -3.5 : [0, -2.5, 0],
            scale: effectiveHovered ? 1.02 : 1,
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] } : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "110px 90px" }}
        >
          {/* Chart panel */}
          <rect
            x="42"
            y="44"
            width="136"
            height="88"
            rx="8"
            fill="#F7F6F2"
            stroke="#D8D5CD"
          />

          {/* Grid */}
          <path
            d="M55 61H165M55 81H165M55 101H165M55 121H165"
            stroke="#D8D5CD"
            strokeWidth="1"
          />

          {/* Area fill */}
          <path
            d="M55 119 L74 111 L93 104 L112 94 L130 78 L147 65 L165 53 L165 121 L55 121Z"
            fill="url(#cpArea)"
          />

          {/* Conversion line (Draws from left to right) */}
          <motion.path
            d="M55 119 L74 111 L93 104 L112 94 L130 78 L147 65 L165 53"
            stroke="#D75B35"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Data points (Appear with tiny stagger) */}
          <motion.circle
            cx="74"
            cy="111"
            r="3"
            fill="#F7F6F2"
            stroke="#D75B35"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            style={{ transformOrigin: "74px 111px" }}
          />
          <motion.circle
            cx="93"
            cy="104"
            r="3"
            fill="#F7F6F2"
            stroke="#D75B35"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            style={{ transformOrigin: "93px 104px" }}
          />
          <motion.circle
            cx="112"
            cy="94"
            r="3"
            fill="#F7F6F2"
            stroke="#D75B35"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.45 }}
            style={{ transformOrigin: "112px 94px" }}
          />
          <motion.circle
            cx="130"
            cy="78"
            r="3"
            fill="#F7F6F2"
            stroke="#D75B35"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
            style={{ transformOrigin: "130px 78px" }}
          />
          <motion.circle
            cx="147"
            cy="65"
            r="3"
            fill="#F7F6F2"
            stroke="#D75B35"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.75 }}
            style={{ transformOrigin: "147px 65px" }}
          />

          {/* End point (Pulses) */}
          <motion.circle
            cx="165"
            cy="53"
            r="5"
            fill="#D75B35"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.25, 1],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "165px 53px" }}
          />
          <motion.circle
            cx="165"
            cy="53"
            r="9"
            stroke="#D75B35"
            strokeWidth="1"
            initial={{ scale: 1, strokeOpacity: 0.25 }}
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.4, 1],
              strokeOpacity: [0.25, 0.05, 0.25],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "165px 53px" }}
          />

          {/* Small axis label */}
          <text
            x="139"
            y="128"
            fontFamily="monospace"
            fontSize="6"
            fill="#777C84"
          >
            CONVERSION
          </text>
        </motion.g>

        {/* Floating conversion badge (+42.8% badge fades/slides in on hover) */}
        <motion.g
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          animate={shouldReduceMotion ? {} : {
            y: effectiveHovered ? -6 : [0, -3.5, 0],
            x: effectiveHovered ? -2 : 0,
            opacity: effectiveHovered ? 1 : 0.92,
          }}
          transform="translate(55 29)"
        >
          <rect
            width="45"
            height="20"
            rx="5"
            fill="#16191E"
            className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
          />
          <circle cx="9" cy="10" r="3" fill="#3BC878" />
          <text
            x="16"
            y="13"
            fontFamily="monospace"
            fontSize="7"
            fill="#FFFFFF"
          >
            +42.8%
          </text>
        </motion.g>
      </motion.svg>
    </div>
  );
}

// 05: Modern Stack Tiered Architecture Visual
export function ModernizationLayersVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={cn("flex items-center justify-center pointer-events-none select-none", className)}>
      <motion.svg
        width="220"
        height="180"
        viewBox="0 0 220 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_14px_32px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="mlLayerTop" x1="75" y1="54" x2="146" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F06A3B" />
            <stop offset="1" stopColor="#C94E2A" />
          </linearGradient>

          <linearGradient id="mlLayerMid" x1="68" y1="76" x2="151" y2="103" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E7E9EC" />
            <stop offset="1" stopColor="#B4BAC3" />
          </linearGradient>

          <linearGradient id="mlLayerBottom" x1="61" y1="99" x2="158" y2="126" gradientUnits="userSpaceOnUse">
            <stop stopColor="#252A31" />
            <stop offset="1" stopColor="#0D1014" />
          </linearGradient>

          <filter id="mlShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Ground shadow */}
        <motion.ellipse
          cx="109"
          cy="139"
          rx="61"
          ry="10"
          fill="#0B0D11"
          filter="url(#mlShadow)"
          initial={{ opacity: 0.15 }}
          animate={shouldReduceMotion ? {} : {
            scaleX: effectiveHovered ? 0.92 : [1, 0.96, 1],
            opacity: effectiveHovered ? 0.10 : [0.15, 0.11, 0.15],
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "109px 139px" }}
        />

        {/* ENTIRE ARCHITECTURE STACK */}
        <g>
          {/* Bottom architecture layer (Stays grounded or slight elevation) */}
          <motion.path
            d="M59 105L108 80L159 105L108 132L59 105Z"
            fill="url(#mlLayerBottom)"
            stroke="#343941"
            strokeWidth="1.5"
            animate={effectiveHovered ? { y: -1 } : { y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />

          {/* Middle layer (Moves 2-4px independently on hover) */}
          <motion.g
            animate={effectiveHovered ? { y: -3.5 } : { y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <path
              d="M66 87L108 65L152 87L108 110L66 87Z"
              fill="url(#mlLayerMid)"
              stroke="#A6ACB5"
              strokeWidth="1.5"
            />
            {/* Layer separation highlight */}
            <path
              d="M66 87L108 110L152 87"
              stroke="#FFFFFF"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
            {/* Mid nodes (Orange and Green pulse subtly) */}
            <motion.circle
              cx="93"
              cy="96"
              r="3"
              fill="#F06A3B"
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.25, 1],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "93px 96px" }}
            />
            <motion.circle
              cx="123"
              cy="96"
              r="3"
              fill="#3BC878"
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.25, 1],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              style={{ transformOrigin: "123px 96px" }}
            />
          </motion.g>

          {/* Top layer (Lifts highest on hover, 5-6px) */}
          <motion.g
            animate={effectiveHovered ? { y: -6.5 } : { y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <path
              d="M74 68L108 50L144 68L108 87L74 68Z"
              fill="url(#mlLayerTop)"
              stroke="#C94E2A"
              strokeWidth="1.5"
            />
            {/* Layer separation highlight */}
            <path
              d="M74 68L108 87L144 68"
              stroke="#FFFFFF"
              strokeOpacity="0.35"
              strokeWidth="1"
            />

            {/* Architecture node with gentle pulse */}
            <motion.circle
              cx="108"
              cy="68"
              r="4"
              fill="#FFFFFF"
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.2, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "108px 68px" }}
            />
            <circle cx="108" cy="68" r="7" stroke="#FFFFFF" strokeOpacity="0.25" />
          </motion.g>

          {/* Connection lines */}
          <path
            d="M108 75V83M96 94L108 87L120 94"
            stroke="#59606A"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />

          {/* Tiny version marker */}
          <text
            x="65"
            y="143"
            fontFamily="monospace"
            fontSize="7"
            fill="#777C84"
          >
            V2 → MODERN STACK
          </text>
        </g>

        {/* Small migration indicator (Migration arrow animates) */}
        <motion.g
          transform="translate(157 52)"
          animate={shouldReduceMotion ? {} : {
            y: effectiveHovered ? -5 : [0, -3, 0],
            x: effectiveHovered ? 2 : 0,
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            width="31"
            height="31"
            rx="7"
            fill="#F7F6F2"
            stroke="#D8D5CD"
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
          />

          <motion.path
            d="M9 16H22M17 11L22 16L17 21"
            stroke="#D75B35"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={shouldReduceMotion ? {} : {
              x: [0, 3, 0],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}

// 06: Support & Uptime SLA Visual
export function SupportShieldVisual({ className = "", isHovered = false }: VisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveHovered = shouldReduceMotion ? false : isHovered;

  return (
    <div className={cn("flex items-center justify-center pointer-events-none select-none", className)}>
      <motion.svg
        width="220"
        height="180"
        viewBox="0 0 220 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_14px_32px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="slShield" x1="79" y1="46" x2="143" y2="132" gradientUnits="userSpaceOnUse">
            <stop stopColor="#252A31" />
            <stop offset="0.55" stopColor="#111419" />
            <stop offset="1" stopColor="#080A0D" />
          </linearGradient>

          <linearGradient id="slPulse" x1="82" y1="86" x2="138" y2="86" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F06A3B" />
            <stop offset="0.5" stopColor="#3BC878" />
            <stop offset="1" stopColor="#F06A3B" />
          </linearGradient>

          <filter id="slShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        {/* Shadow */}
        <motion.ellipse
          cx="111"
          cy="144"
          rx="53"
          ry="9"
          fill="#0A0C10"
          filter="url(#slShadow)"
          initial={{ opacity: 0.18 }}
          animate={shouldReduceMotion ? {} : {
            scaleX: effectiveHovered ? 0.92 : [1, 0.96, 1],
            opacity: effectiveHovered ? 0.11 : [0.18, 0.13, 0.18],
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "111px 144px" }}
        />

        {/* SHIELD (Rises 3px on hover) */}
        <motion.g
          animate={shouldReduceMotion ? {} : {
            y: effectiveHovered ? -3 : [0, -2.5, 0],
            scale: effectiveHovered ? 1.02 : 1,
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] } : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "110px 90px" }}
        >
          {/* Outer shield */}
          <path
            d="M110 39 L151 54 V87 C151 111 134 128 110 139 C86 128 69 111 69 87 V54L110 39Z"
            fill="url(#slShield)"
            stroke="#454A52"
            strokeWidth="2"
          />

          {/* Shield inner border */}
          <path
            d="M110 48 L142 60 V86 C142 105 129 118 110 128 C91 118 78 105 78 86 V60L110 48Z"
            stroke="#D75B35"
            strokeOpacity="0.42"
            strokeWidth="1.5"
          />

          {/* Circuit lines */}
          <path
            d="M110 62V75M110 101V116 M92 78H82M128 78H138 M91 98H82M129 98H138"
            stroke="#525862"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Circuit nodes (Subtly illuminate on hover) */}
          <motion.circle
            cx="82"
            cy="78"
            r="3"
            fill="#F06A3B"
            animate={{
              scale: effectiveHovered ? 1.25 : 1,
              opacity: effectiveHovered ? 1 : 0.85,
            }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "82px 78px" }}
          />
          <motion.circle
            cx="138"
            cy="78"
            r="3"
            fill="#3BC878"
            animate={{
              scale: effectiveHovered ? 1.25 : 1,
              opacity: effectiveHovered ? 1 : 0.85,
            }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "138px 78px" }}
          />
          <motion.circle
            cx="82"
            cy="98"
            r="3"
            fill="#3BC878"
            animate={{
              scale: effectiveHovered ? 1.25 : 1,
              opacity: effectiveHovered ? 1 : 0.85,
            }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "82px 98px" }}
          />
          <motion.circle
            cx="138"
            cy="98"
            r="3"
            fill="#F06A3B"
            animate={{
              scale: effectiveHovered ? 1.25 : 1,
              opacity: effectiveHovered ? 1 : 0.85,
            }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "138px 98px" }}
          />

          {/* Heartbeat / reliability waveform (Pulse line animates) */}
          <motion.path
            d="M83 88H94L99 80L105 96L111 73L118 93L123 84H137"
            stroke="url(#slPulse)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0.8, opacity: 0.9 }}
            animate={shouldReduceMotion ? {} : {
              pathLength: effectiveHovered ? [0.6, 1, 0.6] : 1,
              opacity: effectiveHovered ? 1 : 0.9,
            }}
            transition={{ duration: 1.8, repeat: effectiveHovered ? Infinity : 0, ease: "easeInOut" }}
          />

          {/* Center status (Green uptime indicator pulses) */}
          <circle
            cx="110"
            cy="109"
            r="7"
            fill="#143724"
            stroke="#3BC878"
            strokeOpacity="0.5"
          />
          <motion.circle
            cx="110"
            cy="109"
            r="3"
            fill="#3BC878"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.3, 1],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "110px 109px" }}
          />

          {/* Bottom status */}
          <rect
            x="79"
            y="143"
            width="62"
            height="4"
            rx="2"
            fill="#D75B35"
            opacity="0.35"
          />
        </motion.g>

        {/* Floating SLA badge */}
        <motion.g
          transform="translate(146 42)"
          animate={shouldReduceMotion ? {} : {
            y: effectiveHovered ? -5 : [0, -3, 0],
            x: effectiveHovered ? 2 : 0,
          }}
          transition={effectiveHovered ? { duration: 0.45, ease: "easeOut" } : { duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            width="43"
            height="22"
            rx="6"
            fill="#F7F6F2"
            stroke="#D8D5CD"
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
          />
          <circle cx="9" cy="11" r="3" fill="#3BC878" />
          <text
            x="16"
            y="14"
            fontFamily="monospace"
            fontSize="7"
            fontWeight="700"
            fill="#343840"
          >
            99.9%
          </text>
        </motion.g>
      </motion.svg>
    </div>
  );
}

