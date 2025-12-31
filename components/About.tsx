
import { Section } from './ui/Section'
import { Card } from './ui/Card'
import { CheckCircle2, Code2, Database, Layout } from 'lucide-react'
export const About = () => {
  const focusItems = [
    {
      icon: <Code2 size={20} />,
      text: 'MERN stack applications',
    },
    {
      icon: <Database size={20} />,
      text: 'PHP + MySQL systems',
    },
    {
      icon: <Layout size={20} />,
      text: 'Clean UI + performance improvements',
    },
    {
      icon: <CheckCircle2 size={20} />,
      text: 'Basic graphic design for flyers/social assets',
    },
  ]
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A glimpse into my journey and current focus."
    >
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed">
            I am an undergraduate IT student and Intern Software Developer with
            a passion for building user-focused solutions. My journey started
            with a curiosity for how things work on the web, which led me to
            dive deep into full-stack development.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            I believe in the power of continuous learning. Whether it's
            mastering a new framework or optimizing a database query, I approach
            every challenge with a problem-solving mindset and a dedication to
            writing clean, maintainable code. I thrive in collaborative
            environments where I can contribute to the team's success while
            growing as a developer.
          </p>
        </div>

        <Card className="p-6 bg-slate-900/30">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-emerald-500 rounded-full" />
            What I'm focused on
          </h3>
          <ul className="space-y-4">
            {focusItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-300">
                <span className="text-emerald-500 mt-1 shrink-0">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}
