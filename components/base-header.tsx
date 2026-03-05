import Link from "next/link";
import ModeToggle from "./mode-toggle";

export default function BaseHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-lg bg-neutral-950 dark:bg-neutral-50 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <span className="text-neutral-50 dark:text-neutral-950 font-semibold text-sm">N</span>
            </div>
            <span className="font-semibold text-lg text-neutral-950 dark:text-neutral-50 transition-colors duration-300">
              Next
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Features', href: '#features' },
              { label: 'Docs', href: '#docs' },
              { label: 'GitHub', href: 'https://github.com/cybertycoon/next16-docker-tw4-starter' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                className="relative text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-neutral-950 dark:after:bg-neutral-50 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
