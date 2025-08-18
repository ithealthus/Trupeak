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
      title: "Individualized Renal Nutrition Therapy Plans",
      description: [
        "Developed based on biomarkers like GFR, creatinine, BUN, electrolytes",
        "Customized to CKD stage: early, stages 3-4, dialysis, post-transplant",
        "Metabolic and dietary strategies tailored to your health profile",
        "Supports gut health, inflammation control, and electrolyte balance",
        "Plant-based, phosphorus-friendly proteins and low-inflammatory foods",
        "Continuous monitoring for potassium, sodium, calcium, phosphorus, and hydration",
        "Nutrition guidance to preserve kidney function, reduce complications, and support recovery"
      ]
    },
    {
      title: "Precision-Targeted Nutrition for Kidney Health",
      description: [
        "Supports metabolic control and long-term vitality",
        "Reduces systemic burden on kidneys",
        "Aligned with medications and clinical care plan",
        "Improves lab values like creatinine, potassium, and phosphorus",
        "Controls fluid retention and blood pressure",
        "Prevents malnutrition, weakness, and muscle loss",
        "Integrated with digital monitoring via Trupeak Dashboard"
      ]
    }
  ];

  const whyTrupeakData = {
    title: "How Is Your Health Tracked?",
    points: [
      "Real-time monitoring of GFR, acid-base status, and electrolytes",
      "Calorie, protein, and hydration tracking",
      "Digestive and appetite feedback",
      "Medication-nutrient interactions",
      "Glucose and blood pressure readings"
    ],
    image: "/images/regenerative-therapies/renal-nutrition/5.webp"
  };

  const infoSectionData = {
    title: "Who This Is For",
    description:
      "This program is designed for individuals with kidney concerns or related conditions who need targeted nutrition to support function and recovery:",
    items: [
      { description: "Individuals diagnosed with CKD (Stages 1 through 5)" },
      { description: "Patients managing diabetes or hypertension-related nephropathy" },
      { description: "People with elevated creatinine, low GFR, or proteinuria" },
      { description: "Dialysis patients seeking structured nutritional guidance" },
      { description: "Post-transplant recipients balancing immunity and nutrition" },
      { description: "Cancer patients affected by nephrotoxic treatments" }
    ]
  };

  return (
    <>
      <Hero
        title="Renal Nutrition"
        subtitle="Precision-targeted nutrition therapy for kidney health, metabolic control, and long-term vitality"
        mainImage="/images/regenerative-therapies/renal-nutrition/2.webp"
        circleImage="/images/regenerative-therapies/renal-nutrition/1.webp"
      />

      <Imagetext
        description="When your kidneys are under stress, whether from CKD, Hypertension, Diabetes, or Cancer, precision nutrition becomes essential. Each protocol is rooted in metabolic mapping, biomarker monitoring, and dietary strategies tailored to your unique health profile."
        image="/images/regenerative-therapies/renal-nutrition/3.webp"
        reverse={true}
        bgColor="bg-one"
        textColor="text-two"
      />

      <Informative
        title="Why Renal Nutrition Matters"
        imageSrc="/images/regenerative-therapies/renal-nutrition/4.webp"
        leftText="The kidneys regulate waste removal, fluid balance, electrolyte levels, and hormone activity. Poor nutrition can accelerate inflammation, speed up disease progression, and lead to complications."
        rightText="Whether you’re in early-stage CKD, recovering from a transplant, managing dialysis, or aiming to reduce long-term risk, Renal Nutrition Therapy at Trupeak™ is personalized to your needs and integrated into your broader care plan."
      />

      <Cards data={cardsData} />

      <WhyTrupeakBeauty
        title={whyTrupeakData.title}
        points={whyTrupeakData.points}
        image={whyTrupeakData.image}
      />

      <InfoSection
        title={infoSectionData.title}
        description={infoSectionData.description}
        items={infoSectionData.items}
        bgColor="#E6C98C"
        titleColor="#2BBFA7"
        cardBgColor="#0D1B33"
      />

      <InfoBanner
        title="Benefits of Renal Nutrition at Trupeak"
        subtitle="Core Focus"
        points={[
          "Preserve kidney function",
          "Delay or prevent the need for dialysis",
          "Improve metabolic lab values",
          "Control fluid retention and blood pressure",
          "Reduce cardiovascular risk",
          "Prevent malnutrition and weakness",
          "Personalized dietary guidance",
          "Improve overall quality of life"
        ]}
        image="/images/regenerative-therapies/renal-nutrition/6.webp"
        bgColor="#0D1B33"
        textColor="#FFFFFF"
        highlightColor="#E6C98C"
      />

      <InfoBanner
        subtitle="Results"
        points={[
          "Lower creatinine, potassium, phosphorus",
          "Improve strength and recovery",
          "Better treatment tolerance and metabolic balance",
          "Enhanced quality of life"
        ]}
        image="/images/regenerative-therapies/renal-nutrition/7.webp"
        bgColor="#0D1B33"
        textColor="#FFFFFF"
        highlightColor="#E6C98C"
        reverse={true}
      />

      <CtaSection
        title="Ready to protect your kidneys and take control of your health?"
        description="Whether you are newly diagnosed or facing complex kidney issues, precision nutrition can change the course of your health. Book your Renal Nutrition Assessment today."
        buttonText="Book Your Appointment"
        buttonLink="#"
        backgroundImage="/images/regenerative-therapies/renal-nutrition/8.webp"
      />

      <ContactSection />
      <ContactForm />
    </>
  );
};

export default Page;
