import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DOCTOR_PROFILE, DOCTOR_IMAGES, Language } from '../data/doctorData';
import { Calendar, Clock, MapPin, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onBookClick: () => void;
  onChambersClick: () => void;
  onWhatsAppClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onBookClick,
  onChambersClick,
  onWhatsAppClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-slate-50/70 via-white to-white">
      {/* Subtle background aesthetic decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-teal-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-slate-100/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Doctor Profile & Information (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Unboxed kicker with typographic separators (anti-slop) */}
            <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-teal-800 mb-4 tracking-wide">
              <span>{lang === 'en' ? 'Internal Medicine & Cardiology Specialist' : 'মেডিসিন ও হৃদরোগ বিশেষজ্ঞ'}</span>
              <span aria-hidden="true">·</span>
              <span>Dhaka, Bangladesh</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">{lang === 'en' ? 'Fictional Medical Profile' : 'কাল্পনিক প্রোফাইল'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance mb-5">
              {lang === 'en' ? (
                <>
                  Compassionate, Evidence-Guided Care for{' '}
                  <span className="text-teal-700 underline decoration-teal-300/60 decoration-wavy decoration-2">
                    Heart & Vital Wellbeing
                  </span>
                </>
              ) : (
                <>
                  হৃদযন্ত্র ও সামগ্রিক সুস্থতায়{' '}
                  <span className="text-teal-700 underline decoration-teal-300/60 decoration-wavy decoration-2">
                    বিশ্বস্ত ও আধুনিক
                  </span>{' '}
                  চিকিৎসা সেবা
                </>
              )}
            </h1>

            {/* Doctor's Name & Credentials */}
            <div className="mb-6 p-4 bg-slate-50/90 border border-slate-200/80 rounded-xl">
              <div className="flex items-baseline flex-wrap gap-2 mb-1">
                <span className="text-xl sm:text-2xl font-bold text-slate-900">
                  {DOCTOR_PROFILE.name[lang]}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-teal-700">
                  {DOCTOR_PROFILE.degrees[lang]}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-2">
                {DOCTOR_PROFILE.designation[lang]}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-200/60">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>{DOCTOR_PROFILE.bmdcReg[lang]}</span>
              </div>
            </div>

            {/* Description / Philosophy summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {DOCTOR_PROFILE.tagline[lang]}
            </p>

            {/* CTAs Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onBookClick}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 active:bg-teal-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>{lang === 'en' ? 'Book Chamber Serial' : 'চেম্বার সিরিয়াল বুকিং'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onChambersClick}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <Clock className="w-4 h-4 text-teal-600" />
                <span>{lang === 'en' ? 'Chamber Hours' : 'চেম্বারের সময়সূচি'}</span>
              </button>

              <button
                onClick={onWhatsAppClick}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Unboxed Credibility Metrics (Anti-slop: clean tabular numerals) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                  {DOCTOR_PROFILE.experienceYears}+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {lang === 'en' ? 'Years Experience' : 'বছরের অভিজ্ঞতা'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                  {DOCTOR_PROFILE.patientsTreated}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {lang === 'en' ? 'Consultations' : 'রোগী সেবা'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-700 tabular-nums">
                  3
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  {lang === 'en' ? 'Chambers in BD' : 'চেম্বার সুবিধা'}
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Doctor Portrait & Visual Anchor (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80 shadow-xl aspect-[3/4]">
                {/* Fallback container for Zero-Broken-Image Policy */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-teal-900 flex flex-col items-center justify-center p-6 text-white text-center">
                  <Award className="w-16 h-16 text-teal-400 mb-3 opacity-60" />
                  <p className="text-lg font-bold">{DOCTOR_PROFILE.name[lang]}</p>
                  <p className="text-xs text-slate-300">{DOCTOR_PROFILE.designation[lang]}</p>
                </div>

                <img
                  src={DOCTOR_IMAGES.portrait}
                  alt={lang === 'en' ? 'Dr. Shariful Alam portrait' : 'ডাঃ শরিফুল আলম এর ছবি'}
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Subtle subtle gradient scrim at the base for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Inset nameplate at the bottom of the portrait */}
                <div className="absolute bottom-4 inset-x-4 text-white z-10">
                  <div className="text-sm sm:text-base font-bold drop-shadow-sm">
                    {DOCTOR_PROFILE.name[lang]}
                  </div>
                  <div className="text-xs text-teal-200 drop-shadow-sm">
                    {lang === 'en' ? 'MBBS, FCPS (Med), MD (Cardiology)' : 'এমবিবিএস, এফসিপিএস, এমডি (কার্ডিওলজি)'}
                  </div>
                </div>
              </div>

              {/* Floating trust card (bottom offset) */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 max-w-[280px] sm:max-w-xs bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-50 text-teal-700 rounded-lg shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {lang === 'en' ? 'Visiting Today' : 'আজকের চেম্বার'}
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      {lang === 'en' ? 'Dhanmondi Lake View · 5:30 PM' : 'ধানমন্ডি চেম্বার · সন্ধ্যা ৫:৩০'}
                    </div>
                    <div className="text-[11px] text-teal-700 font-semibold mt-1">
                      {lang === 'en' ? 'Serial hotline active' : 'সিরিয়াল বুকিং চলমান'}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
