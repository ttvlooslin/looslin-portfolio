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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
