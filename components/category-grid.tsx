"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import PDFViewer from "./pdf-viewer";

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  pdfUrl: string;
}

const categories: Category[] = [
  {
    id: "abrigos",
    name: "Abrigos",
    icon: "🧥",
    color: "from-primary to-primary/50",
    description: "Última colección de temporada",
    pdfUrl: "/pdfs/abrigos.pdf",
  },
  {
    id: "basicosycomodos",
    name: "Basicos y Comodos",
    icon: "👕",
    color: "from-primary to-primary/50",
    description: "Última colección de temporada",
    pdfUrl: "/pdfs/Basicos.pdf",
  },
  {
    id: "botas",
    name: "Botas",
    icon: "",
    color: "from-primary to-primary/50",
    description: "Más de 700 modelos disponibles",
    pdfUrl: "/pdfs/botad.pdf",
  },
  {
    id: "caballeros",
    name: "Caballeros",
    icon: "",
    color: "from-primary to-primary/50",
    description: "Más de 700 modelos disponibles",
    pdfUrl: "/pdfs/caballeros.pdf",
  },
];

export default function CategoryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedCategory ? (
          <PDFViewer
            category={selectedCategory}
            onBack={() => setSelectedCategory(null)}
          />
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Nuestras Categorías
              </h2>
              <p className="text-muted-foreground text-lg">
                Selecciona una categoría para descargar el catálogo en PDF
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div
                    className={`relative overflow-hidden rounded-xl p-6 bg-gradient-to-br ${category.color} transition-all duration-300 hover:shadow-lg hover:scale-105`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 space-y-4">
                      <div className="text-4xl">{category.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {category.name}
                        </h3>
                        <p className="text-sm text-foreground/80">
                          {category.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        <FileText className="w-4 h-4" />
                        Ver PDF
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
