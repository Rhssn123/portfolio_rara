// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

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
        <h2 className="text-2xl font-semibold">Tentang</h2>
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
    </>
  );
}