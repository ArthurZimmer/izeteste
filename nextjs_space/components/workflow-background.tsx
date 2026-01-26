'use client';

import { motion } from 'framer-motion';

export function WorkflowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a3e635" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid de fundo */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Conexões de workflow - linhas curvas */}
        <g className="workflow-lines" opacity="0.4">
          <motion.path
            d="M 50 200 Q 150 200 200 250 T 350 280"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
          />
          <motion.path
            d="M 350 280 Q 450 300 500 350 T 650 380"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M 650 380 Q 750 400 850 350 T 1000 320"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <motion.path
            d="M 100 100 Q 200 80 300 120 T 500 100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          />
          <motion.path
            d="M 700 600 Q 800 620 900 580 T 1100 550"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
          />
          <motion.path
            d="M 500 100 Q 520 200 500 350"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
          <motion.path
            d="M 350 280 Q 300 350 250 450"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.9 }}
          />
          <motion.path
            d="M 1000 320 Q 1050 380 1100 450"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </g>

        {/* Nós do workflow - quadradinhos estilo n8n */}
        <g filter="url(#glow)">
          <motion.rect
            x="40" y="190" width="24" height="24" rx="6"
            fill="#1a1a2e"
            stroke="#a3e635"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.rect
            x="340" y="268" width="24" height="24" rx="6"
            fill="#1a1a2e"
            stroke="#7C3AED"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.rect
            x="640" y="368" width="24" height="24" rx="6"
            fill="#1a1a2e"
            stroke="#a3e635"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
          <motion.rect
            x="990" y="308" width="24" height="24" rx="6"
            fill="#1a1a2e"
            stroke="#7C3AED"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.rect
            x="90" y="88" width="24" height="24" rx="6"
            fill="#1a1a2e"
            stroke="#a3e635"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.rect
            x="490" y="88" width="24" height="24" rx="6"
            fill="#1a1a2e"
            stroke="#7C3AED"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.rect
            x="240" y="440" width="24" height="24" rx="6"
            fill="#1a1a2e"
            stroke="#a3e635"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.rect
            x="690" y="588" width="24" height="24" rx="6"
            fill="#1a1a2e"
            stroke="#7C3AED"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          <motion.rect
            x="1090" y="538" width="24" height="24" rx="6"
            fill="#1a1a2e"
            stroke="#a3e635"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.rect
            x="1090" y="440" width="24" height="24" rx="6"
            fill="#1a1a2e"
            stroke="#7C3AED"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          />
        </g>

        {/* Círculos decorativos pequenos (conectores) */}
        <g fill="#a3e635" opacity="0.5">
          <circle cx="200" cy="250" r="4" />
          <circle cx="500" cy="350" r="4" />
          <circle cx="850" cy="350" r="4" />
          <circle cx="300" cy="120" r="4" />
          <circle cx="900" cy="580" r="4" />
          <circle cx="300" cy="350" r="4" />
          <circle cx="1050" cy="380" r="4" />
        </g>

        {/* Ícones dentro de alguns nós (símbolos) */}
        <g fill="#a3e635" opacity="0.8">
          <circle cx="52" cy="202" r="6" fill="none" stroke="#a3e635" strokeWidth="1.5" />
          <path d="M 356 278 L 352 282 L 356 282 L 352 288" stroke="#7C3AED" strokeWidth="1.5" fill="none" />
          <path d="M 648 378 L 652 382 L 658 374" stroke="#a3e635" strokeWidth="2" fill="none" />
          <path d="M 998 318 L 1006 322 L 998 326" stroke="#7C3AED" strokeWidth="1.5" fill="none" />
        </g>
      </svg>
    </div>
  );
}
