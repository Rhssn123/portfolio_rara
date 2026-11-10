import Link from "next/link";
import Image from "next/image";

type Props = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  tags: string[];
  image: string;
};

export default function ProjectCard({ slug, title, period, summary, tags, image }: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block overflow-hidden rounded-xl border border-neutral-200 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
    >
      <Image
        src={image}
        alt={title}
        width={800}
        height={450}
        className="aspect-video w-full object-cover"
      />
      <div className="p-5">
        <p className="text-xs text-neutral-500">{period}</p>
        <h3 className="mt-1 font-semibold transition group-hover:text-accent">{title}</h3>
        <p className="mt-1 text-sm text-neutral-600">{summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-accent-soft px-3 py-1 text-xs text-accent">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}