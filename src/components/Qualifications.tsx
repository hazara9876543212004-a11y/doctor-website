import React from 'react';
import { QUALIFICATIONS, EXPERIENCE_TIMELINE, DOCTOR_PROFILE, Language } from '../data/doctorData';
import { GraduationCap, Briefcase, Award, ShieldAlert, CheckCircle, Building2, Calendar } from 'lucide-react';

interface QualificationsProps {
  lang: Language;
}

export const Qualifications: React.FC<QualificationsProps> = ({ lang }) => {
  return (
    <section id="qualifications" className="py-16 lg:py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-teal-800 tracking-wider uppercase mb-2">
            {lang === 'en' ? 'Credentials & Clinical Career' : 'শিক্ষাগত যোগ্যতা ও অভিজ্ঞতা'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {lang === 'en'
              ? 'Medical Qualifications & Hospital Experience'
              : 'চিকিৎসা শিক্ষা ও হাসপাতাল সেবার অভিজ্ঞতা'}
          </h2>
          <div className="h-1 w-16 bg-teal-600 rounded-full mt-4" />
        </div>

        {/* Fictional Portfolio Transparency Banner */}
        <div className="mb-12 p-4 sm:p-5 bg-amber-50/80 border border-amber-200 rounded-xl flex items-start gap-3.5 text-xs sm:text-sm text-amber-900">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">
              {lang === 'en' ? 'Portfolio Notice (Fictional Profile):' : 'পোর্টফোলিও বিজ্ঞপ্তি (কাল্পনিক প্রোফাইল):'}
            </span>{' '}
            {lang === 'en'
              ? 'This doctor portfolio represents a fictional medical specialist created for design and demonstration purposes. All educational credentials, institutional affiliations, and BMDC registration numbers are fictional placeholders.'
              : 'এই চিকিৎসকের পোর্টফোলিওটি একটি কাল্পনিক চিকিৎসকের জন্য প্রদর্শনী ও ডিজাইন উদ্দেশ্যে তৈরি। এখানে উল্লেখিত ডিগ্রি, হাসপাতাল ও বিএমডিসি রেজি নম্বর প্রতীকী ও কাল্পনিক।'}
          </div>
        </div>

        {/* 2-Column Section: Left Degrees, Right Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Academic Degrees (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
              <GraduationCap className="w-5 h-5 text-teal-700" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {lang === 'en' ? 'Academic Qualifications' : 'মেডিকেল ডিগ্রি ও ফেলোশিপ'}
              </h3>
            </div>

            <div className="space-y-4">
              {QUALIFICATIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-teal-400/80 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.degree}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-teal-700">
                        {item.institution[lang]}
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded tabular-nums">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {item.description[lang]}
                  </p>

                  <div className="text-[11px] font-medium text-slate-400">
                    {item.fictionalTag[lang]}
                  </div>
                </div>
              ))}
            </div>

            {/* BMDC Verification Note Box */}
            <div className="p-4 bg-teal-50/60 border border-teal-200/80 rounded-xl flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="font-semibold text-teal-950">
                  {DOCTOR_PROFILE.bmdcReg[lang]}
                </span>
              </div>
              <span className="text-teal-700 font-medium">Dhaka, BD</span>
            </div>
          </div>

          {/* Right Column: Hospital Experience Timeline (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
              <Briefcase className="w-5 h-5 text-slate-800" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {lang === 'en' ? 'Hospital Experience & Appointments' : 'হাসপাতাল পদায়ন ও অভিজ্ঞতা'}
              </h3>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {EXPERIENCE_TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-white border-2 border-teal-600 group-hover:bg-teal-600 transition-colors" />

                  <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-slate-300 transition-all">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <span className="text-xs font-semibold text-teal-700 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period[lang]}</span>
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      {item.role[lang]}
                    </h4>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-3">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{item.hospital[lang]}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.details[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clinical Fellowship Note */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-slate-900">
                    {lang === 'en'
                      ? 'International Clinical Observership (Fictional)'
                      : 'আন্তর্জাতিক ক্লিনিক্যাল অবজার্ভারশিপ (কাল্পনিক)'}
                  </div>
                  <div className="text-slate-600 mt-1">
                    {lang === 'en'
                      ? 'Trained in advanced non-invasive cardiac imaging, strain echocardiography, and ambulatory cardiac telemetry protocols.'
                      : 'নন-ইনভেসিভ কার্ডিয়াক ইমেজিং, স্ট্রেন ইকোকার্ডিওগ্রাফি ও আধুনিক মনিটরিংয়ে বিশেষ প্রশিক্ষণ।'}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
