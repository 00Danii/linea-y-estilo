"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { categories } from "../lib/categories";

export default function CategoryGrid() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecciona una categoría para ver el catálogo en pantalla completa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/pdf/${category.id}`}
              className="group block"
            >
              <div
                className={`relative overflow-hidden rounded-xl p-6 bg-linear-to-br ${category.color} transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
