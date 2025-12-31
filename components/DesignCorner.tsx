import { useState } from "react";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Modal } from "./ui/Modal";
import { Eye, Layout, ChevronLeft, ChevronRight, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

type DesignItem = {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  // Either show an image cover OR an icon
  cover?: string;
  icon?: ReactNode;

  // Tailwind-safe class strings (static)
  softBg: string;        // e.g. "bg-rose-500/10"
  hoverSoftBg: string;   // e.g. "group-hover:bg-rose-500/20"

  images: string[];
};

const designItems: DesignItem[] = [
  {
    id: 1,
    title: "Yogashram Horana Flyer Series",
    description:
      "Educational flyers for desk workers (chair yoga) and mindful wellness posts.",
    fullDescription:
      "A series of minimal, typography-driven flyers designed to promote wellness in the workplace. The design focuses on calming colors, clear hierarchy, and accessible instructions for chair yoga exercises.",
    tags: ["Flyer Design", "Minimal", "Typography"],
    cover: "https://i.ibb.co/QjtLQwsm/Black-and-White-Minimalist-Yoga-Logo.png",
    softBg: "bg-rose-500/10",
    hoverSoftBg: "group-hover:bg-rose-500/20",
    images: [
      "https://i.ibb.co/tpdQ085Z/1.png",
      "https://i.ibb.co/21hwvFhX/3.png",
      "https://i.ibb.co/8FfwVnQ/4.png",
      "https://i.ibb.co/TqKb2Zg3/Blue-and-Yellow-Modern-Best-Employee-Instagram-Post.png",
      "https://i.ibb.co/hFBsX8Gs/2.png",
    ],
  },
  {
    id: 2,
    title: "Anu Foods Flyer Series",
    description:
      "Clean recruitment poster layout with strong hierarchy and modern spacing.",
    fullDescription:
      "A modern recruitment poster concept that breaks away from traditional corporate styles. Utilizes negative space and bold typography to attract attention while maintaining professional clarity.",
    tags: ["Poster", "Layout", "Branding"],
    cover: ['https://i.ibb.co/hFx5X5W9/2.png'],
    softBg: "bg-orange-500/10",
    hoverSoftBg: "group-hover:bg-orange-500/20",
    images: [
      "https://i.ibb.co/CKpdJd78/2.png",
      "https://i.ibb.co/WdNT0yv/5.png",
      "https://i.ibb.co/qLfBMT22/1.png",
      "https://i.ibb.co/bj9QbFG9/6.png",
      "https://i.ibb.co/Hf17K9gS/Orange-Black-Simple-Food-Restaurant-Facebook-Cover.png",
      "https://i.ibb.co/jP4Y6JPb/Yellow-And-Brown-Indian-Dal-Vade-Food-Promotion-Instagram-Post.png",
      "https://i.ibb.co/snv3N5n/Anu-logo.png",
    ],
  },
  {
    id: 3,
    title: "Dayya Spices Package Design",
    description:
      "Exploration of modern Package design for Dayya Spices Company",
    fullDescription:
      "Exploration of modern Package design for Dayya Spices Company",
    tags: ["Graphic Design", "Package design", "Modern"],
    cover: ['https://i.ibb.co/0jMKpx2h/dyya2.png'],
    softBg: "bg-blue-500/10",
    hoverSoftBg: "group-hover:bg-blue-500/20",
    images: [
      "https://i.ibb.co/SXncDzyR/dyya2.png",
      "https://i.ibb.co/whFwvPmt/dyya1.png",
      "https://i.ibb.co/Zprsmmv5/dyya5.png",
      "https://i.ibb.co/tMv05sDj/dyya6.png",
      
    ],
  },
];

export const DesignCorner = () => {
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = (item: DesignItem) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedItem) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length);
  };

  const prevImage = () => {
    if (!selectedItem) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length
    );
  };

  return (
    <Section
      id="design"
      title="Design Corner"
      subtitle="Where creativity meets structure. A collection of my graphic and UI design work."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {designItems.map((item) => (
          <Card key={item.id} className="group h-full flex flex-col" hoverEffect>
            <div
              className={`h-40 ${item.softBg} flex items-center justify-center border-b border-slate-800 relative overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-white/0 ${item.hoverSoftBg} transition-colors duration-500`}
              />

              <div className="text-slate-300 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                {item.cover ? (
                  <img
                    src={item.cover}
                    alt={`${item.title} cover`}
                    className="h-auto w-100 object-contain opacity-90"
                    loading="lazy"
                  />
                ) : (
                  item.icon
                )}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-4 flex-1">{item.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[10px] py-0.5 px-2">
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

      <Modal isOpen={!!selectedItem} onClose={handleCloseModal} title={selectedItem?.title}>
        {selectedItem && (
          <div className="space-y-6">
            <div className="relative">
              <div className="relative w-full h-98 rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedItem.images[currentImageIndex]}
                    alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                  />
                </AnimatePresence>

                {selectedItem.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white hover:bg-slate-800 hover:border-emerald-500/50 transition-all"
                      aria-label="Previous image"
                      type="button"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white hover:bg-slate-800 hover:border-emerald-500/50 transition-all"
                      aria-label="Next image"
                      type="button"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white text-sm">
                  {currentImageIndex + 1} / {selectedItem.images.length}
                </div>
              </div>

              {selectedItem.images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {selectedItem.images.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setCurrentImageIndex(index)}
                      type="button"
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? "border-emerald-500 ring-2 ring-emerald-500/20"
                          : "border-slate-700 hover:border-slate-600"
                      }`}
                      aria-label={`Select image ${index + 1}`}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      {index === currentImageIndex && <div className="absolute inset-0 bg-emerald-500/20" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">About this project</h4>
              <p className="text-slate-300 leading-relaxed">{selectedItem.fullDescription}</p>
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
  );
};
