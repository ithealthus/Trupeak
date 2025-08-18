
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
const Page = () => {
  const cardsData = [
    {
      title: "Individualized Nutritional Therapy Plans",
      description: [
        "Calorically and metabolically aligned nutrition (not just “more calories”)",
        "Macronutrient balancing to preserve lean muscle and support energy stability",
        "Micronutrient repletion tailored to specific deficiencies and treatment-related losses",
        "Nutrition schedules synchronized with treatment phases (e.g., before/after chemotherapy)",
        "Functional nutrition components like curcumin, omega-3s, quercetin, NAC, and glutamine",
        "Support for taste changes, nausea, mucositis, cachexia, and gut health via probiotics and fermented foods",
        "Low glycemic, insulin-sensitive dietary patterns for hormone-sensitive cancers"
      ]
    },
    {
      title: "Metabolic & Integrative Oncology Nutrition Protocols",
      description: [
        "Intermittent fasting and ketogenic approaches to deprive cancer cells of glucose (where appropriate)",
        "Mitochondrial-targeted protocols that promote autophagy and immune function",
        "Differential stress resistance methods to protect healthy cells during chemotherapy or radiation",
        "All interventions are customized based on tumor type, treatment phase, and individual risk, and implemented under clinical supervision",
        
      ]
    }
  ];

  const whyTrupeakData = {
    title: "How Is Your Health Tracked?",
    points: [
      "Meal planning and anti-inflammatory recipes",
      "Supplement protocols designed for drug-nutrient safety.",
      "1:1 virtual and/or in-person counselling",
      "Mind-gut-immune axis support",
      "Peptide and IV nutrient therapy for advanced support"
    ],
    image: "/images/regenerative-therapies/cancer-nutrition/5.webp"
  };

  const infoSectionData = {
  title: "Who This Is For",
  description:
    "Our individualized nutritional therapies are designed for those navigating the physical and metabolic challenges of cancer treatment and recovery. This approach is ideal for:",
  items: [
    {
     
      description: "Patients undergoing chemotherapy, radiation, or immunotherapy"
    },
    {
      
      description: "Pre-surgical patients needing improved metabolic reserves"
    },
    {
      
      description: "Individuals post-treatment seeking to rebuild strength and reduce recurrence risk"
    },
    {
      
      description: "Those with GI cancers, cachexia, or severe appetite loss"
    },
    {
      
      description: "Survivors aiming to lower inflammation, fatigue, and long-term metabolic risks"
    },
    
  ]
};


  return (
    <>
      <Hero
        title="Cancer Nutrition Therapy "
        subtitle="Targeted nutritional therapy that supports the body during cancer care, remission, recovery, and beyond."
        mainImage="/images/regenerative-therapies/cancer-nutrition/2.webp"
        circleImage="/images/regenerative-therapies/cancer-nutrition/1.webp"
      />
      
      <Imagetext
        description="During cancer and its treatments, your nutritional needs drastically change. The body enters a hypermetabolic state, muscle wasting becomes common, and inflammation and oxidative stress surge. At the same time, appetite, digestion, and absorption may decline. Without targeted intervention, this can impair recovery and worsen treatment tolerance."
        image="/images/regenerative-therapies/cancer-nutrition/3.webp"
        reverse={true}
        bgColor="bg-one"
        textColor="text-two"
      />

      <Informative
        title="Why Cancer Nutrition Matters"
        imageSrc="/images/regenerative-therapies/cancer-nutrition/4.webp"
        leftText="Cancer doesn’t just affect one organ; it impacts how the entire body absorbs nutrients, responds to treatment, and recovers. At Trupeak, we place cancer nutrition at the heart of care, offering personalized and evidence-based support through every stage: before treatment, during therapy, and into survivorship."
        rightText="Studies show that nearly half of cancer patients face malnutrition at the start of treatment, with rates increasing during hospitalization. This can significantly impair recovery and survival. Our precision nutrition protocols are carefully designed to complement chemotherapy, immunotherapy, radiation, and surgery, helping you build strength, resilience, and optimal healing based on your unique biological needs."
      />

      <Cards data={cardsData} />
       <WhyTrupeakBeauty
        title={whyTrupeakData.title}
        points={whyTrupeakData.points}
        image={whyTrupeakData.image}
      />
      {/* ✅ New InfoSection */}
      <InfoSection
        title={infoSectionData.title}
        description={infoSectionData.description}
        items={infoSectionData.items}
        bgColor="#E6C98C"
        titleColor="#2BBFA7"
        cardBgColor="#0D1B33"
      />
     <InfoBanner
  title="Benefits of Restorative Medicine at Trupeak"
  subtitle="Core Focus"
  points={[
    "Maintain muscle and body weight",
    "Manage side effects",
    "Support gut and immune health",
    "Reduce inflammation and oxidative stress",
    "Rebuild energy, strength, and cognitive clarity",
  ]}
  image="/images/regenerative-therapies/cancer-nutrition/6.webp"
  bgColor="#0D1B33"
  textColor="#FFFFFF"
  highlightColor="#E6C98C"
/>
<InfoBanner
  
  subtitle="Results"
  points={[
    "Improved treatment response and fewer complications",
    "Better quality of life during treatment",
    "Faster recovery post-treatment",
    "Lower recurrence risk",
    "Improved survivorship outcomes",
  ]}
  image="/images/regenerative-therapies/cancer-nutrition/7.webp"
  bgColor="#0D1B33"
  textColor="#FFFFFF"
  highlightColor="#E6C98C"
  reverse={true}
/>
<CtaSection title="Ready to fuel your strength through every phase of cancer care?"
  description="Whether you're just starting treatment or building back after a tough journey, the Trupeak Cancer Nutrition team is here to guide you, strengthen you, and walk alongside you, one phase at a time.
"
  buttonText="Book Your Appointment"
  buttonLink="#"
  backgroundImage="/images/regenerative-therapies/cancer-nutrition/8.webp"
/>
    <ContactSection/>
     <ContactForm/>
    </>
  );
};

export default Page;
