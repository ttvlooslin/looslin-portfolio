import React, { useState } from 'react';
import { Music, Twitch, BarChart3, Mail, ExternalLink, Heart } from 'lucide-react';

export default function LooslinPortfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    {
      title: 'Twitch',
      description: 'Watch me stream live',
      url: 'https://twitch.tv/looslin',
      icon: Twitch,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Spotify',
      description: 'Listen to my music',
      url: 'https://open.spotify.com/artist/0c1QcII1IRyx3V3oXwgnPf?si=yQg0sVnbSRWC8oZYAKWCgQ',
      icon: Music,
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Sports Cards',
      description: 'Check my collection',
      url: 'https://ebay.io/m/4UYJ4f',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
    },
  ];
// Updated video support
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        <nav className="backdrop-blur-md bg-black/20 border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">LOOSLIN</h1>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#links" className="hover:text-blue-400 transition">Links</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        </nav>

        <section id="home" className="max-w-6xl mx-auto px-6 py-24 sm:py-32 text-center">
          <div className="space-y-8">
            <div className="flex justify-center mb-8">
              <img src="/images/prof-pic.png" alt="Looslin" className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-blue-500 object-cover shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-6xl sm:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-red-400 to-cyan-400 bg-clip-text text-transparent">LOOSLIN</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 font-light">Streamer • Musician • Collector • Entertainer</p>
            <p className="text-red-300 text-lg font-medium">Join the movement</p>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 hover:border-blue-500/50 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-6 text-red-300">The Story</h3>
            <div className="space-y-4 text-gray-200 leading-relaxed text-lg">
              <p>From a young age, Laughlin McKinnon fell in love with sports—not just watching them, but playing them with a competitive fire that defined his childhood. That same passion for collection and curation led him to sports cards, turning hobby into obsession, filling binders with treasures and memories.</p>
              <p>Through high school, his taste in music evolved and expanded, discovering new sounds and artists that shaped his perspective. Then came the natural next step: creating his own music. Laughlin started producing, writing, and sharing tracks that blend his unique influences into something authentically his own.</p>
              <p>But entertainment didn't stop at music. With an undeniable talent for gaming
