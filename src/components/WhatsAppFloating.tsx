import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall } from 'lucide-react';
import { Language, DOCTOR_PROFILE } from '../data/doctorData';

interface WhatsAppFloatingProps {
  lang: Language;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '8801711000000';

  const quickMessages = [
    {
      en: 'Hello, I want to book a serial at Dhanmondi chamber.',
      bn: 'আসসালামু আলাইকুম, আমি ধানমন্ডি চেম্বারে সিরিয়াল নিতে চাই।',
    },
    {
      en: 'Are there available serials for today evening?',
      bn: 'আজকের সান্ধ্যকালীন চেম্বারে সিরিয়াল খালি আছে কি?',
    },
    {
      en: 'I would like to show my follow-up test reports.',
      bn: 'আমি ফলো-আপ টেস্টের রিপোর্ট দেখাতে চাচ্ছি।',
    },
  ];

  const handleLaunchWhatsApp = (msg: string) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick chat popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-white text-sm">
                DA
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">
                  {lang === 'en' ? "Doctor's Serial Desk" : 'ডক্টরস সিরিয়াল ডেস্ক'}
                </h4>
                <p className="text-[11px] text-emerald-100">
                  {lang === 'en' ? 'Online · Replies during chamber hours' : 'অনলাইন · চেম্বার সময়ে দ্রুত রেসপন্স'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-2xs">
              {lang === 'en'
                ? `Assalamu Alaikum! How can we assist you with ${DOCTOR_PROFILE.name.en}'s chamber serial or visiting hours today?`
                : `আসসালামু আলাইকুম! ${DOCTOR_PROFILE.name.bn}-এর চেম্বার সিরিয়াল বা সময়সূচি জানতে কিভাবে সাহায্য করতে পারি?`}
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-1">
                {lang === 'en' ? 'Quick Enquiries' : 'দ্রুত প্রশ্ন নির্বাচন করুন'}:
              </p>
              {quickMessages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLaunchWhatsApp(item[lang])}
                  className="w-full text-left p-2.5 bg-white hover:bg-emerald-50/70 border border-slate-200 hover:border-emerald-300 rounded-lg text-xs text-slate-800 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="line-clamp-1">{item[lang]}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between">
            <a
              href="tel:+8801711000000"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-teal-600" />
              <span>{lang === 'en' ? 'Or Call Serial Helpline' : 'বা সরাসরি কল দিন'}</span>
            </a>
            <button
              onClick={() => handleLaunchWhatsApp(lang === 'en' ? 'Hello Dr. Shariful Alam Chamber Assistant' : 'আসসালামু আলাইকুম')}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Open Chat' : 'চ্যাট শুরু'}
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer group"
        aria-label="WhatsApp chamber serial contact"
      >
        <MessageSquare className="w-5 h-5 text-white" />
        <span className="text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
          {lang === 'en' ? 'WhatsApp Serial' : 'হোয়াটসঅ্যাপ সিরিয়াল'}
        </span>
      </button>
    </div>
  );
};
