import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-[#1A1A1A] rounded-xl border border-emerald-500/10 p-6 backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}