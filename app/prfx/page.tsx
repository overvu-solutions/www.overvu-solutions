import Image from "next/image";

/**
 * Home page – SSR variant (no animations, no client runtime).
 * Tailwind CSS.
 */
export default function HomePage() {
  const logos = [
    { src: "/logos/dataiku.svg", alt: "Dataiku" },
    { src: "/logos/miro.svg", alt: "Miro" },
    { src: "/logos/instana.svg", alt: "Instana" },
    { src: "/logos/perplexity.svg", alt: "Perplexity" },
    { src: "/logos/slack.svg", alt: "Slack" },
  ];

  return (
    <main className="relative min-h-screen bg-white text-neutral-900 flex flex-col justify-between px-12">
      {/* Top-nav */}
      <header className="flex items-center justify-between px-6 pt-6 md:px-10">
        <a href="#" className="font-semibold text-lg tracking-wide">
          PRFX
        </a>
        <nav className="hidden gap-8 md:flex">
          <a href="#blog" className="hover:text-neutral-600">
            Blog
          </a>
          <a href="mailto:hello@prfx.ai" className="hover:text-neutral-600">
            Mail
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-38 text-center md:py-48">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          AI for the new era of <span className="bg-gradient-to-r from-[#ff8660] to-[#ffbb66] bg-clip-text text-transparent">search</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg md:text-xl">
          The infrastructure you need to get found in any AI search tool—without scaling your team.
        </p>

        <a
          href="#request"
          className="mt-10 inline-block rounded-full bg-black px-8 py-3 font-medium text-white shadow-lg hover:scale-[1.03] transition-transform">
          Request access
        </a>
      </section>

      <footer className="w-full py-8">
        <div className="mx-auto px-6 text-sm">
          <div>Privacy Policy</div>
        </div>
      </footer>
    </main>
  );
}
