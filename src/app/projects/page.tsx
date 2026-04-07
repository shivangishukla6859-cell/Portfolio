import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Shivangi Shukla",
  description:
    "Selected frontend projects by Shivangi Shukla, including a MERN-based e-commerce platform and future case studies.",
};

type Project = {
  title: string;
  role: string;
  timeframe: string;
  tech: string[];
  summary: string;
  status?: string;
};

const projects: Project[] = [
  {
    title: "E‑Commerce Platform (MERN Stack)",
    role: "Full-stack Developer",
    timeframe: "Personal project",
    tech: ["React", "Node.js", "MongoDB", "JWT", "REST API"],
    summary:
      "Full-featured T-shirt e-commerce platform with admin and buyer roles, JWT-based authentication, protected routes, and a cart/checkout flow. Deployed via CI/CD to AWS S3 + CloudFront.",
    status: "Example from CV",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <div className="space-y-3">
        <header className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2 className="text-sm font-semibold text-slate-100">
              {project.title}
            </h2>
            <p className="text-xs text-slate-400">
              {project.role} • {project.timeframe}
            </p>
          </div>
          {project.status ? (
            <span className="rounded-full bg-slate-700/60 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate-200">
              {project.status}
            </span>
          ) : null}
        </header>
        <p className="text-xs text-slate-300">{project.summary}</p>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full bg-slate-800 px-3 py-1 text-[0.7rem] text-slate-200"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Projects
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            What I Build
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Side projects and client work, with notes on decisions made along the way.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {/* {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))} */}

          <article className="flex flex-col justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 p-5 text-sm text-slate-300">
            <h2 className="text-sm font-semibold text-slate-100">
              More projects coming soon
            </h2>
            <p className="mt-2 text-xs text-slate-300">
              More projects coming soon — references available on request
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

