import shieldCheck from '../assets/icons/shield-check.svg';
import sliders from '../assets/icons/sliders.svg';
import gem from '../assets/icons/gem.svg';
import utensils from '../assets/icons/utensils.svg';

const features = [
  {
    icon: shieldCheck,
    title: 'Verified Local Guides',
    description: 'Every guide is vetted for quality, knowledge, and safety. Travel with complete peace of mind.',
    className: 'border-emerald-100 bg-emerald-50 md:col-span-2',
  },
  {
    icon: sliders,
    title: 'Tailored to You',
    description: '100% customizable itineraries based on your interests.',
    className: 'border-orange-100 bg-orange-50',
  },
  {
    icon: gem,
    title: 'Hidden Gems',
    description: 'Skip the tourist traps. Discover places only locals know about.',
    className: 'border-blue-100 bg-blue-50',
  },
  {
    icon: utensils,
    title: 'Authentic Experiences',
    description: 'Cook with a local family, harvest tea leaves, or surf the hidden breaks of the South coast.',
    className: 'border-purple-100 bg-purple-50 md:col-span-2',
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Why travel with <span className="text-orange-600">LankaLocal?</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We bridge the gap between curious travelers and passionate locals to create unforgettable memories.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`flex flex-col justify-between rounded-3xl border p-8 ${feature.className}`}
            >
              <span className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <img src={feature.icon} alt="" className="size-8" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 max-w-md text-base text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
