import { useState } from 'react';
import logo from '../assets/icons/nav-logo.svg';

const links = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Find a Guide', href: '#guides' },
  { label: 'Experiences', href: '#experiences' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-slate-900">
            <img src={logo} alt="" className="size-6" />
          </span>
          <span className="font-display text-2xl font-bold text-slate-900">LankaLocal</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-slate-700 transition-colors hover:text-[#FF6900]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="cursor-pointer rounded-xl px-4 py-2 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Log in
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-xl bg-slate-900 px-6 py-2.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
          >
            Book a Guide
          </button>
        </div>

        <button
          type="button"
          className="flex size-11 cursor-pointer items-center justify-center rounded-lg text-slate-900 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <button type="button" className="cursor-pointer rounded-xl border border-slate-200 px-4 py-2.5 text-base font-semibold text-slate-900">
                Log in
              </button>
              <button type="button" className="cursor-pointer rounded-xl bg-slate-900 px-4 py-2.5 text-base font-semibold text-white">
                Book a Guide
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
