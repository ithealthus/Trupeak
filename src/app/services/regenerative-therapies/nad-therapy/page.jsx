import React from 'react';
import Hero from '@/components/regenerative-therapies/Hero';
import Imagetext from '@/components/Imagetext';
import Informative from '@/components/regenerative-therapies/Informative';
import Cards from '@/components/cards';
import WhyTrupeakBeauty from '../../beauty-aesthetics/WhyTrupeakBeauty';
import InfoSection from '@/components/regenerative-therapies/WhoThisIsForSection';
import InfoBanner from '@/components/regenerative-therapies/InfoBanner';
import CtaSection from '@/components/regenerative-therapies/CtaSection';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';

const pageData = {
  hero: {
    title: "NAD⁺ Therapy at Trupeak",
    subtitle: "Reignite energy. Restore vitality. Support longevity.",
    mainImage: "/images/regenerative-therapies/nad-theraphy/2.webp",
    circleImage: "/images/regenerative-therapies/nad-theraphy/1.webp"
  },
  imageText: {
    description: "NAD⁺ (Nicotinamide Adenine Dinucleotide) is a vital coenzyme found in every cell, responsible for driving energy production, DNA repair, metabolism, and neurological health. As levels decline due to aging, illness, stress, or environmental toxins, the body’s ability to think, recover, and stay resilient can weaken.At Trupeak, NAD⁺ Therapy is a medically guided program designed to replenish your body’s cellular stores, restore mitochondrial function, and improve systemic performance. Each protocol is customized using clinical assessments and biomarker analysis to deliver precise, effective results.",
    image: "/images/regenerative-therapies/nad-theraphy/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  informative: {
    title: "Why NAD⁺ Matters",
    imageSrc: "/images/regenerative-therapies/nad-theraphy/4.webp",
    leftText: "Fuels ATP production for sustained energy.Facilitates DNA repair and gene expression.Enhances brain function and neurological health",
    rightText: "Supports mitochondrial efficiency and detoxification.Modulates inflammation and stress response . Improves insulin sensitivity and metabolic regulation"
  },
  cardsData: [
    {
      title: "Clinical Precision",
      description: [
        "Diagnostic testing for mitochondrial function, inflammation, and biological aging",
        "Data-driven protocols tailored to your unique biology",
        
        
      ]
    },
    {
      title: "Tailored Delivery Protocols",
      description: [
        "NAD⁺ administered via IV infusions, subcutaneous injections, or oral supplements",
        "Delivery method selected based on bioavailability, tolerance, and goals",
        "Infusion sessions last 90–180 minutes, with controlled rates for comfort",

        
      ]
    },
    {
      title: "Supportive Nutrient Formulations",
      description: [
        "Cofactors such as niacinamide, resveratrol, and methylated B vitamins",
        "Designed to enhance NAD⁺ conversion and cellular response",
        
      ]
    },
    {
      title: "Supervised Administration",
      description: [
        "All infusions administered in a medically supervised, calm setting",
        "Focus on safety, comfort, and individualized care",

        
      ]
    },
    {
      title: "Root-Cause Lifestyle Support",
      description: [
        "Guidance to address sleep disruption, toxic load, alcohol use, and more",
        "Ensures longer-lasting benefits from NAD⁺ therapy",

        
        
      ]
    }
  ],
  whyTrupeak: {
    title: "How Is Your Health Tracked?",
    points: [
      "Over 800 integrated biomarkers",
      "Wearable data (CGMs, HRV monitors, Oura rings, etc.)",
      "Bi-weekly or monthly trend reporting",
      "Automated adjustments based on physician review",
    ],
    image: "/images/regenerative-therapies/nad-theraphy/5.webp"
  },
  whyTrupeak1: {
    title: "What to Expect from Treatment",
    points: [
      "Initial evaluation:A detailed consultation includes medical history, lab analysis, and baseline NAD⁺ measurement.",
      "Infusion process:Each session takes between 90 and 180 minutes. The infusion rate is carefully controlled to promote optimal cellular uptake and comfort.",
      "Treatment course:Frequency typically ranges from one to two sessions per week over several weeks, followed by maintenance or oral support depending on your response.",
      "Add-on options:Additional nutrients such as glutathione, methyl B12, or magnesium may be included for enhanced benefit.",
    ],
    image: "/images/regenerative-therapies/nad-theraphy/5.webp"
  },
  infoSection: {
    title: "Who This Is For",
    description: "NAD⁺ Therapy at Trupeak may be ideal for:",
    items: [
      { description: "Individuals experiencing chronic fatigue, burnout, or low energy" },
      { description: "People recovering from viral illness or managing Long COVID symptoms" },
      { description: "Those with brain fog, early cognitive decline, or memory concerns" },
      { description: "Clients with chronic inflammation or pain-related conditions" },
      { description: "Individuals in substance recovery seeking neural repair" },
      { description: "Patients with insulin resistance or metabolic dysfunction" },
      { description: "Anyone focused on longevity, cellular repair, and healthy aging" },
      { description: "Frequent travelers or athletes need enhanced recovery and resilience" },

    ],
    bgColor: "#E6C98C",
    titleColor: "#2BBFA7",
    cardBgColor: "#0D1B33"
  },
  infoBanners: [
    {
      title: "Benefits of NAD⁺ Therapy at Trupeak",
      subtitle: "Focus Area",
      points: [
        "Cellular energy and repair",
        "Cognitive clarity",
        "Mitochondrial support",
        "Inflammation and detoxification",
        "Metabolic balance"
        
      ],
      image: "/images/regenerative-therapies/nad-theraphy/6.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: false
    },
    {
      subtitle: " Outcomes",
      points: [
        "Increased vitality and stamina",
        "Reduced brain fog and improved focus",
        "Slowed aging and enhanced metabolism",
        "Improved recovery and reduced fatigue",
        "Better insulin sensitivity and regulation"
      ],
      image: "/images/regenerative-therapies/nad-theraphy/7.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: true
    }
  ],
  cta: {
    title: "Ready to renew your energy and performance?",
    description: "If you're looking to support brain health, boost recovery, or promote long-term vitality, NAD⁺ Therapy at Trupeak offers a clinically guided path forward.",
    buttonText: "Book your consultation today",
    buttonLink: "#",
    backgroundImage: "/images/regenerative-therapies/nad-theraphy/8.webp"
  }
};

const Page = () => {
  const { hero, imageText, informative, cardsData, whyTrupeak,whyTrupeak1, infoSection, infoBanners, cta } = pageData;

  return (
    <>
      <Hero {...hero} />
      <Imagetext {...imageText} />
      <Informative {...informative} />
      <Cards data={cardsData} />
      <WhyTrupeakBeauty title={whyTrupeak.title} points={whyTrupeak.points} image={whyTrupeak.image} />
      
      <InfoSection
        title={infoSection.title}
        description={infoSection.description}
        items={infoSection.items}
        bgColor={infoSection.bgColor}
        titleColor={infoSection.titleColor}
        cardBgColor={infoSection.cardBgColor}
      />
      {infoBanners.map((banner, index) => (
        <InfoBanner key={index} {...banner} />
      ))}
      <WhyTrupeakBeauty title={whyTrupeak1.title} points={whyTrupeak1.points} image={whyTrupeak1.image} />
      <CtaSection {...cta} />
      <ContactSection />
      <ContactForm />
    </>
  );
};

export default Page;
