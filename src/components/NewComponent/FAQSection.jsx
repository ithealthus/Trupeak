"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is TruPeak™ a medical clinic or a wellness center?",
      answer:
        "TruPeak™ is a medically supervised precision care clinic. Our services go beyond general wellness, focusing on diagnostics-driven, restorative healthcare.",
    },
    {
      question: "Do I need a referral to book an appointment?",
      answer: "No, you can book directly without a referral.",
    },
    {
      question: "Will I receive treatment during my first visit?",
      answer: "This depends on your evaluation. Some treatments can start the same day.",
    },
    {
      question: "Are all TruPeak™ treatments personalized?",
      answer: "Yes, all treatments are tailored to your specific needs and goals.",
    },
    {
      question: "Does TruPeak™ accept insurance?",
      answer: "Please contact us to confirm if your insurance is accepted.",
    },
    {
      question: "How is TruPeak™ IV therapy different from regular drips?",
      answer: "Our IV therapy is personalized and backed by medical diagnostics.",
    },
    {
      question: "How long does the initial consultation take?",
      answer: "Typically, consultations last about 45–60 minutes.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
{faqs.map((faq, index) => (
  <div key={index} className="mb-6 bg-one rounded-3xl shadow-md overflow-hidden border-4 border-[#18243A]">
    <button
      className={`flex shadow-2xl justify-between items-center w-full px-6 py-4 text-left font-medium rounded-2xl text-2xl ${
        openIndex === index
          ? "bg-[#18243A] text-white"
          : "bg-[#18243A] text-white"
      }`}
      onClick={() => setOpenIndex(openIndex === index ? null : index)}
    >
      <div className="flex items-center gap-5">
        <img
          src="/logosvg/faq-icon.svg" // replace with your image path
          alt="icon"
          className="w-8 h-8"
        />
        <span>{faq.question}</span>
      </div>
      {openIndex === index ? (
        <img
          src="/images/beauty/hair/open.svg" // replace with your image path
          alt="icon"
          className="w-5 h-5"
        />
      ) : (
       <img
          src="/images/beauty/hair/close.svg" // replace with your image path
          alt="icon"
          className="w-5 h-5"
        />
      )}
    </button>
    {openIndex === index && (
      <div className="bg-one text-[#18243A] lg:pl-20 px-4 py-5 font-semibold text-xl">{faq.answer}</div>
    )}
  </div>
))}
    </section>
  );
}
