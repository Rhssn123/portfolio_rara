import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 text-sm text-neutral-500">
        <p>© 2026 {profile.name}</p>
        <div className="flex gap-4">
          {/* <a href={profile.github} className="hover:text-black">GitHub</a> */}
          <a href={profile.linkedin} className="hover:text-black">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}