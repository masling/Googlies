import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Press } from './components/Press';

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Features />
        <FAQ />
        <Press />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Googlies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;