import React from 'react';
import Hero from '@/components/regenerative-therapies/Hero';
import Imagetext from '@/components/Imagetext';
import ProgramGoals from '@/components/ProgramGoals';
import DynamicSection from '@/components/immunity-and-longevity/DynamicSection';
import WhatYouReceive from '@/components/immunity-and-longevity/WhatYouReceive';
import MonitoringSection from '@/components/weight-management/MonitoringSection';
import WhatWeTrack from '@/components/weight-management/WhatWeTrack';
import WhatWeOffer from '@/components/weight-management/WhatWeOffer';
import WhoThisIsFor from '@/components/weight-management/WhoThisIsFor';
import BenefitsSection from '@/components/weight-management/BenefitsSection';
import AnalyzeSection from '@/components/immunity-and-longevity/WhatWeAnalyze';
import CtaSection from '@/components/regenerative-therapies/CtaSection';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';

const pageData = {
  hero: {
    title: "Immune System Assessment & Analysis",
    subtitle: "Your immune system holds the key to both disease resistance and graceful aging.",
    mainImage: "/images/immunity-long/immune-system-assessment-analysis/2.webp",
    circleImage: "/images/immunity-long/immune-system-assessment-analysis/1.webp"
  },
  imageText: {
    description:
      "Immune evaluation goes beyond routine bloodwork. This in-depth assessment reveals how your immune system performs under stress, responds to infections, and manages chronic inflammation. It gives you a clear picture of your immune strengths, weaknesses, and where support is most needed.By testing a set of reliable clinical biomarkers, we assess how well your body detects threats, controls inflammation, and stays in immune balance. Whether you're facing frequent illnesses, slow healing, autoimmune issues, or aiming to strengthen your natural defenses, this evaluation reveals how your immune system is functioning and where improvement is possible.",
    image: "/images/immunity-long/immune-system-assessment-analysis/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  analyzeData :{
  title: "What We Analyze:",
  subtitle:
    "We assess key immune markers to reveal your body’s defense, inflammation response, and balance, highlighting areas needing support.",
  items: [
    {
      img: "/images/immunity-long/immune-system-assessment-analysis/4.webp",
      title: "Lymphocyte Subsets",
      desc: "CD4/CD8 T-cells, NK cells, B-cells activity",
    },
    {
      img: "/images/immunity-long/immune-system-assessment-analysis/5.webp",
      title: "Inflammatory Markers",
      desc: "CRP, IL-6, TNF-alpha",
    },
    {
      img: "/images/immunity-long/immune-system-assessment-analysis/6.webp",
      title: "Immunoglobulin Levels",
      desc: "IgG, IgA, IgM",
    },
    {
      img: "/images/immunity-long/immune-system-assessment-analysis/7.webp",
      title: "T-cell exhaustion markers",
      desc: "and cytokine balance",
    },
  ],
},
programGoals: {
    title: "Why It Matters",
    description: `Immune function impacts everything from healing and vaccine response to cancer risk and daily energy. Chronic stress, poor nutrition, and toxin exposure silently erode immunity over time. Catching imbalances early allows for smarter, preventive care.`,
    image: "/images/immunity-long/immune-system-assessment-analysis/8.webp",
  },
   dynamicSection: {
  title: "Is This For You?",
  subtitle: "This service is ideal if you:",
  backgroundColor: "#0D1B33",
  textColor: "#FFFFFF",
  cardBgColor: "#E8D09A",
  columns: 4,
  items: [
    { type: "text", title: "Preparing for surgery, pregnancy, or physical stress" },
    { type: "text", title: "Seeking long-term protection from chronic inflammation" },
    { type: "text", title: "You fall sick often, recover slowly, or feel chronically fatigued" },
    { type: "text", title: "Frequent use of antibiotics, steroids, or immune drugs." },
    { type: "image", image: "/images/immunity-long/immune-system-assessment-analysis/9.webp" },
    { type: "image", image: "/images/immunity-long/immune-system-assessment-analysis/10.webp" }
  ]
},
data : {
  title: "What You Receive:",
  subtitle:
    "A full immune review, personalized care plan, and ongoing testing with expert clinical support.",
  items: [
    "A full immune health review by our internal medicine team",
    "A personalized care plan (supplements, IVs, detox, gut support)",
    "Follow-up testing and clinical monitoring",
    "Placeholder content, The options were 3 only."
  ]
},
  
  cta: {
    title: "Book Your Q-NRG Assessment",
    description:
      "Schedule your Q-NRG Indirect Calorimetry session at Trupeak™ to receive a precision-based metabolic profile. Let every calorie work without going against your health goals.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/immunity-long/immune-system-assessment-analysis/11.webp"
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