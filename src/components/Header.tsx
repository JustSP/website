import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: string;
  links?: NavLink[];
  className?: string;
  /** "transparent" (default) = white text over dark hero; "solid" = white header with dark text for light pages */
  variant?: "transparent" | "solid";
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
  variant = "transparent",
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const variantClass =
    variant === "solid" ? "navbar-dark white-menu" : "navbar-light";

  return (
    <header
      id="header"
      className={`tra-menu ${variantClass} w-full block ${className}`}
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
                    <Link
                      to={link.href}
                      className="h-link"
                      onClick={() => {
                        // Scroll to top even when clicking a link for the
                        // current page (pathname doesn't change, so the
                        // ScrollToTop route effect won't fire).
                        scrollToTop();
                      }}
                    >
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
