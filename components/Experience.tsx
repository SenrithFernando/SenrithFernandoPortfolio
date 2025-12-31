
import { Section } from './ui/Section'
import { Card } from './ui/Card'
import { Briefcase, Calendar } from 'lucide-react'
export const Experience = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey in the tech industry."
    >
      <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-4">
        <div className="relative">
          <span className="absolute -left-[41px] md:-left-[59px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 ring-8 ring-slate-950">
            <Briefcase size={20} className="text-white" />
          </span>

          <Card className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Intern Web Developer
                </h3>
                <p className="text-emerald-400 font-medium">
                  Loopy Holdings (Pvt) Ltd
                </p>
              </div>
              <div className="flex items-center text-slate-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                <Calendar size={14} className="mr-2" />
                Feb 2023 – Jul 2023
              </div>
            </div>

            <ul className="space-y-3 text-slate-300 list-disc list-outside ml-4">
              <li>
                Developed and maintained web applications using{' '}
                <span className="text-white font-medium">PHP</span> and{' '}
                <span className="text-white font-medium">Bootstrap</span>,
                ensuring robust functionality.
              </li>
              <li>
                Improved responsiveness and User Experience (UX) across multiple
                client projects.
              </li>
              <li>
                Optimized legacy code and layouts to enhance performance and
                loading speeds.
              </li>
              <li>
                Collaborated with senior developers to support frontend-backend
                integration and resolve critical bugs.
              </li>
            </ul>
          </Card>
          
        </div>
      </div>
    </Section>
  )
}
