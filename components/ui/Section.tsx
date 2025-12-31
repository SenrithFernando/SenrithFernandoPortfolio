import React from 'react'
import { motion } from 'framer-motion'
interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
}
export const Section = ({
  id,
  children,
  className = '',
  title,
  subtitle,
}: SectionProps) => {
  return (
    <section id={id} className={`py-20 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {(title || subtitle) && (
          <motion.div
            className="mb-12 md:mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-100px',
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {title}
                <span className="text-emerald-500">.</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-400 max-w-2xl">{subtitle}</p>
            )}
            <div className="h-1 w-20 bg-emerald-500/30 mt-6 rounded-full" />
          </motion.div>
        )}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-50px',
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
