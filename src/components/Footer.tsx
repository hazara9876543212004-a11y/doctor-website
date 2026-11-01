import React from 'react';
import { DOCTOR_PROFILE, CHAMBERS, FAQS, Language } from '../data/doctorData';
import { AlertTriangle, ShieldCheck, Heart, MapPin, Phone, MessageSquare, ArrowUp, Mail } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onBookClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* FAQ / Patient Guide Section right before the footer bottom */}
      <section id="faq" className="py-16 border-b border-slate-800 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-wider text-teal-400 font-semibold">
              {lang === 'en' ? 'Patient Consultation Guide' : 'রোগীদের সাধারণ প্রশ্নোত্তর'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {lang === 'en' ? 'Frequently Asked Questions' : 'জরুরি জিজ্ঞাসা ও উত্তর'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-5 bg-slate-900/90 border border-slate-800 rounded-xl space-y-2">
                <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {faq.q[lang]}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {faq.a[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Advisory Banner */}
      <div className="bg-rose-950/70 border-b border-rose-900/60 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-rose-200">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>
              <strong>{lang === 'en' ? 'Medical Emergency Notice:' : 'জরুরি চিকিৎসা বিজ্ঞপ্তি:'}</strong>{' '}
              {lang === 'en'
                ? 'Chambers are for scheduled outpatient consultations only. For acute crushing chest pain or sudden collapse, visit a hospital emergency department immediately or dial 999.'
                : 'চেম্বারে শুধু পূর্ব-নির্ধারিত সিরিয়ালে রোগী দেখা হয়। তীব্র বুকে ব্যথা, শ্বাসকষ্ট বা জরুরি পরিস্থিতিতে অবিলম্বে নিকটস্থ জরুরি বিভাগে যোগাযোগ করুন অথবা ৯৯৯ ডায়াল করুন।'}
            </span>
          </div>
          <a
            href="tel:999"
            className="shrink-0 px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-md transition-colors text-xs whitespace-nowrap"
          >
            {lang === 'en' ? 'Dial 999 Emergency' : 'জরুরি ৯৯৯'}
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Overview (4 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
              <span className="text-xl font-bold text-white tracking-tight">
                {DOCTOR_PROFILE.name[lang]}
              </span>
            </div>
            <p className="text-xs text-teal-400 font-medium">
              {DOCTOR_PROFILE.degrees[lang]}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {DOCTOR_PROFILE.designation[lang]}
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>{DOCTOR_PROFILE.bmdcReg[lang]}</p>
              <p>{DOCTOR_PROFILE.primaryHospital[lang]}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                type="button"
                className="px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Request Serial Online' : 'অনলাইনে সিরিয়াল নিন'}
              </button>
            </div>
          </div>

          {/* Chamber Addresses (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Chamber Locations' : 'চেম্বার সমুহ'}
            </h4>
            <div className="space-y-4 text-xs text-slate-400">
              {CHAMBERS.map((c) => (
                <div key={c.id} className="space-y-0.5">
                  <div className="font-semibold text-slate-200">{c.name[lang]}</div>
                  <div>{c.address[lang]}</div>
                  <div className="text-teal-400">{c.days[lang]} · {c.time[lang]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Serial Helpline' : 'যোগাযোগ ও হেল্পলাইন'}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span className="font-mono text-slate-200">+880 1711-000000</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: +880 1711-000000</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>info@fictionaldoctor-bd.org</span>
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Back to top' : 'উপরে ফিরে যান'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Legal & Fictional Medical Disclaimer (Anti-Slop & User compliance) */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-2">
          <p className="text-center sm:text-left">
            <strong>{lang === 'en' ? 'Disclaimer' : 'আইনি বিজ্ঞপ্তি'}:</strong>{' '}
            {lang === 'en'
              ? 'This website is a demonstration portfolio for a fictional medical doctor in Bangladesh. All names, chamber affiliations, serial contact numbers, and qualifications are fictional placeholder information.'
              : 'এই ওয়েবসাইটটি বাংলাদেশের একজন কাল্পনিক চিকিৎসকের জন্য তৈরি প্রদর্শনী পোর্টফোলিও। সকল নাম, ডিগ্রি, চেম্বার ও যোগাযোগের তথ্য কাল্পনিক প্লেসহোল্ডার।'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[11px] text-slate-600">
            <div>
              © {new Date().getFullYear()} {DOCTOR_PROFILE.name.en}. {lang === 'en' ? 'All rights reserved.' : 'সর্বস্বত্ব সংরক্ষিত।'}
            </div>
            <div>
              {lang === 'en' ? 'Designed for Medical Portfolio Standards' : 'চিকিৎসক পোর্টফোলিও ডিজাইনের মানদণ্ডে নির্মিত'}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
