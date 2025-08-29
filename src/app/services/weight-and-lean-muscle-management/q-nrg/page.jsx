import React from 'react';
import Hero from '@/components/regenerative-therapies/Hero';
import Imagetext from '@/components/Imagetext';
import MonitoringSection from '@/components/weight-management/MonitoringSection';
import WhatWeTrack from '@/components/weight-management/WhatWeTrack';
import WhatWeOffer from '@/components/weight-management/WhatWeOffer';
import WhoThisIsFor from '@/components/weight-management/WhoThisIsFor';
import BenefitsSection from '@/components/weight-management/BenefitsSection';

import CtaSection from '@/components/regenerative-therapies/CtaSection';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';

const pageData = {
  hero: {
    title: "Q-NRG: Indirect Calorimetry",
    subtitle: "Precision in every calorie. Clarity in every plan.",
    mainImage: "/images/weight-lean/q-nrg/2.webp",
    circleImage: "/images/weight-lean/q-nrg/1.webp"
  },
  imageText: {
    description:
      "At TruPeak, we use Q-NRG, a state-of-the-art Indirect Calorimetry device, to measure your exact Resting Metabolic Rate (RMR) and interpret the results. Unlike formulas or wearables, this data-driven approach accurately guides nutrition, exercise, and treatment decisions, helping you understand your metabolism and make informed health choices.",
    image: "/images/weight-lean/q-nrg/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  monitoring: {
    title: "Why Calorimetry Matters",
    description:
      "Indirect calorimetry shows how efficiently your body burns calories at rest, providing precise insights for nutrition and health planning.",
    image: "/images/weight-lean/q-nrg/4.webp",
    pointsLeft: [
      "Measures oxygen intake and carbon dioxide output to assess metabolism",
      "Accurately determines daily calorie needs"
    ],
    pointsRight: [
      "Quick, non-invasive test using Q-NRG in a relaxed state",
      "Supervised by trained clinical staff for safe, reliable results"
    ],
    bgColor: "bg-white",
    cardColor: "bg-[#E8D09A]"
  },
  whyTrupeak: {
    title: "What We Offer",
    description:
      "At Trupeak, Q-NRG is a core diagnostic tool integrated across multiple programs to personalise care and improve outcomes. It delivers accurate metabolic data beyond standard estimates, guiding nutrition, recovery, and hormone-based care by measuring RMR, fuel usage, and macronutrient needs.",
    points: [
      "Personalized Weight & Muscle Plans – ensures calorie intake supports fat loss or lean mass gain based on your true metabolic needs.",
      "Hormonal & Metabolic Analysis – identifies thyroid, insulin, and adrenal imbalances that affect energy and metabolism.",
      "Medical Nutrition Support – provides accurate nutrition during cancer care, chronic illness, or post-treatment recovery.",
      "Exercise & Recovery Optimization – aligns workouts and calorie intake with your metabolic profile to enhance performance and healing."
    ]
  },
  whatWeOffer: {
    title: "Who This Is For",
    description: "Q-NRG testing is ideal for individuals who:",
    image: "/images/weight-lean/q-nrg/5.webp",
    points: [
      {
        title: "Individuals in weight management programs",
        description: "Especially those beginning or plateauing, who need precision calorie targets."
      },
      {
        title: "Patients in recovery or treatment",
        description: "Requiring accurate calorie and macronutrient guidance for healing."
      },
      {
        title: "Athletes and performance-driven individuals",
        description: "Seeking to enhance training, energy use, and recovery with metabolic insight."
      },
      {
        title: "Those with fatigue, appetite, or metabolic shifts",
        description: "Gaining clarity on how metabolism impacts energy and body composition."
      }
    ]
  },
  infoSection: {
    title: "Benefits of Q-NRG Testing",
    description: "With indirect calorimetry, you gain:",
    items: [
      { description: "Delivers precise, personalised calorie targets" },
      { description: "Helps break weight loss or recovery plateaus" },
      { description: "Informs smarter nutrition and exercise plans" },
      { description: "Reduces guesswork in managing metabolism" }
    ],
    bgColor: "#0D1B33",
    titleColor: "#FFFFFF",
    cardBgColor: "white"
  },
  benefitsData: {
    title: "Key Advantages",
    benefits: [
      { text: "Accurate measurement of Resting Metabolic Rate (RMR)", bgColor: "bg-[#122644]" },
      { text: "Integrates with nutrition, fitness, and clinical care", bgColor: "bg-[#E2C879]" },
      { text: "Quick, safe, and non-invasive testing", bgColor: "bg-[#122644]" },
      { text: "Supports personalised, evidence-based health planning", bgColor: "bg-[#2C8C72]" }
    ],
    bgColor: "bg-white"
  },
  cta: {
    title: "Book Your Q-NRG Assessment",
    description:
      "Schedule your Q-NRG Indirect Calorimetry session at Trupeak™ to receive a precision-based metabolic profile. Let every calorie work without going against your health goals.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/weight-lean/q-nrg/6.webp"
  }
};





const Page = () => {
  const { hero, imageText, monitoring,  whyTrupeak, whatWeOffer, infoSection,benefitsData, cta } = pageData;

  return (
    <>
      <Hero {...hero} />
      <Imagetext {...imageText} />
      <MonitoringSection {...monitoring}/>
      <WhatWeTrack {...whyTrupeak}/>
      <WhatWeOffer {...whatWeOffer}/>
      <WhoThisIsFor {...infoSection} />
      <BenefitsSection {...benefitsData} />
      <CtaSection {...cta} />
      <ContactSection />
      <ContactForm />
    </>
  );
};

export default Page;

