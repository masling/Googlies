import React from 'react';

const faqs = [
  {
    question: "What are Googlies?",
    answer: "Googlies are Google's innovative digital expression system that combines AI technology with emotional intelligence to enhance online communication."
  },
  {
    question: "How do Googlies work?",
    answer: "Googlies use advanced machine learning algorithms to analyze context and generate appropriate digital expressions that match your communication style and intent."
  },
  {
    question: "Where can I use Googlies?",
    answer: "Googlies are integrated across Google's ecosystem, including Gmail, Google Meet, Google Chat, and other communication platforms."
  },
  {
    question: "Are Googlies free to use?",
    answer: "Yes, Googlies are completely free for all Google platform users."
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}