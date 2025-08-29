import FAQSection from '@/app/faq/FAQSection';
import Cards from '@/components/cards';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import HairHero from '@/components/Hair/HairHero';
import Imagetext from '@/components/Imagetext';
import ProgramFit from '@/components/NewComponent/ProgramFit';
import WhatWeTrack from '@/components/weight-management/WhatWeTrack';
import React from 'react';
const pageData = {
  hero: {
    title: "Sexual Health",
    // subtitle: "Your chronological age is fixed, but your biological aging is something you can influence.",
    mainImage: "/images/ergogenic/ergogenic/sexual-health/2.webp", // update with actual image path
    circleImage: "/images/ergogenic/ergogenic/sexual-health/1.webp" // update with actual image path
  },
    cards: [
    {
    title: "Hormonal Optimization",
    description: [
      "Balancing testosterone, estrogen, or other key hormones to restore desire, function, and energy levels."
    ]
  },
 
  {
    title: "Peptide Therapies",
    description: [
      "Advanced protocols that support arousal, blood flow, and stress adaptation using non-invasive methods."
    ]
  },
  {
    title: "Circulatory & Vascular Support",
    description: [
      "Targeted treatments to improve pelvic blood flow, enhance sensation, and support erectile function."
    ]
  },
  {
    title: "Women's Intimacy Solutions",
    description: [
      "Personalized care for concerns like vaginal dryness, low arousal, and menopausal changes using clinically-backed therapies."
    ]
  },
  {
    title: "Counseling & Emotional Support",
    description: [
      "Access to supportive counseling for individuals or couples navigating psychological barriers to intimacy or desire."
    ]
  },
  ],
  whyTrupeak: {
  title: "Benefits of Sexual Health Support at Trupeak",
  // description:
  //   "Every step in your transformation is supported by targeted, clinically valid metrics. Our tracking system includes",
  points: [
    "Medical-grade hormone and metabolic evaluation",
    "Tailored plans for both men and women",
    "Safe, stigma-free space for open conversations",
    "Focus on both physical and emotional well-being",
    "Non-invasive, long-term solutions and not temporary fixes",
    "Doctor-supervised care with discreet, respectful communication"
  ]
},
}

function Page() {
  const { hero, cards, whyTrupeak, programGoals, dynamicSection, data,  cta } = pageData;
   const datas = {
    heading: "Is This Program Right for You?",
    description: "Our Sexual Health programs may benefit you if:",
    image: "/images/ergogenic/ergogenic/sexual-health/4.webp",
    items: [
      "You are experiencing low libido, difficulty with arousal, or performance concerns",
      "You have noticed changes in intimacy due to stress, hormones, or aging",
      "You are looking for a medical alternative to generic pills or over-the-counter solutions",
      "You want to explore sexual wellness in a confidential, non-judgmental setting",
      "You are recovering from illness or a hormonal condition impacting your sexual well-being",
    ],
    // note: "Every client undergoes a full consultation. Scalp imaging may be used to assess follicle activity.",
  };
  return (
    <div>
      <HairHero {...hero} />
      <Imagetext
              // title="Overview"
              description="At Trupeak, we treat sexual health as a key part of overall well-being. Whether you are facing changes in libido, arousal, or performance, our approach is discreet, respectful, and based on clinical evidence. We go beyond surface-level fixes to identify and treat the root causes like hormonal imbalance, circulatory issues, stress, or chronic illness, to restore confidence and connection.
Your care starts with a full evaluation of hormone levels, metabolic markers, vascular health, and lifestyle. Based on this, we create a personalized plan using therapies such as testosterone or estrogen balancing, peptide protocols, targeted supplements, and blood flow enhancement techniques. For women, we also address vaginal dryness, post-menopausal shifts, and low arousal with integrative solutions."
              image="/images/ergogenic/ergogenic/sexual-health/3.webp"
              reverse={true}
              bgColor=""
              textColor="text-two"
              radius="true"
            />
            <Cards data={pageData.cards} />
           <ProgramFit {...datas} />
           <WhatWeTrack {...whyTrupeak}/>
           <FAQSection />
                 <ContactSection />
                 <ContactForm />
    </div>
  );
}

export default Page;
