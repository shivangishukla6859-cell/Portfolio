import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Shivangi Shukla",
  description:
    "Professional experience of Shivangi Shukla across Monotype, Publicis Sapient, and Accenture.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Experience
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Enterprise SaaS &amp; frontend leadership
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            7+ years building and scaling production-grade web applications for
            global enterprises, with a focus on design systems, performance, and
            mentoring teams.
          </p>
        </header>

        <section className="space-y-4">
          <article className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h2 className="text-sm font-semibold text-slate-100">
                  Software Engineer II – Frontend
                </h2>
                <p className="text-xs text-slate-400">
                  Monotype Solutions Pvt. Ltd. • Nov 2022 – Present • Noida, India
                </p>
              </div>
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-sky-300">
                Vue 3 • Design System • Performance
              </span>
            </header>
            <p className="mt-3 text-xs text-slate-300">
              Enterprise B2B SaaS platform for global font distribution, licensing
              &amp; publishing (Foundry Platform).
            </p>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li>
                • Led end-to-end Vue 2 → Vue 3 migration using Composition API,
                refactoring 30+ components to improve maintainability and
                scalability.
              </li>
              <li>
                • Contributed to Antiqua Design System, a reusable component
                library serving 5+ product modules, accelerating feature delivery
                by ~30%.
              </li>
              <li>
                • Optimized Core Web Vitals (LCP, CLS) via lazy loading, modular
                code splitting, and reactive optimizations for faster initial
                renders.
              </li>
              <li>
                • Implemented CSP headers and resolved XSS vulnerabilities across
                key views to strengthen security posture.
              </li>
              <li>
                • Increased frontend unit test coverage from 75% to 90% using
                Vitest and Vue Test Utils.
              </li>
              <li>
                • Mentored junior engineers via pair programming, PR reviews, and
                onboarding, helping grow team velocity.
              </li>
            </ul>
          </article>

          <article className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h2 className="text-sm font-semibold text-slate-100">
                  Associate Technology L2 – Frontend
                </h2>
                <p className="text-xs text-slate-400">
                  Publicis Sapient • Apr 2022 – Nov 2022
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-emerald-300">
                React • Next.js • SaaS
              </span>
            </header>
            <p className="mt-3 text-xs text-slate-300">
              Multi-tenant enterprise SaaS platform supporting large-scale
              business operations.
            </p>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li>
                • Built React and Next.js applications using SSR and SSG,
                improving SEO scores by ~40% and reducing time-to-first-byte.
              </li>
              <li>
                • Developed component-driven dashboards with complex CRUD
                workflows, role-based access control, dynamic forms, and client-
                side routing.
              </li>
              <li>
                • Optimized rendering performance using lazy loading, code
                splitting, and efficient React hook patterns, reducing bundle size
                on key modules.
              </li>
              <li>
                • Maintained high quality with unit and integration tests using
                Jest and React Testing Library.
              </li>
            </ul>
          </article>

          <article className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h2 className="text-sm font-semibold text-slate-100">
                  Software Engineer – Frontend
                </h2>
                <p className="text-xs text-slate-400">
                  Accenture • Nov 2018 – Apr 2022
                </p>
              </div>
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-violet-300">
                React • Enterprise
              </span>
            </header>
            <p className="mt-3 text-xs text-slate-300">
              Enterprise React applications with REST API integrations for Fortune
              500 clients.
            </p>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li>
                • Delivered 10+ React modules integrating Redux-based state
                management and REST APIs to support complex business workflows.
              </li>
              <li>
                • Owned features end-to-end from architecture and development to
                bug fixing, code review, and production support.
              </li>
              <li>
                • Applied reusable component patterns reducing duplicate code by
                ~25% across a team of 8 engineers.
              </li>
              <li>
                • Ensured cross-browser compatibility and responsive layouts.
              </li>
              <li>
                • Actively participated in Agile ceremonies across multiple
                sprints with consistent, on-time delivery.
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

