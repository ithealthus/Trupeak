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
    title: "InBody 970: Bio-electrical Impedance Analysis",
    subtitle: "Measure more than weight. Understand your biology.",
    mainImage: "/images/weight-lean/inbody/2.webp",
    circleImage: "/images/weight-lean/inbody/1.webp"
  },
  imageText: {
    description:
      "At TruPeak, the InBody 970 goes beyond standard scales to measure muscle mass, fat, fluid distribution, and visceral fat with clinical precision. This data guides personalized nutrition, weight management, and performance plans, helping tailor interventions for fat loss, muscle gain, recovery, or overall health.",
    image: "/images/weight-lean/inbody/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  monitoring: {
    title: "Why InBody 970 Matters",
    description:
      "Body composition is a better predictor of long-term health than weight alone. The InBody 970 measures muscle, fat, and water levels in under a minute using safe electrical currents, providing a detailed analysis that traditional scales cannot. Low muscle mass and excess fat are linked to:",
    image: "/images/weight-lean/inbody/4.webp",
    pointsLeft: [
      "Slower metabolism and weight loss difficulty",
      "Higher risk of insulin resistance and inflammation"
    ],
    pointsRight: [
      "Reduced strength, mobility, and endurance",
      "Hidden visceral fat affecting organ health and recovery"
    ],
    bgColor: "bg-white",
    cardColor: "bg-[#E8D09A]"
  },
  whyTrupeak: {
    title: "What We Offer",
    description:
      "At Trupeak, the InBody 970 is integrated into a range of precision health programs to provide actionable insights and guide personalized care.",
    points: [
      "Weight and Lean Muscle Management Plans – to monitor fat loss while preserving muscle and ensuring metabolic efficiency",
      "Post-Surgical Rehabilitation and Performance Optimization – to support recovery, strength rebuilding, and physical readiness",
      "Hormonal Rebalancing Protocols – where muscle mass, fat distribution, and water retention impact hormonal outcomes",
      "Chronic Illness and Inflammation Care – to track changes in body composition related to inflammation, fatigue, or catabolism",
      "Clinical Nutrition and Metabolic Strategy Development – helping us tailor macronutrient and hydration goals to your unique physiology",
      "Repeat assessments are used to measure progress over time, ensuring that your program evolves based on real, measurable change."
    ]
  },
  whatWeOffer: {
    title: "Who This Is For",
    description: "The InBody 970 assessment is recommended for:",
    image: "/images/weight-lean/inbody/5.webp",
    points: [
      {
        title: "Individuals on structured weight loss or nutrition programs",
        description: "Looking to track fat loss, muscle preservation, and metabolic improvements."
      },
      {
        title: "Athletes and fitness-focused individuals",
        description: "Aiming to optimize performance, recovery, and body composition."
      },
      {
        title: "Patients recovering from illness, injury, or surgery",
        description: "Monitoring muscle mass, hydration, and strength rebuilding."
      },
      {
        title: "Those undergoing hormonal, metabolic, or longevity therapies",
        description: "Where body composition impacts treatment outcomes."
      },
      {
        title: "Anyone seeking deeper physiological insights",
        description: "Beyond what a scale or BMI can provide."
      }
    ]
  },
  infoSection: {
    title: "Benefits for Patients",
    description: "With InBody 970 analysis, you gain:",
    items: [
      { description: "Clear visual reports to track body transformation" },
      { description: "Early detection of muscle imbalances or inflammatory fluid shifts" },
      { description: "Enhanced accountability during long-term programs" },
      { description: "Evidence-based guidance for sustainable results" }
    ],
    bgColor: "#0D1B33",
    titleColor: "#FFFFFF",
    cardBgColor: "white"
  },
  benefitsData: {
    title: "Key Advantages",
    benefits: [
      { text: "Fast, safe, and precise body composition analysis", bgColor: "bg-[#122644]" },
      { text: "Tracks visceral fat, muscle, and hydration status", bgColor: "bg-[#E2C879]" },
      { text: "Integrates into weight management and recovery plans", bgColor: "bg-[#122644]" },
      { text: "Supports clinical decision-making for long-term health", bgColor: "bg-[#2C8C72]" }
    ],
    bgColor: "bg-white"
  },
  cta: {
    title: "Book Your Assessment",
    description:
      "Schedule your body composition analysis and receive a comprehensive interpretation from our functional health team. Your results will shape a personalized plan that supports your goals with clinical clarity and expert care.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/weight-lean/inbody/6.webp"
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

