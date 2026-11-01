import React, { useState, useEffect } from 'react';
import { CHAMBERS, Language, Chamber } from '../data/doctorData';
import { Calendar, Clock, User, Phone, CheckCircle, MessageSquare, Copy, Printer, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface AppointmentFormProps {
  lang: Language;
  selectedChamberId?: string;
  prefilledSymptom?: string;
}

interface BookingResult {
  serialToken: string;
  patientName: string;
  phone: string;
  age: string;
  gender: string;
  chamber: Chamber;
  visitType: string;
  date: string;
  timeSlot: string;
  symptoms: string;
  estimatedWindow: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  lang,
  selectedChamberId,
  prefilledSymptom,
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [chamberId, setChamberId] = useState(selectedChamberId || 'dhanmondi');
  const [visitType, setVisitType] = useState('new');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('evening');
  const [symptoms, setSymptoms] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(null);
  const [copied, setCopied] = useState(false);

  // Update chamberId if prop changes
  useEffect(() => {
    if (selectedChamberId) {
      setChamberId(selectedChamberId);
    }
  }, [selectedChamberId]);

  // Update symptoms if prefilledSymptom changes
  useEffect(() => {
    if (prefilledSymptom) {
      setSymptoms(prefilledSymptom);
    }
  }, [prefilledSymptom]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!patientName.trim()) {
      newErrors.patientName = lang === 'en' ? 'Patient full name is required' : 'রোগীর পুরো নাম প্রদান করুন';
    }

    // Bangladesh phone validation: 11 digits starting with 01, or +8801...
    const cleanPhone = phone.replace(/[\s-]/g, '');
    const bdPhoneRegex = /^(?:\+?8801|01)[3-9]\d{8}$/;
    if (!cleanPhone) {
      newErrors.phone = lang === 'en' ? 'Mobile number is required' : 'মোবাইল নম্বর প্রদান করুন';
    } else if (!bdPhoneRegex.test(cleanPhone)) {
      newErrors.phone = lang === 'en'
        ? 'Enter a valid 11-digit Bangladesh mobile number (e.g. 017XXXXXXXX)'
        : 'সঠিক ১১ সংখ্যার বাংলাদেশি মোবাইল নম্বর লিখুন (যেমন: ০১৭xxxxxxxx)';
    }

    if (!age || isNaN(Number(age)) || Number(age) <= 0 || Number(age) > 120) {
      newErrors.age = lang === 'en' ? 'Please enter a valid age' : 'সঠিক বয়স প্রদান করুন';
    }

    if (!preferredDate) {
      newErrors.preferredDate = lang === 'en' ? 'Please select a preferred date' : 'তারিখ নির্বাচন করুন';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate serial token generation
    setTimeout(() => {
      const selectedChamber = CHAMBERS.find((c) => c.id === chamberId) || CHAMBERS[0];
      const randomSeq = Math.floor(1000 + Math.random() * 9000);
      const chamberCode = selectedChamber.id.substring(0, 3).toUpperCase();
      const generatedToken = `TOKEN-${chamberCode}-${randomSeq}`;

      const result: BookingResult = {
        serialToken: generatedToken,
        patientName,
        phone,
        age,
        gender: gender === 'Male' ? (lang === 'en' ? 'Male' : 'পুরুষ') : (lang === 'en' ? 'Female' : 'মহিলা'),
        chamber: selectedChamber,
        visitType:
          visitType === 'new'
            ? lang === 'en' ? 'New Consultation' : 'নতুন রোগী'
            : visitType === 'followup'
            ? lang === 'en' ? 'Follow-up (within 30 days)' : 'ফলো-আপ'
            : lang === 'en' ? 'Report Review' : 'রিপোর্ট দেখানো',
        date: preferredDate,
        timeSlot:
          timeSlot === 'evening'
            ? lang === 'en' ? 'Evening Consultation (5:30 PM – 9:30 PM)' : 'সান্ধ্যকালীন সেশন'
            : lang === 'en' ? 'Morning / Early Slot' : 'সকালের স্লট',
        symptoms: symptoms || (lang === 'en' ? 'General Cardiovascular Checkup' : 'সাধারণ চেকআপ'),
        estimatedWindow:
          timeSlot === 'evening'
            ? '6:15 PM – 7:00 PM (Report 20m early)'
            : '11:00 AM – 11:45 AM (Report 20m early)',
      };

      setBookingResult(result);
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopyDetails = () => {
    if (!bookingResult) return;
    const text = `Dr. Shariful Alam Serial Enquiry
Token: ${bookingResult.serialToken}
Patient: ${bookingResult.patientName} (${bookingResult.age}y, ${bookingResult.gender})
Phone: ${bookingResult.phone}
Chamber: ${bookingResult.chamber.name.en}
Date: ${bookingResult.date}
Session: ${bookingResult.timeSlot}
Symptom: ${bookingResult.symptoms}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const getWhatsAppMessageUrl = () => {
    if (!bookingResult) return '#';
    const text =
      lang === 'en'
        ? `Hello, I submitted an appointment enquiry on Dr. Shariful Alam's portfolio.
Token: ${bookingResult.serialToken}
Patient: ${bookingResult.patientName} (${bookingResult.age}y)
Mobile: ${bookingResult.phone}
Chamber: ${bookingResult.chamber.name.en}
Preferred Date: ${bookingResult.date}
Session: ${bookingResult.timeSlot}
Symptoms: ${bookingResult.symptoms}
Please confirm serial availability.`
        : `আসসালামু আলাইকুম, আমি ডাঃ শরিফুল আলমের চেম্বার সিরিয়াল বুকিংয়ের জন্য তথ্য জমা দিয়েছি।
টোকেন: ${bookingResult.serialToken}
রোগীর নাম: ${bookingResult.patientName} (${bookingResult.age} বছর)
মোবাইল: ${bookingResult.phone}
চেম্বার: ${bookingResult.chamber.name.bn}
তারিখ: ${bookingResult.date}
সেশন: ${bookingResult.timeSlot}
লক্ষণ: ${bookingResult.symptoms}
দয়া করে সিরিয়াল নিশ্চিত করুন।`;

    return `https://wa.me/${bookingResult.chamber.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="appointment" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-teal-800 tracking-wider uppercase mb-2">
            {lang === 'en' ? 'Serial Reservation & Consultation' : 'সিরিয়াল বুকিং ও পরামর্শ'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {lang === 'en'
              ? 'Appointment & Serial Booking Enquiry'
              : 'চেম্বার অ্যাপয়েন্টমেন্ট ও সিরিয়াল অনুসন্ধান'}
          </h2>
          <div className="h-1 w-16 bg-teal-600 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The Form OR Success Voucher (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            
            {bookingResult ? (
              /* Success Voucher Screen */
              <div className="space-y-6">
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-700 shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-teal-950">
                      {lang === 'en' ? 'Enquiry Token Generated Successfully!' : 'সিরিয়াল টোকেন সফলভাবে তৈরি হয়েছে!'}
                    </h3>
                    <p className="text-xs text-teal-800">
                      {lang === 'en'
                        ? 'Your serial request has been logged. Please keep this token or send it directly via WhatsApp.'
                        : 'আপনার সিরিয়াল অনুরোধ নথিভুক্ত হয়েছে। টোকেনটি সংরক্ষণ করুন অথবা সরাসরি হোয়াটসঅ্যাপে নিশ্চিত করুন।'}
                    </p>
                  </div>
                </div>

                {/* Printable / Copyable Serial Card */}
                <div className="bg-white border-2 border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                        {lang === 'en' ? 'Official Serial Token' : 'সিরিয়াল টোকেন'}
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-teal-800 font-mono tracking-tight">
                        {bookingResult.serialToken}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-slate-800">{bookingResult.chamber.location[lang]}</div>
                      <div className="text-xs text-slate-500">{bookingResult.date}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-slate-500 block">{lang === 'en' ? 'Patient Name' : 'রোগীর নাম'}:</span>
                      <strong className="text-slate-900">{bookingResult.patientName}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{lang === 'en' ? 'Mobile Phone' : 'মোবাইল নম্বর'}:</span>
                      <strong className="text-slate-900 font-mono">{bookingResult.phone}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{lang === 'en' ? 'Age & Gender' : 'বয়স ও লিঙ্গ'}:</span>
                      <strong className="text-slate-900">{bookingResult.age} y / {bookingResult.gender}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{lang === 'en' ? 'Visit Category' : 'পরামর্শ ধরন'}:</span>
                      <strong className="text-slate-900">{bookingResult.visitType}</strong>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-500 block">{lang === 'en' ? 'Chamber' : 'চেম্বার'}:</span>
                      <strong className="text-slate-900">{bookingResult.chamber.name[lang]}</strong>
                      <div className="text-xs text-slate-600 mt-0.5">{bookingResult.chamber.address[lang]} ({bookingResult.chamber.room[lang]})</div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-500 block">{lang === 'en' ? 'Estimated Reporting Window' : 'উপস্থিতির আনুমানিক সময়'}:</span>
                      <div className="font-semibold text-teal-900 bg-teal-50 px-3 py-1.5 rounded-lg inline-block mt-1">
                        {bookingResult.estimatedWindow}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons for the Token */}
                <div className="space-y-3 pt-2">
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Forward to Chamber WhatsApp for Confirmation' : 'হোয়াটসঅ্যাপে সিরিয়াল নিশ্চিত করতে পাঠান'}</span>
                  </a>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleCopyDetails}
                      type="button"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
                    >
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>{copied ? (lang === 'en' ? 'Copied!' : 'কপি হয়েছে!') : (lang === 'en' ? 'Copy Details' : 'তথ্য কপি করুন')}</span>
                    </button>

                    <button
                      onClick={() => window.print()}
                      type="button"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
                    >
                      <Printer className="w-4 h-4 text-slate-500" />
                      <span>{lang === 'en' ? 'Print Slip' : 'প্রিন্ট করুন'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setBookingResult(null);
                      setPatientName('');
                      setPhone('');
                      setAge('');
                      setSymptoms('');
                    }}
                    type="button"
                    className="w-full text-center text-xs text-slate-500 hover:text-slate-800 underline pt-2 cursor-pointer"
                  >
                    {lang === 'en' ? 'Submit another appointment enquiry' : 'আরেকটি নতুন বুকিং ফরম পূরণ করুন'}
                  </button>
                </div>
              </div>
            ) : (
              /* The Appointment Input Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-200/80 pb-3 mb-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    {lang === 'en' ? 'Patient & Visit Details' : 'রোগী ও সাক্ষাতের বিবরণ'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === 'en'
                      ? 'Please complete the details below to generate your serial reservation token.'
                      : 'সিরিয়াল টোকেন পেতে অনুগ্রহ করে নিচের তথ্যগুলো পূরণ করুন।'}
                  </p>
                </div>

                {/* Patient Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                    {lang === 'en' ? 'Patient Full Name *' : 'রোগীর পুরো নাম *'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder={lang === 'en' ? 'e.g. Md. Anisur Rahman' : 'যেমন: মোঃ আনিসুর রহমান'}
                      className={`w-full pl-10 pr-4 py-2.5 bg-white text-slate-900 rounded-xl border ${
                        errors.patientName ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300'
                      } text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all`}
                    />
                  </div>
                  {errors.patientName && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.patientName}</span>
                    </p>
                  )}
                </div>

                {/* Phone & Age row */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-7">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                      {lang === 'en' ? 'Mobile Number (Bangladesh) *' : 'মোবাইল নম্বর *'}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01711-XXXXXX"
                        className={`w-full pl-10 pr-4 py-2.5 bg-white text-slate-900 rounded-xl border ${
                          errors.phone ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300'
                        } text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all font-mono`}
                      />
                    </div>
                    {errors.phone ? (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    ) : (
                      <span className="text-[11px] text-slate-500 mt-0.5 block">
                        {lang === 'en' ? '11-digit mobile number for serial SMS/WhatsApp' : 'এসএমএস বা হোয়াটসঅ্যাপের জন্য ১১ সংখ্যার নম্বর'}
                      </span>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                      {lang === 'en' ? 'Age *' : 'বয়স *'}
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="115"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="45"
                      className={`w-full px-3 py-2.5 bg-white text-slate-900 rounded-xl border ${
                        errors.age ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300'
                      } text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all font-mono`}
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                      {lang === 'en' ? 'Gender' : 'লিঙ্গ'}
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white text-slate-900 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all"
                    >
                      <option value="Male">{lang === 'en' ? 'Male' : 'পুরুষ'}</option>
                      <option value="Female">{lang === 'en' ? 'Female' : 'মহিলা'}</option>
                      <option value="Other">{lang === 'en' ? 'Other' : 'অন্যান্য'}</option>
                    </select>
                  </div>
                </div>

                {/* Chamber Selection */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    {lang === 'en' ? 'Select Preferred Chamber *' : 'চেম্বার নির্বাচন করুন *'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {CHAMBERS.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setChamberId(c.id)}
                        className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                          chamberId === c.id
                            ? 'bg-teal-50/80 border-teal-600 ring-1 ring-teal-600'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-xs font-bold text-slate-900">{c.location[lang]}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{c.name[lang]}</div>
                        <div className="text-[11px] font-semibold text-teal-700 mt-1">{c.time[lang]}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date and Session row with Quick Date Chips */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-800">
                      {lang === 'en' ? 'Preferred Date *' : 'পছন্দের তারিখ *'}
                    </label>
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      {lang === 'en' ? 'Serial Slots Available' : 'সিরিয়াল স্লট খালি আছে'}
                    </span>
                  </div>

                  {/* Quick Date Chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {[
                      { days: 0, label: lang === 'en' ? 'Today' : 'আজ' },
                      { days: 1, label: lang === 'en' ? 'Tomorrow' : 'আগামীকাল' },
                      { days: 2, label: lang === 'en' ? '+2 Days' : 'পরশু' },
                      { days: 3, label: lang === 'en' ? '+3 Days' : '৩ দিন পর' },
                    ].map((chip) => {
                      const d = new Date();
                      d.setDate(d.getDate() + chip.days);
                      const yyyy = d.getFullYear();
                      const mm = String(d.getMonth() + 1).padStart(2, '0');
                      const dd = String(d.getDate()).padStart(2, '0');
                      const isoDate = `${yyyy}-${mm}-${dd}`;
                      const isSelected = preferredDate === isoDate;

                      return (
                        <button
                          key={chip.days}
                          type="button"
                          onClick={() => setPreferredDate(isoDate)}
                          className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                            isSelected
                              ? 'bg-teal-700 text-white border-teal-700 shadow-2xs'
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {chip.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className={`w-full px-3.5 py-2.5 bg-white text-slate-900 rounded-xl border ${
                          errors.preferredDate ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300'
                        } text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all`}
                      />
                    </div>

                    <div>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white text-slate-900 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all"
                      >
                        <option value="evening">
                          {lang === 'en' ? 'Evening Session (5:30 PM – 9:30 PM)' : 'সান্ধ্যকালীন সেশন (৫:৩০ - ৯:৩০)'}
                        </option>
                        <option value="morning">
                          {lang === 'en' ? 'Morning / Early Slot (10:00 AM – 1:00 PM)' : 'সকালের স্লট (১০:০০ - ১:০০)'}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Visit Type Segmented Buttons */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    {lang === 'en' ? 'Consultation Type' : 'পরামর্শের ধরন'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'new', label: lang === 'en' ? 'New Patient' : 'নতুন রোগী' },
                      { id: 'followup', label: lang === 'en' ? 'Follow-up (30d)' : 'ফলো-আপ' },
                      { id: 'reports', label: lang === 'en' ? 'Report Check' : 'রিপোর্ট দেখানো' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setVisitType(type.id)}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer text-center ${
                          visitType === type.id
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Symptoms / Chief Complaint */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                    {lang === 'en' ? 'Primary Health Concern / Symptoms' : 'প্রধান শারীরিক সমস্যা বা লক্ষণ (সংক্ষেপে)'}
                  </label>
                  <textarea
                    rows={2}
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder={
                      lang === 'en'
                        ? 'e.g. High blood pressure fluctuations, chest tightness upon exertion...'
                        : 'যেমন: রক্তচাপ ওঠানামা, পরিশ্রমের সময় বুকে চাপ, রিপোর্ট পর্যালোচনা...'
                    }
                    className="w-full px-3.5 py-2.5 bg-white text-slate-900 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 active:bg-teal-800 disabled:bg-slate-400 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>
                    {isSubmitting
                      ? lang === 'en' ? 'Generating Serial Token...' : 'সিরিয়াল তৈরি হচ্ছে...'
                      : lang === 'en' ? 'Generate Chamber Serial Token' : 'চেম্বার সিরিয়াল টোকেন নিন'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>
                    {lang === 'en'
                      ? 'No prepayment required. Fee payable at the chamber desk.'
                      : 'কোন অগ্রিম পেমেন্টের প্রয়োজন নেই। চেম্বারে এসে ফি পরিশোধযোগ্য।'}
                  </span>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Serial Assistance & Urgent Help (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone & WhatsApp Help */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-5">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-teal-400 font-bold">
                  {lang === 'en' ? 'Direct Assistant Helpline' : 'সহকারী হেল্পলাইন'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {lang === 'en' ? 'Prefer Booking Over Phone or WhatsApp?' : 'ফোনে বা সরাসরি হোয়াটসঅ্যাপে সিরিয়াল চান?'}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? 'Our chamber coordinators assist with urgent appointment queries, same-day serial inquiries, and location guidance daily from 10:00 AM to 10:00 PM.'
                  : 'আমাদের চেম্বার সমন্বয়কারী প্রতিদিন সকাল ১০:০০ থেকে রাত ১০:০০ পর্যন্ত সরাসরি ফোন ও হোয়াটসঅ্যাপে সিরিয়াল বুকিং সহায়তা প্রদান করেন।'}
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="tel:+8801711000000"
                  className="flex items-center justify-between p-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-400" />
                    <div className="text-left">
                      <div className="text-xs text-slate-400">{lang === 'en' ? 'Direct Serial Call' : 'সরাসরি ফোন করুন'}</div>
                      <div className="text-sm font-bold font-mono text-white">+880 1711-000000</div>
                    </div>
                  </div>
                  <span className="text-xs text-teal-400 font-semibold">{lang === 'en' ? 'Call Now' : 'কল দিন'}</span>
                </a>

                <a
                  href={`https://wa.me/8801711000000?text=${encodeURIComponent(
                    lang === 'en'
                      ? 'Hello, I would like to book a serial for Dr. Shariful Alam.'
                      : 'আসসালামু আলাইকুম, ডাঃ শরিফুল আলমের চেম্বার সিরিয়াল সম্পর্কে জানতে চাচ্ছি।'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                    <div className="text-left">
                      <div className="text-xs text-emerald-300">{lang === 'en' ? 'WhatsApp Coordinator' : 'হোয়াটসঅ্যাপ হেল্পলাইন'}</div>
                      <div className="text-sm font-bold font-mono text-white">+880 1711-000000</div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold">{lang === 'en' ? 'Chat Now' : 'চ্যাট করুন'}</span>
                </a>
              </div>
            </div>

            {/* Checklist Before Visit */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
                {lang === 'en' ? 'Chamber Visit Checklist' : 'চেম্বারে আসার পূর্বে চেকলিস্ট'}
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Previous Prescriptions' : 'পূর্বের প্রেসক্রিপশন'}:</strong>{' '}
                    {lang === 'en' ? 'Bring your original prescriptions and chronic medicine lists.' : 'পুরাতন প্রেসক্রিপশন ও ওষুধের ফাইল সাথে রাখুন।'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Diagnostic Reports' : 'পূর্বের টেস্ট রিপোর্ট'}:</strong>{' '}
                    {lang === 'en' ? 'ECG, Echocardiogram, HbA1c, and Lipid profile reports.' : 'ইসিজি, ইকোকার্ডিওগ্রাম ও রক্ত পরীক্ষার সাম্প্রতিক রিপোর্ট।'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'en' ? 'Arrival Timing' : 'উপস্থিতির সময়'}:</strong>{' '}
                    {lang === 'en' ? 'Arrive 20 minutes before your serial window.' : 'সিরিয়াল সময়ের ২০ মিনিট আগে পৌঁছান।'}
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
