import React from 'react';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6">
            Discover <span className="text-blue-600">Googlies</span>: The Future of Digital Expression
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Transform your digital interactions with Googlies - Google's innovative approach to making online communication more expressive, engaging, and fun.
          </p>
          <div className="relative rounded-2xl overflow-hidden w-full max-w-4xl shadow-xl">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Introduction to Googlies"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}