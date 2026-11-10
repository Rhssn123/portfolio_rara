export const profile = {
  name: "Raudina Hibati Sani",
  role: "Fresh Graduate in Information Systems",
  tagline:
    "Building clean web applications while understanding the business side of things.",
  about:
    "A fresh graduate in Information Systems with hands-on experience building full-stack applications through college projects, from determining system architecture and designing databases, to developing applications with Laravel, HTML, and CSS. Beyond technical skills, I also understand business processes, which helps me see how technology drives business growth and decision-making.",
  email: "rarahibati@gmail.com",
  phone: "+62 853 3433 0164",
  location: "Surabaya, Indonesia",
  linkedin: "https://linkedin.com/in/raudina",
  resume: "/cv.pdf",
};

export const education = [
  {
    institution: "Universitas Airlangga",
    degree: "S1 Sistem Informasi",
    note: "IPK 3.58 / 4.00",
    period: "Agu 2022 – Jan 2026",
  },
];

export const experiences = [
  {
    company: "Sibiti",
    role: "Fullstack Developer Intern",
    period: "Jan 2025 – Jul 2025",
    points: [
      "Menjaga dan mengoptimalkan performa aplikasi web, termasuk debugging dan troubleshooting.",
      "Memperbarui dan mengembangkan fitur sesuai kebutuhan bisnis.",
      "Mengelola dan meningkatkan efisiensi backend serta performa database.",
      "Berkolaborasi dengan tim untuk menjaga stabilitas dan keamanan sistem.",
    ],
  },
  {
    company: "PT Telkom Indonesia Tbk",
    role: "Sales & Marketing Intern — RLEGS",
    period: "Feb 2025 – Jun 2025",
    points: [
      "Melakukan analisis dan identifikasi pelanggan menggunakan tools IVCA untuk mempertajam segmentasi dan targeting pasar.",
      "Berkolaborasi lintas tim untuk mengoptimalkan engagement dan kepuasan pelanggan.",
      "Memberikan insight dan rekomendasi berbasis data untuk meningkatkan penawaran layanan dan revenue.",
    ],
  },
];

export const hardSkills = [
  { name: "Laravel", level: 75 },
  { name: "PHP", level: 75 },
  { name: "MySQL", level: 70 },
  { name: "JavaScript", level: 70 },
  { name: "CSS & Bootstrap", level: 70 },
  { name: "Tableau", level: 75 },
];

// Dipakai di Home (daftar tag)
export const skills = hardSkills.map((s) => s.name);

export const certificates = [
  {
    title: "Microcredential: Digital Business, Innovation, and Entrepreneurship",
    issuer: "Training Program",
    period: "2024 – 2025",
    // file: "/certificates/micro.pdf",
  },
  {
    title: "Codeless Data Science Participant",
    issuer: "PT NF Cipta Inovasi",
    period: "2025",
    // file: "/certificates/nf.pdf",
  },
];

export const achievements = [
  {
    title: "1st Place — National Poster Design Competition",
    issuer: "Media Selaras Festival",
    period: "2022",
    // file: "/achievements/juara-1.png",
  },
  {
    title: "3rd Place — Infographic Competition",
    issuer: "UIN Tulungagung",
    period: "2022",
    // file: "/achievements/juara-3.pdf",
  },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "medguide",
    title: "MedGuide (Medicine Guide)",
    period: "2023 – 2024",
    summary: "Web untuk membantu pengguna mencari informasi obat.",
    description:
      "A web development project to help users find drug information. The frontend was developed using HTML, CSS, and JavaScript, and the backend was developed using the Laravel framework.",
    tags: ["Laravel", "HTML", "CSS", "JavaScript"],
    image: "/projects/medguide.png",
  },
  {
    slug: "venol-aspc-2025",
    title: "Venol 15th ASPC 2025",
    period: "2025",
    summary: "Landing page interaktif untuk event Venol 15th ASPC 2025.",
    description:
      "Landing page for the Venol 15th ASPC 2025 event, displaying information on the timeline, region, prizes, and event requirements interactively.",
    tags: ["Laravel", "HTML", "CSS", "JavaScript"],
    image: "/projects/venol.png",
  },
  {
    slug: "sentiment-analysis-knime",
    title: "Workflow Sentiment Analysis (KNIME)",
    period: "2025",
    summary: "Workflow analisis sentimen no-code/low-code dengan KNIME.",
    description:
      "Building a no-code/low-code sentiment analysis workflow using KNIME: reading the IMDB dataset, text preprocessing, dictionary tagging based on positive/negative words from MPQA, BoW-TF feature extraction, to calculating sentiment scores and accuracy.",
    tags: ["KNIME", "Data Analytics", "EDA"],
    image: "/projects/knime.png",
  },
  {
    slug: "world-university-rankings",
    title: "World University Rankings Analysis (Tableau)",
    period: "2023",
    summary: "Visualisasi interaktif peringkat universitas dunia THE 2023.",
    description:
      "Analyzing world university rankings released by The Times Higher Education World University Rankings (THE) 2023. The ranking data was processed and presented through interactive visualizations using Tableau, covering top 100 university distribution, international student numbers, teaching score comparisons, and multi-indicator performance comparisons, to make the information easier to understand.",
    tags: ["Tableau", "Data Visualization", "Data Analytics"],
    image: "/projects/tableau.png",
  },
];