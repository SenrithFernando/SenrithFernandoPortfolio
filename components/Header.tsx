import React, {  useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { Button } from './ui/Button'
const navLinks = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Design',
    href: '#design',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
      setMobileMenuOpen(false)
    }
  }
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/SenrithFernandoCV.pdf'
    link.download = 'SenrithFernandoCV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setMobileMenuOpen(false)
  }
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold text-white tracking-tight flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-900 font-bold text-lg">
            S
          </span>
          Senrith Fernando
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            className="ml-4 gap-2"
            onClick={handleDownloadCV}
          >
            <Download size={16} />
            CV
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: 'auto',
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          className="lg:hidden bg-slate-900 border-b border-slate-800"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-base font-medium text-slate-300 hover:text-emerald-400 py-2 border-b border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="outline"
              className="w-full justify-center gap-2 mt-4"
              onClick={handleDownloadCV}
            >
              <Download size={18} />
              Download CV
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
