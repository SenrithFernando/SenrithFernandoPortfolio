import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  external?: boolean
}
export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  external,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    primary:
      'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20',
    secondary:
      'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700',
    outline:
      'border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10',
    ghost: 'text-slate-400 hover:text-white hover:bg-slate-800/50',
  }
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  }
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  const motionProps = {
    whileHover: {
      y: -2,
      scale: 1.02,
    },
    whileTap: {
      scale: 0.98,
    },
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 17,
    },
    ...props,
  }
  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...(motionProps as any)}
      >
        {children}
      </motion.a>
    )
  }
  return (
    <motion.button className={combinedClassName} {...motionProps}>
      {children}
    </motion.button>
  )
}
