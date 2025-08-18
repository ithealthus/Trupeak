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
    title: "Hormone Optimisation Therapy",
    subtitle: "Where medical precision supports proactive health transformation",
    mainImage: "/images/regenerative-therapies/hormone-optimisation-therapy/2.webp",
    circleImage: "/images/regenerative-therapies/hormone-optimisation-therapy/1.webp"
  },
  imageText: {
    description: "At Trupeak, we look beyond symptoms to uncover and address root-level dysfunctions before they evolve into chronic illness. Using advanced diagnostics, personalized therapies, and continuous monitoring, we target multiple systems to support proactive, preventive care.Each intervention is grounded in longevity science and tailored to your unique profile. With a focus on optimizing metabolic, hormonal, neurological, and immune health, our interdisciplinary team tracks your progress through a connected care platform, helping you reset your biology and build long-term resilience.",
    image: "/images/regenerative-therapies/hormone-optimisation-therapy/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  informative: {
    title: "Why Hormone Optimisation Matters",
    imageSrc: "/images/regenerative-therapies/hormone-optimisation-therapy/4.webp",
    leftText: "Hormones are the body’s master regulators impacting everything from energy and mood to metabolism, sleep, and immune function. When imbalanced, they can accelerate aging, increase disease risk, and disrupt daily wellbeing.",
    rightText: "Optimizing hormone levels restores internal balance, enhances resilience, and lays the foundation for long-term health and performance."
  },
  cardsData: [
    {
      title: "Biological Age Reversal and Longevity Mapping",
      description: [
        "DNA Methylation Age testing",
        "Telomere length measurement",
        "Mitochondrial efficiency evaluation",
        "Peptide support, NAD+ protocols, and Autophagy enhancement",
        
      ]
    },
    {
      title: "Cellular and Immune Regeneration",
      description: [
        "IV-based regenerative biologics, including growth factors and Exosomes",
        "Thymic support programs",
        "Immune recalibration through Cytokine and Micronutrient balancing",
        "Inflammation and Oxidative Stress Monitoring",
        
      ]
    },
    {
      title: "Neurological Health and Cognitive Support",
      description: [
        "Cognitive testing and brain mapping via EEG and biomarkers",
        "Peptides targeting neuroplasticity and cognitive longevity",
        "Vagal nerve stimulation",
        "Sleep architecture optimization using wearable and lab-based data",
        
      ]
    },
    {
      title: "Hormonal Intelligence Therapy",
      description: [
        "Comprehensive hormone analysis (cortisol, insulin, estradiol, DHEA, testosterone)",
        "Personalized bio-identical hormone replacement therapy (BHRT)",
        "Cycle-specific planning for women",
        "Male and female hormone optimization programs",
        
      ]
    },
    {
      title: "Metabolic Reset Programs",
      description: [
        "Strategies for reversing insulin resistance",
        "Time-restricted feeding and fasting cycles",
        "Nutraceutical protocols and metabolic detox plans",
        
        
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
    image: "/images/regenerative-therapies/hormone-optimisation-therapy/5.webp"
  },
  infoSection: {
    title: "Who This Is For",
    description: "This program is specifically designed for individuals looking to take control of their health through proactive, personalized strategies that address the root causes of imbalance.",
    items: [
      { description: "Professionals seeking to extend their healthspan and cognitive performance" },
      { description: "Individuals with fatigue, weight changes, or hormonal shifts" },
      { description: "Clients focused on improving metabolic, immune, and brain health" },
      { description: "People with a family history of chronic or neurodegenerative conditions" },
      { description: "Patients recovering from serious illness, looking to regain full function" },

    ],
    bgColor: "#E6C98C",
    titleColor: "#2BBFA7",
    cardBgColor: "#0D1B33"
  },
  infoBanners: [
    {
      title: "Benefits of Advanced Medical Interventions at Trupeak",
      subtitle: "Short-Term Impact",
      points: [
        "Better energy and clarity",
        "Stable hormone levels",
        "Enhanced immunity",
        "Improved sleep & digestion",
        
      ],
      image: "/images/regenerative-therapies/hormone-optimisation-therapy/6.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: false
    },
    {
      subtitle: " Long-Term Outcomes",
      points: [
        "Reduced risk of disease",
        "Slower biological aging",
        "Stronger heart, brain, & metabolism",
        "Lifelong health resilience"
      ],
      image: "/images/regenerative-therapies/hormone-optimisation-therapy/7.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: true
    }
  ],
  cta: {
    title: "Ready to rebalance your hormones and restore energy?",
    description: "Whether you're aiming to reverse early dysfunction, boost performance, or proactively protect your future, our advanced medical interventions provide a path toward measurable, lasting transformation.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/regenerative-therapies/hormone-optimisation-therapy/8.webp"
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
