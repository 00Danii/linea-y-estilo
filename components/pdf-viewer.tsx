"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, Download, ZoomIn, ZoomOut } from "lucide-react";
import type { Category } from "../lib/categories";

interface Props {
  category: Category;
}

export default function PDFFullscreen({ category }: Props) {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = category.pdfUrl;
    a.download = `${category.name}.pdf`;
    a.click();
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      <header className="flex items-center justify-between px-4 py-2 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Volver</span>
          </Link>
          <h1 className="ml-2 text-lg font-semibold">{category.name}</h1>
        </div>

        {/* <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            title="Descargar PDF"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">Descargar</span>
          </button>
        </div> */}
      </header>

      <main className="flex-1 overflow-auto">
        <div className="w-full h-full">
          <iframe
            src={`${category.pdfUrl}`}
            title={`PDF ${category.name}`}
            className="w-full h-[calc(100vh-56px)] border-0"
            style={{ minHeight: "400px" }}
          />
        </div>
      </main>
    </div>
  );
}
