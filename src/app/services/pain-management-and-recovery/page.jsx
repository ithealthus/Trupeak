import React from 'react';
import ServicesHero from '@/components/ServicesHero';
import InfoSection from "@/components/InfoSection";
import Imagetext from '@/components/Imagetext';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import ConversationSection from '../beauty-aesthetics/ConversationSection';
const servicesPageData = {
  hero: {
    title: "Pain Management and Recovery",
    subtitle: "Relief that lasts. Recovery that works. Movement you can trust.",
    image: "/images/beauty/1.jpg",
  },

  infoContent: {
    title: "Overview",
    description: `Pain is a signal, not just a symptom. At Trupeak™, we go beyond surface relief to uncover the root cause. Our approach restores biomechanical balance, improves movement patterns, and accelerates recovery using clinically grounded tools`,
    
    images: [
      "/images/doctors/doc1.jpg",
      "/images/doctors/doc2.jpg",
      "/images/doctors/doc3.jpg"
    ]
  }
};

function Page() {
  return (
    <div>
      <ServicesHero {...servicesPageData.hero} />
      <InfoSection {...servicesPageData.infoContent} />
      <Imagetext
        title="Back Pain Tied to Uric Acid"
        description="Uric acid buildup can inflame spinal joints, especially in the lower back, causing persistent aches. We help with lab tests to check levels, hydration-focused nutrition, IV therapy with magnesium and antioxidants, and spine care through decompression, guided stretches, and hands-on support."
       
        image="/images/Immunity/5.jpg" // make sure this image exists in /public/images/
        reverse={false}
        bgColor="bg-white"
        textColor="text-black"
        buttonText="Know More"
        buttonLink="#"
         
      />
      <Imagetext
        title="Support for Arthritis"
        description="Joint stiffness, pain, and inflammation can come from wear and tear or immune flare-ups, making movement harder. We restore comfort with joint injections, muscle and nerve training, anti-inflammatory nutrition, and natural pain relief methods."
       
        image="/images/Immunity/6.jpg" // make sure this image exists in /public/images/
        reverse={true}
        bgColor="bg-one"
        textColor="text-white"
        buttonText="Know More"
        buttonLink="#"
         
      />
      <Imagetext
        title="Post-Injury Recovery"
        description="Injuries from slips, impacts, or sudden movements can cause lasting issues. We address the damage with precise imaging, regenerative options like growth factor or peptide injections, structured strength training, and movement retraining for everyday activities and lifting."
       
        image="/images/Immunity/7.jpg" // make sure this image exists in /public/images/
        reverse={false}
        bgColor="bg-two"
        textColor="text-white"
        buttonText="Know More"
        buttonLink="#"
         
      />
      <Imagetext
        title="Solutions for Long-Term Joint Pain"
        description="If a joint keeps acting up, there’s usually an underlying cause like poor mechanics or uneven pressure. We identify the root issue with posture and gait analysis, relieve tight muscles, restore movement with mobilization, and strengthen to balance joint load."
       
        image="/images/Immunity/8.jpg" // make sure this image exists in /public/images/
        reverse={true}
        bgColor="bg-white"
        textColor="text-two"
        buttonText="Know More"
        buttonLink="#"
         
      />
      <Imagetext
        title="Athletic Recovery and Overuse"
        description="Training hard without recovery can lead to burnout and injury. We support smart recovery with IV therapy to replenish nutrients, hands-on therapy after intense sessions, technique coaching to prevent wear, and planned deloads and mobility resets to keep you performing at your best."
       
        image="/images/Immunity/8.jpg" // make sure this image exists in /public/images/
        reverse={false}
        bgColor="bg-one"
        textColor="text-black"
        buttonText="Know More"
        buttonLink="#"
         
      />
      <Imagetext
        title="Cold Therapy for Healing and Inflammation"
        description="Cold therapy speeds up healing and soothes strain or injury. We offer whole-body cryo for full-system recovery, targeted cold treatments for sore spots, compression to reduce inflammation, and quick cryo sessions before or after workouts to support recovery."
       
        image="/images/Immunity/8.jpg" // make sure this image exists in /public/images/
        reverse={true}
        bgColor="bg-white"
        textColor="text-two"
        buttonText="Know More"
        buttonLink="#"
         
      />
      <ConversationSection
        heading="Your Recovery, Our Commitment"
        description="At Trupeak™, we believe in healing that lasts. Our pain management and recovery plans are designed to get you back to what you love, stronger and more resilient than before. Let’s work together to restore your movement and reclaim your life."
        backgroundImage="/images/beauty/1.jpg"
        
          />
      <ContactSection />
                  <ContactForm />
    </div>
  );
}

export default Page;
