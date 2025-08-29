import React from 'react';
import ServicesHero from '@/components/ServicesHero';












const servicesPageData = {
  hero: {
    title: "Pain Management and Recovery",
    subtitle: "Relief that lasts. Recovery that works. Movement you can trust.",
    image: "/images/beauty/1.jpg",
  },














}
function Page() {
  return (
    <div>
        <ServicesHero {...servicesPageData.hero} />
    </div>
  );
}

export default Page;
