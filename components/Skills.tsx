import React from 'react'
import { Section } from './ui/Section'
import { Badge } from './ui/Badge'
import { Card } from './ui/Card'
import {
  Code,
  Server,
  Database,
  Layers,
  LayoutTemplate,
  Terminal,
  Cpu,
} from 'lucide-react'
export const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      icon: <LayoutTemplate className="text-blue-400" />,
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'Bootstrap',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="text-emerald-400" />,
      skills: ['Node.js', 'PHP', 'REST APIs', 'Express'],
    },
    {
      title: 'Database',
      icon: <Database className="text-yellow-400" />,
      skills: ['MySQL', 'SQL', 'MongoDB'],
    },
    {
      title: 'Tools & Others',
      icon: <Terminal className="text-purple-400" />,
      skills: ['Git', 'VS Code', 'Postman', 'Figma', 'Responsive Design'],
    },
  ]
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="The technologies and tools I use to bring ideas to life."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, index) => (
          <Card key={index} className="p-6 h-full" hoverEffect>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                {group.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="default"
                  className="hover:bg-slate-700 transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400">
            <Cpu size={24} />
          </div>
          <div>
            <h4 className="text-white font-bold">
              Currently Learning & Improving
            </h4>
            <p className="text-slate-400 text-sm">
              Expanding my stack with modern frameworks and practices.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Badge variant="accent">Next.js</Badge>
          <Badge variant="accent">UI Systems</Badge>
          <Badge variant="accent">CI/CD</Badge>
        </div>
      </div>
    </Section>
  )
}
