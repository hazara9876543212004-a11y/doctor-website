import React, { useState, useEffect } from 'react';
import { Language } from './data/doctorData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Qualifications } from './components/Qualifications';
import { Specialties } from './components/Specialties';
import { Chambers } from './components/Chambers';
import { Reviews } from './components/Reviews';
import { AppointmentForm } from './components/AppointmentForm';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('dr_lang');
    return saved === 'bn' ? 'bn' : 'en';
  });

  const [selectedChamberId, setSelectedChamberId] = useState<string>('dhanmondi');
  const [prefilledSymptom, setPrefilledSymptom] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('dr_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToChambers = () => {
    const element = document.getElementById('chambers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSpecialty = (specialtyTitle: string) => {
    setPrefilledSymptom(specialtyTitle);
    scrollToAppointment();
  };

  const handleBookChamber = (chamberId: string) => {
    setSelectedChamberId(chamberId);
    scrollToAppointment();
  };

  const handleWhatsAppDirect = () => {
    const whatsappUrl = `https://wa.me/8801711000000?text=${encodeURIComponent(
      lang === 'en'
        ? 'Hello, I would like to enquire about Dr. Shariful Alam chamber serial.'
        : 'আসসালামু আলাইকুম, আমি ডাঃ শরিফুল আলমের চেম্বার সিরিয়াল সম্পর্কে জানতে চাচ্ছি।'
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`min-h-screen bg-white text-slate-800 ${lang === 'bn' ? 'font-bangla' : ''}`}>
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onBookClick={scrollToAppointment}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Home with Doctor Profile */}
        <Hero
          lang={lang}
          onBookClick={scrollToAppointment}
          onChambersClick={scrollToChambers}
          onWhatsAppClick={handleWhatsAppDirect}
        />

        {/* 2. About the Doctor */}
        <About
          lang={lang}
          onBookClick={scrollToAppointment}
        />

        {/* 3. Qualifications & Experience (Fictional Placeholder) */}
        <Qualifications
          lang={lang}
        />

        {/* 4. Medical Specialties */}
        <Specialties
          lang={lang}
          onSelectSpecialty={handleSelectSpecialty}
        />

        {/* 5. Chamber Locations & Visiting Hours */}
        <Chambers
          lang={lang}
          onBookChamber={handleBookChamber}
        />

        {/* 6. Patient Experiences & Reviews */}
        <Reviews
          lang={lang}
        />

        {/* 7. Appointment & Serial Booking Section */}
        <AppointmentForm
          lang={lang}
          selectedChamberId={selectedChamberId}
          prefilledSymptom={prefilledSymptom}
        />
      </main>

      {/* 7. Floating WhatsApp Contact Button */}
      <WhatsAppFloating lang={lang} />

      {/* 8. Footer with emergency advice and fictional disclaimer */}
      <Footer
        lang={lang}
        onBookClick={scrollToAppointment}
      />
    </div>
  );
}
