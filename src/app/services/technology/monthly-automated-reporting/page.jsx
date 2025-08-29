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
    title: "Monthly Automated Reporting",
    subtitle: "Where consistency meets clarity",
    mainImage: "/images/technology/monthly-automated-reporting/2.webp",
    circleImage: "/images/technology/monthly-automated-reporting/1.webp"
  },
  cardsData : [
  {
    title: "",
    description: "A detailed monthly overview of your health and progress"
  },
  {
    title: "",
    description: "Up-to-date biomarker trends, therapy adjustments, and clinical notes"
  },
  {
    title: "",
    description: "A clear snapshot of your current health and changes over the past month"
  },
  {
    title: "",
    description: "Observations covering inflammation, metabolism, nutrient absorption, organ health, and other key metrics"
  },
  {
    title: "",
    description: "Data presented in a clear, easy-to-understand format without overwhelming charts or unprocessed numbers"
  },
],
  approach: {
    title: "Why Our Approach Works",
    image: "/images/technology/monthly-automated-reporting/4.webp", // replace with your image path
    description:
      "Every report is reviewed by your care team before being shared, ensuring accuracy and relevance. We track improvements, flag early signs of imbalance, and provide timely insights to support better decision-making and accountability."
  }
};






const Page = () => {
  const { hero, imageText, analyzeData, dynamicSection, data,  cta } = pageData;

  return (
    <>
      <Hero {...hero} />
      <ProgramGoals1  
        description="At Trupeak, we believe tracking your progress should be as simple as it is informative. Each month, you receive a detailed health tracking report that shows exactly how your body is responding to your personalised treatment plan."
        image="/images/technology/monthly-automated-reporting/3.webp"
        reverse={true}
        sectionBg="bg-white"
        bgColor="bg-one"
        textColor="text-black"
      />
      <Cards data={pageData.cardsData} />
      <ApproachSection {...pageData.approach} />
      <ResultsSection
      title="The Results?"
      imageSrc="/images/technology/monthly-automated-reporting/5.webp" // Replace with your image path
      texts={[
        "Patients with complex or long-term goals have a clear structure and reassurance that their care is on track.",
        "Our reporting maintains transparency, measures outcomes, and keeps your treatment aligned with your evolving health needs, making your results undeniable.",
      ]}
    />
      <ContactSection />
      <ContactForm />
      
    </>
  );
};
export default Page;