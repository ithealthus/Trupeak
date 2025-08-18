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
    title: "Chronic Illness Management at Trupeak",
    subtitle: "Personalized, predictive, and preventive care for lifelong resilience.",
    mainImage: "/images/regenerative-therapies/chronic-illness/2.webp",
    circleImage: "/images/regenerative-therapies/chronic-illness/1.webp"
  },
  imageText: {
    description: "Living with a chronic condition doesn't have to mean living with limitations. At TrupeakTM, we approach chronic illness not as a static diagnosis but as a dynamic opportunity to alter your biological trajectory and regain control over your health.Our chronic illness management program is rooted in precision diagnostics, functional medicine, and regenerative support, tailored to address both the symptoms and the root causes of your condition. This is whole-person care backed by data, supported by science, and designed around you.",
    image: "/images/regenerative-therapies/chronic-illness/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  informative: {
    title: "Why Chronic Illness Management Matters",
    imageSrc: "/images/regenerative-therapies/chronic-illness/4.webp",
    leftText: "Chronic illnesses often progress silently, driven by hidden inflammation, hormonal shifts, and system imbalances. While conventional treatments may ease symptoms, they can miss the root causes that drive long-term dysfunction. At Trupeak, we take a deeper, systems-based approach to stabilize core functions and support lasting change.",
    rightText: "Our care focuses on slowing disease progression, improving metabolic health, regulating immune responses, and restoring hormonal balance. We aim to reduce dependency on medications where possible, while enhancing energy, mental clarity, sleep quality, and emotional resilience. By tracking your progress and adapting your plan over time, we help shift the focus from symptom control to full-body transformation."
  },
  cardsData: [
    {
      title: "Functional and Biomarker Diagnostics",
      description: [
        "Gut microbiome composition",
        "Inflammatory and immune markers",
        "Hormone panels (thyroid, adrenal, sex hormones)",
        "Nutrient levels and oxidative stress profiles",
        
        
        
      ]
    },
    {
      title: "Medical & Therapeutic Interventions",
      description: [
        "Medication optimization",
        "Regenerative therapies (NAD⁺, peptides, PRP)",
        "Hormone balancing under medical supervision",
        

        
      ]
    },
    {
      title: "Precision Nutrition Management",
      description: [
        "Reduce inflammation",
        "Improve organ function",
        "Support metabolic regulation",
        

        
      ]
    },
    {
      title: "Lifestyle Optimization & Rehabilitation",
      description: [
        "Customized physical activity protocols",
        "Ultrasound-based muscle tracking",
        "Postural and joint movement therapy",
        

        
      ]
    },
    {
      title: "Cognitive and Emotional Resilience",
      description: [
        "Stress reduction strategies",
        "Hormone-cortisol balance",
        "Fatigue and sleep optimization",
        "Access to therapeutic counseling, if needed"
        

        
      ]
    },
    
  ],
  whyTrupeak: {
    title: "How Is Your Health Tracked?",
    points: [
      "Biomarker trend reports",
      "Monthly clinical insights",
      "Milestone reviews and adaptive care planning",
      
    ],
    image: "/images/regenerative-therapies/chronic-illness/5.webp"
  },
  
  infoSection: {
    title: "Who This Is For",
    description: "This program is ideal for those with complex conditions who haven’t found relief through conventional care.",
    items: [
      { description: "Type 2 diabetes or insulin resistance" },
      { description: "Autoimmune conditions (e.g., lupus, Hashimoto's, RA)" },
      { description: "Thyroid and hormonal imbalances" },
      { description: "Metabolic syndrome or obesity" },
      { description: "Hypertension and cardiovascular risk" },
      { description: "Long COVID or post-viral fatigue" },
      { description: "Fibromyalgia or chronic fatigue" },
      { description: "Early-stage neurological decline (e.g., Alzheimer's, Parkinson’s)" },
      { description: "Chronic kidney or liver disease" },
      { description: "Recovery from cancer and co-existing chronic illnesses" },


    ],
    bgColor: "#E6C98C",
    titleColor: "#2BBFA7",
    cardBgColor: "#0D1B33"
  },
  infoBanners: [
    {
      title: "Benefits of Chronic Illness Management at Trupeak",
      subtitle: "Focus Area",
      points: [
        "Functional root-cause diagnostic",
        "Whole-body medical integration",
        "Regenerative & nutrition therapy",
        "Mental and emotional support",
        "Ongoing tracking and adjustments"
        
      ],
      image: "/images/regenerative-therapies/chronic-illness/6.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: false
    },
    {
      subtitle: "Outcomes",
      points: [
        "Personalized care, not protocol-based treatment",
        "Improved metabolic, immune, and hormonal health",
        "Enhanced energy, organ function, and resilience",
        "Better stress management and mood regulation",
        "Progress you can measure, guided by data"
      ],
      image: "/images/regenerative-therapies/chronic-illness/7.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: true
    }
  ],
  cta: {
    title: "Ready to take control of chronic illness?",
    description: "Chronic doesn’t have to mean constant. Whether you're managing a single diagnosis or navigating multiple conditions, Trupeak offers a personalized path to stability, energy, and long-term resilience.",
    buttonText: "Book your Chronic Illness Management consultation today",
    buttonLink: "#",
    backgroundImage: "/images/regenerative-therapies/chronic-illness/8.webp"
  }
};

const Page = () => {
  const { hero, imageText, informative, cardsData, whyTrupeak, infoSection, infoBanners, cta } = pageData;

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
      
      <CtaSection {...cta} />
      <ContactSection />
      <ContactForm />
    </>
  );
};

export default Page;
