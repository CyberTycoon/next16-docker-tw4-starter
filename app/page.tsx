import { DemoBadge } from "@/components/demo-badge";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-500 ease-out">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center space-y-12">
          {/* Version Badge */}
          <div className="flex flex-col items-center gap-3 animate-fade-in">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium tracking-wide text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-full transition-colors duration-300">
              Next.js v16.1.0
            </span>
            <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium tracking-wide text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-full transition-colors duration-300">
              Modern Starter Template
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 transition-colors duration-500">
              Build Amazing Apps
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
              Next.js 16 + Docker + Tailwind CSS 4 + Auth.js 5 + TypeScript starter template to
              kickstart your next project with modern best practices.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {['Next.js 16', 'TypeScript', 'Docker', 'Tailwind CSS 4'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 rounded-full hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://github.com/cybertycoon/next16-docker-tw4-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white dark:text-black bg-neutral-950 dark:bg-neutral-50 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 ease-out"
            >
              Get Started
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <button className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-neutral-900 dark:text-neutral-100 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300 ease-out">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <DemoBadge />
    </div>
  );
}
