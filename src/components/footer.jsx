
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Tours", to: "/tours" },
  { label: "Destinations", to: "/destinations" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const destinations = ["Siem Reap", "Phnom Penh", "Kampot", "Koh Rong"];

const supportLinks = [
  "Help Center",
  "FAQs",
  "Cancellation Policy",
  "Travel Insurance",
];

const socialIcons = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaYoutube, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1d2e50] text-[#d8e0ed]">
      <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-9 px-6 py-12 sm:grid-cols-2 md:grid-cols-[1.35fr_1fr_1fr_1.15fr] md:gap-10 md:py-[54px]">
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#10ad91] text-white">
              <FiArrowUpRight size={15} strokeWidth={2.5} />
            </span>
            <span className="text-[16px] font-bold tracking-[-0.02em] text-white">TripGo</span>
          </Link>
          <p className="max-w-[210px] text-[11px] leading-[1.55] text-[#d0d8e6]">
            Your trusted partner for unforgettable travel experiences in
            Cambodia and beyond. Let's make every trip a masterwork.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-[11px]">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="transition-colors hover:text-[#48d1b8]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-semibold text-white">Top Destinations</h4>
          <ul className="space-y-2 text-[11px]">
            {destinations.map((dest) => (
              <li key={dest}>
                <Link
                  to={`/destinations/${dest
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="transition-colors hover:text-[#48d1b8]"
                >
                  {dest}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-[11px] font-semibold text-white">Support &amp; Help</h4>
          <ul className="space-y-2 text-[11px]">
            {supportLinks.map((item) => (
              <li key={item}>
                <Link
                  to="#"
                  className="transition-colors hover:text-[#48d1b8]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#344462]">
        <div className="mx-auto flex max-w-[1040px] flex-col items-center justify-between gap-5 px-6 py-5 text-[10px] md:flex-row">
          <p className="text-[#d0d8e6]">
            © 2024 TripGo. All rights reserved.
          </p>

          <div className="flex gap-5 text-[#d0d8e6]">
            <Link
              to="/privacy"
              className="transition-colors hover:text-[#48d1b8]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-[#48d1b8]"
            >
              Terms &amp; Conditions
            </Link>
          </div>

          <div className="flex gap-3 text-[#f2f5fa]">
            {socialIcons.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#314363] transition-colors hover:bg-[#10ad91]"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


