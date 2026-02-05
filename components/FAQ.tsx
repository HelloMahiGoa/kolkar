'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I book a taxi?',
    answer: 'You can book a taxi through our website using the booking form, call us directly at 7522928277 or 9822164507, or message us on WhatsApp. We accept bookings 24/7.',
  },
  {
    question: 'What types of vehicles do you have?',
    answer: 'We have a fleet of 30+ vehicles including Hatchbacks (4 seats), Sedans (4 seats), and SUVs (6 seats). All vehicles are well-maintained and air-conditioned.',
  },
  {
    question: 'Do you provide airport transfers?',
    answer: 'Yes! We specialize in airport transfers to and from Goa International Airport (Dabolim and Mopa). We monitor flight schedules to ensure timely pickup, even for delayed flights.',
  },
  {
    question: 'What are your rates?',
    answer: 'Our rates are: Hatchback ₹30/km, Sedan ₹35/km, and SUV ₹45/km. Airport drop locations have an additional ₹80 toll charge. Use our price calculator for an instant estimate, or call us for exact pricing.',
  },
  {
    question: 'Are your drivers experienced?',
    answer: 'Yes, all our drivers are experienced, professional, and have excellent knowledge of Goa. They are licensed, verified, and committed to providing safe and comfortable rides.',
  },
  {
    question: 'Do you provide child seats?',
    answer: 'Yes, child seats are available upon request. Please mention this when booking so we can arrange it for you.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-primary-500 transition-colors"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 text-lg" itemProp="name">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary-600 flex-shrink-0" size={24} aria-hidden="true" />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} aria-hidden="true" />
                )}
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-5 text-gray-700 leading-relaxed"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <span itemProp="text">{faq.answer}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
