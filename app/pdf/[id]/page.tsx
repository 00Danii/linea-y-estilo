import { notFound } from "next/navigation";
import PDFFullscreen from "../../../components/pdf-viewer";
import { categories } from "../../../lib/categories";

export default async function PdfPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const p = await params;
  const category = categories.find((c) => c.id === p.id);
  if (!category) return notFound();

  return <PDFFullscreen category={category} />;
}
