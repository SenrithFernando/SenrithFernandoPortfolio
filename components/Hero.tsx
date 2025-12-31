import React from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
export const Hero = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <Badge variant="accent">BSc IT (SLIIT)</Badge>
            <Badge variant="outline">NVQ Level 4</Badge>
            <Badge variant="outline">Intern Web Developer</Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Intern Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Developer
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-400 max-w-xl leading-relaxed"
          >
            Hands-on web developer with a strong foundation in Java, PHP, and
            the MERN stack. Passionate about building clean, performant UIs and
            scalable backend systems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 text-slate-400 text-sm"
          >
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-emerald-500" />
              <span>Galle • Malabe, Sri Lanka</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button size="lg" href="#projects">
              View Projects
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-8 border-t border-slate-800/50 mt-8"
          >
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rihansenrith@gmail.com"
              className="text-slate-400 hover:text-emerald-400 transition-colors hover:scale-110 transform duration-200"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual/Graphic */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto text-xs text-slate-500 font-mono">
                developer.tsx
              </div>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex">
                <span className="text-purple-400 w-8">1</span>
                <span className="text-pink-400">const</span>{' '}
                <span className="text-blue-400">developer</span> ={' '}
                <span className="text-yellow-300">{`{`}</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 w-8">2</span>
                <span className="pl-4 text-slate-300">name:</span>{' '}
                <span className="text-green-400">'Senrith Fernando'</span>,
              </div>
              <div className="flex">
                <span className="text-slate-600 w-8">3</span>
                <span className="pl-4 text-slate-300">role:</span>{' '}
                <span className="text-green-400">
                  'Intern Software Developer'
                </span>
                ,
              </div>
              <div className="flex">
                <span className="text-slate-600 w-8">4</span>
                <span className="pl-4 text-slate-300">stack:</span>{' '}
                <span className="text-yellow-300">['MERN', 'PHP', 'SQL']</span>,
              </div>
              <div className="flex">
                <span className="text-slate-600 w-8">5</span>
                <span className="pl-4 text-slate-300">passion:</span>{' '}
                <span className="text-green-400">'Clean UI & Performance'</span>
              </div>
              <div className="flex">
                <span className="text-slate-600 w-8">6</span>
                <span className="text-yellow-300">{`}`}</span>;
              </div>
            </div>
          </div>

          {/* Decorative floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-10 -right-10 bg-slate-800/80 backdrop-blur p-4 rounded-xl border border-slate-700 shadow-xl"
          >
            <div className="text-emerald-400 font-bold text-xl">10+</div>
            <div className="text-xs text-slate-400">Projects Built</div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute -bottom-5 -left-5 bg-slate-800/80 backdrop-blur p-4 rounded-xl border border-slate-700 shadow-xl"
          >
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">
                R
              </div>
              <div className="w-8 h-8 rounded bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-xs">
                JS
              </div>
              <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-xs">
                N
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
