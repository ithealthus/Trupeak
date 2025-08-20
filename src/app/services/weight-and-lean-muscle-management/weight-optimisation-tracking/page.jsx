import React from 'react';
import Hero from '@/components/regenerative-therapies/Hero';
import Imagetext from '@/components/Imagetext';
import MonitoringSection from '@/components/weight-management/MonitoringSection';
import WhatWeTrack from '@/components/weight-management/WhatWeTrack';
import WhatWeOffer from '@/components/weight-management/WhatWeOffer';
import WhyTrupeakBeauty from '../../beauty-aesthetics/WhyTrupeakBeauty';
import InfoSection from '@/components/regenerative-therapies/WhoThisIsForSection';
import InfoBanner from '@/components/regenerative-therapies/InfoBanner';
import CtaSection from '@/components/regenerative-therapies/CtaSection';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';

const pageData = {
  hero: {
    title: "Weight Optimisation Tracking",
    subtitle: "Track what matters. Adjust what works. Sustain long-term results.",
   mainImage: "/images/regenerative-therapies/iv-theraphy/2.webp",
    circleImage: "/images/regenerative-therapies/iv-theraphy/1.webp"
  },
  imageText: {
    description: "At Trupeak, weight management isn’t about rapid loss or guesswork. It’s a measured, data-informed process rooted in your unique metabolic profile. Our Weight Optimization Tracking system monitors body composition changes with clinical precision, offering you continuous insight into fat reduction, lean muscle preservation, and metabolic trends that reflect real progress.This program is designed for individuals who seek sustainable weight optimization under the guidance of medical experts. Whether your goal is fat loss, metabolic control, or lean body mass improvement, our structured tracking process ensures your plan adapts as your body evolves.",
    image: "/images/regenerative-therapies/iv-theraphy/2.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  monitoring: {
    title: "Why Monitoring Matters",
    description:
      "Weight loss without context can be misleading. Losing muscle during dieting can slow metabolism and impair strength. Our goal is metabolic reprogramming, not short-term dieting. With regular tracking:",
    image: "/images/regenerative-therapies/iv-theraphy/3.webp", // Add the correct image path
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
    description:"Every step in your transformation is supported by targeted, clinically valid metrics. Our tracking system include",
    points: [
      "Comprehensive tracking of what truly matters",
      "Evidence-based adjustments for results",
      "1:1 coaching and digital monitoring",
      "Integrated support for lifestyle, nutrition, and fitness",
    ],
    image: "/images/regenerative-therapies/iv-theraphy/3.webp"
  },
    whatWeOffer: {
    title: "What We Offer",
    description: "Work",
    image: "/images/regenerative-therapies/iv-theraphy/3.webp",
    points: [
      { title: "Functional Medicine Insights", description: "..." },
      { title: "MuscleSound Analysis", description: "..." },
      { title: "Sleep Cycle Assessments", description: "..." },
      { title: "Precision Nutrition Counselling", description: "..." },
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
    bgColor: "#E6C98C",
    titleColor: "#2BBFA7",
    cardBgColor: "#0D1B33"
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
      image: "/images/regenerative-therapies/weight-tracking/5.webp",
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
      image: "/images/regenerative-therapies/weight-tracking/6.webp",
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
    backgroundImage: "/images/regenerative-therapies/weight-tracking/7.webp"
  }
};

const Page = () => {
  const { hero, imageText, monitoring,  whyTrupeak, whatWeOffer, infoSection, infoBanners, cta } = pageData;

  return (
    <>
      <Hero {...hero} />
      <Imagetext {...imageText} />
      <MonitoringSection {...monitoring}/>
      <WhatWeTrack {...whyTrupeak}/>
      <WhatWeOffer {...whatWeOffer}/>
     
      
      <InfoSection
        title={infoSection.title}
        description={infoSection.description}
        items={infoSection.items}
        bgColor={infoSection.bgColor}
        titleColor={infoSection.titleColor}
        cardBgColor={infoSection.cardBgColor}
      />

      {infoBanners.map((banner, index) => (
        <InfoBanner key={index} {...banner} />
      ))}

      <CtaSection {...cta} />
      <ContactSection />
      <ContactForm />
    </>
  );
};

export default Page;

