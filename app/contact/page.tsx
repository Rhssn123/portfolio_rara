import { profile } from "@/lib/data";

export const metadata = { title: "Contact | Rara" };

export default function ContactPage() {
  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 text-neutral-600">
        Tertarik berkolaborasi atau sekadar menyapa? Kirim email saja.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block text-lg font-medium underline underline-offset-4"
      >
        {profile.email}
      </a>
    </section>
  );
}