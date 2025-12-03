import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Page() {

  return (
    <main className="container max-w-3xl py-10">
      <Introduce />
      <Projects />
    </main>
  );
}


function Introduce() {
  const links = [
    {
      to: "https://github.com/taymakz",
      icon: "icon-[lucide--github]",
      alt: "GitHub"
    },
    {
      to: "https://instagram.com/taymakz",
      icon: "icon-[lucide--instagram]",
      alt: "Instagram"
    },
    {
      to: "https://x.com/taymakz",
      icon: "icon-[hugeicons--new-twitter]",
      alt: "X"
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="font-semibold text-4xl">
        Taymaz Akbari
      </h1>
      <p className="text-muted-foreground">
        Hi! I'm Taymaz Akbari, a Software Engineer, and I love it when people enjoy what i Build.
      </p>

      <div className="flex items-center gap-2 text-muted-foreground">
        <p className="text-muted-foreground"> Creator of</p>
        <div className="flex items-center gap-1.5 ">
          <Link href="//student-hub.ir" target="_blank" rel="noopener noreferrer"
            aria-label="Studenthub – Modern Student Community Web Application by Taymaz Akbari"
            title="Studenthub – Modern Student Community Web Application by Taymaz Akbari"
            className="bg-card hover:bg-secondary/50 duration-200 shadow-xs border dark:border-transparent py-1 px-2 rounded-md flex items-center gap-1.5">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.12 508.32"
                className="w-4 text-foreground">
                <path fill="currentColor"
                  d="M439.3,1.2l-213.46,128.62c-1.43.86-3.22.86-4.64,0L6.82.65C3.82-1.15,0,1.01,0,4.51v264.58c0,1.58.83,3.04,2.18,3.85l219.02,131.97c1.43.86,3.22.86,4.64,0l218.1-131.42c1.35-.81,2.18-2.28,2.18-3.85V5.06c0-3.5-3.82-5.66-6.82-3.85Z" />
                <path fill="currentColor"
                  d="M446.12,315.63v56.77c0,1.58-.83,3.04-2.18,3.85l-218.1,131.42c-1.43.86-3.22.86-4.64,0L2.18,375.7c-1.35-.81-2.18-2.28-2.18-3.85v-56.77c0-3.5,3.82-5.66,6.82-3.85l187.25,112.83h.01l27.12,16.34c1.43.86,3.22.86,4.65,0l213.45-128.62c3-1.81,6.82.35,6.82,3.85Z" />
              </svg>
            </span>
            Studenthub
            <span className="sr-only">
              A collection of practical tools and features designed to make your study experience at Iran Azad Universities simpler, more efficient, and more enjoyable
            </span>
          </Link>
          <Link href="//cafify.ir" target="_blank" rel="noopener noreferrer"
            aria-label="Cafify – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari"
            title="Cafify – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari"
            className="bg-card hover:bg-secondary/50 duration-200 shadow-xs border dark:border-transparent py-1 px-2 rounded-md flex items-center gap-1.5">
            Cafify
          </Link>

          <span className="sr-only">Cafify is a digital menu solution for cafes and restaurants.</span>
        </div>
      </div>
      <p className="leading-7 text-muted-foreground">
        I've been working in web development for four years, mostly with Vue and modern tools. Recently, I switched from
        Vue.js/Nuxt to React/Next.js to explore new possibilities. I love turning ideas into
        real products and always look for ways to make things simpler and more engaging.
        <br />
        In every project, I'm eager to learn and share what I discover with my friends.
      </p>
      <p className="text-muted-foreground">
        Find me on
      </p>
      <div className="flex items-center gap-4 flex-wrap ">
        {links.map((link) => (
          <a key={link.to} href={link.to} target="_blank" rel="noopener noreferrer"
            aria-label={link.alt}
            className="text-muted-foreground hover:text-foreground duration-200 flex border-b py-px items-center justify-center gap-2">
            <span className={`${link.icon} size-5`} role="img" aria-label={link.alt} />
            <span>
              {link.alt}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

interface ProjectType {
  media: {
    url: string;
    alt?: string
  };
  seo?: {
    ariaLabel: string;
    title: string;
  }
  link: string;
  title: string;
  date: string;
  stacks: string[];
  github?: {
    url: string,
    text: string
  }
}
function Projects() {
  const projects: ProjectType[] = [
    {
      media: {
        url: "/projects/student-hub.avif",
        alt: "Studenthub – A collection of practical tools and features designed to make your study experience at Iran Azad Universities simpler, more efficient, and more enjoyable by Taymaz Akbari"
      },
      link: "https://t.me/student_hub_bot/app?mode=fullscreen",
      title: "Student Hub ",
      date: "November 2025",
      github: { url: "https://github.com/studenthub-ir/studenthub", text: "studenthub-ir/studenthub" },
      stacks: [
        "Refactored",
        "React",
        "Next.js",
      ],
      seo: {
        ariaLabel: "Studenthub – A collection of practical tools and features designed to make your study experience at Iran Azad Universities simpler, more efficient, and more enjoyable by Taymaz Akbari",
        title: "Studenthub – A collection of practical tools and features designed to make your study experience at Iran Azad Universities simpler, more efficient, and more enjoyable by Taymaz Akbari"
      }
    },
    {
      media: {
        url: "/projects/cafify.avif",
        alt: "Cafify – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari"
      },
      link: "https://cafify.ir",
      title: "Cafify ",
      date: "July 2025",
      stacks: [
        "Vue",
        "Nuxt",
        "Tailwind",
        "Django",
        "PostgreSQL"
      ],
      seo: {
        ariaLabel: "Cafify – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari",
        title: "Cafify – Digital Menu Solution for Cafes and Restaurants by Taymaz Akbari"
      }
    },
    {
      media: {
        url: "/projects/student-hub.avif",
        alt: "Studenthub – Modern Student Community Web Application by Taymaz Akbari"
      },
      link: "https://student-hub.ir",
      title: "Student Hub ",
      date: "March 2025",
      stacks: [
        "Vue",
        "Nuxt",
        "Tailwind",
        "Django",
        "Go",
        "PostgreSQL"
      ],
      seo: {
        ariaLabel: "Studenthub – Modern Student Community Web Application by Taymaz Akbari",
        title: "Studenthub – Modern Student Community Web Application by Taymaz Akbari"
      }
    },
    {
      media: { url: "/projects/unitter.avif" },
      link: "https://unitter.taymakz.ir",
      title: "Malard Computer Student Hub",
      date: "September 2024",
      stacks: ["Nuxt", "Pinia", "Tailwind"]
    },
    {
      media: { url: "/projects/blesser.avif" },
      link: "https://blesser-intro.taymakz.ir",
      title: "Blesser Ecommerce Template",
      date: "May 2024",
      stacks: ["Tailwind", "UnoCss", "Dark/Light Mode"]
    },
    {
      media: { url: "/projects/font-changer.avif" },
      github: { url: "https://github.com/taymakz/font-changer", text: "font-changer" },
      link: "https://fc.taymakz.ir/",
      title: "Simple Font Changer",
      date: "April 2024",
      stacks: ["Vue", "Nuxt", "Tailwind"]
    },
    {
      media: { url: "/projects/tipoosh.avif" },
      link: "https://shop.taymakz.ir/",
      title: "Tipoosh Full Ecommerce",
      date: "March 2024",
      stacks: ["Vue", "Nuxt", "Django", "PostgreSQL"]
    },
    {
      media: { url: "/projects/rotikala.avif" },
      link: "https://rtlr.ir/266095",
      title: "Rotikala Ecommerce Template",
      date: "September 2023",
      stacks: ["Tailwind", "Dark/Light Mode"]
    }
  ];

  return (
    <div className="py-20 space-y-6">
      {projects.map((item, index) => (
        <ProjectCard key={index} item={item} />
      ))}
    </div>
  );
}
function ProjectCard({ item }: { item: ProjectType }) {
  return (
    <Card className="flex gap-8 sm:items-center flex-col md:flex-row p-4 shadow-xs">
      <Link href={item.link} target="_blank" aria-label={item.title} className="block">
        <Image
          src={item.media.url}
          width={420}
          height={220}
          loading="lazy"
          className="flex-1 md:min-w-100 w-full rounded-xl border aspect-16/8 object-cover "
          alt={item.media.alt || item.title}
        />
      </Link>
      <div className="w-full">
        <div className="space-y-2">
          <a href={item.link} target="_blank" aria-label={item.title}
            className="inline-block md:text-lg font-medium">
            {item.title}
          </a>
          <div className="flex items-center gap-x-2 text-muted-foreground font-sans text-sm">
            <span className="icon-[lucide--calendar-clock] size-4.5"></span>
            {item.date}
          </div>
          {item.github && (
            <a href={item.github.url} target="_blank" ariata-label={item.github.text}
              className="flex items-center gap-x-2 text-muted-foreground font-sans hover:text-foreground duration-200 text-sm">
              <span className="icon-[lucide--github] size-4.5"></span>
              github/{item.github.text}
            </a>
          )}
        </div>
        <ul className="flex flex-wrap gap-2 mt-4">
          {item.stacks.map((stack, index) => (
            <li key={index} className="bg-primary rounded-md py-1 px-2 text-sm text-primary-foreground">
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
