import navLogo from '../assets/icons/nav-logo.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import twitterIcon from '../assets/icons/twitter.svg';

const exploreLinks = ['Destinations', 'Experiences', 'Our Guides', 'Travel Blog'];
const supportLinks = ['Help Center', 'Safety', 'Cancellation Options', 'Contact Us'];
const socials = [
  { icon: facebookIcon, label: 'Facebook' },
  { icon: instagramIcon, label: 'Instagram' },
  { icon: twitterIcon, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg bg-white/10">
                <img src={navLogo} alt="" className="size-5" />
              </span>
              <span className="font-display text-xl font-bold text-white">LankaLocal</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Connecting curious travelers with passionate locals across Sri Lanka.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-slate-700 transition-colors hover:border-slate-500"
                >
                  <img src={social.icon} alt="" className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-white">Explore</h4>
            <ul className="mt-6 flex flex-col gap-4">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-white">Support</h4>
            <ul className="mt-6 flex flex-col gap-4">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-white">Become a Guide</h4>
            <p className="mt-6 text-sm text-slate-400">
              Share your passion for Sri Lanka with the world and earn on your own schedule.
            </p>
            <button
              type="button"
              className="mt-6 cursor-pointer rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              Apply Now
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">© 2026 LankaLocal. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
