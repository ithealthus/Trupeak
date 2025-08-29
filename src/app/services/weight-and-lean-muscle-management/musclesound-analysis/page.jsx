import React from 'react';
import Hero from '@/components/regenerative-therapies/Hero';
import Imagetext from '@/components/Imagetext';
import MonitoringSection from '@/components/weight-management/MonitoringSection';
import WhatWeTrack from '@/components/weight-management/WhatWeTrack';
import WhatWeOffer from '@/components/weight-management/WhatWeOffer';
import WhoThisIsFor from '@/components/weight-management/WhoThisIsFor';
import BenefitsSection from '@/components/weight-management/BenefitsSection';

import CtaSection from '@/components/regenerative-therapies/CtaSection';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';

const pageData = {
  hero: {
    title: "MuscleSound Analysis (Muscle Ultrasound)",
    subtitle: "Visualize muscle quality, not just quantity. Optimize recovery, strength, and performance from the inside out.",
    mainImage: "/images/weight-lean/muscle-sound/1.webp",
    circleImage: "/images/weight-lean/muscle-sound/2.webp"
  },
  imageText: {
    description: "At Trupeak, our MuscleSound Analysis goes beyond traditional body composition tools to assess muscle health at a cellular level. Whether you're recovering from illness, managing fatigue, or optimizing your performance, this technology offers precise insights into how your muscles are functioning and healing.",
    image: "/images/weight-lean/muscle-sound/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  monitoring: {
    title: "Why Muscle Health Matters",
    description:
      "Your muscle quality affects much more than strength or appearance. Low muscle density is linked to:",
    image: "/images/weight-lean/muscle-sound/4.webp",
    pointsLeft: [
      "Slower metabolism and weight gain",
      "Insulin resistance and poor glucose control",
      "Reduced physical performance and mobility"
    ],
    pointsRight: [
      "Increased risk of falls, fractures, and chronic fatigue",
      "Suboptimal recovery from injury or illness",
      "Even with a healthy BMI or weight, you could have poor muscle density."
    ],
    bgColor: "bg-white",
    cardColor: "bg-[#E8D09A]"
  },
  whyTrupeak: {
    title: "What Is MuscleSound Analysis?",
    description:
      "MuscleSound is a cutting-edge ultrasound technology that measures:",
    points: [
      "Muscle thickness and density – helps assess muscle strength and detect early signs of muscle loss.",
      "Intramuscular glycogen storage (an indicator of muscle fuel) – shows how well your muscles are fueled and ready for performance or recovery.",
      "Areas of atrophy, inflammation, or asymmetry – identifies weak or imbalanced regions to guide targeted therapy.",
      "Recovery readiness following physical exertion or illness – assesses how well your muscles are healing after stress or injury.",
      "This quick, radiation-free scan uses sound waves to image your muscles. Based on the results, our team offers personalised advice on training, nutrition, recovery, and reversing muscle loss."
    ]
  },
  whatWeOffer: {
    title: "Who This Is For",
    description: "MuscleSound Analysis is ideal for:",
    image: "/images/weight-lean/muscle-sound/5.webp",
    points: [
      { title: "Individuals over 40 years of age", description: "Facing muscle loss or slowed metabolism." },
      { title: "Athletes", description: "Tracking performance and recovery baselines." },
      { title: "Patients", description: "Recovering from injury, surgery, or chronic illness." },
      { title: "Individuals with unexplained fatigue", description: "Experiencing weakness or functional decline." },
      { title: "Fitness-conscious individuals", description: "Looking to optimize gains and longevity." }
    ]
  },
  infoSection: {
    title: "Benefits of MuscleSound Analysis",
    description: "This technology provides actionable insights that help you build resilience and optimize health:",
    items: [
      { description: "Detects hidden muscle loss before it affects your health" },
      { description: "Supports faster recovery with personalised exercise and nutrition" },
      { description: "Monitors muscle healing after illness or injury" },
      { description: "Enhances strength, mobility, and long-term performance" }
    ],
    bgColor: "#0D1B33",
    titleColor: "#FFFFFF",
    cardBgColor: "white"
  },
  benefitsData: {
    title: "Key Advantages",
    benefits: [
      { text: "Early detection of sarcopenia and muscle loss", bgColor: "bg-[#122644]" },
      { text: "Guides precise recovery and rehabilitation strategies", bgColor: "bg-[#E2C879]" },
      { text: "Optimizes training outcomes and prevents overtraining", bgColor: "bg-[#122644]" },
      { text: "Supports longevity and functional independence", bgColor: "bg-[#2C8C72]" }
    ],
    bgColor: "bg-white"
  },
  cta: {
    title: "Ready to take the next step?",
    description: "Book your Muscle Ultrasound consultation today and take the first step toward optimized performance, healing, and resilience.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/weight-lean/muscle-sound/6.webp"
  }
};



const Page = () => {
  const { hero, imageText, monitoring,  whyTrupeak, whatWeOffer, infoSection,benefitsData, cta } = pageData;

  return (
    <>
      <Hero {...hero} />
      <Imagetext {...imageText} />
      <MonitoringSection {...monitoring}/>
      <WhatWeTrack {...whyTrupeak}/>
      <WhatWeOffer {...whatWeOffer}/>
      <WhoThisIsFor {...infoSection} />
      <BenefitsSection {...benefitsData} />
      <CtaSection {...cta} />
      <ContactSection />
      <ContactForm />
    </>
  );
};

export default Page;

