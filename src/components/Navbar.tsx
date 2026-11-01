import React, { useState } from 'react';
import { DOCTOR_PROFILE, Language } from '../data/doctorData';
import { Globe, Menu, X, CalendarCheck, PhoneCall } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: lang === 'en' ? 'About' : 'পরিচিতি' },
    { href: '#specialties', label: lang === 'en' ? 'Specialties' : 'সেবা' },
    { href: '#chambers', label: lang === 'en' ? 'Chambers' : 'চেম্বার' },
    { href: '#reviews', label: lang === 'en' ? 'Reviews' : 'মতামত' },
    { href: '#appointment', label: lang === 'en' ? 'Appointment' : 'বুকিং' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-teal-700 transition-colors flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block"></span>
            <span>{DOCTOR_PROFILE.name[lang]}</span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-teal-600 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + Language Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher button */}
            <button
              onClick={onToggleLang}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              title={lang === 'en' ? 'Switch to Bangla' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-teal-700" />
              <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            {/* Primary Action CTA */}
            <button
              onClick={onBookClick}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 active:bg-teal-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-teal-300" />
              <span>{lang === 'en' ? 'Book Serial' : 'সিরিয়াল বুকিং'}</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Open mobile navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2 text-base font-semibold text-slate-700 hover:text-teal-700 hover:bg-teal-50/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                handleNavClick();
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-lg shadow transition-colors"
            >
              <CalendarCheck className="w-4 h-4 text-teal-300" />
              <span>{lang === 'en' ? 'Book Chamber Serial' : 'চেম্বার সিরিয়াল বুকিং'}</span>
            </button>

            <a
              href="tel:+8801711000000"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
              <span>+880 1711-000000 ({lang === 'en' ? 'Serial Helpline' : 'সিরিয়াল হেল্পলাইন'})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
