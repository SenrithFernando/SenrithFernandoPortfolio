
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Experience } from '../components/Experience'
import { DesignCorner } from '../components/DesignCorner'
import { Education } from '../components/Education'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
export const Portfolio = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <DesignCorner />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
