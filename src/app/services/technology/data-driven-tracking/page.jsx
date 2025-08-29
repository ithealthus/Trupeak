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
    title: "Data-Driven and Measurable Tracking ",
    subtitle: "Where precision meets accountability",
    mainImage: "/images/technology/data-driven-and-measurable-tracking/2.webp",
    circleImage: "/images/technology/data-driven-and-measurable-tracking/1.webp"
  },
  cardsData : [
  {
    title: "",
    description: "Structured clinical markers to monitor your body’s response over time"
  },
  {
    title: "",
    description: "Patterns in sleep, mood, energy, inflammation, and biomarker levels"
  },
  {
    title: "",
    description: "Objective, evidence-based data rather than guesswork or casual journaling"
  },
  {
    title: "",
    description: "Comparative analysis of results to track progress and spot early warning signs"
  },
  {
    title: "",
    description: "Personalised tracking metrics tailored to your treatment plan and health goals"
  }
],
  approach: {
    title: "Why Our Approach Works",
    image: "/images/technology/data-driven-and-measurable-tracking/4.webp", // replace with your image path
    description:
      "We review progress regularly, using your data to identify improvements, fine-tune treatments, and track how your body adapts. Early tracking enables timely decisions, which supports better and longer-lasting results."
  }
};






const Page = () => {
  const { hero, imageText, analyzeData, dynamicSection, data,  cta } = pageData;

  return (
    <>
      <Hero {...hero} />
      <ProgramGoals1  
        description="At Trupeak, we track more than just symptoms. We measure how your body responds at every stage of care using structured clinical markers and ongoing observation. This allows us to adapt your plan and keep you moving toward your health goals."
        image="/images/technology/data-driven-and-measurable-tracking/3.webp"
        reverse={true}
        sectionBg="bg-white"
        bgColor="bg-one"
        textColor="text-black"
      />
      <Cards data={pageData.cardsData} />
      <ApproachSection {...pageData.approach} />
      <ResultsSection
      title="The Results?"
      imageSrc="/images/technology/data-driven-and-measurable-tracking/5.webp" // Replace with your image path
      texts={[
        "You receive specific instructions on what to monitor and when to share updates, ensuring care stays aligned with your treatment goals.",
        "This builds accountability, supports follow-through, and gives a clear, transparent view of progress",
      ]}
    />
      <ContactSection />
      <ContactForm />
      
    </>
  );
};
export default Page;