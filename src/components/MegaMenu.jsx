"use client";
import { useState } from "react";
import Link from "next/link";

export default function MegaMenu({ isOpen }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const services = [
    {
      category: { name: "Regenerative Therapies", href: "/services/regenerative-therapies" },
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
      ]
    },
    {
      category: { name: "Weight and Lean Muscle Management", href: "/services/weight-and-lean-muscle-management" },
      subServices: [
        { name: "Weight Optimisation Tracking", href: "/services/weight-and-lean-muscle-management/weight-optimisation-tracking" },
        { name: "Functional Medicine Consultation", href: "/services/weight-and-lean-muscle-management/functional-medicine-consultation" },
        { name: "MuscleSound Analysis (Muscle Ultrasound)", href: "/services/weight-and-lean-muscle-management/musclesound-analysis" },
        { name: "InBody 970: Bio-electrical Impedance Analysis", href: "/services/weight-and-lean-muscle-management/inbody-970" },
        { name: "Q-NRG: Indirect Calorimetry", href: "/services/weight-and-lean-muscle-management/q-nrg" },
        { name: "Sleep Cycle Analysis at Trupeak", href: "/services/weight-and-lean-muscle-management/sleep-cycle-analysis" },
        { name: "Diet Management and Nutrition Counselling", href: "/services/weight-and-lean-muscle-management/diet-management-and-nutrition-counselling" }
      ]
    },
    {
      category: { name: "Immunity and Longevity", href: "/services/immunity-and-longevity" },
      subServices: [
        { name: "Immune System Assessment and Analysis", href: "/services/immunity-and-longevity/immune-system-assessment-and-analysis" },
        { name: "Genetic Mapping", href: "/services/immunity-and-longevity/genetic-mappings" },
        { name: "Gut Microbiome Mapping", href: "/services/immunity-and-longevity/gut-microbiome-mapping" },
        { name: "Biological Age Mapping", href: "/services/immunity-and-longevity/biological-age-mapping" }
      ]
    },
    {
      category: { name: "Pain Management and Recovery", href: "/services/pain-management-and-recovery" },
      subServices: [
        { name: "Chronic Back Ache Induced by Uric Acid", href: "/nutrition" },
        { name: "Arthritis", href: "/weight-management" },
        { name: "Accident Recovery", href: "/fitness" },
        { name: "Joint Pain Management", href: "/nutrition" },
        { name: "Sports Recovery", href: "/weight-management" },
        { name: "Cryotherapy", href: "/fitness" },
        { name: "Localized Cryotherapy", href: "/fitness" },
      ]
    },
    {
      category: { name: "Women-centric Health Interventions", href: "/services/women-centric-health-interventions" },
      subServices: [
       { name: "PCOS and PCOD", href: "/nutrition" },
        { name: "Menopause-Related Issues", href: "/weight-management" },
        { name: "Hormone Balancing", href: "/fitness" },
        { name: "Uterine Removal Complications in Older Women", href: "/nutrition" },
        { name: "HPV Vaccines", href: "/weight-management" },
        { name: "UTIs (Urinary Tract Infections)", href: "/fitness" },
        { name: "Osteoporosis", href: "/fitness" },
      ]
    },
    {
      category: { name: "Beauty Aesthetics", href: "/services/beauty-aesthetics" },
      subServices: [
        { name: "Hair", href: "/nutrition" },
        { name: "Face", href: "/weight-management" },
        { name: "Lasers", href: "/fitness" },
        { name: "Women’s Intimate Aesthetics", href: "/nutrition" },
        { name: "HPV Vaccines", href: "/weight-management" },
        { name: "Injectable Therapies (PRP, Botox, etc.)", href: "/fitness" },
        { name: "Surgical References (Plastic)", href: "/fitness" },
        { name: "Aesthetic Gynaecology", href: "/fitness" },
      ]
    },
    {
      category: { name: "Ergogenic Medicine", href: "/services/ergogenic-medicine" },
      subServices: [
        { name: "Sexual Health", href: "/nutrition" },
        { name: "Fertility (Pre)", href: "/weight-management" },
        { name: "Intimate Health Program", href: "/fitness" },
        { name: "Endurance Boost", href: "/fitness" },
        { name: "Sexually Transmitted Diseases (STDs)", href: "/nutrition" },
      ]
    },
    {
      category: { name: "Mental Health and Counselling", href: "/services/mental-health-and-counselling" },
      subServices: [
        { name: "Mental Health Peptides", href: "/nutrition" },
        { name: "Chronic Illness counselling and support (Cancer specifically)", href: "/weight-management" },
        { name: "Nutrition Management protocols", href: "/fitness" },
        { name: "Psychologist sessions", href: "/fitness" },
        { name: "Paediatric Counselling (ADHD and other issues)", href: "/nutrition" },
      ]
    },
    {
      category: { name: "Technology", href: "/services/technology" },
      subServices: [
        { name: "Data-driven Healthcare", href: "/nutrition" },
        { name: "Data-driven tracking", href: "/weight-management" },
        { name: "Analysing over 800 Biomarkers", href: "/fitness" },
        { name: "Monthly automated reporting", href: "/nutrition" },
      ]
    }
  ];

  const quickLinks = [
    { title: "Call Us", href: "tel:9820373373" },
    { title: "Book an Appointment", href: "/contact" },
    { title: "Location", href: "/locations" }
  ];

  return (
    <div
      className={`absolute left-0 top-full w-full bg-white shadow-lg border-t border-gray-200 z-50
      transition-all duration-300 ease-in-out
      ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}
    >
      <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-3 gap-6">
        
        {/* First Column - Categories */}
        <div className="border-r border-gray-200">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveCategory(idx)}
              className={`p-2 cursor-pointer transition-colors duration-200 rounded 
                ${activeCategory === idx ? "bg-gray-100 font-semibold text-two" : "hover:bg-gray-50"}`}
            >
              <Link href={service.category.href}>
                {service.category.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Second Column - Sub Services */}
        <div className="border-r border-gray-200">
          {services[activeCategory]?.subServices.map((sub, subIdx) => (
            <Link
              key={subIdx}
              href={sub.href}
              className="block p-2 text-two hover:bg-gray-50 hover:text-one transition-colors duration-200"
            >
              {sub.name}
            </Link>
          ))}
        </div>

        {/* Third Column - Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 inline-flex flex-col items-stretch">
            {quickLinks.map((link, idx) => (
              <li key={idx} className="w-full">
                <Link
                  href={link.href}
                  className="inline-flex items-center justify-between gap-2 px-4 py-2 bg-three text-white rounded-3xl hover:bg-two/90 transition-colors duration-200 w-full"
                >
                  <span>{link.title}</span>
                  <div className="bg-white p-1 rounded-full inline-flex items-center justify-center w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="green"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12l-7.5 7.5M3 12h18"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
