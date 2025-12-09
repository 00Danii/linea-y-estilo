export interface Category {
  id: string;
  name: string;
  color: string;
  description: string;
  pdfUrl: string;
}

export const categories: Category[] = [
  {
    id: "abrigos",
    name: "Abrigos",
    color: "from-primary to-primary/50",
    description: "Última colección de temporada",
    pdfUrl: "https://files.catbox.moe/dox51w.pdf",
  },
  {
    id: "basicos-y-comodos",
    name: "Basicos y Comodos",
    color: "from-primary to-primary/50",
    description: "Última colección de temporada",
    pdfUrl: "https://files.catbox.moe/2wvv8s.pdf",
  },
  {
    id: "botas",
    name: "Botas",
    color: "from-primary to-primary/50",
    description: "Más de 700 modelos disponibles",
    pdfUrl: "https://files.catbox.moe/b18xal.pdf",
  },
  {
    id: "caballeros",
    name: "Caballeros",
    color: "from-primary to-primary/50",
    description: "Más de 700 modelos disponibles",
    pdfUrl: "https://files.catbox.moe/uheu94.pdf",
  },
];
