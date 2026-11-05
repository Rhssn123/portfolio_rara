import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = { title: "Projects | Rara" };

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>
    </section>
  );
}