import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { profile, skills, projects } from "@/lib/data";
import "./globals.css";

export default function Home() {
  return (
    <>
      <section className="py-24">
        <p className="text-sm text-neutral-500">Halo, saya</p>
        <h1 className="fade-up mt-2 text-5xl font-bold tracking-tight">{profile.name}</h1>
        <p className="fade-up delay-1 mt-2 text-xl text-neutral-600">{profile.role}</p>
        <p className="fade-up delay-2 mt-6 max-w-xl text-neutral-600">{profile.tagline}</p>
        <div className="mt-8 flex gap-3">
          <Link href="/projects" className="rounded-full bg-black px-5 py-2.5 text-sm text-white hover:bg-neutral-800">
            Lihat project
          </Link>
          <Link href="/contact" className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm hover:border-black">
            Hubungi saya
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold text-[#6366f1]">Tentang</h2>
        <p className="mt-4 text-neutral-600">{profile.about}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="rounded-full border border-neutral-200 px-3 py-1 text-sm">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold">Project pilihan</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      <section className="my-12 rounded-2xl bg-[#eef2ff] px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold text-[#6366f1]">
          Tertarik bekerja sama?
        </h2>
        <p className="mt-3 text-neutral-600">
          Hubungi saya untuk ngobrol tentang project atau peluang kerja.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-[#6366f1] px-5 py-2.5 text-sm text-white transition hover:bg-indigo-700"
        >
          Hubungi saya
        </Link>
      </section>
    </>
  );
}