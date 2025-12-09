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
          {categories.map((category) => {
            const bgUrl = `/images/${category.id}.webp`;
            return (
              <Link
                key={category.id}
                href={`/pdf/${category.id}`}
                className="group block"
              >
                <article
                  aria-label={`Ver PDF de ${category.name}`}
                  className="relative overflow-hidden rounded-2xl shadow-lg transform transition duration-300 hover:scale-[1.03] focus-within:scale-[1.03]"
                >
                  {/* Fondo con imagen + gradiente overlay */}
                  <div
                    className="h-56 sm:h-64 md:h-72 bg-center bg-cover"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.45) 60%), url('${bgUrl}')`,
                    }}
                  />

                  {/* Contenido sobre imagen */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="flex h-full flex-col justify-between p-5">
                      <div className="pointer-events-auto">
                        <span className="inline-flex items-center rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
                          {category.name}
                        </span>
                      </div>

                      <div className="pointer-events-auto flex items-end justify-between">
                        <div className="bg-white/10 text-white backdrop-blur-sm rounded-md">
                          <h3 className="text-lg font-bold drop-shadow-sm ">
                            {category.name}
                          </h3>
                          <p className="mt-1 text-sm  max-w-xs">
                            {category.description}
                          </p>
                        </div>

                        <div className="ml-4 self-end">
                          <span className="inline-flex items-center gap-2 bg-white/10 text-foreground px-3 py-2 rounded-lg font-medium shadow-sm transition-opacity opacity-0 group-hover:opacity-100">
                            <FileText className="w-4 h-4" />
                            Ver PDF
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* efecto decorativo en hover (sutil) */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg
                      className="w-full h-full opacity-0 group-hover:opacity-30 transition-opacity"
                      viewBox="0 0 800 400"
                      preserveAspectRatio="none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id={`g-${category.id}`}
                          x1="0"
                          x2="1"
                          y1="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(255,255,255,0.03)"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgba(255,255,255,0.00)"
                          />
                        </linearGradient>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#g-${category.id})`}
                      />
                    </svg>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
