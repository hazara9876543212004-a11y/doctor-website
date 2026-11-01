import React, { useState } from 'react';
import { SPECIALTIES, DOCTOR_IMAGES, Language, Specialty } from '../data/doctorData';
import { Activity, Heart, Stethoscope, Zap, Scale, ShieldCheck, ArrowRight, Check, Search } from 'lucide-react';

interface SpecialtiesProps {
  lang: Language;
  onSelectSpecialty: (specialtyTitle: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ lang, onSelectSpecialty }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [imageLoaded, setImageLoaded] = useState(false);

  const getSpecialtyIcon = (id: string) => {
    switch (id) {
      case 'hypertension':
        return <Activity className="w-5 h-5 text-teal-700" />;
      case 'coronary':
        return <Heart className="w-5 h-5 text-rose-600" />;
      case 'echo':
        return <Stethoscope className="w-5 h-5 text-sky-600" />;
      case 'arrhythmia':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'metabolic':
        return <Scale className="w-5 h-5 text-indigo-600" />;
      case 'preventive':
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="specialties" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-teal-800 tracking-wider uppercase mb-2">
            {lang === 'en' ? 'Clinical Focus & Care' : 'চিকিৎসা ক্ষেত্র ও সেবা'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {lang === 'en'
              ? 'Comprehensive Adult Medicine & Cardiovascular Specialties'
              : 'হৃদরোগ ও মেডিসিনের বিশেষায়িত চিকিৎসা সেবা'}
          </h2>
          <div className="h-1 w-16 bg-teal-600 rounded-full mt-4" />
        </div>

        {/* Diagnostic Feature Banner with Desk Image */}
        <div className="mb-14 p-6 sm:p-8 bg-slate-900 text-white rounded-2xl overflow-hidden relative shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                {lang === 'en' ? 'Modern Diagnostic Standards' : 'আধুনিক রোগ নির্ণয় মান'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white text-balance">
                {lang === 'en'
                  ? 'Precision Electrocardiography & Clinical Cardiac Evaluation'
                  : 'সঠিক ইসিজি মূল্যায়ন ও ক্লিনিক্যাল কার্ডিয়াক ডায়াগনস্টিকস'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                {lang === 'en'
                  ? 'Consultations feature detailed review of resting 12-lead ECG, blood pressure variability logs, blood lipids, and echocardiography reports for individualized therapeutic planning.'
                  : 'প্রতিটি পরামর্শে ১২-লিড ইসিজি, রক্তচাপের দৈনিক রেকর্ড, লিপিড প্রোফাইল এবং ইকোকার্ডিওগ্রাফি রিপোর্টের পুঙ্খানুপুঙ্খ বিশ্লেষণ করে চিকিৎসা পরিকল্পনা করা হয়।'}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700">
                {/* Fallback */}
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center p-4 text-center">
                  <Stethoscope className="w-10 h-10 text-teal-400 opacity-60" />
                </div>
                <img
                  src={DOCTOR_IMAGES.consultation}
                  alt={lang === 'en' ? 'Clinical diagnostic equipment on medical desk' : 'মেডিকেল ডায়াগনস্টিক পরীক্ষার সরঞ্জাম'}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 6 Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              className="p-6 bg-slate-50/60 border border-slate-200/90 rounded-xl hover:bg-white hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-white border border-slate-200/80 rounded-lg shadow-2xs">
                    {getSpecialtyIcon(spec.id)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {spec.title[lang]}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {spec.shortDesc[lang]}
                </p>

                {/* Common signs */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {lang === 'en' ? 'Common Symptoms Evaluated' : 'যেসব লক্ষণে পরামর্শ জরুরি'}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {spec.symptoms[lang].map((symp, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                        <span>{symp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diagnostic methods */}
                <div className="pt-3 border-t border-slate-200/70 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">
                    {lang === 'en' ? 'Key tests reviewed: ' : 'প্রাসঙ্গিক পরীক্ষা: '}
                  </span>
                  <span>{spec.diagnosticTools[lang]}</span>
                </div>
              </div>

              {/* Book for this condition CTA */}
              <div className="pt-5 mt-4 border-t border-slate-200/60">
                <button
                  onClick={() => onSelectSpecialty(spec.title[lang])}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100/80 rounded-lg transition-colors cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Book Enquiry For This Condition' : 'এই সমস্যায় সিরিয়াল বুকিং'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
