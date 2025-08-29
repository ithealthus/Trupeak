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
    title: "Functional Medicine Consultation",
    subtitle: "Uncover what’s beneath the surface. Personalized health starts with precision insight.",
    mainImage: "/images/weight-lean/functional-medicine/1.webp",
    circleImage: "/images/weight-lean/functional-medicine/2.webp"
  },
  imageText: {
    description: "At TruPeak, lasting transformation starts with uncovering the root causes of symptoms like weight gain, fatigue, poor recovery, and inflammation. Our Functional Medicine Consultation uses clinical data and system-level insights to identify hormonal, gut, and immune imbalances, providing a personalized, science-driven roadmap for optimal health.",
    image: "/images/weight-lean/functional-medicine/2.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  monitoring: {
    title: "Why Functional Medicine Matters",
    description:
      "Treating symptoms without addressing their root cause often leads to temporary relief. At Trupeak, we focus on system-level insight. With functional diagnostics and deep clinical evaluation:",
    image: "/images/weight-lean/functional-medicine/3.webp",
    pointsLeft: [
      "You uncover the root causes behind symptoms like fatigue, weight gain, and inflammation",
      "You identify hormonal, gut, and immune imbalances early before they progress",
      
    ],
    pointsRight: [
      "You gain a complete picture of how stress, detox pathways, and lifestyle interact",
      "This approach helps us build a targeted, long-term plan that restores health from the inside out."
    ],
    bgColor: "bg-white",
    cardColor: "bg-[#E8D09A]"
  },
  whyTrupeak: {
    title: "What We Track",
    description:
      "Your Functional Medicine journey is guided by continuous, data-driven insights. At Trupeak, we track:",
    points: [
      "Symptom patterns and biomarker trends via the Digital Health Dashboard",
      "Hormone levels, inflammation markers, and micronutrient status",
      "Lab result changes and diagnostic insights",
      "Progress reports from your functional physician",
      "Nutrition, supplement, and protocol response",
      "Lifestyle factors like sleep, stress, and resilience",
      "This tracking allows for real-time care adjustments and precision plans tailored to your biology."
    ]
  },
  whatWeOffer: {
    title: "What We Offer",
    description: "At TruPeak, our Personalized Functional Medicine Assessment identifies root causes of imbalance and guides tailored interventions for optimal health.",
    image: "/images/weight-lean/functional-medicine/3.webp",
    points: [
      { title: "Hormonal & Metabolic Review", description: "We assess thyroid, cortisol, estrogen/testosterone levels along with chronic condition profiles." },
      { title: "Inflammation & Immunity", description: "We evaluate gut health, food sensitivities, and autoimmune patterns." },
      { title: "Lifestyle & Resilience", description: "We review sleep quality and stress exposure to support overall resilience." },
      { title: "Nutrition & Detox", description: "We identify micronutrient gaps and evaluate digestive and detoxification function." }
    ]
  },
  infoSection: {
    title: "Who This Is For",
    description: "This consultation is ideal for individuals who:",
    items: [
      { description: "Struggle with weight gain despite diet and exercise" },
      { description: "Experience fatigue, brain fog, or chronic inflammation" },
      { description: "Have been diagnosed with PCOS, thyroid dysfunction, or metabolic syndrome" },
      { description: "Are navigating menopause, perimenopause, or andropause" },
      { description: "Want to optimize energy, digestion, hormones, and sleep" },
      { description: "Prefer a personalized, whole-systems health approach" }
    ],
    bgColor: "#0D1B33",
    titleColor: "#FFFFFF",
    cardBgColor: "white"
  },
  benefitsData: {
    title: "Recommended Diagnostic Testing",
    benefits: [
      { text: "Comprehensive blood panels (thyroid, insulin, inflammatory markers)", bgColor: "bg-[#122644]" },
      { text: "Stool microbiome analysis", bgColor: "bg-[#E2C879]" },
      { text: "Food intolerance and allergy screening", bgColor: "bg-[#122644]" },
      { text: "Adrenal function and cortisol rhythm testing", bgColor: "bg-[#2C8C72]" },
     
    ],
    bgColor: "bg-white"
  },

  cta: {
    title: "Ready to take the next step?",
    description: "Whether you're navigating unexplained symptoms or want to stay ahead of future issues, a Functional Medicine Consultation at Trupeak gives you the clarity and control to take charge of your health.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/weight-lean/functional-medicine/5.webp"
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

