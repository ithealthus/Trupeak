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
    title: "Genetic Mapping",
    subtitle: "Your DNA is not your destiny, but it is your blueprint.",
    mainImage: "/images/immunity-long/genetic-mapping/2.webp", // replace with actual path
    circleImage: "/images/immunity-long/genetic-mapping/1.webp" // replace with actual path
  },
  imageText: {
    description:
      "Genetic mapping is a medical test that shows how your genes may affect your metabolism, immune system, ability to remove toxins, and how you age. By analyzing hundreds of clinically relevant gene variants, we help you understand how your body is built to function and where strategic intervention can change the trajectory of your health. Whether you're prone to inflammation, poor nutrient absorption, hormonal imbalance, or oxidative stress, we connect the dots between your genetics and your wellness potential.",
    image: "/images/immunity-long/genetic-mapping/3.webp", // replace with actual path
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  analyzeData: {
    title: "What We Analyse:",
    subtitle:
      "Our comprehensive panel covers genetic variants that influence key pathways for health, longevity, and disease prevention.",
    items: [
      {
        img: "/images/immunity-long/genetic-mapping/4.webp",
        title: "Nutrigenomic & Metabolic Pathways",
        desc: "MTHFR, COMT, CYP450, and mitochondrial efficiency markers (SIRT1, FOXO3)"
      },
      {
        img: "/images/immunity-long/genetic-mapping/5.webp",
        title: "Inflammation & Autoimmune Risk",
        desc: "IL-6, TNF, HLA variants"
      },
      {
        img: "/images/immunity-long/genetic-mapping/6.webp",
        title: "Cardiometabolic Risk",
        desc: "APOE, FTO, LPL"
      },
      {
        img: "/images/immunity-long/genetic-mapping/7.webp",
        title: "Sleep & Circadian Genes",
        desc: "CLOCK, PER2"
      }
    ]
  },
  programGoals: {
    title: "Why It Matters",
    description:
      "Knowing your genetic risks allows you to make proactive, personalized lifestyle changes before symptoms arise. It informs everything from how you detox, respond to stress, absorb vitamin D, metabolize caffeine, or tolerate gluten. When mapped correctly, your DNA becomes a powerful ally, not a limitation.",
    image: "/images/immunity-long/genetic-mapping/8.webp" // replace with actual path
  },
  dynamicSection: {
    title: "Is This For You?",
    subtitle: "This service is ideal if you:",
    backgroundColor: "#0D1B33",
    textColor: "#FFFFFF",
    cardBgColor: "#E8D09A",
    columns: 4,
    items: [
      { type: "text", title: "You have a family history of chronic illness, heart disease, or cancer." },
      { type: "text", title: "You’ve struggled with unexplained fatigue, weight gain, or mood instability." },
      { type: "text", title: "You want to personalize your supplements, hormone therapy, or fitness routine." },
      { type: "text", title: "You seek long-term disease prevention rooted in science." },
      { type: "image", image: "/images/immunity-long/genetic-mapping/9.webp" },
      { type: "image", image: "/images/immunity-long/genetic-mapping/10.webp" }
    ]
  },
  data: {
    title: "What You Receive:",
    subtitle:
      "A personalized genetic blueprint, actionable recommendations, and clinical guidance tailored to your unique DNA.",
    items: [
      "A personalized genetic report curated by our functional medicine team",
      "Targeted nutritional, hormonal, and lifestyle interventions based on your results",
      "Ongoing clinical support to align your genes with your goals",
      "Transform raw DNA data into actionable wellness insights"
    ]
  },
  cta: {
    title: "Book Your Genetic Mapping Session",
    description:
      "Transform your raw DNA data into actionable wellness insights. Schedule your genetic mapping session at Trupeak™ and unlock your health potential.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/immunity-long/genetic-mapping/11.webp" // replace with actual path
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