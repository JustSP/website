import { Link } from "react-router-dom";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: string;
  description?: string;
  footerSections?: FooterSection[];
  socialLinks?: FooterLink[];
  copyright?: string;
  className?: string;
}

export default function Footer({
  logo = "/assets/images/logo-light.png",
  description = "Aliquam augue suscipit and luctus neque purus rhoncus ipsum neque undo molestie volutpat and cursus rhoncus diam quaerat",
  footerSections = [],
  socialLinks = [],
  copyright = "&copy; 2010 - 2026 OLMO. All Rights Reserved",
  className = "",
}: FooterProps) {
  return (
    <footer
      className={`footer px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 ${className}`}
    >
      <div className="container pt-17.5 md:pt-22.5 xl:pt-25 text-gray-500">
        <div className="grid grid-cols-12 max-md:gap-y-7 md:mb-15 xl:mb-18">
          <div className="col-span-12 lg:col-span-4 md:max-lg:mb-8.5">
            <img src={logo} className="max-h-9 lg:max-h-9.5" alt="logo" />
            <p className="2xs:max-lg:text-17px xl:text-18px mt-5 xl:mt-5.5 lg:pr-5">
              {description}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 lg:pl-3 xl:pl-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-md:gap-y-7 sm:max-md:gap-x-7 md:gap-x-6">
              {footerSections.map((section, index) => (
                <div key={index} className="foo-links">
                  <span className="font-main text-19px xl:text-20px mb-4 xl:mb-4.5 block">
                    {section.title}
                  </span>
                  <ul className="2xs:text-17px lg:max-xl:text-base xl:text-18px space-y-2.5">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link to={link.href} className="hover:text-heading">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10 mt-8 border-t border-gray-300 items-center">
          <div className="footer-copyright">
            <p
              className="2xs:text-17px xl:text-18px"
              dangerouslySetInnerHTML={{ __html: copyright }}
            />
          </div>

          {socialLinks.length > 0 && (
            <div className="inline-block mt-1.5">
              <div className="flex md:justify-end text-base 2xs:text-17px xl:text-18px">
                {socialLinks.map((link, index) => (
                  <span key={index}>
                    <Link to={link.href} className="hover:text-heading">
                      {link.label}
                    </Link>
                    {index < socialLinks.length - 1 && (
                      <span className="flaticon-vertical-line text-20px relative top-px xl:top-0.5 mx-px md:mx-0.5"></span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
