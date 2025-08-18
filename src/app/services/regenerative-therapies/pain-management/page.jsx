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
    title: "Pain Management ",
    subtitle: "Non-addictive, whole-body solutions for pain that persists.",
    mainImage: "/images/regenerative-therapies/pain-management/2.webp",
    circleImage: "/images/regenerative-therapies/pain-management/1.webp"
  },
  imageText: {
    description: "Pain is more than a symptom; it is your body’s warning light. Whether triggered by inflammation, injury, nerve dysfunction, or long-term disease, untreated pain can disturb sleep, limit movement, strain mental health, and weaken immune defenses.At Trupeak, pain management is not a temporary band-aid. It’s an evidence-based, personalized intervention designed to restore function, target root causes, and reduce long-term reliance on medication. Our approach combines cutting-edge therapies with restorative care to provide comprehensive treatment.",
    image: "/images/regenerative-therapies/pain-management/3.webp",
    reverse: true,
    bgColor: "bg-one",
    textColor: "text-two"
  },
  informative: {
    title: "Why Pain Management Matters",
    imageSrc: "/images/regenerative-therapies/pain-management/4.webp",
    leftText: "We treat pain as a complex process, not just a complaint. Using diagnostic tools to map inflammation, joint function, neuromuscular imbalances, and emotional triggers, we design layered interventions that target root causes, not just symptoms.",
    rightText: "Our interdisciplinary team includes regenerative specialists, neurologists, physiotherapists, and rehabilitation experts who collaborate to deliver sustained relief and structural repair."
  },
  cardsData: [
    {
      title: "Diagnostic Precision",
      description: [
        "MRI review and musculoskeletal ultrasound",
        "Posture and gait analysis",
        "Pain biomarker panels (inflammatory Cytokines, Cortisol, CRP)",
        "Vitamin D, Magnesium, and Micronutrient Mapping",
        "Neuromuscular function screening"
      ]
    },
    {
      title: "Regenerative Injections",
      description: [
        "Platelet-Rich Plasma (PRP): Concentrated platelets to speed tissue repair in joints, tendons, and ligaments",
        "Prolotherapy: Natural irritants stimulate healing responses in weakened tissues",
        "Stem Cell–based joint support (via certified partners): Promotes cartilage and tissue regeneration in chronic degeneration",
        "Trigger point injections: Target local muscle knots and spasms with relief-based delivery",
        
      ]
    },
    {
      title: "Neurotherapy & Peptide Interventions",
      description: [
        "Nerve modulation peptides for neuroinflammation and recovery",
        "IV NAD+ infusions for chronic fatigue, fibromyalgia, and neurological repair",
        "Cold Laser and PEMF therapy for pain modulation at the cellular level",
        
        
      ]
    },
    {
      title: "Functional Rehabilitation",
      description: [
        "Executive physical therapy plans for recovery without downtime",
        "Myofascial release and Osteopathic techniques",
        "Cryotherapy and Compression therapy to reduce acute swelling",
        "Personalised movement re-education for posture correction and joint safety",
        
      ]
    },
    {
      title: "Holistic Support",
      description: [
        "Anti-inflammatory nutrition plans",
        "Natural analgesics and adaptogens",
        "Mind-body techniques (breathwork, somatic therapy, biofeedback)",
        "Sleep optimisation for pain management"
        
        
      ]
    }
  ],
  whyTrupeak: {
    title: "How Is Your Health Tracked?",
    points: [
      "Pain biomarker and inflammatory trend tracking",
      "Movement and posture analytics",
      "Personalized program adjustments based on progress",
      "Periodic imaging and outcome reviews",
    ],
    image: "/images/regenerative-therapies/pain-management/5.webp"
  },
  infoSection: {
    title: "Who This Is For",
    description: "This program is ideal for those looking to treat pain at its source using advanced, non-invasive methods that go beyond temporary relief.",
    items: [
      { description: "Individuals with chronic pain not relieved by medication or physiotherapy" },
      { description: "Patients seeking alternatives to surgery or steroid injections" },
      { description: "Those with recurring flare-ups, stiffness, or movement limitations" },
      { description: "Active individuals seeking a safe return to movement and sports" },
      { description: "People with autoimmune, degenerative, or post-surgical pain challenges" },

    ],
    bgColor: "#E6C98C",
    titleColor: "#2BBFA7",
    cardBgColor: "#0D1B33"
  },
  infoBanners: [
    {
      title: "Benefits of Pain Management at Trupeak",
      subtitle: "Core Focus",
      points: [
        "Integrated medical, rehabilitation, and wellness care",
        "Precision diagnostics",
        "Non-surgical and non-opioid options",
        "Regenerative science + functional rehabilitation",
        "Pain biomarkers and outcome tracking"
        
      ],
      image: "/images/regenerative-therapies/pain-management/6.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: false
    },
    {
      subtitle: " Long-Term Outcomes",
      points: [
        "360° recovery roadmap",
        "No guesswork,just data",
        "Safer, sustainable care",
        "Heals, not hides pain",
        "Real-time progress insights"
      ],
      image: "/images/regenerative-therapies/pain-management/7.webp",
      bgColor: "#0D1B33",
      textColor: "#FFFFFF",
      highlightColor: "#E6C98C",
      reverse: true
    }
  ],
  cta: {
    title: "Ready to move beyond pain?",
    description: "At Trupeak, we help you reclaim movement, strength, and ease backed by regenerative therapies and data you can trust.",
    buttonText: "Book your pain management consultation today.",
    buttonLink: "#",
    backgroundImage: "/images/regenerative-therapies/pain-management/8.webp"
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
