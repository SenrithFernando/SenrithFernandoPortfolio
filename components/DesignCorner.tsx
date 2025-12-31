import React, { useState, Component } from 'react'
import { Section } from './ui/Section'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { Modal } from './ui/Modal'
import {
  Eye,
  Palette,
  Image as ImageIcon,
  Layout,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
interface DesignItem {
  id: number
  title: string
  description: string
  fullDescription: string
  tags: string[]
  icon: React.ReactNode
  color: string
  images: string[]
}
const designItems: DesignItem[] = [
  {
    id: 1,
    title: 'Yoga Flyers Series',
    description:
      'Educational flyers for desk workers (chair yoga) and mindful wellness posts.',
    fullDescription:
      'A series of minimal, typography-driven flyers designed to promote wellness in the workplace. The design focuses on calming colors, clear hierarchy, and accessible instructions for chair yoga exercises. Created using Adobe Illustrator and Photoshop.',
    tags: ['Flyer Design', 'Minimal', 'Typography'],
    icon: <ImageIcon size={40} />,
    color: 'bg-rose-500',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800&h=600',
    ],
  },
  {
    id: 2,
    title: 'Hiring Poster Concept',
    description:
      'Clean recruitment poster layout with strong hierarchy and modern spacing.',
    fullDescription:
      'A modern recruitment poster concept that breaks away from traditional corporate styles. Utilizes negative space and bold typography to attract attention while maintaining professional clarity. The layout guides the eye naturally through the key information.',
    tags: ['Poster', 'Layout', 'Branding'],
    icon: <Palette size={40} />,
    color: 'bg-orange-500',
    images: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=600',
    ],
  },
  {
    id: 3,
    title: 'UI Concept / Web Sections',
    description:
      'Hero sections and modern layouts for web projects with a dark theme.',
    fullDescription:
      'Exploration of modern web interface patterns focusing on dark mode aesthetics. Includes designs for hero sections, feature grids, and dashboard components. Emphasizes glass morphism effects and subtle gradients.',
    tags: ['UI', 'Web', 'Components'],
    icon: <Layout size={40} />,
    color: 'bg-blue-500',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800&h=600',
    ],
  },
]
export const DesignCorner = () => {
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const handleOpenModal = (item: DesignItem) => {
    setSelectedItem(item)
    setCurrentImageIndex(0)
  }
  const handleCloseModal = () => {
    setSelectedItem(null)
    setCurrentImageIndex(0)
  }
  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length)
    }
  }
  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedItem.images.length) % selectedItem.images.length,
      )
    }
  }
  return (
    <Section
      id="design"
      title="Design Corner"
      subtitle="Where creativity meets structure. A collection of my graphic and UI design work."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {designItems.map((item) => (
          <Card
            key={item.id}
            className="group h-full flex flex-col"
            hoverEffect
          >
            <div
              className={`h-40 ${item.color}/10 flex items-center justify-center border-b border-slate-800 relative overflow-hidden`}
            >
              <div
                className={`absolute inset-0 ${item.color}/5 group-hover:${item.color}/20 transition-colors duration-500`}
              />
              <div
                className={`text-slate-400 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110`}
              >
                {item.icon}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 flex-1">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[10px] py-0.5 px-2"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={() => handleOpenModal(item)}
              >
                <Eye size={16} className="mr-2" />
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-500 italic font-medium">
          "Design helps communication. Code helps reality."
        </p>
      </div>

      <Modal
        isOpen={!!selectedItem}
        onClose={handleCloseModal}
        title={selectedItem?.title}
      >
        {selectedItem && (
          <div className="space-y-6">
            {/* Image Gallery with Navigation */}
            <div className="relative">
              <div className="relative w-full h-96 rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedItem.images[currentImageIndex]}
                    alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {selectedItem.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white hover:bg-slate-800 hover:border-emerald-500/50 transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white hover:bg-slate-800 hover:border-emerald-500/50 transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white text-sm">
                  {currentImageIndex + 1} / {selectedItem.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              {selectedItem.images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {selectedItem.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-700 hover:border-slate-600'}`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {index === currentImageIndex && (
                        <div className="absolute inset-0 bg-emerald-500/20" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">
                About this project
              </h4>
              <p className="text-slate-300 leading-relaxed">
                {selectedItem.fullDescription}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  )
}
