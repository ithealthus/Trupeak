"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
const [activeServiceCategory, setActiveServiceCategory] = useState(null); // New state
const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  // Track scroll to toggle background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Example services data
  const services = [
    {
      category: "Regenerative Therapies",
      href: "/services/regenerative-therapies",
      subServices: [
        { name: "Restorative Medicine at Trupeak", href: "/services/regenerative-therapies/restorative-medicine" },
        { name: "Cancer Nutrition at Trupeak", href: "/services/regenerative-therapies/cancer-nutrition" },
        { name: "Renal Nutrition", href: "/services/regenerative-therapies/renal-nutrition" },
        { name: "Hormone Optimisation Therapy", href: "/services/regenerative-therapies/hormone-optimisation-therapy" },
        { name: "Pain Management", href: "/services/regenerative-therapies/pain-management" },
        { name: "NAD+ Therapy", href: "/services/regenerative-therapies/nad-therapy" },
        { name: "IV Therapy", href: "/services/regenerative-therapies/iv-therapy" },
        { name: "Post-surgical Rehabilitation", href: "/services/regenerative-therapies/post-surgical" },
        { name: "Chronic Illness Management", href: "/services/regenerative-therapies/chronic-illness" }
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
    // add more categories...
  ];

  let timeoutId = null;
  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 300);
  };

  // Dynamic navbar style: transparent on hero (homepage top), white otherwise
//   const navbarClasses = `
//    fixed top-0 left-0 w-full z-[9999] transition-colors duration-300 h-20 flex items-center
//   ${pathname === "/" && !isScrolled ? "bg-transparent text-white" : "bg-white text-two shadow-md"}
//  `;
// const navbarClasses = `
//   fixed top-0 left-0 w-full z-[9999] transition-colors duration-300 h-20 flex items-center
//   ${
//     isMegaMenuOpen
//       ? "bg-white text-two shadow-md"
//       : pathname === "/" && !isScrolled
//       ? "bg-transparent text-white"
//       : "bg-white text-two shadow-md"
//   }
// `;
const navbarClasses = `
  fixed top-0 left-0 w-full z-[9999] transition-colors duration-300 h-20 flex items-center
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
      <nav className={`${navbarClasses}border-b-2 border-one`}>

        <div className="max-w-7xl mx-auto px-2 md:px-6  flex items-center justify-between w-full h-full  ">

          {/* Left menu (desktop only) */}
          <div className="hidden md:flex items-center space-x-8 text-xl font-semibold">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-one cursor-pointer">Services</button>
            </div>
            <Link href="/at-home" className="hover:text-one">At-Home</Link>
            <Link href="/locations" className="hover:text-one">Locations</Link>
          </div>

          {/* Logo */}
         <div className="flex-1 flex md:justify-center justify-start items-center">
  <img
    src="/images/truepeaklogo.png"
    alt="Trupeak Health Logo"
    className="h-36 md:h-48 w-auto object-cover"
  />
</div>



          {/* Right menu (desktop only) */}
          <ul className="hidden md:flex space-x-8 text-xl font-semibold list-none">
            <li className="hover:text-one"><Link href="/blog">Blogs</Link></li>
            <li className="hover:text-one"><Link href="/about-us">About Us</Link></li>
            <li className="hover:text-one"><Link href="/contact">Contact Us</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Full-Width Mega Menu */}
        {isMegaMenuOpen && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-40"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto p-6">
              <MegaMenu isOpen={isMegaMenuOpen} />
            </div>
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
{isMobileMenuOpen && (
  <div className="md:hidden fixed top-20 left-0 w-full h-screen bg-white z-40 p-6 overflow-y-auto">
    {!activeMobileSubmenu ? (
      // Step 0: Main menu
      <ul className="space-y-6 text-lg font-semibold">
        <li>
          <button
            className="w-full flex justify-between items-center text-left"
            onClick={() => setActiveMobileSubmenu("services")}
          >
            <span>Services</span>
            <span className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </li>

        {/* Other static links */}
        <li><Link href="/at-home" onClick={() => setMobileMenuOpen(false)}>At-Home</Link></li>
        <li><Link href="/locations" onClick={() => setMobileMenuOpen(false)}>Locations</Link></li>
        <li><Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blogs</Link></li>
        <li><Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
        <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
      </ul>
    ) : activeMobileSubmenu === "services" && !activeServiceCategory ? (
      // Step 1: Show service categories
      <div>
        <button
          className="mb-6 flex items-center gap-3 text-one font-bold"
          onClick={() => setActiveMobileSubmenu(null)}
        >
          <span className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          <span>Back</span>
        </button>

        <ul className="space-y-4">
          {services.map((cat, idx) => (
  <li key={idx}>
    <div className="flex justify-between items-center">
      {/* Category Link */}
      <Link
        href={cat.href}
        className="text-lg font-bold text-gray-800"
        onClick={() => setMobileMenuOpen(false)} // close menu on click
      >
        {cat.category}
      </Link>

      {/* Arrow to open subservices */}
      <button
        className="ml-2 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full"
        onClick={() => setActiveServiceCategory(cat.category)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </li>
))}
        </ul>
      </div>
    ) : (
      // Step 2: Show subservices of selected category
      <div>
        <button
          className="mb-6 flex items-center gap-3 text-one font-bold"
          onClick={() => setActiveServiceCategory(null)}
        >
          <span className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          <span>Back</span>
        </button>

        {services
          .filter(cat => cat.category === activeServiceCategory)
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
                        // Close mobile menu on click
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
)}



    </>
  );
}
