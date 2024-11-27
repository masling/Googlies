import React from 'react';
import { Sparkles, MessageCircle, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-Powered Expressions",
    description: "Advanced machine learning algorithms create personalized digital expressions that reflect your emotions."
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Enhanced Communication",
    description: "Make your messages more engaging with dynamic Googlies that adapt to your conversation context."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Response",
    description: "Lightning-fast generation and seamless integration across all Google platforms."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Privacy-First Design",
    description: "Your expressions are protected with state-of-the-art security and privacy measures."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Googlies?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}