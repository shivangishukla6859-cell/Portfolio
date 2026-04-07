export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-between px-6 py-12 md:px-10 md:py-16">
        {/* Hero */}
        <section className="flex flex-1 flex-col justify-center gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
            Senior Frontend Engineer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Shivangi Shukla
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Your product deserves a frontend that's fast, polished, and built to scale — I make that happen without the back-and-forth.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:shuklashivangi787@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              Get in touch
            </a>
            <a
              href="https://linkedin.com/in/shivangi-shukla-9a6106115"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
            >
              LinkedIn
            </a>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Testimonials coming soon — references available on request
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400 md:text-sm">
            <span>Noida, India</span>
            <span className="h-1 w-1 rounded-full bg-slate-500 mt-auto mb-auto" />
            <span>7+ years experience</span>
            <span className="h-1 w-1 rounded-full bg-slate-500 mt-auto mb-auto" />
            <span>Open to freelance projects</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Shivangi Shukla. Built with Next.js
            and Tailwind CSS.
          </p>
        </footer>
      </main>
    </div>
  );
}
