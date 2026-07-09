import teaCountry from '../assets/images/experience-tea-country.jpg';
import heroThumb2 from '../assets/images/hero-thumb-2.jpg';
import heroThumb1 from '../assets/images/hero-thumb-1.jpg';
import arrowRight from '../assets/icons/arrow-right.svg';

const experiences = [
  { image: teaCountry, location: 'Nuwara Eliya', title: 'Tea Country Trails', tags: ['Hiking', 'Culture'] },
  { image: heroThumb2, location: 'Yala National Park', title: 'Wildlife Safari', tags: ['Wildlife', 'Adventure'] },
  { image: heroThumb1, location: 'Sigiriya Rock', title: 'Ancient City Tour', tags: ['History', 'Hiking'] },
];

export default function Experiences() {
  return (
    <section id="experiences" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="pointer-events-none absolute -top-48 right-0 size-[800px] rounded-full bg-gradient-to-br from-emerald-100/40 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
              Curated <span className="text-emerald-500">Experiences</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Immerse yourself in Sri Lanka&apos;s diverse landscapes with handpicked journeys led by local
              experts.
            </p>
          </div>
          <a
            href="#"
            className="flex shrink-0 items-center gap-2 text-base font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
          >
            View all experiences
            <img src={arrowRight} alt="" className="size-5" />
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {experiences.map((exp) => (
            <div key={exp.title} className="group relative aspect-3/4 overflow-hidden rounded-3xl shadow-xl">
              <img
                src={exp.image}
                alt={exp.title}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute left-4 top-4 flex gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-sm font-semibold text-emerald-400">{exp.location}</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-white">{exp.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
