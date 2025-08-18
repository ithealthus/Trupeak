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
    title: "IV Therapy",
    subtitle: "Targeted Nutrient Delivery for Deep Cellular Repair",
    mainImage: "/images/regenerative-therapies/iv-theraphy/2.webp",
    circleImage: "/images/regenerative-therapies/iv-theraphy/1.webp"
  },
  imageText: {
    description: "Modern life, marked by stress, environmental toxins, poor sleep, and physical strain can deplete your body of essential nutrients. At Trupeak, our IV Therapy is designed to rapidly restore balance with physician-formulated infusions that deliver hydration, vitamins, and antioxidants directly into the bloodstream for fast and measurable results.Every infusion is compounded with pharmaceutical-grade ingredients and tailored to your biomarker profile, health status, and goals, ensuring maximum impact and safety.",
    image: "/images/regenerative-therapies/iv-theraphy/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  informative: {
    title: "Why IV Therapy Matters",
    imageSrc: "/images/regenerative-therapies/iv-theraphy/4.webp",
    leftText: "Nutrient deficiencies, dehydration, and oxidative stress can quietly impact your energy, immune function, and mental clarity. IV Therapy offers an effective solution by delivering essential vitamins, minerals, and antioxidants directly into the bloodstream. This method bypasses the digestive system, allowing for faster and more complete absorption than oral supplements.",
    rightText: "IV Therapy is ideal for those recovering from illness, managing fatigue, or aiming to feel more focused and energized. It works by rehydrating cells, correcting electrolyte imbalances, boosting immunity, and enhancing cognitive performance. It also supports recovery after physical stress or travel, helps the body detox naturally, and reduces inflammation to promote overall vitality and wellness."
  },
  cardsData: [
    {
      title: "Personalized Infusion Protocols",
      description: [
        "A clinical evaluation is conducted to review your symptoms, health goals, and medical history.",
        "Lab testing is done to assess micronutrient levels, hydration markers, and mitochondrial function.",
        "A custom formulation is prepared using a blend of vitamins, minerals, amino acids, and antioxidants based on your test results.",
        "Integrated support is available, allowing IV therapy to be combined with ongoing metabolic, regenerative, or hormonal programs for enhanced therapeutic benefit.",
        "Sessions can be enhanced by pairing them with oxygen therapy, peptide support, or a post-infusion infrared sauna."
        
        
      ]
    },
    {
      title: "Popular Formulations",
      description: [
        "Performance Recovery: This infusion combines electrolytes, BCAAs, and magnesium to reduce inflammation and accelerate muscle repair after intense activity.",
        "Immune Shield: A blend of high-dose vitamin C, zinc, selenium, glutathione, and B-complex vitamins designed to strengthen immune defenses during or after illness.",
        "Brain Boost + Focus: Formulated with NAD⁺, B12, taurine, and L-carnitine, this infusion helps enhance mental clarity and sustain focus.",
        "Detox + Liver Cleanse: Featuring glutathione, NAC, alpha-lipoic acid, and trace minerals, this option supports liver function and promotes effective toxin clearance.",
        "Youth + Skin Glow: A nutrient-rich mix of vitamin C, biotin, B5, and collagen cofactors aimed at improving skin tone and hydration for a radiant appearance.",
        "Fatigue Reset + Energy: This infusion uses targeted B vitamins, amino acids, magnesium, and NAD⁺ precursors to restore mitochondrial function and boost overall vitality."

        
      ]
    },
    
  ],
  whyTrupeak: {
    title: "How Is Your Safety Tracked?",
    points: [
      "Infusions are prepared in a sterile, ISO-standard environment",
      "Only pharmaceutical-grade compounds are used in all formulations",
      "Treatments are supervised by experienced medical professionals",
      "Dosages are customized to match your unique health profile and therapeutic goals",
    ],
    image: "/images/regenerative-therapies/iv-theraphy/5.webp"
  },
  
  infoSection: {
    title: "Who This Is For",
    description: "IV Therapy at Trupeak may benefit:",
    items: [
      { description: "Individuals with chronic fatigue or low energy" },
      { description: "Those recovering from illness, infection, or immune suppression" },
      { description: "Professionals experiencing brain fog or poor focus" },
      { description: "Athletes recovering from overtraining or muscle strain" },
      { description: "Frequent travelers dealing with jet lag and dehydration" },
      { description: "Patients navigating hormonal shifts, chronic disease, or chemotherapy side effects" },
      { description: "Anyone seeking preventive wellness, detox, or pre-event optimization" },


    ],
    bgColor: "#E6C98C",
    titleColor: "#2BBFA7",
    cardBgColor: "#0D1B33"
  },
  infoBanners: [
    {
      title: "Benefits of IV Therapy at Trupeak",
      subtitle: "Core Focus",
      points: [
        "Hydration and nutrient replenishment",
        "Immune and detox support",
        "Cellular and mitochondrial health",
        "Personalized nutrient protocols",
        "Whole-body integration"
        
      ],
      image: "/images/regenerative-therapies/iv-theraphy/6.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: false
    },
    {
      subtitle: "Results",
      points: [
        "Improved energy, cognition, and resilience",
        "Faster recovery from illness and inflammation",
        "Increased vitality and performance",
        "Targeted results with measurable progress",
        "Enhanced outcomes with ongoing care programs"
      ],
      image: "/images/regenerative-therapies/iv-theraphy/7.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: true
    }
  ],
  cta: {
    title: "Ready to restore balance and vitality?",
    description: "Whether you’re recovering, optimizing, or simply need a reset, Trupeak IV Therapy delivers rapid, restorative support tailored to your body.",
    buttonText: "Book your consultation today",
    buttonLink: "#",
    backgroundImage: "/images/regenerative-therapies/iv-theraphy/8.webp"
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
