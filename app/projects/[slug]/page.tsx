import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="py-16">
      <Link href="/projects" className="text-sm text-neutral-500 hover:text-black">
        ← Kembali
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">{project.title}</h1>
      <div className="mt-3 flex gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-xs">{t}</span>
        ))}
      </div>
      <p className="mt-6 text-neutral-600">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          className="mt-8 inline-block rounded-full bg-accent px-5 py-2.5 text-sm text-white hover:brightness-110"
        >
          Kunjungi project ↗
        </a>
      )}
    </article>
  );
}