import React from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A2330] text-white">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-20 pt-12 pb-4">
        {/* Row 1: Logo & Tagline */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between mb-10 w-full gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center w-full lg:w-auto">
            {/* Logo */}
            <Link href="/" aria-label="Go to homepage">
              <img
                src="/images/logoondark.png"
                alt="Trupeak Health Logo"
                className="w-40 sm:w-52 lg:w-56 xl:w-64"
                style={{ minWidth: "170px" }}
              />
            </Link>
            {/* Spacer Vertical Line on lg+ only */}
            <div className="hidden lg:block h-24 border-r border-white/30 mx-8" />
            {/* Tagline */}
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p className="text-white font-semibold text-lg sm:text-xl lg:text-3xl xl:text-4xl leading-tight">
                Transform into the <br />
                new <span className="text-[#C5B179] font-bold">You</span>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-full sm:max-w-lg lg:max-w-md">
            <h4 className="text-white font-bold text-lg sm:text-xl mb-4 text-center sm:text-right lg:text-left">
              Subscribe to our Newsletter
            </h4>
            <form className="flex w-full bg-transparent rounded-full border-4 border-[#C5B179] overflow-hidden">
              <input
                type="email"
                placeholder="Your Email..."
                className="flex-1 bg-transparent px-4 py-3 text-white text-base outline-none placeholder:text-white/80"
              />
              <button
                type="submit"
                className="bg-[#C5B179] text-[#1A2330] px-6 flex items-center justify-center font-bold rounded-full transition hover:bg-[#b2a16a] text-xl"
              >
                <span className="text-xl">&#8594;</span>
              </button>
            </form>
          </div>
        </div>

        {/* Row 2: Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-base text-white/80">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Locations</Link>
              </li>
              <li>
                <Link href="#">Media & Press</Link>
              </li>
              <li>
                <Link href="#">Success Stories</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-base text-white/80">
              <li>
                <Link href="#">At-Home Services</Link>
              </li>
              <li>
                <Link href="#">Memberships</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal & Policies</h4>
            <ul className="space-y-2 text-base text-white/80">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Shipping Policy</Link>
              </li>
              <li>
                <Link href="#">Refund Policy</Link>
              </li>
              <li>
                <Link href="#">Accessibility</Link>
              </li>
              <li>
                <Link href="#">
                  GDPR / HIPAA / SOC 2 / <br />
                  ISO / FDA Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-6 text-base text-white/80">
              <li className="flex items-center gap-4">
                <FaEnvelope
                  size={32}
                  color="#E1C78F"
                  className="flex-shrink-0"
                />
                <a
                  href="mailto:info@trupeakhealth.in"
                  className="hover:underline"
                >
                  info@trupeakhealth.in
                </a>
              </li>

              <li className="flex items-center gap-4">
                <FaPhoneAlt
                  size={32}
                  color="#E1C78F"
                  className="flex-shrink-0"
                />
                <span>+91 982-037-3373</span>
              </li>

              <li className="flex items-start gap-4">
                <FaMapMarkerAlt
                  size={32}
                  color="#E1C78F"
                  className="flex-shrink-0"
                />
                <span>
                  Trupeak Health, Suite A/405,
                  <br />
                  Kohinoor Square, Shivaji Park, OPP Shiv Sena Bhavan, Dadar
                  West,
                  <br />
                  Mumbai - 400028
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom note & social icons */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/50 text-center lg:text-left">
            © {new Date().getFullYear()} Trupeak Health. All rights reserved.
          </div>
          <div className="flex gap-6 items-center text-[#C5B179] text-2xl">
            <a href="#" aria-label="Instagram" className="hover:opacity-70">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-70">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
