"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useMemo } from "react";
import { ChevronLeft, Download, ZoomIn, ZoomOut } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import type { Category } from "../lib/categories";

interface Props {
  category: Category;
}

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export default function PDFFullscreen({ category }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>(800);

  // memoizar options para evitar recargas innecesarias
  const pdfOptions = useMemo(
    () => ({ cMapUrl: "cmaps/", cMapPacked: true }),
    []
  );

  useEffect(() => {
    const update = () => {
      const w = containerRef.current?.clientWidth ?? 800;
      setContainerWidth(w);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setScale(1);
  }, [category.pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = category.pdfUrl;
    a.download = `${category.name}.pdf`;
    a.click();
  };

  const zoomIn = () => setScale((s) => Math.min(s + 0.25, 3));
  const zoomOut = () => setScale((s) => Math.max(s - 0.25, 0.5));

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      <header className="flex items-center justify-between px-4 py-2 bg-card/90 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Volver</span>
          </Link>
          <h1 className="ml-2 text-lg font-semibold">{category.name}</h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={zoomOut}
            className="p-2 hover:bg-muted rounded-md"
            title="Reducir zoom"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="text-sm w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            className="p-2 hover:bg-muted rounded-md"
            title="Aumentar zoom"
          >
            <ZoomIn className="w-5 h-5" />
          </button>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            title="Descargar PDF"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">Descargar</span>
          </button>
        </div>
      </header>

      <main ref={containerRef} className="flex-1 overflow-auto touch-pan-y">
        <div className="w-full max-w-screen h-full flex justify-center items-start py-4 px-2">
          <div className="w-full md:w-[80%] lg:w-[70%]">
            <Document
              file={category.pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              options={pdfOptions}
              loading={<div className="text-center py-10">Cargando PDF…</div>}
              error={
                <div className="text-center py-10 text-red-600">
                  No se pudo cargar el PDF. Verifica la ruta en public/pdfs y
                  que el archivo exista.
                </div>
              }
            >
              {Array.from(new Array(numPages), (_el, index) => (
                <div
                  key={`page_${index + 1}`}
                  className="mb-6 flex justify-center"
                >
                  <Page
                    pageNumber={index + 1}
                    width={Math.floor(containerWidth * 0.95 * scale)}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    className="shadow-md"
                  />
                </div>
              ))}
            </Document>
          </div>
        </div>
      </main>
    </div>
  );
}
