import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="container py-10">
      <div className="max-w-3xl">
        <Hero />
      </div>
      <div className="mt-20 space-y-20">
        <Teaching />
        <Projects />
        <Products />
      </div>
    </main>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function Hero() {
  return (
    <div className="space-y-8">
      {/* Availability */}
      <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        Available for work
      </div>

      {/* Name + title */}
      <div className="space-y-2">
        <h1 className="font-semibold text-4xl tracking-tight">Taymaz Akbari</h1>
        <p className="text-muted-foreground text-lg">Full-Stack Software Engineer</p>
      </div>

      {/* Bio */}
      <p className="text-muted-foreground leading-7">
        5+ years building and shipping production web applications and SaaS products. Most
        productive with <span className="text-foreground">TypeScript</span>,{" "}
        <span className="text-foreground">Hono</span> /{" "}
        <span className="text-foreground">Elysia</span> on the backend and{" "}
        <span className="text-foreground">React</span> /{" "}
        <span className="text-foreground">Next.js</span> on the frontend. Available for remote
        positions worldwide, or on-site in Tehran / Karaj.
      </p>

      {/* Creator of */}
      <div className="space-y-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          Creator of
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <Link
            href="https://student-hub.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-sm shadow-xs hover:bg-secondary/50 duration-200 dark:border-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 446.12 508.32"
              className="w-4 text-foreground"
            >
              <path
                fill="currentColor"
                d="M439.3,1.2l-213.46,128.62c-1.43.86-3.22.86-4.64,0L6.82.65C3.82-1.15,0,1.01,0,4.51v264.58c0,1.58.83,3.04,2.18,3.85l219.02,131.97c1.43.86,3.22.86,4.64,0l218.1-131.42c1.35-.81,2.18-2.28,2.18-3.85V5.06c0-3.5-3.82-5.66-6.82-3.85Z"
              />
              <path
                fill="currentColor"
                d="M446.12,315.63v56.77c0,1.58-.83,3.04-2.18,3.85l-218.1,131.42c-1.43.86-3.22.86-4.64,0L2.18,375.7c-1.35-.81-2.18-2.28-2.18-3.85v-56.77c0-3.5,3.82-5.66,6.82-3.85l187.25,112.83h.01l27.12,16.34c1.43.86,3.22.86,4.65,0l213.45-128.62c3-1.81,6.82.35,6.82,3.85Z"
              />
            </svg>
            Studenthub
          </Link>

        </div>
      </div>

      {/* Teaching on */}
      <div className="space-y-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          Teaching on
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <a
            href="https://www.youtube.com/@Taymakz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-sm shadow-xs hover:bg-secondary/50 duration-200 dark:border-transparent"
          >
            <span className="icon-[lucide--youtube] size-4" />
            YouTube (@Taymakz)
          </a>
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Contact */}
      <div className="flex items-center gap-x-5 gap-y-2 flex-wrap text-sm">
        <a
          href="mailto:taymazak1382@gmail.com"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground duration-200"
        >
          <span className="icon-[lucide--mail] size-4" />
          taymazak1382@gmail.com
        </a>
        <a
          href="https://github.com/taymakz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground duration-200"
        >
          <span className="icon-[lucide--github] size-4" />
          github.com/taymakz
        </a>
        <a
          href="https://www.youtube.com/@Taymakz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground duration-200"
        >
          <span className="icon-[lucide--youtube] size-4" />
          @Taymakz
        </a>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground duration-200"
        >
          <span className="icon-[lucide--file-text] size-4" />
          Resume
        </a>
      </div>
    </div>
  );
}
// ─── Projects ────────────────────────────────────────────────────────────────

interface ProjectType {
  media: { url: string; alt?: string };
  seo?: { ariaLabel: string; title: string };
  link: string;
  title: string;
  date: string;
  description?: string;
  stacks: string[];
  github?: { url: string; text: string };
}

const projects: ProjectType[] = [
  {
  media: {
    url: "/projects/compify.avif",
    alt: "Compify – Open Source Video Compressor by Taymaz Akbari",
  },
  link: "https://compify-tau.vercel.app",
  title: "Compify",
  date: "June 2026",
  description:
    "Open-source desktop video compressor for Windows, macOS, and Linux featuring smart presets, hardware acceleration, batch processing, and privacy-first local video compression powered by FFmpeg.",
  github: {
    url: "https://github.com/taymakz/compify",
    text: "taymakz/compify",
  },
  stacks: ["Tauri v2", "React 19", "Rust", "FFmpeg"],
  seo: {
    ariaLabel: "Compify – Open Source Video Compressor by Taymaz Akbari",
    title: "Compify – Open Source Video Compressor by Taymaz Akbari",
  },
},
  {
    media: {
      url: "/projects/t-auth-starter.avif",
      alt: "Turbo Auth Starter by Taymaz Akbari",
    },
    link: "https://github.com/Taymakz/turbo-auth-starter",
    title: "Turbo Auth Starter",
    date: "May 2026",
    description:
      "Production-ready authentication starter featuring RBAC, OTP/MFA, session management, admin dashboard, and scalable monorepo architecture.",
    github: { url: "https://github.com/Taymakz/turbo-auth-starter", text: "Taymakz/turbo-auth-starter" },
    stacks: ["Next.js", "Hono", "Bun"],
    seo: {
      ariaLabel: "Turbo Auth Starter – Authentication Starter by Taymaz Akbari",
      title: "Turbo Auth Starter – Authentication Starter by Taymaz Akbari",
    },
  },
  {
    media: {
      url: "/projects/baricade.avif",
      alt: "Barricade – Real-time Board Game Platform by Taymaz Akbari",
    },
    link: "https://app-baricade.tynex.ir/",
    title: "Barricade",
    date: "April 2026",
    description:
      "Real-time online board game platform featuring multiplayer rooms, friend system, spectator mode, and match replays.",
    github: { url: "https://github.com/Taymakz/barricade-game", text: "Taymakz/baricade" },
    stacks: ["Next.js", "Go"],
    seo: {
      ariaLabel: "Barricade – Real-time Board Game Platform by Taymaz Akbari",
      title: "Barricade – Real-time Board Game Platform by Taymaz Akbari",
    },
  },
  {
    media: {
      url: "/projects/uploader.avif",
      alt: "Uploader – Secure File Sharing Platform by Taymaz Akbari",
    },
    link: "https://up.tynex.ir/",
    title: "Uploader",
    date: "April 2026",
    description:
      "Secure file sharing and upload platform with access control and streamlined file management.",
    github: { url: "https://github.com/Taymakz/uploader", text: "Taymakz/uploader" },
    stacks: ["Next.js", "NestJS"],
    seo: {
      ariaLabel: "Uploader – Secure File Sharing Platform by Taymaz Akbari",
      title: "Uploader – Secure File Sharing Platform by Taymaz Akbari",
    },
  },
  {
    media: {
      url: "/projects/tehgo.avif",
      alt: "TehGo – Tehran Metro Guide by Taymaz Akbari",
    },
    link: "https://tehgo.ir",
    title: "TehGo",
    date: "December 2025",
    description: "Tehran Metro navigation guide with offline support as a Progressive Web App.",
    github: { url: "https://github.com/taymakz/tehgo", text: "taymakz/tehgo" },
    stacks: ["Next.js", "TypeScript", "Tailwind", "PWA"],
    seo: {
      ariaLabel: "TehGo – Tehran Metro Guide by Taymaz Akbari",
      title: "TehGo – Tehran Metro Guide by Taymaz Akbari",
    },
  },
  {
    media: {
      url: "/projects/student-hub.avif",
      alt: "Studenthub Telegram Mini App by Taymaz Akbari",
    },
    link: "https://www.student-hub.ir/",
    title: "Studenthub Telegram Mini App",
    date: "November 2025",
    description:
      "Student-focused Telegram Mini App providing academic and daily utility services for Iran Azad University students.",
    github: { url: "https://github.com/studenthub-ir/studenthub", text: "studenthub-ir/studenthub" },
    stacks: ["Next.js 16", "Django"],
    seo: {
      ariaLabel: "Studenthub Telegram Mini App by Taymaz Akbari",
      title: "Studenthub Telegram Mini App by Taymaz Akbari",
    },
  },
  {
    media: {
      url: "/projects/cafify.avif",
      alt: "Cafify – Digital Menu SaaS by Taymaz Akbari",
    },
    link: "https://cafify.ir",
    title: "Cafify",
    date: "September 2025",
    description:
      "Full-stack SaaS platform for digital menus, online ordering, and restaurant management.",
    stacks: ["Nuxt 4", "Django", "PostgreSQL"],
    seo: {
      ariaLabel: "Cafify – Digital Menu SaaS by Taymaz Akbari",
      title: "Cafify – Digital Menu SaaS by Taymaz Akbari",
    },
  },
  {
    media: { url: "/projects/unitter.avif" },
    link: "https://unitter.taymakz.ir",
    title: "Malard Computer Student Hub",
    date: "September 2024",
    stacks: ["Nuxt", "Pinia", "Tailwind"],
  },
  {
    media: { url: "/projects/tipoosh.avif" },
    link: "https://shop.taymakz.ir/",
    title: "Tipoosh Full Ecommerce",
    date: "March 2024",
    stacks: ["Vue", "Nuxt", "Django", "PostgreSQL"],
  },
];

// shared little helpers -------------------------------------------------------

function StackList({ stacks }: { stacks: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {stacks.map((stack) => (
        <li
          key={stack}
          className="rounded border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
        >
          {stack}
        </li>
      ))}
    </ul>
  );
}

function OpenCue() {
  return (
    <div className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors group-hover:text-foreground">
      Open
      <span className="icon-[lucide--arrow-right] size-3" />
    </div>
  );
}
function CardMedia({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-border bg-background shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_-12px_rgba(0,0,0,0.18)] transition-[transform,box-shadow,border-color] group-hover:border-foreground/40 group-hover:shadow-[0_2px_4px_rgba(0,0,0,0.08),0_16px_32px_-12px_rgba(0,0,0,0.28)] dark:bg-white/6 dark:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_-12px_rgba(0,0,0,0.6)] dark:group-hover:shadow-[0_2px_4px_rgba(0,0,0,0.5),0_16px_32px_-12px_rgba(0,0,0,0.7)]">
      <Image
        src={src}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full object-cover dark:brightness-105"
        alt={alt}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-foreground/8 ring-inset dark:ring-white/8"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent dark:via-white/15"
      />
    </div>
  );
}


// section + card --------------------------------------------------------------

function Projects() {
  return (
    <section>
      <SectionHeader title="Projects" />
      <ul className="space-y-12">
        {projects.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({ item }: { item: ProjectType }) {
  return (
    <li>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.seo?.ariaLabel || item.title}
        className="group grid grid-cols-1 items-start gap-6 focus-visible:outline-none lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8"
      >
        <CardMedia
          src={item.media.url}
          alt={item.media.alt || item.title}
          width={840}
          height={420}
      
        />
        <div className="px-1 lg:sticky lg:top-20 lg:self-start lg:px-0 lg:pt-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
            Project
          </div>
          <div className="mt-2 flex items-center gap-2">
            <h3 className="font-heading text-2xl tracking-tight text-foreground">{item.title}</h3>
          </div>
          <div className="mt-1 font-mono text-[11px] tracking-[0.05em] text-muted-foreground">
            {item.date}
          </div>
          {item.description && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          )}
          {item.github && (
            <span className="mt-3 flex items-center gap-2 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">
              <span className="icon-[lucide--github] size-3.5" />
              {item.github.text}
            </span>
          )}
          <StackList stacks={item.stacks} />
          <OpenCue />
        </div>
      </a>
    </li>
  );
}

// ─── Products ────────────────────────────────────────────────────────────────

interface ProductType {
  media: { url: string; alt?: string };
  link: string;
  title: string;
  date: string;
  description?: string;
  stacks: string[];
}

const products: ProductType[] = [
  {
    media: { url: "/projects/blesser.avif", alt: "Blesser Ecommerce Template by Taymaz Akbari" },
    link: "https://blesser-intro.taymakz.ir",
    title: "Blesser Ecommerce Template",
    date: "May 2024",
    description: "Clean, responsive ecommerce UI template with dark/light mode support.",
    stacks: ["Tailwind", "UnoCss", "Dark/Light Mode"],
  },
  {
    media: { url: "/projects/rotikala.avif", alt: "Rotikala Ecommerce Template by Taymaz Akbari" },
    link: "https://rtlr.ir/266095",
    title: "Rotikala Ecommerce Template",
    date: "September 2023",
    description: "RTL-ready ecommerce template with dark/light mode support.",
    stacks: ["Tailwind", "Dark/Light Mode"],
  },
];

function Products() {
  return (
    <section>
      <SectionHeader title="Products" />
      <ul className="space-y-12">
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </ul>
    </section>
  );
}

function ProductCard({ item }: { item: ProductType }) {
  return (
    <li>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.title}
        className="group grid grid-cols-1 items-start gap-6 focus-visible:outline-none lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8"
      >
        <CardMedia
          src={item.media.url}
          alt={item.media.alt || item.title}
          width={840}
          height={420}
        />
        <div className="px-1 lg:sticky lg:top-20 lg:self-start lg:px-0 lg:pt-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
            For Sale
          </div>
          <div className="mt-2 flex items-center gap-2">
            <h3 className="font-heading text-2xl tracking-tight text-foreground">{item.title}</h3>
          </div>
          <div className="mt-1 font-mono text-[11px] tracking-[0.05em] text-muted-foreground">
            {item.date}
          </div>
          {item.description && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          )}
          <StackList stacks={item.stacks} />
          <OpenCue />
        </div>
      </a>
    </li>
  );
}

// ─── Teaching ─────────────────────────────────────────────────────────────────

interface CourseType {
  media: { url: string; alt?: string };
  link: string;
  title: string;
  year: string;
  description: string;

}

const courses: CourseType[] = [
  {
    media: {
      url: "https://img.youtube.com/vi/pE14tjgRpx0/maxresdefault.jpg",
      alt: "HTML: Beginner to Advanced Course by Taymaz Akbari",
    },
    link: "https://www.youtube.com/watch?v=pE14tjgRpx0&list=PLsogHD1h6FLI9fJeiNUwAamSXSJ4EeYlL",
    title: "HTML: Beginner to Advanced",
    year: "2026",
    description:
      "Comprehensive HTML course from fundamentals to advanced, produced with professional custom animations for clarity and engagement.",
    
  },
  {
    media: {
      url: "https://img.youtube.com/vi/EcJXZVGFyXc/maxresdefault.jpg",
      alt: "CSS: Beginner to Advanced Course by Taymaz Akbari",
    },
    link: "https://www.youtube.com/watch?v=EcJXZVGFyXc&list=PLsogHD1h6FLLOj344II3pZyi12M_oXQ8W",
    title: "CSS: Beginner to Advanced",
    year: "2026",
    description:
      "Comprehensive CSS course from fundamentals to advanced, produced with full animated slides for maximum visual clarity.",
   
  },
];

function Teaching() {
  return (
    <section>
      <SectionHeader title="Teaching" />
      <ul className="space-y-12">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </ul>
    </section>
  );
}

function CourseCard({ course }: { course: CourseType }) {
  return (
    <li>
      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={course.title}
        className="group grid grid-cols-1 items-start gap-6 focus-visible:outline-none lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8"
      >
        <CardMedia
          src={course.media.url}
          alt={course.media.alt || course.title}
          width={1280}
          height={720}
        
        />
        <div className="px-1 lg:sticky lg:top-20 lg:self-start lg:px-0 lg:pt-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
            Teaching
          </div>
          <div className="mt-2 flex items-center gap-2">
            <h3 className="font-heading text-2xl tracking-tight text-foreground">{course.title}</h3>
          </div>
          <div className="mt-1 font-mono text-[11px] tracking-[0.05em] text-muted-foreground">
            {course.year}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
          <span className="mt-3 flex items-center gap-2 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">
            <span className="icon-[lucide--youtube] size-3.5" />
            youtube.com/@Taymakz
          </span>
          <OpenCue />
        </div>
      </a>
    </li>
  );
}

