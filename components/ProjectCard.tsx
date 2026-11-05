import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
};

export default function ProjectCard({ slug, title, summary, tags }: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block rounded-xl border border-neutral-200 p-5 transition hover:border-neutral-400 hover:shadow-sm"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600">{summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}