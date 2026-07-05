import React, { useState, useEffect } from 'react';
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
              <img src="/images/prof-pic.jpg" alt="Looslin" className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-blue-500 object-cover shadow-2xl hover:scale-105 transition-transform duration-500" />
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
              <p>But entertainment didn't stop at music. With an undeniable talent for gaming and a natural ability to keep people entertained, Looslin realized what he was truly meant to do—stream everything live. Every game session, every creative moment, every spontaneous vibe became shareable content for an ever-growing community.</p>
              <p className="text-transparent bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text font-bold text-xl">If you're looking for someone who brings genuine energy, raw talent, and relatable entertainment all in one place—welcome. You found the GOAT. Hit that follow button and let's build this community together.</p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-red-300">The Studio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500">
              <img src="/images/studio-1.jpg" alt="Studio Setup" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold">Where the magic happens</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-500">
              <img src="/images/studio-2.jpg" alt="Music Production" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold">Creating beats & vibes</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
              <img src="/images/studio-3.jpg" alt="Behind the Scenes" className="w-full h-80 object-cover bg-black" />
              <div className="absolute top-4 right-4 bg-red-500/80 px-3 py-1 rounded-full text-xs font-bold text-white">BEHIND THE SCENES</div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-red-300">Sports Card Collection</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500 aspect-square">
              <img src="/images/card-1.jpg" alt="Card 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="group relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500 aspect-square">
              <img src="/images/card-2.jpg" alt="Card 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="group relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500 aspect-square">
              <img src="/images/card-3.jpg" alt="Card 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="group relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500 aspect-square">
              <img src="/images/card-4.jpg" alt="Card 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="group relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500 aspect-square">
              <img src="/images/card-5.jpg" alt="Card 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="group relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500 aspect-square bg-gradient-to-br from-blue-500/20 to-red-500/20 flex items-center justify-center">
              <p className="text-center text-gray-300 font-bold">More coming</p>
            </div>
            <div className="group relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500 aspect-square bg-gradient-to-br from-blue-500/20 to-red-500/20 flex items-center justify-center">
              <p className="text-center text-gray-300 font-bold">Collection</p>
            </div>
            <div className="group relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500 aspect-square bg-gradient-to-br from-blue-500/20 to-red-500/20 flex items-center justify-center">
              <p className="text-center text-gray-300 font-bold">Grows here</p>
            </div>
          </div>
        </section>

        <section id="links" className="max-w-6xl mx-auto px-6 py-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-blue-300">Find Me Everywhere</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {links.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-8 hover:border-white/30 transition-all duration-500">
                  <div className="relative z-10 space-y-4">
                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${link.color} group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold">{link.title}</h4>
                    <p className="text-gray-300 text-sm">{link.description}</p>
                    <div className="flex items-center gap-2 text-sm text-blue-300 group-hover:text-blue-200 transition-colors">
                      Visit <ExternalLink size={16} />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <a href="https://dot.cards/looslin" target="_blank" rel="noopener noreferrer" className="block w-full group relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-red-500/20 border border-blue-500/50 p-8 hover:border-blue-400 transition-all duration-500">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-red-300 bg-clip-text">All Links in One Place</h4>
                <p className="text-gray-300 mt-2">Visit my Dot Cards page for everything</p>
              </div>
              <ExternalLink size={32} className="text-blue-300 group-hover:text-blue-200 transition-colors" />
            </div>
          </a>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-20 mb-12">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-12 hover:border-blue-500/50 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-8 text-red-300">Get In Touch</h3>
            <a href="mailto:ttvlooslin@gmail.com" className="group flex items-center gap-4 p-6 rounded-lg hover:bg-white/5 transition-all duration-300">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-xl font-medium group-hover:text-cyan-300 transition-colors">ttvlooslin@gmail.com</p>
              </div>
            </a>
            <p className="mt-8 text-gray-400 text-sm">Business inquiries, collaborations, or just want to say what's up? Send me an email and I'll get back to you as soon as possible.</p>
          </div>
        </section>

        <footer className="border-t border-white/10 backdrop-blur-sm bg-black/20 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm">
            <p>Built with passion by Looslin</p>
            <p className="mt-2 flex items-center justify-center gap-1">Made to entertain <Heart size={14} className="text-pink-500" /></p>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1s ease-out; }
      `}</style>
    </div>
  );
}
