import React from 'react';
import Hero from '@/components/regenerative-therapies/Hero';
import Imagetext from '@/components/Imagetext';
import ProgramGoals from '@/components/ProgramGoals';
import DynamicSection from '@/components/immunity-and-longevity/DynamicSection';
import WhatYouReceive from '@/components/immunity-and-longevity/WhatYouReceive';
import AnalyzeSection from '@/components/immunity-and-longevity/WhatWeAnalyze';
import CtaSection from '@/components/regenerative-therapies/CtaSection';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';

const pageData = {
  hero: {
    title: "Biological Age Mapping",
    subtitle: "Your chronological age is fixed, but your biological aging is something you can influence.",
    mainImage: "/images/immunity-long/biological-age-mapping/2.webp", // update with actual image path
    circleImage: "/images/immunity-long/biological-age-mapping/1.webp" // update with actual image path
  },
  imageText: {
    description:
      "Biological Age Mapping evaluates how your body is aging on a cellular level, independent of your chronological age. By measuring DNA methylation, telomere length, mitochondrial function, and hormone regulation, we uncover the real pace of your internal aging and offer strategies to reverse it. At Trupeak, we combine advanced lab diagnostics with data-driven clinical analysis to identify early aging markers and create targeted plans to restore vitality and longevity.",
    image: "/images/immunity-long/biological-age-mapping/3.webp", // update with actual image path
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  analyzeData: {
    title: "What We Analyze:",
    subtitle:
      "We examine key biological aging markers to reveal your true physiological age and how to slow or reverse it.",
    items: [
      {
        img: "/images/immunity-long/biological-age-mapping/4.webp",
        title: "Epigenetic Age",
        desc: "DNA methylation patterns"
      },
      {
        img: "/images/immunity-long/biological-age-mapping/5.webp",
        title: "Cellular Aging",
        desc: "Telomere length"
      },
      {
        img: "/images/immunity-long/biological-age-mapping/6.webp",
        title: "Energy & Resilience",
        desc: "Mitochondrial function and oxidative stress"
      },
      {
        img: "/images/immunity-long/biological-age-mapping/7.webp",
        title: "Hormonal & Metabolic Health",
        desc: "Thyroid, cortisol, insulin, and sex hormones"
      }
    ]
  },
  programGoals: {
    title: "Why It Matters",
    description:
      "Aging is the #1 risk factor for chronic disease. Biological Age Mapping provides early insight into how your internal systems are performing and how to slow the decline. It empowers you to act now to protect energy, cognition, immunity, and metabolic health as you age.",
    image: "/images/immunity-long/biological-age-mapping/8.webp" // update with actual image path
  },
  dynamicSection: {
    title: "Is This For You?",
    subtitle: "This service is ideal if you:",
    backgroundColor: "#0D1B33",
    textColor: "#FFFFFF",
    cardBgColor: "#E8D09A",
    columns: 4,
    items: [
      { type: "text", title: "You want to take a proactive, scientific approach to aging" },
      { type: "text", title: "You have a family history of age-related disease (diabetes, dementia, heart disease)" },
      { type: "text", title: "You’re enrolled in a longevity or functional wellness program" },
      { type: "text", title: "You want to track how your lifestyle, fitness, or diet is affecting your biology" },
      { type: "image", image: "/images/immunity-long/biological-age-mapping/9.webp" },
      { type: "image", image: "/images/immunity-long/biological-age-mapping/10.webp" }
    ]
  },
  data: {
    title: "What You Receive:",
    subtitle:
      "A complete biological age assessment with strategies to slow or reverse aging and extend vitality.",
    items: [
      "A detailed biological age report interpreted by our clinical team",
      "A personalized plan for mitochondrial support, hormone balance, and anti-aging therapies",
      "Clinically tested strategies to slow or even reverse biological aging",
      "Ongoing support to measure, adapt, and optimize your long-term health"
    ]
  },
  cta: {
    title: "Book Your Biological Age Mapping Session",
    description:
      "Redefine what aging means for you. Schedule your Biological Age Mapping session at Trupeak™ and take control of your longevity.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/immunity-long/biological-age-mapping/11.webp" // update with actual image path
  }
};







const Page = () => {
  const { hero, imageText, analyzeData, programGoals, dynamicSection, data,  cta } = pageData;

  return (
    <>
      <Hero {...hero} />
      <Imagetext {...imageText} />
      <AnalyzeSection sectionData={analyzeData} />
      <ProgramGoals {...programGoals} />   {/* <- you forgot this earlier */}
      <DynamicSection
        title={dynamicSection.title}
        subtitle={dynamicSection.subtitle}
        items={dynamicSection.items}
        backgroundColor={dynamicSection.backgroundColor}
        textColor={dynamicSection.textColor}
      />
      <WhatYouReceive {...data} />
      <CtaSection {...cta} />
      <ContactSection />
      <ContactForm />
    </>
  );
};
export default Page;