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
    title: "Gut Microbiome Mapping",
    subtitle: "Your gut is more than digestion; it’s your second brain and your immune powerhouse.",
    mainImage: "/images/immunity-long/gut-microbiome-mapping/2.webp", // replace with actual path
    circleImage: "/images/immunity-long/gut-microbiome-mapping/1.webp" // replace with actual path
  },
  imageText: {
    description:
      "Gut Microbiome Mapping analyzes the microorganisms in your digestive tract to reveal their impact on immunity, inflammation, metabolism, and mood. Using advanced sequencing, we detect imbalances that can cause fatigue, bloating, brain fog, skin issues, and food intolerances, even without obvious digestive symptoms.",
    image: "/images/immunity-long/gut-microbiome-mapping/3.webp", // replace with actual path
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  analyzeData: {
    title: "What We Analyze:",
    subtitle:
      "We look beyond symptoms to assess microbial diversity, pathogens, and gut function for whole-body wellness.",
    items: [
      {
        img: "/images/immunity-long/gut-microbiome-mapping/4.webp",
        title: "Microbial Diversity & Balance",
        desc: "Overall gut bacterial composition"
      },
      {
        img: "/images/immunity-long/gut-microbiome-mapping/5.webp",
        title: "Pathogens & Overgrowth",
        desc: "Harmful bacteria or fungi"
      },
      {
        img: "/images/immunity-long/gut-microbiome-mapping/6.webp",
        title: "Digestive Function",
        desc: "Short-chain fatty acid production and enzyme activity"
      },
      {
        img: "/images/immunity-long/gut-microbiome-mapping/7.webp",
        title: "Gut Health & Systemic Impact",
        desc: "Gut lining integrity, inflammation risk, and beneficial bacteria linked to mood and metabolism"
      }
    ]
  },
  programGoals: {
    title: "Why It Matters",
    description:
      "Over 70 percent of the immune system is located in the gut. Identifying the microbial composition allows our clinicians to develop protocols that reduce inflammation, improve nutrient absorption, support mood regulation, and strengthen immune resilience. It is a foundational step in building long-term health and preventing chronic disease.",
    image: "/images/immunity-long/gut-microbiome-mapping/8.webp" // replace with actual path
  },
  dynamicSection: {
    title: "Is This Right for You?",
    subtitle: "This service is ideal if you:",
    backgroundColor: "#0D1B33",
    textColor: "#FFFFFF",
    cardBgColor: "#E8D09A",
    columns: 4,
    items: [
      { type: "text", title: "You experience unexplained digestive discomfort, bloating, or irregularity." },
      { type: "text", title: "You have a history of frequent antibiotic use or autoimmune concerns." },
      { type: "text", title: "You are dealing with skin issues, fatigue, or frequent illness." },
      { type: "text", title: "You want to improve your metabolic health or emotional well-being from the root." },
      { type: "image", image: "/images/immunity-long/gut-microbiome-mapping/9.webp" },
      { type: "image", image: "/images/immunity-long/gut-microbiome-mapping/10.webp" }
    ]
  },
  data: {
    title: "What You Receive:",
    subtitle:
      "A complete analysis of your gut health with actionable steps for restoring balance and resilience.",
    items: [
      "A complete microbiome report with functional medicine insights",
      "A personalized plan including food, supplements, and lifestyle guidance",
      "Recommendations for probiotics, prebiotics, and natural antimicrobials",
      "Ongoing clinical support to rebalance and restore your gut"
    ]
  },
  cta: {
    title: "Book Your Gut Microbiome Mapping Session",
    description:
      "Decode your gut. Rebuild your health. Schedule your microbiome mapping session at Trupeak™ for a personalized roadmap to optimal health.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/immunity-long/gut-microbiome-mapping/11.webp" // replace with actual path
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