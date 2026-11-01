import React, { useState } from 'react';
import { DOCTOR_PROFILE, DOCTOR_IMAGES, Language } from '../data/doctorData';
import { HeartHandshake, CheckCircle2, Stethoscope, Languages, FileText, Sparkles } from 'lucide-react';

interface AboutProps {
  lang: Language;
  onBookClick: () => void;
}

export const About: React.FC<AboutProps> = ({ lang, onBookClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const carePrinciples = [
    {
      title: {
        en: 'Thorough, Attentive Listening',
        bn: 'মনোযোগ দিয়ে রোগীর কথা শোনা',
      },
      desc: {
        en: 'Allocating dedicated clinical time for each patient to understand symptoms, lifestyle history, and psychological wellbeing before ordering tests.',
        bn: 'প্রতিটি রোগীর জন্য পর্যাপ্ত সময় দেওয়া, লক্ষণ ও পারিবারিক ইতিহাস গভীরভাবে বোঝা।',
      },
    },
    {
      title: {
        en: 'Rational, Evidence-Guided Prescribing',
        bn: 'প্রয়োজনীয় ও যৌক্তিক ওষুধ প্রেসক্রিপশন',
      },
      desc: {
        en: 'Avoiding unnecessary polypharmacy. Medications are carefully calibrated to clinical guidelines with regular review to reduce side effects.',
        bn: 'অপ্রয়োজনীয় অতিরিক্ত ওষুধ পরিহার করে আন্তর্জাতিক নির্দেশিকা মেনে পরিমিত প্রেসক্রিপশন।',
      },
    },
    {
      title: {
        en: 'Bangladeshi Lifestyle & Dietary Counseling',
        bn: 'দেশীয় খাদ্যাভ্যাস ও জীবনধারা পরামর্শ',
      },
      desc: {
        en: 'Practical, realistic advice tailored to local diets (managing carbohydrate/rice portions, cooking oil, salt restrictions, and achievable daily walks).',
        bn: 'আমাদের দেশের খাদ্যাভ্যাস (ভাত, তেল, লবণ নিয়ন্ত্রণ) ও বাস্তবসম্মত হাঁটার নিয়মাবলী।',
      },
    },
    {
      title: {
        en: 'Transparent Health Explanations',
        bn: 'সহজ ভাষায় রোগ ও রিপোর্ট বুঝিয়ে বলা',
      },
      desc: {
        en: 'Explaining test results, ECGs, and echo reports in simple everyday language so patients and family members feel empowered and confident.',
        bn: 'ইসিজি ও ইকো রিপোর্ট জটিল ডাক্তারি ভাষা এড়িয়ে সহজ ভাষায় রোগী ও স্বজনদের বুঝিয়ে দেওয়া।',
      },
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-semibold text-teal-800 tracking-wider uppercase mb-2">
            {lang === 'en' ? 'Clinical Ethos & Profile' : 'চিকিৎসা দর্শন ও পরিচিতি'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {lang === 'en'
              ? 'Dedicated to Patient-Centric Cardiovascular Care Across Dhaka'
              : 'ঢাকা ও দেশজুড়ে রোগীদের নিবেদিত হৃদরোগ ও মেডিসিন সেবা'}
          </h2>
          <div className="h-1 w-16 bg-teal-600 rounded-full mt-4" />
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Professional Story (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
            <p>
              {lang === 'en' ? (
                <>
                  <strong className="text-slate-900 font-semibold">{DOCTOR_PROFILE.name.en}</strong> is a senior consultant physician and clinical cardiologist based in Dhaka, Bangladesh. With over 14 years of clinical practice, he combines rigorous post-graduate fellowship training with a warm, empathetic approach to adult internal medicine and cardiology.
                </>
              ) : (
                <>
                  <strong className="text-slate-900 font-semibold">{DOCTOR_PROFILE.name.bn}</strong> ঢাকার একজন সিনিয়র কনসালট্যান্ট ফিজিশিয়ান ও ক্লিনিক্যাল কার্ডিওলজিস্ট। ১৪ বছরেরও বেশি সময়ের পেশাগত অভিজ্ঞতায় তিনি প্রাপ্তবয়স্ক মেডিসিন ও হৃদরোগ চিকিৎসায় আধুনিক প্রমাণ-ভিত্তিক পদ্ধতির সাথে আন্তরিক রোগী সেবার সমন্বয় করে আসছেন।
                </>
              )}
            </p>

            <p>
              {lang === 'en' ? (
                <>
                  His clinical practice focuses on proactive cardiovascular risk prevention, resistant hypertension control, comprehensive diabetes and lipid management, and long-term care for ischemic heart disease. Rather than treating lab reports in isolation, he treats the whole person—taking into account emotional stress, family dynamics, and practical daily habits.
                </>
              ) : (
                <>
                  তার চেম্বার সেবায় উচ্চ রক্তচাপ নিয়ন্ত্রণ, হৃদরোগের ঝুঁকি আগেভাগে সনাক্তকরণ, ডায়াবেটিস ও কোলেস্টেরল নিয়ন্ত্রণ এবং দীর্ঘমেয়াদী হার্ট কেয়ারে বিশেষ গুরুত্ব দেওয়া হয়। কেবল টেস্টের রিপোর্টের ওপর নির্ভর না করে তিনি রোগীর দৈনন্দিন জীবনযাত্রা, মানসিক চাপ ও সার্বিক সুস্থতাকে বিবেচনায় রাখেন।
                </>
              )}
            </p>

            {/* Language & Cultural Competency Badge row */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200/80 rounded-lg">
                <Languages className="w-4 h-4 text-teal-700 shrink-0" />
                <span>
                  <strong>{lang === 'en' ? 'Languages' : 'ভাষা'}:</strong> বাংলা (Native), English (Fluent), Sylheti & Chittagonian dial.
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200/80 rounded-lg">
                <Stethoscope className="w-4 h-4 text-teal-700 shrink-0" />
                <span>
                  <strong>{lang === 'en' ? 'Chamber Base' : 'চেম্বার এলাকা'}:</strong> Dhanmondi & Uttara, Dhaka
                </span>
              </div>
            </div>
          </div>

          {/* Right: Modern Chamber Environment Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-[16/9] lg:aspect-[4/3] bg-slate-100">
              {/* Fallback container */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-teal-900 flex flex-col items-center justify-center p-6 text-white text-center">
                <HeartHandshake className="w-12 h-12 text-teal-300 mb-2 opacity-80" />
                <p className="text-base font-semibold">{lang === 'en' ? 'Modern Consultation Chambers' : 'আধুনিক কনসালটেশন চেম্বার'}</p>
                <p className="text-xs text-slate-300">Dhaka, Bangladesh</p>
              </div>

              <img
                src={DOCTOR_IMAGES.chamber}
                alt={lang === 'en' ? 'Doctor consultation chamber interior' : 'ডক্টরস চেম্বারের অভ্যন্তর'}
                referrerPolicy="no-referrer"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />

              <div className="absolute bottom-3 inset-x-3 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">
                  {lang === 'en' ? 'Comfortable, Private Consultation Suite' : 'শান্ত ও আধুনিক চেম্বার পরিবেশ'}
                </span>
                <span className="text-teal-700 font-medium">Dhaka</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Care */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {carePrinciples.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50/70 border border-slate-200/80 rounded-xl hover:bg-white hover:border-teal-300/80 hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc[lang]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
