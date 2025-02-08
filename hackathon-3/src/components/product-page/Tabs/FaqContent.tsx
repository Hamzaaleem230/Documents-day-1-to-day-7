import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";


type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    question: "What materials make up the fabric of the t-shirt?",
    answer:
      "Our t-shirt is crafted from a premium blend of 100% cotton and breathable polyester, ensuring durability, softness, and moisture-wicking comfort.",
  },
  {
    question: "How should I properly care for my t-shirt to ensure it lasts?",
    answer:
      "Machine wash cold with like colors, tumble dry on low heat, and avoid using bleach or fabric softeners to maintain its quality and vibrant colors.",
  },
  {
    question: "What type of print or design is on the t-shirt, and how durable is it?",
    answer:
      "The t-shirt features high-quality screen printing that resists fading and cracking, even after numerous washes.",
  },
  {
    question: "Is the t-shirt designed for a specific gender or is it unisex?",
    answer:
      "This t-shirt offers a unisex fit, carefully designed to complement all body types with style and comfort.",
  },
  {
    question: "What shipping options do you offer, and how much will it cost?",
    answer:
      "We offer standard, express, and free shipping on orders above $50. Delivery times range from 3 to 7 days based on your location.",
  },
  {
    question: "What is your return and exchange policy for the t-shirt?",
    answer:
      "We accept returns and exchanges within 30 days of purchase. The item must be unused and in its original condition for a full refund or exchange.",
  },
];

const staggerAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const FaqContent = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-indigo-50 via-white to-indigo-100 py-16 px-6 sm:px-10"
    >
      {/* Dynamic Background Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-300 opacity-30 animate-pulse"
        style={{
          zIndex: -1,
        }}
      ></div>

      <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 text-center mb-12">
        Frequently Asked Questions
      </h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        {faqsData.map((faq, idx) => (
          <motion.div
            custom={idx}
            variants={staggerAnimation}
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${idx + 1}`}>
                <div className="flex justify-between items-center">
                  <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-indigo-600 flex-1">
                    {faq.question}
                  </AccordionTrigger>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                  </motion.div>
                </div>
                <AccordionContent className="overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mt-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FaqContent;
