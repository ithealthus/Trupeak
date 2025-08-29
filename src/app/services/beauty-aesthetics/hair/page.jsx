import Cards from '@/components/cards';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import HairHero from '@/components/Hair/HairHero';
import Imagetext from '@/components/Imagetext';
import BenefitsSection from '@/components/NewComponent/BenefitsSection';
import FAQSection from '@/components/NewComponent/FAQSection';
import ProcedureSummary from '@/components/NewComponent/ProcedureSummary';
import ProgramFit from '@/components/NewComponent/ProgramFit';
import React from 'react';

const procedureData = {
  heading: "Procedure Summary",
  procedures: [
    {
      title: "PRP Hair Therapy",
      description: "About 45 minutes per session. No downtime.",
    },
    {
      title: "FUE Hair Transplant",
      description: "Outpatient Procedure. Most people resume basic activity in 2–3 days.",
    },
  ],
  bottomText: [
    "Are you seeking the best hair treatment in Mumbai that integrates science, care, and observable outcomes?",
    "Truepeak offers hair restoration solutions rooted in medical precision and regenerative care.",
  ],
};
const pageData = {
  hero: {
    title: "Hair Restoration",
    // subtitle: "Your chronological age is fixed, but your biological aging is something you can influence.",
    mainImage: "/images/beauty/hair/2.webp", // update with actual image path
    circleImage: "/images/beauty/hair/1.webp" // update with actual image path
  },
    cards: [
    {
    title: "PRP Hair Therapy",
    description: [
      "Platelet-rich plasma from your blood is injected into the scalp to support hair growth and reduce shedding. Best for early-stage thinning and as support after a hair transplant."
    ]
  },
 
  {
    title: "FUE Hair Transplant",
    description: [
      "Follicular Unit Extraction (FUE) moves healthy hair follicles from one area to another to restore density. This minimally invasive procedure has short downtime and natural-looking results."
    ]
  },
  {
    title: "Scalp Mesotherapy & Laser Stimulation",
    description: [
      "Targeted microinjections and light therapy nourish the scalp, improve circulation, and help strengthen roots. Often combined with PRP or transplant for added benefit."
    ]
  },
  // {
  //   title: "Monthly Health Summary",
  //   description: [
  //     "Patients receive a detailed monthly update highlighting what’s improved, what needs work, and what’s next. "
  //   ]
  // },
  
  ],
}

function Page() {
   const { hero, cards, analyzeData, programGoals, dynamicSection, data,  cta } = pageData;
   const datas = {
    heading: "Is This Program Right for You?",
    description: "This may be a good fit if:",
    image: "/images/beauty/hair/4.webp",
    items: [
      "Noticing early hair thinning or a receding hairline",
      "Experiencing pattern baldness and prefer not to use long-term medications",
      "Dealing with small bald patches that may benefit from a transplant",
      "Recovering from a previous transplant and want to improve graft retention",
      "Shedding due to stress, hormones, or nutritional imbalance",
    ],
    note: "Every client undergoes a full consultation. Scalp imaging may be used to assess follicle activity.",
  };
   const benefitsSection = {
    heading: "Benefits of Hair Restoration at Trupeak",
    items: [
      "Medically designed protocols tailored to your needs",
      "Minimal downtime for most treatments",
      "Long-term improvement in scalp health and hair density",
      "Private and supportive treatment setting",
      "Nutrition and hormone support available as needed",
    ],
    image: "/images/beauty/hair/5.webp", // replace with actual image path
  };
  return (
    <div>
      <HairHero {...hero} />
      <Imagetext
              title="Overview"
              description="Hair loss affects more than appearance; it can impact confidence, identity, and daily life. At Trupeak, we offer proven treatments that focus on scalp health, hair regrowth, and long-term results.
Each plan starts with a full medical consultation to evaluate your hair loss pattern, scalp condition, and overall health. Based on your needs, we may recommend non-surgical therapies like PRP, mesotherapy, or surgical options like FUE transplants. 
Every treatment is handled with discretion and care, using safe, medically guided techniques."
              image="/images/beauty/hair/3.webp"
              reverse={true}
              bgColor=""
              textColor="text-two"
              radius="true"
            />
            <Cards data={pageData.cards} />
           <ProgramFit {...datas} />
           <BenefitsSection {...benefitsSection} />
           <FAQSection />
           <ProcedureSummary {...procedureData} />
      <ContactSection />
      <ContactForm />
    </div>
  );
}

export default Page;
