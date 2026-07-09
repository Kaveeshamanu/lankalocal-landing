import guideSaman from '../assets/images/guide-saman.jpg';
import guideAnjalie from '../assets/images/guide-anjalie.jpg';
import guideDilshan from '../assets/images/guide-dilshan.jpg';
import starIcon from '../assets/icons/star.svg';
import mapPinIcon from '../assets/icons/map-pin.svg';
import messageIcon from '../assets/icons/message-circle.svg';

const guides = [
  {
    image: guideSaman,
    name: 'Saman Kumara',
    location: 'Kandy & Central Province',
    rating: '4.9',
    reviews: '128',
    tags: ['History', 'Culture', 'Buddhism'],
  },
  {
    image: guideAnjalie,
    name: 'Anjalie Perera',
    location: 'Galle & South Coast',
    rating: '5',
    reviews: '94',
    tags: ['Surfing', 'Food Tours', 'Photography'],
  },
  {
    image: guideDilshan,
    name: 'Dilshan Silva',
    location: 'Ella & Highlands',
    rating: '4.8',
    reviews: '215',
    tags: ['Hiking', 'Nature', 'Wildlife'],
  },
];

export default function Guides() {
  return (
    <section id="guides" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
            Meet Your Hosts
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Connect with <span className="text-blue-500">Local Experts</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Browse our community of verified guides, read reviews, and find the perfect match for your Sri
            Lankan adventure.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <div
              key={guide.name}
              className="flex flex-col rounded-3xl border border-slate-100 p-6 shadow-lg shadow-slate-200/50"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img src={guide.image} alt={guide.name} className="aspect-square w-full object-cover" />
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-white/90 px-2 py-1 shadow-sm">
                  <img src={starIcon} alt="" className="size-3.5" />
                  <span className="text-sm font-bold text-slate-900">{guide.rating}</span>
                  <span className="text-xs text-slate-500">({guide.reviews})</span>
                </div>
              </div>

              <div className="flex-1 pt-6">
                <h3 className="font-display text-2xl font-bold text-slate-900">{guide.name}</h3>
                <div className="mt-2 flex items-center gap-2 text-slate-500">
                  <img src={mapPinIcon} alt="" className="size-4" />
                  <span className="text-sm">{guide.location}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  className="flex-1 cursor-pointer rounded-2xl bg-slate-900 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-slate-800"
                >
                  View Profile
                </button>
                <button
                  type="button"
                  aria-label={`Message ${guide.name}`}
                  className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition-colors hover:bg-blue-100"
                >
                  <img src={messageIcon} alt="" className="size-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="cursor-pointer rounded-2xl border border-slate-200 px-8 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50"
          >
            See all guides
          </button>
        </div>
      </div>
    </section>
  );
}
