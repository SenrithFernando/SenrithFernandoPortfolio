
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

          {/* loopy */}
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
        <div className="relative">
          <span className="absolute -left-[41px] md:-left-[59px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 ring-8 ring-slate-950">
            <Briefcase size={20} className="text-white" />
          </span>
          {/* gamage */}
          <Card className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Intern Backend & UI/UX Developer
                </h3>
                <p className="text-emerald-400 font-medium">
                  Gamage Recruiters (Pvt) Ltd
                </p>
              </div>
              <div className="flex items-center text-slate-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                <Calendar size={14} className="mr-2" />
                Nov 2025 – May 2026
              </div>
            </div>

            <ul className="space-y-3 text-slate-300 list-disc list-outside ml-4">
              <li>
                Developed and maintained backend functionalities using{' '}
                <span className="text-white font-medium">Spring Boot</span>, focusing on
                clean API structure and reliable system performance.
              </li>

              <li>
                Designed and improved user interfaces using{' '}
                <span className="text-white font-medium">Bootstrap</span>, ensuring
                responsive layouts across desktop and mobile devices.
              </li>

              <li>
                Created and enhanced UI/UX designs with attention to usability,
                accessibility, visual consistency, and smooth user flow.
              </li>

              <li>
                Worked on frontend-backend integration by connecting UI components with
                backend services and resolving integration issues.
              </li>

              <li>
                Optimized existing layouts, components, and legacy code to improve page
                loading speed, responsiveness, and overall user experience.
              </li>

              <li>
                Collaborated with senior developers and designers to identify bugs, improve
                application features, and deliver client-focused web solutions.
              </li>
            </ul>
          </Card>
          
        </div>

         <div className="relative">
          <span className="absolute -left-[41px] md:-left-[59px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 ring-8 ring-slate-950">
            <Briefcase size={20} className="text-white" />
          </span>

          {/* tukzi */}
          <Card className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Graphic Designer & Director of Tukzi Advertizing and Branding Company.
                </h3>
                <p className="text-emerald-400 font-medium">
                  Tukzi Advertizing and Branding Company
                </p>
              </div>
              <div className="flex items-center text-slate-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                <Calendar size={14} className="mr-2" />
                Jan 2025 – Present
              </div>
            </div>

            <ul className="space-y-3 text-slate-300 list-disc list-outside ml-4">
              <li>
                Designed professional branding materials including{' '}
                <span className="text-white font-medium">logos</span>, flyers, banners,
                business cards, social media posts, and promotional designs for clients.
              </li>

              <li>
                Directed creative projects from concept to final delivery, ensuring each
                design aligned with the client’s brand identity and marketing goals.
              </li>

              <li>
                Managed client communication, gathered design requirements, and provided
                creative solutions for advertising and branding campaigns.
              </li>

              <li>
                Created visually engaging digital content for{' '}
                <span className="text-white font-medium">social media marketing</span>,
                helping businesses improve online presence and audience engagement.
              </li>

              <li>
                Oversaw brand development, visual consistency, layout design, typography,
                color selection, and overall creative direction across multiple projects.
              </li>

              <li>
                Handled business operations, project planning, design approvals, and
                delivery coordination as the director of the company.
              </li>
            </ul>
          </Card>

          
        </div>

        <div className="relative">
          <span className="absolute -left-[41px] md:-left-[59px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 ring-8 ring-slate-950">
            <Briefcase size={20} className="text-white" />
          </span>

          {/* haylese */}
           <Card className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Intern Software Developer
                </h3>
                <p className="text-emerald-400 font-medium">
                  Hayleys Fibre - Chas P. Hayley & Co. Ltd. - Galle
                </p>
              </div>
              <div className="flex items-center text-slate-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                <Calendar size={14} className="mr-2" />
                March 2025 – Present
              </div>
            </div>

            <ul className="space-y-3 text-slate-300 list-disc list-outside ml-4">
              <li>
                Contributed to the development of a{' '}
                <span className="text-white font-medium">Weighbridge Management System</span>{' '}
                to digitize and streamline vehicle weight recording and operational workflows.
              </li>

              <li>
                Assisted in building backend functionalities for managing weighbridge entries,
                vehicle details, supplier information, material records, and transaction history.
              </li>

              <li>
                Designed and improved user-friendly interfaces to support smooth data entry,
                record viewing, and daily operational usage by company staff.
              </li>

              <li>
                Implemented features to calculate and manage gross weight, tare weight, net
                weight, and related weighbridge transaction details accurately.
              </li>

              <li>
                Worked on report generation and data filtering features to help users view,
                search, and analyze weighbridge records efficiently.
              </li>

              <li>
                Collaborated with supervisors and internal users to understand real business
                requirements, improve system usability, and fix issues during development.
              </li>
            </ul>
          </Card>
          
          
        </div>

        <div className="relative">
          <span className="absolute -left-[41px] md:-left-[59px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 ring-8 ring-slate-950">
            <Briefcase size={20} className="text-white" />
          </span>

          {/* yogashram */}
           <Card className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Social Media Manager & Graphic Designer at Yogashram.
                </h3>
                <p className="text-emerald-400 font-medium">
                  Yogashram - Horana
                </p>
              </div>
              <div className="flex items-center text-slate-400 text-sm bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                <Calendar size={14} className="mr-2" />
                Dec 2025 – Present
              </div>
            </div>

            <ul className="space-y-3 text-slate-300 list-disc list-outside ml-4">
              <li>
                Managed Yogashram’s social media platforms by planning, creating, and
                publishing engaging content to promote services, events, and brand awareness.
              </li>

              <li>
                Designed creative digital graphics including{' '}
                <span className="text-white font-medium">social media posts</span>, flyers,
                banners, advertisements, and promotional materials.
              </li>

              <li>
                Developed content strategies to improve audience engagement, maintain a
                consistent posting schedule, and strengthen Yogashram’s online presence.
              </li>

              <li>
                Created visually consistent designs using proper layout, typography, color
                combinations, and branding elements to match Yogashram’s identity.
              </li>

              <li>
                Wrote captions, promotional messages, and content ideas suitable for
                social media campaigns and event promotions.
              </li>

              <li>
                Coordinated with the team to understand marketing requirements, prepare
                creative concepts, and deliver high-quality designs on time.
              </li>
            </ul>
          </Card>
          
        </div>
      </div>
    </Section>
  )
}
