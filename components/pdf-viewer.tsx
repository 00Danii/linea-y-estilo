"use client";

import { useState } from "react";
import { ChevronLeft, Download, ZoomIn, ZoomOut } from "lucide-react";

interface PDFViewerProps {
  category: {
    id: string;
    name: string;
    pdfUrl: string;
    description: string;
  };
  onBack: () => void;
}

export default function PDFViewer({ category, onBack }: PDFViewerProps) {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.2, 2));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = category.pdfUrl;
    link.download = `${category.name}.pdf`;
    link.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Volver a categorías</span>
        </button>
      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
          <p className="text-muted-foreground">{category.description}</p>
        </div>

        <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              disabled={scale === 0.5}
              className="p-2 hover:bg-muted rounded-lg transition-colors disabled:opacity-50"
              title="Reducir zoom"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium min-w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={scale === 2}
              className="p-2 hover:bg-muted rounded-lg transition-colors disabled:opacity-50"
              title="Aumentar zoom"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Descargar PDF</span>
          </button>
        </div>

        <div className="bg-background rounded-lg border border-border p-4 overflow-auto max-h-[1500px] flex items-center justify-center">
          <iframe
            src={`${category.pdfUrl}#zoom=${scale * 100}`}
            className="w-full border-0"
            style={{
              height: `${1500 * scale}px`,
              minHeight: "1500px",
            }}
            title={`PDF de ${category.name}`}
          />
        </div>
      </div>
    </div>
  );
}
