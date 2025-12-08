"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import PDFFullscreen from "../../../components/pdf-viewer";
import { categories } from "../../../lib/categories";

export default function PdfPageClient() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string | undefined;

  const category = id ? categories.find((c) => c.id === id) : undefined;

  useEffect(() => {
    if (!id || !category) {
      // redirige a inicio si no existe la categoría (evita usar notFound en cliente)
      router.replace("/");
    }
  }, [id, category, router]);

  if (!category) return null;

  return <PDFFullscreen category={category} />;
}
