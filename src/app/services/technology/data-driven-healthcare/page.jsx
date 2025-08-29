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
    title: "Data-Driven Healthcare",
    subtitle: "Where science meets personalisation.",
    mainImage: "/images/technology/data-driven-healthcare/2.webp",
    circleImage: "/images/technology/data-driven-healthcare/1.webp"
  },
  cardsData : [
  {
    title: "",
    description: "Stamina, fatigue patterns, and overall vitality"
  },
  {
    title: "",
    description: "Evaluation of inflammatory markers that influence recovery and long-term health"
  },
  {
    title: "",
    description: "Analysis of hormone production, balance, and performance"
  }
],
  approach: {
    title: "Why Our Approach Works",
    image: "/images/technology/data-driven-healthcare/4.webp", // replace with your image path
    description:
      "Rather than applying a one-size-fits-all treatment, we build a framework based on what your body needs. This approach helps uncover root causes, prioritise therapies that match your biology, and eliminate unnecessary interventions. Whether you are starting hormone therapy, undergoing rehabilitation, managing a chronic condition, or working toward metabolic recovery, your care is guided by lab-verified evidence."
  }
};






const Page = () => {
  const { hero, imageText, analyzeData, dynamicSection, data,  cta } = pageData;

  return (
    <>
      <Hero {...hero} />
      <ProgramGoals1  
        description="At Trupeak, every treatment begins with one essential element- facts, We don’t rely on assumptions or generalised templates. Instead, we use hospital-grade diagnostics to understand your body at a deeper level before creating your care plan."
        image="/images/technology/data-driven-healthcare/3.webp"
        reverse={true}
        sectionBg="bg-white"
        bgColor="bg-one"
        textColor="text-black"
      />
      <Cards data={pageData.cardsData} />
      <ApproachSection {...pageData.approach} />
      <ResultsSection
      title="The Results?"
      imageSrc="/images/technology/data-driven-healthcare/5.webp" // Replace with your image path
      texts={[
        "Data-driven care reduces guesswork, shortens recovery time, and helps patients achieve clearer, longer-lasting results. At every stage, you receive care that reflects your current state of health, not just your symptoms.",
        "Your body tells a story, and we make sure to listen, measure, and respond with care that is grounded in science, refined by clinical expertise, and personalized for long-term impact.",
      ]}
    />
      <ContactSection />
      <ContactForm />
      
    </>
  );
};
export default Page;