import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack | Shivangi Shukla",
  description:
    "Detailed frontend tech stack of Shivangi Shukla: React, Next.js, Vue.js, TypeScript, testing, performance, and DevOps.",
};

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Tech Stack
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Frontend expertise
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            I specialize in building scalable, maintainable frontend architectures
            for enterprise SaaS products using modern JavaScript frameworks, strong
            typing, and performance-focused patterns.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100">
              Languages &amp; Frameworks
            </h2>
            <p className="mt-3 text-xs text-slate-300">
              React.js, Next.js, Vue.js (2 &amp; 3), TypeScript, JavaScript
              (ES6+), HTML5, CSS3
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100">
              State Management &amp; Architecture
            </h2>
            <p className="mt-3 text-xs text-slate-300">
              Redux Toolkit, Redux Thunk, Context API, Vuex, Pinia, component‑
              driven development, design systems, and monorepo-friendly patterns.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100">
              Performance &amp; UX
            </h2>
            <p className="mt-3 text-xs text-slate-300">
              Core Web Vitals (LCP, CLS, FID), lazy loading, code splitting,
              memoization, throttling, debouncing, and responsive web design
              focused on fast, stable experiences.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100">Testing</h2>
            <p className="mt-3 text-xs text-slate-300">
              Jest, React Testing Library, Vue Test Utils, Vitest, Mocha, Sinon –
              improving release confidence with high coverage and meaningful
              integration tests.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100">
              Tooling &amp; Design
            </h2>
            <p className="mt-3 text-xs text-slate-300">
              Vite, Webpack, Babel, Storybook, Chart.js, and close collaboration
              with designers via Figma to ship accessible, pixel‑perfect
              interfaces.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100">
              Security, DevOps &amp; Cloud
            </h2>
            <p className="mt-3 text-xs text-slate-300">
              CSP, XSS mitigation, CORS, CI/CD using Jenkins, Dockerized
              frontends, and deployments with AWS S3 + CloudFront.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

