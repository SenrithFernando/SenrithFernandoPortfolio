import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  hoverEffect?: boolean
}
export const Card = ({
  children,
  className = '',
  hoverEffect = false,
  ...props
}: CardProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 shadow-xl ${className}`}
      whileHover={
        hoverEffect
          ? {
              y: -4,
              borderColor: 'rgba(16, 185, 129, 0.3)',
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(16, 185, 129, 0.1)',
            }
          : undefined
      }
      transition={{
        duration: 0.2,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
