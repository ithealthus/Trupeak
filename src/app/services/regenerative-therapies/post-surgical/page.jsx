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
    title: "Post-Surgical Rehabilitation at Trupeak",
    subtitle: "Healing beyond the operating room: restore, strengthen, and return to life with confidence.",
    mainImage: "/images/regenerative-therapies/post-surgical/2.webp",
    circleImage: "/images/regenerative-therapies/post-surgical/1.webp"
  },
  imageText: {
    description: "Surgery is only the first step in recovery. What you do in the weeks and months that follow can significantly impact how quickly and fully you regain strength, mobility, and independence.At Trupeak, our Post-Surgical Rehabilitation program combines medical insight, hands-on therapy, and individualized planning to help your body heal efficiently and rebuild resilience, safely and sustainably.",
    image: "/images/regenerative-therapies/post-surgical/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  informative: {
    title: "Why Post-Surgical Rehabilitation Matters",
    imageSrc: "/images/regenerative-therapies/post-surgical/4.webp",
    leftText: "Recovery doesn’t end when surgery does. Without proper post-operative care, patients may experience delayed healing, persistent pain, restricted mobility, or complications such as inflammation, fatigue, and impaired wound repair. A structured rehabilitation plan plays a critical role in optimizing recovery by targeting these challenges and supporting the body’s natural healing processes.",
    rightText: "Post-surgical rehabilitation focuses on restoring joint mobility and muscle strength, reducing pain and swelling, and promoting healthy tissue and wound healing. Nutritional support enhances immune function and recovery, while targeted therapy prevents compensatory injuries and supports mental well-being. The goal is to help you regain strength, improve mobility, and return to daily life with confidence and resilience."
  },
  cardsData: [
    {
      title: "Comprehensive Clinical Evaluation",
      description: [
        "Thorough review of your surgical history, symptoms, and functional limitations",
        "Early diagnostics to track healing progress and detect complications",
        "Personalized recovery timelines to guide your rehabilitation plan",
        
        
        
      ]
    },
    {
      title: "Movement, Strength & Mobility Therapy",
      description: [
        "Guided sessions to rebuild muscle strength and joint flexibility",
        "Techniques to correct movement patterns and reduce injury risk",
        "Gradual progression to support safe return to daily activities",
       

        
      ]
    },
    {
      title: "Pain, Swelling & Scar Management",
      description: [
        "Non-opioid treatments including lymphatic drainage, laser therapy, and manual techniques",
        "Expert wound care to promote healing and minimize complications",
        "Use of peptides, scar gels, and post-healing laser options to reduce visible scarring",
       

        
      ]
    },
    {
      title: "Nutritional & Cellular Recovery",
      description: [
        "Meal plans focused on protein, anti-inflammatory foods, and essential nutrient",
        "Supplementation or IV therapy to support immune function and tissue repair",
        "Guidance on hydration, digestion, and recovery-enhancing ingredients",
       

        
      ]
    },
    {
      title: "Emotional Wellness & Mind-Body Resilience",
      description: [
        "Stress management tools such as breathing techniques and relaxation guidance",
        "Regular mental health check-ins to address anxiety, fatigue, or emotional strain",
        "Supportive care that acknowledges the psychological side of surgical recovery",
       

        
      ]
    },
    
  ],
  
  
  infoSection: {
    title: "Who This Is For",
    description: "Our post-surgical rehab program is ideal for:",
    items: [
      { description: "Individuals recovering from orthopedic or joint surgeries" },
      { description: "Patients healing from abdominal, cosmetic, or reconstructive procedures" },
      { description: "Those experiencing post-op pain, stiffness, or swelling" },
      { description: "People looking to reduce scarring and optimize tissue repair" },
      { description: "Patients seeking whole-body recovery and not just physical healing" },
      


    ],
    bgColor: "#E6C98C",
    titleColor: "#2BBFA7",
    cardBgColor: "#0D1B33"
  },
  infoBanners: [
    {
      title: "Benefits of Post-Surgical Rehabilitation at Trupeak",
      subtitle: "Core Focus",
      points: [
        "Structured physical recovery",
        "Pain and inflammation control",
        "Wound and scar management",
        "Nutritional support",
        "Mind-body wellness"
        
      ],
      image: "/images/regenerative-therapies/post-surgical/6.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: false
    },
    {
      subtitle: "Results",
      points: [
        "Regained mobility, balance, and strength",
        "Reduced discomfort and faster healing",
        "Minimized scarring and better tissue integrity",
        "Enhanced immune response and tissue repair",
        "Improved emotional recovery and confidence"
      ],
      image: "/images/regenerative-therapies/post-surgical/7.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: true
    }
  ],
  cta: {
    title: "Ready to recover with confidence?",
    description: "Whether you're healing from joint surgery, a cosmetic procedure, or major reconstruction, Trupeak provides the tools and support to help you return stronger and faster.",
    buttonText: "Book your post-surgical rehabilitation consultation today.",
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
