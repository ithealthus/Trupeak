"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const timeoutRef = useRef(null);

  // Scroll detection for background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Services data
  const services = [
    {
      category: "Regenerative Therapies",
      href: "/services/regenerative-therapies",
      subServices: [
        {
          name: "Restorative Medicine",
          href: "/services/regenerative-therapies/restorative-medicine",
        },
        {
          name: "Cancer Nutrition",
          href: "/services/regenerative-therapies/cancer-nutrition",
        },
        {
          name: "Renal Nutrition",
          href: "/services/regenerative-therapies/renal-nutrition",
        },
        {
          name: "Hormone Optimisation Therapy",
          href: "/services/regenerative-therapies/hormone-optimisation-therapy",
        },
        {
          name: "Pain Management",
          href: "/services/regenerative-therapies/pain-management",
        },
        {
          name: "NAD+ Therapy",
          href: "/services/regenerative-therapies/nad-therapy",
        },
        {
          name: "IV Therapy",
          href: "/services/regenerative-therapies/iv-therapy",
        },
        {
          name: "Post-surgical Rehabilitation",
          href: "/services/regenerative-therapies/post-surgical",
        },
        {
          name: "Chronic Illness Management",
          href: "/services/regenerative-therapies/chronic-illness",
        },
      ],
    },
    {
      category: "Weight and Lean Muscle Management",
      href: "/services/weight-and-lean-muscle-management",
      subServices: [
        { name: "Nutrition Counseling", href: "#" },
        { name: "Weight Management", href: "#" },
        { name: "Fitness Optimization", href: "#" },
      ],
    },
  ];

  // Mega menu hover logic with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 300);
  };

  // Navbar dynamic classes
  const navbarClasses = `
    fixed top-0 left-0 w-full z-[9999] transition-colors duration-300 h-24 flex items-center border-b-2 border-one
    ${
      isMobileMenuOpen || isMegaMenuOpen
        ? "bg-white text-two shadow-md"
        : pathname === "/" && !isScrolled
        ? "bg-transparent text-white"
        : "bg-white text-two shadow-md"
    }
  `;

  return (
    <>
      {/* NAVBAR */}
      <nav className={navbarClasses}>
        <div className="max-w-8xl mx-auto px-20 flex items-center justify-between w-full h-full">
          {/* Left Links */}
          <div className="hidden md:flex items-center space-x-16 text-lg font-semibold">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-one text-xl">Services</button>
            </div>
            <Link href="/at-home" className="hover:text-one text-xl">
              At-Home
            </Link>
            <Link href="/about-us" className="hover:text-one text-xl">
              About Us
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/images/truepeaklogo.png"
                alt="Trupeak Health Logo"
                className="h-56 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center space-x-16 text-lg font-semibold">
            <Link href="/locations" className="hover:text-one text-xl">
              Locations
            </Link>
            <Link href="/blog" className="hover:text-one text-xl">
              Blogs
            </Link>
            <Link
              href="/contact"
              className="bg-three text-white px-6 py-2 rounded-full hover:bg-three/80 transition text-xl"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-3xl"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mega Menu (always mounted, hidden via CSS) */}
        <div
          className="absolute top-full left-0 w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MegaMenu isOpen={isMegaMenuOpen} />
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-20 left-0 w-full h-screen bg-white z-40 p-6 overflow-y-auto transition-all duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {!activeMobileSubmenu ? (
          /* Main mobile menu */
          <ul className="space-y-6 text-lg font-semibold">
            <li>
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setActiveMobileSubmenu("services")}
              >
                <span>Services</span>
                <span className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                  ➔
                </span>
              </button>
            </li>
            <li>
              <Link href="/at-home" onClick={() => setMobileMenuOpen(false)}>
                At-Home
              </Link>
            </li>
            <li>
              <Link href="/locations" onClick={() => setMobileMenuOpen(false)}>
                Locations
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/join-us"
                className="bg-green-700 text-white px-4 py-2 rounded-full block text-center hover:bg-green-800 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Us
              </Link>
            </li>
          </ul>
        ) : activeMobileSubmenu === "services" && !activeServiceCategory ? (
          /* Show service categories */
          <div>
            <button
              className="mb-6 flex items-center gap-3 text-one font-bold"
              onClick={() => setActiveMobileSubmenu(null)}
            >
              ← Back
            </button>
            <ul className="space-y-4">
              {services.map((cat, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <Link
                    href={cat.href}
                    className="text-lg font-bold text-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat.category}
                  </Link>
                  <button
                    className="ml-2 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full"
                    onClick={() => setActiveServiceCategory(cat.category)}
                  >
                    ➔
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          /* Sub-services */
          <div>
            <button
              className="mb-6 flex items-center gap-3 text-one font-bold"
              onClick={() => setActiveServiceCategory(null)}
            >
              ← Back
            </button>
            {services
              .filter((cat) => cat.category === activeServiceCategory)
              .map((cat, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-bold mb-3">{cat.category}</h3>
                  <ul className="ml-4 space-y-2">
                    {cat.subServices.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          href={sub.href}
                          className="block text-gray-600 hover:text-one text-sm"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveMobileSubmenu(null);
                            setActiveServiceCategory(null);
                          }}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}
