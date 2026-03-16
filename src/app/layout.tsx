import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivangi Shukla | Senior Frontend Engineer",
  description:
    "Portfolio of Shivangi Shukla, Senior Frontend Engineer specializing in React, Next.js, and Vue.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 md:px-10">
            <Link href="/" className="text-sm font-semibold tracking-tight">
              Shivangi Shukla
            </Link>
            <nav className="flex flex-wrap items-center gap-3 text-xs text-slate-300 md:text-sm">
              <a
                href="/tech-stack"
                className="rounded-full border border-transparent px-3 py-1.5 transition hover:border-sky-400 hover:text-sky-300"
              >
                Tech Stack
              </a>
              <a
                href="/experience"
                className="rounded-full border border-transparent px-3 py-1.5 transition hover:border-sky-400 hover:text-sky-300"
              >
                Experience
              </a>
              <a
                href="/projects"
                className="rounded-full border border-transparent px-3 py-1.5 transition hover:border-sky-400 hover:text-sky-300"
              >
                Projects
              </a>
              <a
                href="/ShivangiShuklaCV.pdf"
                download
                className="rounded-full bg-sky-500 px-3 py-1.5 text-xs font-medium text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 md:text-sm"
              >
                Download Resume
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
