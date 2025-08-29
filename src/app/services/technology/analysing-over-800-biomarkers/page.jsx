import React from 'react';
import Hero from '@/components/regenerative-therapies/Hero';

import ProgramGoals1 from '@/components/technology/ProgramGoals1';
import Cards from '@/components/cards';
import ApproachSection from '@/components/technology/ApproachSection';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import ResultsSection from '@/components/technology/ResultsSection';
const pageData = {
  hero: {
    title: "Analyzing Over 800 Biomarkers",
    subtitle: "Where depth meets detail",
    mainImage: "/images/technology/analyzing-over-800-biomarkers/2.webp",
    circleImage: "/images/technology/analyzing-over-800-biomarkers/1.webp"
  },
  cardsData : [
  {
    title: "",
    description: "Over 800 health markers across all major body systems"
  },
  {
    title: "",
    description: "Essential markers covering energy levels, inflammatory status, hormonal regulation, immune strength, nutrient sufficiency, and vital organ health"
  },
  {
    title: "",
    description: "In-depth diagnostic testing that surpasses conventional lab panels to provide a more comprehensive understanding of your health"
  },
  {
    title: "",
    description: "Ongoing comparison of test results over time to reveal patterns, progress, and areas needing attention"
  },
  {
    title: "",
    description: "Custom-designed test panels aligned with your specific health priorities and objectives"
  }
],
  approach: {
    title: "Why It Matters",
    image: "/images/technology/analyzing-over-800-biomarkers/4.webp", // replace with your image path
    description:
      "By detecting small imbalances early, we can address them before they turn into symptoms. Our approach reveals underlying issues such as elevated stress hormones or poor nutrient absorption, providing the foundation for a truly personalised care plan from the start."
  }
};






const Page = () => {
  const { hero, imageText, analyzeData, dynamicSection, data,  cta } = pageData;

  return (
    <>
      <Hero {...hero} />
      <ProgramGoals1  
        description="At Trupeak, we go far beyond standard testing. We measure more than 800 health markers across all major body systems to create a complete picture of your health from day one."
        image="/images/technology/analyzing-over-800-biomarkers/3.webp"
        reverse={true}
        sectionBg="bg-white"
        bgColor="bg-one"
        textColor="text-black"
      />
      <Cards data={pageData.cardsData} />
      <ApproachSection {...pageData.approach} />
      <ResultsSection
      title="The Results?"
      imageSrc="/images/technology/analyzing-over-800-biomarkers/5.webp" // Replace with your image path
      texts={[
        "Every result is reviewed in context of your lifestyle, medical history, and goals, with a focus on patterns that track progress or reveal early warning signs.",
        "Care is guided by clear, evidence-driven insights that support recovery, resilience, and long-term balance, never assumptions.",
      ]}
    />
      <ContactSection />
      <ContactForm />
      
    </>
  );
};
export default Page;