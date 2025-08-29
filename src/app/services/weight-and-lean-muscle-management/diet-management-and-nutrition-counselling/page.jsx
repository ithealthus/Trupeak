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
    title: "Diet Management and Nutrition Counselling",
    subtitle: "Precision nutrition for body, brain, and longevity",
    mainImage: "/images/weight-lean/diet-management/2.webp",
    circleImage: "/images/weight-lean/diet-management/1.webp"
  },
  imageText: {
    description:
      "At TruPeak, nutrition is a clinical intervention that can reduce inflammation, optimize metabolism, and restore system balance. Our Diet Management and Nutrition Counseling combines diagnostic data with personalized strategies to address weight resistance, hormonal shifts, muscle loss, or chronic inflammation, helping you eat with clarity and purpose.",
    image: "/images/weight-lean/diet-management/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  monitoring: {
    title: "Why This Matters",
    description:
      "Understanding your body’s unique needs allows nutrition to be a precise, effective intervention rather than guesswork.",
    image: "/images/weight-lean/diet-management/4.webp",
    pointsLeft: [
      "Supports energy optimization and metabolic efficiency",
      "Maintains lean muscle and reduces excess fat"
    ],
    pointsRight: [
      "Manages appetite, bloating, and digestive comfort",
      "Enhances mental clarity and overall wellbeing"
    ],
    bgColor: "bg-white",
    cardColor: "bg-[#E8D09A]"
  },
  whyTrupeak: {
    title: "What We Track",
    description:
      "We use advanced assessments to create a truly personalized nutrition plan.",
    points: [
      "Energy expenditure via Q-NRG metabolic testing",
      "Fat-to-muscle ratio with InBody 970 analysis",
      "Micronutrient status and blood markers",
      "Hormone balance and gut health",
      "Anti-inflammatory and functional food tolerance",
      "Meal timing and circadian alignment"
    ]
  },
  whatWeOffer: {
    title: "What We Offer",
    description:
      "Every client begins with a comprehensive consultation, which includes:",
    image: "/images/weight-lean/diet-management/5.webp",
    points: [
      {
        title: "In-depth diet and symptom history",
        description:
          "To understand how your current eating habits relate to digestion, energy, and overall well-being."
      },
      {
        title: "Evaluation of food-related triggers",
        description:
          "To pinpoint foods or patterns that may be contributing to symptoms or inflammation."
      },
      {
        title: "Review of sleep, stress, and activity patterns",
        description:
          "To assess lifestyle factors that affect metabolism, recovery, and food choices."
      },
      {
        title: "Identification of helpful and harmful foods",
        description:
          "To tailor your nutrition plan with foods that support healing and sustainable results."
      },
      {
        title: "Goal-setting for 4 to 12 weeks",
        description:
          "To provide a personalised plan that aligns with your health goals and clinical needs."
      }
    ]
  },
  infoSection: {
    title: "Who This Is For",
    description: "This service is ideal for individuals who:",
    items: [
      { description: "Are living with insulin resistance, PCOS, or thyroid imbalances" },
      { description: "Are experiencing muscle loss, poor recovery, or metabolic slowdown" },
      { description: "Want to achieve sustainable fat loss without extreme restriction" },
      { description: "Struggle with brain fog, low energy, or food-triggered symptoms" },
      { description: "Are athletes or active individuals seeking performance-based nutrition" },
      { description: "Are in post-surgical recovery or receiving ongoing medical therapy" }
    ],
    bgColor: "#0D1B33",
    titleColor: "#FFFFFF",
    cardBgColor: "white"
  },
  benefitsData: {
    title: "Benefits of Nutrition Counseling",
    benefits: [
      { text: "Delivers data-driven meal plans tailored to your metabolism and health goals", bgColor: "bg-[#122644]" },
      { text: "Helps manage inflammation, hormone imbalances, and food-related symptoms", bgColor: "bg-[#E2C879]" },
      { text: "Supports sustainable energy, better digestion, and long-term weight control", bgColor: "bg-[#122644]" },
      { text: "Enhances recovery, performance, and overall wellbeing", bgColor: "bg-[#2C8C72]" }
    ],
    bgColor: "bg-white"
  },
  cta: {
    title: "Elevate Your Nutrition Strategy",
    description:
      "Food is your foundation for healing and performance. With expert guidance and diagnostic insight, we tailor nutrition plans that align with your body's unique needs. Let your data guide your diet.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/weight-lean/diet-management/6.webp"
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

