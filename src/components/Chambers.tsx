import React, { useState } from 'react';
import { CHAMBERS, Chamber, Language } from '../data/doctorData';
import { MapPin, Clock, Calendar, Phone, MessageSquare, ExternalLink, Check, Navigation, Building } from 'lucide-react';

interface ChambersProps {
  lang: Language;
  onBookChamber: (chamberId: string) => void;
}

export const Chambers: React.FC<ChambersProps> = ({ lang, onBookChamber }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredChambers =
    activeTab === 'all'
      ? CHAMBERS
      : CHAMBERS.filter((c) => c.id === activeTab);

  return (
    <section id="chambers" className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs sm:text-sm font-semibold text-teal-800 tracking-wider uppercase mb-2">
            {lang === 'en' ? 'Locations & Visiting Schedules' : 'চেম্বার অবস্থান ও সময়সূচি'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {lang === 'en'
              ? 'Chamber Locations in Dhaka & Chattogram'
              : 'ঢাকা ও চট্টগ্রামের চেম্বার লোকেশন ও সিডিউল'}
          </h2>
          <div className="h-1 w-16 bg-teal-600 rounded-full mt-4" />
        </div>

        {/* Filter Tabs (Interactive filter buttons) */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-fit mb-10 overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'en' ? 'All Chambers (3)' : 'সকল চেম্বার (৩)'}
          </button>
          {CHAMBERS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === c.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {c.location[lang]}
            </button>
          ))}
        </div>

        {/* Chambers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {filteredChambers.map((chamber) => (
            <div
              key={chamber.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-teal-400/80 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Unboxed top label */}
                <div className="flex items-center justify-between gap-2 text-xs font-semibold text-teal-800 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-teal-600" />
                    <span>{chamber.badge[lang]}</span>
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">
                    {chamber.location[lang]}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                  {chamber.name[lang]}
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 my-5">
                  {/* Address */}
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800">{chamber.address[lang]}</p>
                      <p className="text-teal-700 text-xs mt-0.5">{chamber.room[lang]}</p>
                    </div>
                  </div>

                  {/* Visiting Days */}
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {lang === 'en' ? 'Visiting Days' : 'রোগী দেখার দিন'}:
                      </p>
                      <p className="text-slate-700">{chamber.days[lang]}</p>
                    </div>
                  </div>

                  {/* Visiting Hours */}
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {lang === 'en' ? 'Visiting Hours' : 'সময়সূচি'}:
                      </p>
                      <p className="text-slate-700 font-medium">{chamber.time[lang]}</p>
                    </div>
                  </div>
                </div>

                {/* Consultation Fees Box */}
                <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl mb-6">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {lang === 'en' ? 'Consultation Fee Structure' : 'পরামর্শ ফি'}
                  </div>
                  <div className="flex items-center justify-between text-xs py-1 border-b border-slate-200/60">
                    <span className="text-slate-600">{lang === 'en' ? 'New Patient' : 'নতুন রোগী'}</span>
                    <span className="font-bold text-slate-900">{chamber.feeNew[lang]}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1 pt-1.5">
                    <span className="text-slate-600">{lang === 'en' ? 'Follow-up (30d)' : 'ফলো-আপ (৩০ দিন)'}</span>
                    <span className="font-semibold text-teal-800">{chamber.feeFollowup[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons for this chamber */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onBookChamber(chamber.id)}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>{lang === 'en' ? 'Request Serial at this Chamber' : 'এই চেম্বারে সিরিয়াল নিন'}</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${chamber.phone.replace(/[\s-]/g, '')}`}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>{lang === 'en' ? 'Call Desk' : 'হটলাইন কল'}</span>
                  </a>

                  <a
                    href={`https://wa.me/${chamber.whatsapp}?text=${encodeURIComponent(
                      lang === 'en'
                        ? `Hello, I would like to enquire about serial booking at ${chamber.name.en}.`
                        : `আসসালামু আলাইকুম, ${chamber.name.bn}-এ ডাঃ শরিফুল আলমের সিরিয়াল বুকিং সম্পর্কে জানতে চাচ্ছি।`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <a
                  href={`https://maps.google.com/?q=${chamber.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 text-[11px] text-slate-500 hover:text-teal-700 transition-colors pt-1"
                >
                  <Navigation className="w-3 h-3 text-teal-600" />
                  <span>{lang === 'en' ? 'Open in Google Maps / Directions' : 'গুগল ম্যাপে লোকেশন দেখুন'}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Helpful Serial Rules Notice */}
        <div className="p-5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-600 leading-relaxed flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="font-bold text-slate-900">
              {lang === 'en' ? 'Chamber Serial Note:' : 'সিরিয়াল সংক্রান্ত সাধারণ নিয়মাবলী:'}
            </span>{' '}
            {lang === 'en'
              ? 'Serials are confirmed on a first-come, first-served basis. Patients are requested to report at the chamber 20 minutes before their designated serial window with previous diagnostic reports.'
              : 'আগে আসলে আগে পাবেন ভিত্তিতে সিরিয়াল দেওয়া হয়। নির্ধারিত সময়ের অন্তত ২০ মিনিট পূর্বে পূর্বের সকল টেস্ট রিপোর্টসহ চেম্বারে উপস্থিত থাকার অনুরোধ করা হচ্ছে।'}
          </div>
          <div className="shrink-0 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200">
            {lang === 'en' ? 'Hotline: +880 1711-000000' : 'সিরিয়াল হেল্পলাইন: ০১৭১১-০০০০০০'}
          </div>
        </div>

      </div>
    </section>
  );
};
