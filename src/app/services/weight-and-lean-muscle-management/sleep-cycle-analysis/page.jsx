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
    title: "Sleep Cycle Analysis at Trupeak",
    subtitle: "Decode your rest. Reclaim your rhythm.",
    mainImage: "/images/weight-lean/sleep-cycle/2.webp",
    circleImage: "/images/weight-lean/sleep-cycle/1.webp"
  },
  imageText: {
    description:
      "At TruPeak, sleep is a biological cornerstone for metabolic health, hormone balance, mental clarity, and performance. Our non-invasive Sleep Cycle Analysis evaluates circadian rhythm, sleep architecture, and disruptions to reveal how rest impacts your energy, weight, cognition, and immunity.",
    image: "/images/weight-lean/sleep-cycle/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  monitoring: {
    title: "Why Sleep Matters in Your Health Journey",
    description:
      "Poor sleep is more than just feeling tired. It disrupts cortisol regulation, insulin sensitivity, thyroid function, and even appetite control. Over time, it contributes to chronic inflammation, weight gain, reduced muscle recovery, and mood instability.",
    image: "/images/weight-lean/sleep-cycle/4.webp",
    pointsLeft: [
      "Disrupted cortisol regulation and stress response",
      "Impaired insulin sensitivity and thyroid function"
    ],
    pointsRight: [
      "Chronic inflammation, weight gain, and fatigue",
      "Reduced recovery, resilience, and mood stability"
    ],
    bgColor: "bg-white",
    cardColor: "bg-[#E8D09A]"
  },
  whyTrupeak: {
    title: "What We Track",
    description:
      "Our Sleep Cycle Analysis measures key aspects of your rest to understand how sleep affects your health and performance.",
    points: [
      "Sleep latency – time taken to fall asleep",
      "Sleep stages – quality and duration of deep, REM, and light sleep",
      "Sleep fragmentation – wakefulness during the night",
      "Breathing patterns and snoring frequency",
      "Heart rate variability and oxygen saturation",
      "Morning refreshment and energy levels"
    ]
  },
  whatWeOffer: {
    title: "What We Offer",
    description:
      "Your sleep analysis is never standalone; it informs your full Trupeak care plan. Based on your results, we may recommend:",
    image: "/images/weight-lean/sleep-cycle/5.webp",
    points: [
      {
        title: "Circadian & Hormone Regulation",
        description:
          "Light therapy and melatonin protocols reset your sleep-wake cycle, while hormonal balancing addresses disruptions from stress or endocrine imbalance."
      },
      {
        title: "Behavioral Sleep Strategies",
        description:
          "Sleep hygiene techniques establish consistent routines to promote deeper, uninterrupted rest."
      },
      {
        title: "Targeted Supplementation",
        description:
          "Nutrients like magnesium, GABA, or adaptogens calm the nervous system and enhance relaxation before bedtime."
      },
      {
        title: "IV Nutrient Support",
        description:
          "Intravenous therapy replenishes key nutrients to improve sleep quality, energy, and overnight recovery."
      }
    ]
  },
  infoSection: {
    title: "Who This Is For",
    description: "Sleep Cycle Analysis is ideal for individuals who:",
    items: [
      { description: "Struggle to fall asleep or stay asleep" },
      { description: "Wake up feeling unrefreshed, foggy, or fatigued" },
      { description: "Experience unexplained energy dips or sugar cravings" },
      { description: "Face anxiety, hormonal fluctuations, or poor stress tolerance" },
      { description: "Want to enhance physical recovery and mental clarity" }
    ],
    bgColor: "#0D1B33",
    titleColor: "#FFFFFF",
    cardBgColor: "white"
  },
  benefitsData: {
    title: "Benefits of Sleep Cycle Analysis",
    benefits: [
      { text: "Identifies hidden sleep issues that affect energy, weight, and mood", bgColor: "bg-[#122644]" },
      { text: "Guides personalized solutions to restore deep, restful sleep", bgColor: "bg-[#E2C879]" },
      { text: "Enhances recovery, hormonal balance, and cognitive clarity", bgColor: "bg-[#122644]" },
      { text: "Supports long-term metabolic health and immune function", bgColor: "bg-[#2C8C72]" }
    ],
    bgColor: "bg-white"
  },
  cta: {
    title: "Reclaim Deep Rest",
    description:
      "At Trupeak, your sleep is treated with the same precision as any other vital sign. Book a consultation to explore how small changes in your sleep can unlock massive shifts in health, clarity, and resilience.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/weight-lean/sleep-cycle/6.webp"
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

