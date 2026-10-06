import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { TbHeartOff } from "react-icons/tb";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Tours", to: "/tours" },
  { label: "Destinations", to: "/destinations" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-[54px] max-w-[1040px] items-center justify-between gap-6 px-6 py-2.5">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#10ad91] text-white">
            <FiArrowUpRight size={15} strokeWidth={2.5} />
          </span>
          <span className="text-[16px] font-bold tracking-[-0.02em] text-[#182849]">TripGo</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[11px] font-medium text-[#142443] transition-colors hover:text-[#0da88d]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Favorites"
            className="hidden h-7 w-7 items-center justify-center text-[#142443] transition-colors hover:text-[#0da88d] sm:flex"
          >
            <TbHeartOff size={28} strokeWidth={1.8} />
          </button>
          <Link
            to="/login"
            className="rounded-[5px] border border-[#172949] px-4 py-1.5 text-[11px] font-medium text-[#172949] transition-colors hover:border-[#0da88d] hover:text-[#0da88d]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-[5px] bg-[#10ad91] px-4 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-[#0d967d]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;