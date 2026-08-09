import { useState } from "react";
import { Link } from "react-router-dom";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: string;
  links?: NavLink[];
  className?: string;
}

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "ERPNext", href: "/erpnext" },
  { label: "Startups", href: "/startups" },
  { label: "Wallet", href: "/wallet" },
];

export default function Header({
  logo = "/assets/images/logo-light.png",
  links = defaultLinks,
  className = "",
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className={`tra-menu navbar-light w-full block ${className}`}
    >
      <div className="header-wrapper flex">
        <div className="wsmobileheader flex">
          <span className="smllogo mt-5.5 pl-4 sm:pl-4.5 md:pl-5.5">
            <Link to="#hero">
              <img src={logo} className="max-h-9" alt="mobile-logo" />
            </Link>
          </span>
          <button
            id="wsnavtoggle"
            className="wsanimated-arrow"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
          </button>
        </div>

        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            <div className="desktoplogo">
              <Link to="#hero" className="logo-black">
                <img
                  src={logo}
                  className="lg:max-h-8.5 xl:max-h-9.5"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="desktoplogo">
              <Link to="#hero" className="logo-white">
                <img
                  src="/assets/images/logo-light.png"
                  className="lg:max-h-8.5 xl:max-h-9.5"
                  alt="logo"
                />
              </Link>
            </div>

            <nav className="wsmenu clearfix">
              <ul className="wsmenu-list hover-orange-red">
                {links.map((link, index) => (
                  <li key={index} className="nl-simple">
                    <Link to={link.href} className="h-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
