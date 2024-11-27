import React from 'react';

const pressArticles = [
  {
    source: "Tech Chronicle",
    title: "Googlies: Revolutionizing Digital Communication",
    quote: "Google's latest innovation in digital expression sets new standards for online interaction.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80"
  },
  {
    source: "Digital Trends",
    title: "How Googlies Are Changing Online Communication",
    quote: "A breakthrough in emotional intelligence for digital platforms.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80"
  },
  {
    source: "Innovation Weekly",
    title: "The Future of Digital Expression",
    quote: "Googlies represent the next evolution in how we express ourselves online.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  }
];

export function Press() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">In the Press</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">{article.source}</p>
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-600 italic">&ldquo;{article.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}