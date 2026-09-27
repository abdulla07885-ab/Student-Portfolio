import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        {/* Placeholder for future sections */}
      </main>
    </div>
  );
}

export default App;
