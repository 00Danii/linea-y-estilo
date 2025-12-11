"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // solo usar theme después de montar para evitar mismatch SSR
  const isDarkMode = mounted ? resolvedTheme === "dark" : false;
  const logoSrc = isDarkMode ? "/logoDark.svg" : "/logoLight.svg";

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary/10 via-transparent to-accent/10 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: texto */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-4 mb-4">
              <img
                src={logoSrc}
                alt="Logo"
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
              <div>
                <p className="text-sm text-muted-foreground">Bienvenid@</p>
                <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
                  Hola, soy <span className="font-bold">CILINTLI MARTÍNEZ</span>
                </h2>
                <p className="text-xs text-muted-foreground -mt-1">
                  Socia Price Shoes
                </p>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Encuentra el producto perfecto para ti
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-6">
              Contáctame para cualquier duda. Si te gusta un producto que se
              encuentra agotado, contáctame para ayudarte con su fecha de
              llegada o para encontrar un producto similar. Precios pueden
              cambiar sin previo aviso.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=525572833319"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-accent text-primary-foreground font-medium hover:bg-accent/95 transition"
              >
                Contáctame
              </a>

              <a
                href="#categories"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-border text-foreground bg-white/40 backdrop-blur-sm hover:scale-[1.02] transition"
              >
                Ver catálogos
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground/80 max-w-xl">
              Si prefieres, envíame un mensaje directo y te ayudo a localizar
              tallas, colores o fechas de llegada.
            </p>
          </div>

          {/* Right: tarjeta visual */}

          <Link
            href="/pdf/basicos-y-comodos"
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="h-64 sm:h-80 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.35) 60%), url('/images/basicos-y-comodos.webp')",
                }}
                aria-hidden
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Catálogo destacado</p>
                    <h3 className="text-lg font-bold leading-snug">
                      Colección de temporada
                    </h3>
                  </div>
                  <div>
                    <img
                      src={"/logoLight.svg"}
                      alt=""
                      className="w-10 h-10 rounded-full bg-white/30 p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* decoración sutil */}
        <svg
          className="pointer-events-none absolute right-0 top-0 translate-x-24 -translate-y-24 opacity-20 w-60 h-60 hidden lg:block"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="url(#g1)" />
        </svg>
      </div>
    </section>
  );
}
