import React from 'react'
export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-400 mb-2">© 2026 Senrith Fernando</p>
          <p className="text-slate-600 text-sm">
            Built with clarity, curiosity, and clean code.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <a href="#home" className="hover:text-emerald-400 transition-colors">
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-emerald-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#design"
            className="hover:text-emerald-400 transition-colors"
          >
            Design Corner
          </a>
          <a
            href="#contact"
            className="hover:text-emerald-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
