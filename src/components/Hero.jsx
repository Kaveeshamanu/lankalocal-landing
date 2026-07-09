import heroAvatar from '../assets/images/hero-avatar.jpg';
import nineArchBridge from '../assets/images/nine-arch-bridge.jpg';
import heroThumb1 from '../assets/images/hero-thumb-1.jpg';
import heroThumb2 from '../assets/images/hero-thumb-2.jpg';
import searchIcon from '../assets/icons/search.svg';
import calendarIcon from '../assets/icons/calendar.svg';
import searchCircleIcon from '../assets/icons/search-circle.svg';
import usersIcon from '../assets/icons/users.svg';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-24 size-64 -rotate-[27deg] rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 size-72 rotate-[21deg] rounded-3xl bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pb-32 md:pt-24">
        <div className="flex flex-col items-start">
          <span className="mb-6 inline-flex items-center rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-orange-600">
            🌴 Discover the true Pearl of the Indian Ocean
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.1] text-slate-900 sm:text-6xl lg:text-7xl">
            Experience{' '}
            <span className="bg-gradient-to-r from-orange-500 to-emerald-500 bg-clip-text text-transparent">
              Sri Lanka
            </span>{' '}
            Like a Local
          </h1>

          <p className="mt-6 max-w-lg text-lg text-slate-600 sm:text-xl">
            Connect with verified local guides who know the hidden gems, untold stories, and authentic
            flavors of Sri Lanka.
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 rounded-3xl border border-white/50 bg-white/70 p-3 shadow-xl backdrop-blur sm:flex-row sm:items-center">
            <label className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3.5">
              <img src={searchIcon} alt="" className="size-5 shrink-0" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </label>
            <label className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3.5">
              <img src={calendarIcon} alt="" className="size-5 shrink-0" />
              <input
                type="text"
                placeholder="Dates"
                className="w-full bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </label>
            <button
              type="button"
              aria-label="Search"
              className="flex size-14 shrink-0 cursor-pointer items-center justify-center self-stretch rounded-2xl bg-slate-900 shadow-lg transition-colors hover:bg-slate-800 sm:self-auto"
            >
              <img src={searchCircleIcon} alt="" className="size-6" />
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[0, 1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={heroAvatar}
                  alt=""
                  className="size-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              Joined by <span className="font-semibold text-slate-800">10,000+</span> travelers
            </p>
          </div>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-md md:block lg:max-w-lg">
          <div className="absolute inset-x-6 top-6 overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
            <img src={nineArchBridge} alt="Nine Arch Bridge Tour" className="aspect-4/5 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-2 flex gap-2">
                <span className="rounded-lg bg-white/20 px-2 py-1 text-xs font-semibold text-white">Ella</span>
                <span className="rounded-lg bg-emerald-500/80 px-2 py-1 text-xs font-semibold text-white">
                  Top Rated
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Nine Arch Bridge Tour</h3>
              <p className="text-sm text-white/80">with Local Guide Kasun</p>
            </div>
          </div>

          <img
            src={heroThumb1}
            alt=""
            className="absolute -left-6 top-8 size-36 rotate-6 rounded-2xl border-4 border-white object-cover shadow-xl sm:size-44"
          />
          <img
            src={heroThumb2}
            alt=""
            className="absolute -bottom-2 -left-4 size-32 rounded-full border-4 border-white object-cover shadow-xl sm:size-40"
          />

          <div className="absolute -left-10 top-1/2 flex -translate-y-1/2 -rotate-2 items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-orange-100">
              <img src={usersIcon} alt="" className="size-6" />
            </span>
            <div>
              <p className="font-display text-xl font-bold text-slate-900">500+</p>
              <p className="text-xs text-slate-500">Local Guides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
