import React from 'react'
import { Section } from './ui/Section'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { ExternalLink, Github, Calendar } from 'lucide-react'
const projects = [
  {
    title: 'TUK – Task Management System',
    date: 'Jun 2025 – Jul 2025',
    description:
      'A comprehensive task management dashboard with role-based access control. Features include priority handling, deadline tracking, and team collaboration tools.',
    tags: ['MERN', 'React', 'Node.js', 'MongoDB'],
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800&h=500',
    links: {
      live: '#',
      repo: '#',
    },
  },
  {
    title: 'CareMe – Caregiver System',
    date: 'May 2025 – Jun 2025',
    description:
      'Digital platform connecting caregivers with patients. Includes appointment scheduling, profile management, and administrative tools for service oversight.',
    tags: ['MERN', 'Express', 'Redux', 'Tailwind'],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=500',
    links: {
      live: '#',
      repo: '#',
    },
  },
  {
    title: 'MediLife – Telemedicine System',
    date: 'Feb 2025 – May 2025',
    description:
      'Full-scale telemedicine application facilitating remote consultations, digital prescriptions, and emergency service locators.',
    tags: ['MERN', 'Socket.io', 'JWT', 'Stripe'],
    image:
      'https://images.unsplash.com/photo-1576091160550-2187d80a18f7?auto=format&fit=crop&q=80&w=800&h=500',
    links: {
      live: '#',
      repo: '#',
    },
  },
  {
    title: 'Examination System',
    date: 'Feb 2024 – May 2024',
    description:
      'Web-based examination portal allowing admins to create tests and students to take them securely. Features auto-grading and result generation.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=500',
    links: {
      live: '#',
      repo: '#',
    },
  },
]
export const Projects = () => {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A selection of my recent work in web development."
    >
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="group flex flex-col h-full" hoverEffect>
            <div className="relative h-48 overflow-hidden border-b border-slate-800">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 z-20">
                <Badge
                  variant="default"
                  className="bg-slate-900/80 backdrop-blur text-xs"
                >
                  <Calendar size={12} className="mr-1" />
                  {project.date}
                </Badge>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  href={project.links.repo}
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  href={project.links.live}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
