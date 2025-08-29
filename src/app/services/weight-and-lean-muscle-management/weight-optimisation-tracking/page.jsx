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
    title: "Weight Optimisation Tracking",
    subtitle: "Track what matters. Adjust what works. Sustain long-term results.",
   mainImage: "/images/weight-lean/weight-optimisation-tracking/2.webp",
    circleImage: "/images/weight-lean/weight-optimisation-tracking/1.webp"
  },
  imageText: {
    description: "At Trupeak, weight management isn’t about rapid loss or guesswork. It’s a measured, data-informed process rooted in your unique metabolic profile. Our Weight Optimization Tracking system monitors body composition changes with clinical precision, offering you continuous insight into fat reduction, lean muscle preservation, and metabolic trends that reflect real progress.This program is designed for individuals who seek sustainable weight optimization under the guidance of medical experts. Whether your goal is fat loss, metabolic control, or lean body mass improvement, our structured tracking process ensures your plan adapts as your body evolves.",
    image: "/images/weight-lean/weight-optimisation-tracking/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  monitoring: {
    title: "Why Monitoring Matters",
    description:
      "Weight loss without context can be misleading. Losing muscle during dieting can slow metabolism and impair strength. Our goal is metabolic reprogramming, not short-term dieting. With regular tracking:",
    image: "/images/weight-lean/weight-optimisation-tracking/4.webp", // Add the correct image path
    pointsLeft: [
      "You preserve lean muscle mass",
      "You reduce the risk of Insulin Resistance and Inflammation"
    ],
    pointsRight: [
      "You improve the fat-to-muscle ratio",
      "You understand how sleep, hormones, and nutrition impact your outcomes"
    ],
    bgColor: "bg-white", // optional custom background
    cardColor: "bg-[#E8D09A]" // optional card color
  },
  
  
 whyTrupeak: {
  title: "What We Track",
  description:
    "Every step in your transformation is supported by targeted, clinically valid metrics. Our tracking system includes",
  points: [
    "Body Composition Monitoring through InBody970 scans",
    "Basal Metabolic Rate (BMR) Assessments to guide caloric intake",
    "Segmental Fat and Muscle Analysis to distinguish healthy change from muscle depletion",
    "Metabolic Trend Reporting based on Q-NRG testing (Using Indirect Calorimetry)",
    "Girth and Circumference measures are used when relevant for regional fat tracking"
  ]
},
    whatWeOffer: {
    title: "What We Offer",
    description: "At Trupeak, Weight Optimization Tracking is part of a comprehensive, science-backed care model that addresses the root drivers of metabolic change. Your personalized program may include:",
    image: "/images/weight-lean/weight-optimisation-tracking/5.webp",
    points: [
      { title: "Functional Medicine Insights", description: "To uncover hormonal, inflammatory, or lifestyle-related blocks to weight and metabolic regulation" },
      { title: "MuscleSound Analysis", description: "To assess muscle quality, intramuscular energy stores, and monitor lean mass preservation" },
      { title: "Sleep Cycle Assessments", description: "To identify circadian rhythm disruptions and support hormonal balance essential for fat metabolism" },
      { title: "Precision Nutrition Counselling", description: "Based on advanced diagnostic testing, to align your dietary strategy with your metabolic needs" },
    ]
},
  infoSection: {
  title: "Who This Is For",
  description: "Our weight optimisation tracking programs are ideal for anyone seeking measurable and sustainable results. Perfect for:",
  items: [
    { description: "Individuals aiming for fat loss or muscle gain" },
    { description: "People looking to maintain a healthy lifestyle" },
    { description: "Patients requiring metabolic health support" },
    { description: "Anyone seeking structured, evidence-based tracking" },
  ],
  bgColor: "#0D1B33",
  titleColor: "#FFFFFF",
  cardBgColor: "white"
},
benefitsData: {
  title: "Benefits of Weight Optimization Tracking",
  benefits: [
    {
      text: "Tracks fat loss and muscle preservation with clinical accuracy",
      bgColor: "bg-[#122644]",
    },
    {
      text: "Identifies metabolic slowdowns and hormonal barriers to progress",
      bgColor: "bg-[#E2C879]",
    },
    {
      text: "Allows real-time plan adjustments based on body composition trends",
      bgColor: "bg-[#122644]",
    },
    {
      text: "Supports sustainable, physician-guided weight management",
      bgColor: "bg-[#2C8C72]",
    },
  ],
  bgColor: "bg-white" // optional background color for the section
},

  infoBanners: [
    {
      title: "Benefits of Weight Optimisation at Trupeak",
      subtitle: "Core Focus",
      points: [
        "Achieve sustainable results",
        "Understand your metabolism",
        "Improve energy and performance",
        "Prevent weight regain",
        "Enhance long-term health outcomes",
      ],
      image: "/images/weight-lean/weight-optimisation-tracking/5.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: false
    },
    {
      subtitle: "Results",
      points: [
        "Improved body composition and strength",
        "Better energy levels",
        "Sustainable healthy lifestyle habits",
        "Reduced metabolic health risks",
      ],
      image: "/images/weight-lean/weight-optimisation-tracking/6.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: true
    }
  ],
  cta: {
    title: "Ready to optimise your weight and track real results?",
    description: "Trupeak’s personalised tracking program guides you every step of the way, helping you make informed adjustments and achieve your goals.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/weight-lean/weight-optimisation-tracking/6.webp"
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

