import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode, type SVGProps } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Layers3,
  Mail,
  MessageCircle,
  Phone as PhoneIcon,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  contactMethods,
  expertiseSlides,
  featuredProjectIds,
  profile,
  projects,
  serviceHighlights,
  skillGroups,
  type Project,
  type ProjectCategory,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayesha Jahangir | Full Stack Developer & AI Builder" },
      {
        name: "description",
        content:
          "Ayesha Jahangir builds polished business websites, e-commerce experiences, and AI-powered products with React, WordPress, FastAPI, and OpenAI.",
      },
      {
        property: "og:title",
        content: "Ayesha Jahangir | Full Stack Developer & AI Builder",
      },
      {
        property: "og:description",
        content:
          "Project-first portfolio for Ayesha Jahangir featuring client work, sample builds, AI products, and graphics projects.",
      },
    ],
  }),
  component: Index,
});

type ArchiveCategory = "All" | Exclude<ProjectCategory, "Graphics">;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const containerClass = "mx-auto max-w-7xl px-6 lg:px-10";
const primaryButtonClass =
  "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_35px_-25px_rgba(15,23,42,0.55)]";
const secondaryButtonClass =
  "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: EASE },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const assetModules = import.meta.glob(
  ["../assets/*.jpg", "../assets/*.jpeg", "../assets/*.png", "../assets/*.svg", "../assets/*.pdf"],
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const assetUrls = Object.fromEntries(
  Object.entries(assetModules).map(([path, url]) => [path.split("/").pop() ?? path, url]),
) as Record<string, string>;

const heroImageUrl = assetUrls[profile.heroImage];
const cvFileUrl = assetUrls[profile.cvAsset] ?? profile.cvUrl;
const featuredProjects = featuredProjectIds
  .map((projectId) => projects.find((project) => project.id === projectId))
  .filter((project): project is Project => Boolean(project));
const graphicsProjects = projects.filter((project) => project.category === "Graphics");
const nonGraphicProjects = projects.filter((project) => project.category !== "Graphics");
const archiveCategories = ["All", "Client Work", "Sample Builds", "AI & LLM"] as const;

const featuredThemes = [
  {
    shell: "from-slate-950 via-slate-900 to-emerald-950 text-white ring-1 ring-white/10",
    accent: "bg-emerald-400/15 text-emerald-100",
    dot: "bg-emerald-300",
  },
  {
    shell: "from-zinc-950 via-stone-900 to-amber-950 text-white ring-1 ring-white/10",
    accent: "bg-amber-300/15 text-amber-50",
    dot: "bg-amber-300",
  },
  {
    shell: "from-slate-950 via-slate-900 to-cyan-950 text-white ring-1 ring-white/10",
    accent: "bg-cyan-300/15 text-cyan-50",
    dot: "bg-cyan-300",
  },
] as const;

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(12,166,120,0.16),_transparent_52%)]" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.16),_transparent_65%)] blur-3xl" />
        <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.12),_transparent_65%)] blur-3xl" />
      </div>

      <Nav />

      <main className="relative z-10">
        <Hero />
        <About />
        <Expertise />
        <FeaturedProjects />
        <ProjectArchive />
        <GraphicsShowcase />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Nav() {
  const links = [
    ["About", "#about"],
    ["Expertise", "#expertise"],
    ["Projects", "#featured-projects"],
    ["Graphics", "#graphics"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-background/80 backdrop-blur-xl">
      <div className={cn(containerClass, "flex items-center justify-between gap-6 py-4")}>
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Ayesha<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {profile.availability}
          </div>
          <a href="#contact" className={cn(primaryButtonClass, "px-5 py-2.5 text-xs sm:text-sm")}>
            Discuss a Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-black/5 md:hidden">
        <div className={cn(containerClass, "flex items-center justify-between gap-3 py-3 text-sm")}>
          <a
            href="#featured-projects"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="#graphics"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Graphics
          </a>
          <a
            href="#contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const clientProjects = projects.filter((project) => project.category === "Client Work").length;
  const aiProjects = projects.filter((project) => project.category === "AI & LLM").length;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.roles.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="top" className="overflow-hidden pt-36 lg:pt-44">
      <div
        className={cn(
          containerClass,
          "grid items-center gap-14 pb-24 lg:grid-cols-[1.08fr_0.92fr] lg:pb-32",
        )}
      >
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/8 px-4 py-2 text-xs font-medium text-emerald-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >
            Experienced Full Stack Developer,
            <br />
            <span className="text-muted-foreground">specialized in websites, e-commerce,</span>
            <br />
            <span className="italic">and AI-powered products.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex min-h-9 items-center gap-3 text-lg text-muted-foreground sm:text-xl"
          >
            <span>I am</span>
            <div className="relative min-w-[14rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={profile.roles[roleIndex]}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.34, ease: EASE }}
                  className="inline-flex items-center gap-2 font-medium text-foreground"
                >
                  <Sparkles className="h-4 w-4 text-accent" />
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            {profile.heroSummary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#featured-projects" className={primaryButtonClass}>
              Explore Featured Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#project-archive" className={secondaryButtonClass}>
              Browse All {nonGraphicProjects.length} Web & AI Projects
              <Layers3 className="h-4 w-4" />
            </a>
            <a href={cvFileUrl} download="Ayesha-Jahangir-CV.pdf" className={secondaryButtonClass}>
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-14 grid max-w-2xl gap-4 rounded-[2rem] border border-black/5 bg-white/75 p-5 shadow-[0_35px_80px_-55px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:grid-cols-3"
          >
            <StatCard value={`${projects.length}+`} label="Projects showcased" />
            <StatCard value={`${clientProjects}+`} label="Client launches" />
            <StatCard value={`${aiProjects}+`} label="AI experiments" />
          </motion.div>
        </motion.div>

        <Reveal>
          <HeroPortrait />
        </Reveal>
      </div>
    </section>
  );
}

function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="rounded-[2rem] border border-black/6 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(245,247,250,0.92))] p-5 shadow-[0_65px_120px_-65px_rgba(15,23,42,0.38)]">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(241,245,249,0.98))] p-4">
          <div className="rounded-[1.5rem] border border-black/6 bg-white/88 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/6 bg-surface px-4 py-2 text-xs font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Available for client projects
              </span>
              <span className="inline-flex rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background shadow-[0_14px_28px_-18px_rgba(15,23,42,0.45)]">
                CV available to download
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[1.45rem]">
              <img
                src={heroImageUrl}
                alt="Portrait of Ayesha Jahangir"
                className="aspect-[4/5] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.82))] p-5 text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Full Stack Developer
                </div>
                <h3 className="mt-2 font-display text-3xl font-semibold">{profile.name}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
                  Websites, e-commerce, and AI-assisted products with a strong visual finish.
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <PlaceholderFact label="Location" value={profile.location} />
              <PlaceholderFact label="Specialty" value="Websites + AI" />
              <PlaceholderFact label="Best contact" value="WhatsApp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlaceholderFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.15rem] border border-black/6 bg-white px-4 py-4 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.28)]">
      <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      <div className="mt-2 font-medium text-foreground">{value}</div>
    </div>
  );
}

function About() {
  const icons = [BriefcaseBusiness, BrainCircuit, Zap, BadgeCheck] as const;

  return (
    <section id="about" className="border-t border-black/5 py-28 lg:py-36">
      <div className={cn(containerClass, "grid gap-16 lg:grid-cols-[0.92fr_1.08fr]")}>
        <Reveal>
          <div>
            <SectionEyebrow>About</SectionEyebrow>
            <SectionTitle className="mt-5 max-w-xl">
              Real client work, modern stacks, and practical AI product building.
            </SectionTitle>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              {profile.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#featured-projects" className={primaryButtonClass}>
                See Featured Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${profile.whatsapp}?text=Hi%20Ayesha!%20I%20would%20love%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className={secondaryButtonClass}
              >
                Start a Project on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-6 sm:grid-cols-2">
            {serviceHighlights.map((item, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={item.title}
                  className="rounded-[1.8rem] border border-black/6 bg-white/90 p-7 shadow-[0_28px_60px_-45px_rgba(15,23,42,0.35)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(14,165,233,0.15))] text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Expertise() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % expertiseSlides.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="expertise" className="border-t border-black/5 bg-surface/70 py-28 lg:py-36">
      <div className={cn(containerClass, "space-y-16")}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <SectionEyebrow>Expertise</SectionEyebrow>
              <SectionTitle className="mt-5 max-w-3xl">
                Frontend, WordPress, e-commerce, and AI skills tailored for modern client work.
              </SectionTitle>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              From business websites to AI-assisted workflows, the stack is selected to balance
              speed, polish, usability, and long-term maintainability.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 xl:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <ExpertiseCarousel activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
          </Reveal>
          <Reveal delay={0.06}>
            <SkillGrid />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ExpertiseCarousel({
  activeSlide,
  setActiveSlide,
}: {
  activeSlide: number;
  setActiveSlide: (value: number) => void;
}) {
  const currentSlide = expertiseSlides[activeSlide];

  return (
    <div className="rounded-[2rem] border border-black/6 bg-white/85 p-7 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.38)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Capability Spotlight
          </div>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
            {currentSlide.title}
          </h3>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() =>
              setActiveSlide((activeSlide - 1 + expertiseSlides.length) % expertiseSlides.length)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-background text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => setActiveSlide((activeSlide + 1) % expertiseSlides.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-background text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.title}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="mt-6 rounded-[1.7rem] bg-[linear-gradient(135deg,rgba(14,165,233,0.08),rgba(245,158,11,0.08),rgba(16,185,129,0.08))] p-6"
        >
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {currentSlide.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {currentSlide.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/6 bg-white/85 px-4 py-2 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap gap-2">
        {expertiseSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={cn(
              "rounded-full px-3 py-2 text-xs font-medium transition-all duration-300",
              index === activeSlide
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            {slide.title}
          </button>
        ))}
      </div>
    </div>
  );
}

function SkillGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="rounded-[1.8rem] border border-black/6 bg-white/90 p-6 shadow-[0_28px_60px_-45px_rgba(15,23,42,0.3)]"
        >
          <h3 className="font-display text-2xl font-semibold tracking-tight">{group.title}</h3>
          <div className="mt-6 space-y-4">
            {group.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-muted px-2 text-[11px] font-semibold text-muted-foreground">
                      {skill.short}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,rgba(13,148,136,0.88),rgba(59,130,246,0.78),rgba(245,158,11,0.78))]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturedProjects() {
  return (
    <section id="featured-projects" className="border-t border-black/5 py-28 lg:py-36">
      <div className={cn(containerClass, "space-y-16")}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <SectionEyebrow>Projects</SectionEyebrow>
              <SectionTitle className="mt-5 max-w-3xl">
                Selected projects across interiors, e-commerce, business websites, and AI products.
              </SectionTitle>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              A curated selection of recent builds presented with real visuals, clearer structure,
              and a more refined portfolio experience.
            </p>
          </div>
        </Reveal>

        <div className="space-y-10">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id}>
              <FeaturedProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;

  return (
    <article
      className={cn(
        "grid gap-8 rounded-[2rem] border border-black/6 bg-white/90 p-6 shadow-[0_40px_90px_-60px_rgba(15,23,42,0.4)] lg:grid-cols-[1fr_0.92fr] lg:items-center lg:p-8",
        reverse && "lg:[&>div:first-child]:order-2",
      )}
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[linear-gradient(90deg,rgba(13,148,136,0.10),rgba(59,130,246,0.10))] px-3 py-1 text-xs font-medium text-accent">
            {project.category}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Featured Project {index + 1}
          </span>
        </div>

        <h3 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {project.features.slice(0, 4).map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-2xl border border-black/6 bg-surface px-4 py-4"
            >
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="text-sm leading-relaxed text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-black/8 bg-muted px-3.5 py-1.5 text-sm"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className={primaryButtonClass}>
            Open Live Project
            <ExternalLink className="h-4 w-4" />
          </a>
          <a href="#project-archive" className={secondaryButtonClass}>
            Browse Project Archive
            <Layers3 className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ProjectVisual project={project} theme={featuredThemes[index % featuredThemes.length]} />
    </article>
  );
}

function ProjectVisual({
  project,
  theme,
}: {
  project: Project;
  theme: (typeof featuredThemes)[number];
}) {
  const imageUrl = getAssetUrl(project.image);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.8rem] bg-gradient-to-br p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        theme.shell,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_38%),linear-gradient(135deg,transparent,rgba(255,255,255,0.05))]" />
      <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-white/10" />
      <div className="absolute bottom-10 left-10 h-36 w-36 rounded-full bg-white/5 blur-3xl" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em]",
              theme.accent,
            )}
          >
            {formatDomain(project.liveUrl)}
          </div>
          <div className="flex items-center gap-1.5">
            <span className={cn("h-2.5 w-2.5 rounded-full", theme.dot)} />
            <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
        </div>

        <MacBook src={imageUrl} alt={project.title} />
      </div>
    </div>
  );
}

function ProjectArchive() {
  const [activeCategory, setActiveCategory] = useState<ArchiveCategory>("All");
  const filteredProjects =
    activeCategory === "All"
      ? nonGraphicProjects
      : nonGraphicProjects.filter((project) => project.category === activeCategory);

  return (
    <section id="project-archive" className="border-t border-black/5 bg-surface/75 py-28 lg:py-36">
      <div className={cn(containerClass, "space-y-12")}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <SectionEyebrow>Project Archive</SectionEyebrow>
              <SectionTitle className="mt-5 max-w-3xl">
                More website, product, and AI work collected in one place.
              </SectionTitle>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              Explore additional client work, concept builds, and AI projects across different
              industries and use cases.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-wrap gap-3">
          {archiveCategories.map((category) => {
            const count =
              category === "All"
                ? nonGraphicProjects.length
                : nonGraphicProjects.filter((project) => project.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-white text-muted-foreground ring-1 ring-black/6 hover:text-foreground",
                )}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ArchiveCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchiveCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-black/6 bg-white/92 shadow-[0_28px_70px_-55px_rgba(15,23,42,0.38)]">
      <div className="border-b border-black/6 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.06))] p-5">
        <MiniBrowserFrame src={getAssetUrl(project.image)} alt={project.title} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="min-h-[7.25rem]">
          <h3 className="font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-black/8 bg-surface px-3 py-1.5 text-xs font-medium"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex-1 space-y-3">
          {project.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex gap-3 text-sm text-foreground/80">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(primaryButtonClass, "w-full justify-center")}
          >
            Open Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

function GraphicsShowcase() {
  return (
    <section id="graphics" className="border-t border-black/5 py-28 lg:py-36">
      <div className={cn(containerClass, "space-y-12")}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <SectionEyebrow>Graphics Projects</SectionEyebrow>
              <SectionTitle className="mt-5 max-w-3xl">
                Graphic design work created for campaigns, products, and brand communication.
              </SectionTitle>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              A focused collection of posters, catalogs, promotional artwork, and visual concepts
              that complement the digital portfolio.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {graphicsProjects.map((project) => (
            <GraphicCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GraphicCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-black/6 bg-white/92 shadow-[0_28px_70px_-55px_rgba(15,23,42,0.38)]">
      <div className="bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.06))] p-4">
        <div className="overflow-hidden rounded-[1.35rem] border border-black/6 bg-surface">
          <ScreenshotCanvas
            src={getAssetUrl(project.image)}
            alt={project.title}
            aspectClassName="aspect-square"
            imageClassName="p-4"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="min-h-[7rem]">
          <h3 className="font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-black/8 bg-surface px-3 py-1.5 text-xs font-medium"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex-1 space-y-3">
          {project.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex gap-3 text-sm text-foreground/80">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-black/5 py-28 lg:py-36">
      <div className={cn(containerClass, "grid gap-10 lg:grid-cols-[0.95fr_1.05fr]")}>
        <Reveal>
          <div>
            <SectionEyebrow>Contact</SectionEyebrow>
            <SectionTitle className="mt-5 max-w-2xl">
              Ready to start your next project? Let&apos;s discuss how we can work together.
            </SectionTitle>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ayesha is open to client work across business websites, WordPress and WooCommerce
              builds, UI refreshes, and AI-assisted product ideas. The fastest route is WhatsApp,
              but email and LinkedIn are ready too.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${profile.whatsapp}?text=Hi%20Ayesha!%20I%20would%20love%20to%20talk%20about%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className={primaryButtonClass}
              >
                Start a Project on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={cvFileUrl}
                download="Ayesha-Jahangir-CV.pdf"
                className={secondaryButtonClass}
              >
                Download CV
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="grid gap-6">
            <div className="rounded-[1.9rem] border border-black/6 bg-white/92 p-6 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.36)]">
              <div className="grid gap-4">
                {contactMethods.map((method) => (
                  <ContactMethodCard key={method.label} method={method} />
                ))}
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-black/6 bg-[linear-gradient(145deg,rgba(15,23,42,0.95),rgba(2,44,34,0.96))] p-6 text-white shadow-[0_36px_80px_-52px_rgba(15,23,42,0.55)]">
              <div className="text-xs uppercase tracking-[0.22em] text-white/60">
                Ideal project fit
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <ContactFit icon={BriefcaseBusiness} label="Business websites and service pages" />
                <ContactFit icon={Layers3} label="WordPress and WooCommerce builds" />
                <ContactFit icon={BrainCircuit} label="AI prototypes and OpenAI integrations" />
                <ContactFit icon={Zap} label="Frontend polish and performance refreshes" />
              </div>
              <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/6 p-4 text-sm text-white/78">
                Usually responds within a day with next steps, scope questions, or a suggested
                starting point.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactMethodCard({ method }: { method: (typeof contactMethods)[number] }) {
  const iconMap = {
    Email: Mail,
    Phone: PhoneIcon,
    WhatsApp: MessageCircle,
    LinkedIn: LinkedInIcon,
    GitHub: GitHubIcon,
  } as const;

  const Icon = iconMap[method.label];

  return (
    <a
      href={method.href}
      target={method.href.startsWith("http") ? "_blank" : undefined}
      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-[1.35rem] border border-black/6 bg-surface px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-muted text-muted-foreground transition-colors group-hover:text-accent">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {method.label}
          </div>
          <div className="mt-1 text-sm font-medium text-foreground">{method.value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
    </a>
  );
}

function ContactFit({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-sm leading-relaxed text-white/82">{label}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-surface/85 py-10">
      <div
        className={cn(
          containerClass,
          "flex flex-col items-center justify-between gap-5 text-sm text-muted-foreground sm:flex-row",
        )}
      >
        <div className="font-display text-base text-foreground">
          Ayesha<span className="text-accent">.</span>
        </div>
        <div>
          © {new Date().getFullYear()} Ayesha Jahangir. Built for a stronger first impression.
        </div>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${profile.whatsapp}?text=Hi%20Ayesha!%20I%20found%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#16a34a,#22c55e)] px-4 py-3 text-sm font-semibold text-white shadow-[0_24px_50px_-22px_rgba(34,197,94,0.75)] transition-transform duration-300 hover:scale-[1.02]"
    >
      <span className="absolute inset-0 rounded-full bg-white/15 blur-xl" />
      <MessageCircle className="relative h-5 w-5" />
      <span className="relative hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

function ScreenshotCanvas({
  src,
  alt,
  aspectClassName = "aspect-[16/9]",
  imageClassName,
}: {
  src: string;
  alt: string;
  aspectClassName?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(248,250,252,0.98)_48%,_rgba(226,232,240,1))]",
        aspectClassName,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent_34%)]" />
      <img
        src={src}
        alt={alt}
        className={cn(
          "relative block h-full w-full object-contain object-center p-1.5 sm:p-2.5",
          imageClassName,
        )}
      />
    </div>
  );
}

function MacBook({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full">
      <div className="relative rounded-t-2xl bg-neutral-900 p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/10">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
          <span className="h-2 w-2 rounded-full bg-green-400/80" />
        </div>
        <div className="overflow-hidden rounded-md bg-neutral-50">
          <ScreenshotCanvas src={src} alt={alt} imageClassName="p-0" />
        </div>
      </div>
      <div className="relative mx-auto h-3 w-[105%] -translate-x-[2.5%] rounded-b-2xl bg-neutral-200 shadow-[0_20px_30px_-15px_rgba(0,0,0,0.2)]">
        <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-lg bg-neutral-300" />
      </div>
    </div>
  );
}

function MiniBrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl bg-white shadow-[0_28px_80px_-55px_rgba(15,23,42,0.45)] ring-1 ring-black/10">
      <div className="flex items-center gap-1.5 border-b border-neutral-100 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
        <span className="h-2 w-2 rounded-full bg-green-400/80" />
        <div className="mx-auto h-4 w-1/2 rounded-md bg-neutral-100" />
      </div>
      <div className="overflow-hidden rounded-b-2xl">
        <ScreenshotCanvas src={src} alt={alt} imageClassName="p-0" />
      </div>
    </div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: EASE, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
      {children}
    </div>
  );
}

function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.4rem] border border-black/6 bg-surface px-4 py-4">
      <div className="font-display text-3xl font-semibold tracking-tight text-foreground">
        {value}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function getAssetUrl(fileName: string) {
  return assetUrls[fileName] ?? "";
}

function formatDomain(url: string) {
  if (url === "#") return "Portfolio asset";

  return url.replace("https://", "").replace("http://", "").replace("www.", "").replace(/\/$/, "");
}
