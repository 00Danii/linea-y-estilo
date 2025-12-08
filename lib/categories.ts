export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  pdfUrl: string;
}

export const categories: Category[] = [
  {
    id: "abrigos",
    name: "Abrigos",
    icon: "🧥",
    color: "from-primary to-primary/50",
    description: "Última colección de temporada",
    pdfUrl: "https://files.catbox.moe/dox51w.pdf",
  },
  {
    id: "basicos-y-comodos",
    name: "Basicos y Comodos",
    icon: "👕",
    color: "from-primary to-primary/50",
    description: "Última colección de temporada",
    pdfUrl: "/pdfs/Basicos.pdf",
  },
  {
    id: "botas",
    name: "Botas",
    icon: "👢",
    color: "from-primary to-primary/50",
    description: "Más de 700 modelos disponibles",
    pdfUrl: "https://files.catbox.moe/b18xal.pdf",
  },
  {
    id: "caballeros",
    name: "Caballeros",
    icon: "🧑‍🦱",
    color: "from-primary to-primary/50",
    description: "Más de 700 modelos disponibles",
    pdfUrl: "/pdfs/caballeros.pdf",
  },
];
