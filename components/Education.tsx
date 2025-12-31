
import { Section } from './ui/Section'
import { Card } from './ui/Card'
import { GraduationCap, Award } from 'lucide-react'
export const Education = () => {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic background and qualifications."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 border-l-4 border-l-emerald-500">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                BSc in Information Technology
              </h3>
              <p className="text-emerald-400">SLIIT</p>
            </div>
            <GraduationCap className="text-slate-500" size={24} />
          </div>
          <p className="text-slate-400 text-sm mb-2">Jul 2023 – Present</p>
          <p className="text-slate-300">
            Currently in 3rd Year, 1st Semester. Focusing on software
            engineering principles and full-stack development.
          </p>
        </Card>

        <Card className="p-6 border-l-4 border-l-blue-500">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                NVQ Level 4 – Software Developer
              </h3>
              <p className="text-blue-400">NVTI Baddegama</p>
            </div>
            <Award className="text-slate-500" size={24} />
          </div>
          <p className="text-slate-400 text-sm mb-2">Jan 2022 – Dec 2022</p>
          <p className="text-slate-300">
            Comprehensive training in software development fundamentals,
            database management, and programming logic.
          </p>
        </Card>

        <Card className="p-6 md:col-span-2 bg-slate-900/30">
          <h3 className="text-lg font-bold text-white mb-4">
            Other Qualifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <div>
                <p className="text-white font-medium">Diploma in English</p>
                <p className="text-slate-400 text-xs">ICBT Galle</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
              <div className="w-2 h-2 rounded-full bg-pink-500" />
              <div>
                <p className="text-white font-medium">Diploma in ICT</p>
                <p className="text-slate-400 text-xs">ICBT Galle</p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <div>
                <p className="text-white font-medium">Advanced Level in Science Stream – (2020)</p>
                <p className="text-slate-400 text-xs">Richmond College Galle</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
              <div className="w-2 h-2 rounded-full bg-pink-500" />
              <div>
                <p className="text-white font-medium">Advanced Level in Technology Stream – (2021)</p>
                <p className="text-slate-400 text-xs">Private - 5886414</p>
              </div>
            </div>
          </div>
        </Card>
        
      </div>
    </Section>
  )
}
