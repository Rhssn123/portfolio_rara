import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import {
  profile,
  hardSkills,
  education,
  experiences,
  // certificates,
  // achievements,
  projects,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate py-20 sm:py-28">
        <div className="pointer-events-none absolute -top-10 right-0 -z-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl sm:h-72 sm:w-72" />

        <p className="fade-up text-sm font-medium text-accent">Halo, saya</p>
        <h1 className="fade-up delay-1 mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="fade-up delay-2 mt-2 text-lg text-neutral-600 sm:text-xl">
          {profile.role}
        </p>
        <p className="fade-up delay-2 mt-6 max-w-xl text-neutral-600">
          {profile.tagline}
        </p>
        <p className="fade-up delay-2 mt-3 text-sm text-neutral-500">
          📍 {profile.location}
        </p>

        <div className="fade-up delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="rounded-full bg-accent px-5 py-2.5 text-center text-sm font-medium text-white transition hover:brightness-110"
          >
            Lihat project
          </Link>
          <a
            href={profile.resume}
            target="_blank"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-center text-sm transition hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-center text-sm transition hover:border-accent hover:text-accent"
          >
            Hubungi saya
          </Link>
        </div>
      </section>

      {/* TENTANG + SKILL */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold">Tentang</h2>
        <p className="mt-4 text-neutral-600">{profile.about}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {hardSkills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm">
                <span>{s.name}</span>
                <span className="text-neutral-500">{s.level}%</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-accent-soft">
                <div
                  className="h-1.5 rounded-full bg-accent"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PENGALAMAN */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold">Pengalaman</h2>
        <div className="mt-6 space-y-8 border-l border-neutral-200 pl-6">
          {experiences.map((e) => (
            <div key={e.company} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <h3 className="font-semibold">{e.role}</h3>
              <p className="text-sm text-neutral-500">
                {e.company} · {e.period}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-neutral-600">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PENDIDIKAN */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold">Pendidikan</h2>
        <div className="mt-6 space-y-4">
          {education.map((e) => (
            <div key={e.institution} className="rounded-xl border border-neutral-200 p-5">
              <h3 className="font-semibold">{e.institution}</h3>
              <p className="text-sm text-neutral-600">{e.degree}</p>
              <p className="mt-1 text-sm text-neutral-500">
                {e.note} · {e.period}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT */}
      <section className="py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Project pilihan</h2>
          <Link href="/projects" className="text-sm text-accent hover:underline">
            Lihat semua →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      SERTIFIKAT & PRESTASI
      {/* <section className="py-12">
        <h2 className="text-2xl font-semibold">Sertifikat & Prestasi</h2>
        <ul className="mt-6 divide-y divide-neutral-200 rounded-xl border border-neutral-200">
          {[...achievements, ...certificates].map((c) => (
            <li key={c.title}>
              <a
                href={c.file} 
                target="_blank"
                className="flex items-start justify-between gap-4 p-4 transition hover:bg-accent-soft"
              >
                <div>
                  <p className="text-sm font-medium">{c.title}</p>
                  <p className="text-xs text-neutral-500">
                    {c.issuer} · {c.period}
                  </p>
                </div>
                <span className="text-sm text-accent">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </>
  );
}