import React from 'react'
import { motion } from 'framer-motion'
interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'accent'
  className?: string
  icon?: React.ReactNode
}
export const Badge = ({
  children,
  variant = 'default',
  className = '',
  icon,
}: BadgeProps) => {
  const variants = {
    default: 'bg-slate-800 text-slate-300 border border-slate-700',
    outline: 'bg-transparent border border-slate-700 text-slate-400',
    accent: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  }
  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
      whileHover={{
        scale: 1.05,
        borderColor:
          variant === 'accent'
            ? 'rgba(16, 185, 129, 0.5)'
            : 'rgba(148, 163, 184, 0.5)',
        boxShadow: '0 0 8px rgba(16, 185, 129, 0.1)',
      }}
    >
      {icon && (
        <motion.span
          className="mr-2"
          whileHover={{
            rotate: 15,
          }}
        >
          {icon}
        </motion.span>
      )}
      {children}
    </motion.span>
  )
}
