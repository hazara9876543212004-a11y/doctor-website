import React, { useState } from 'react';
import { PATIENT_REVIEWS, PatientReview, Language, CHAMBERS } from '../data/doctorData';
import { Star, CheckCircle, MessageSquarePlus, User, MapPin, X, ThumbsUp, Calendar, Heart } from 'lucide-react';

interface ReviewsProps {
  lang: Language;
}

export const Reviews: React.FC<ReviewsProps> = ({ lang }) => {
  const [reviewsList, setReviewsList] = useState<PatientReview[]>(PATIENT_REVIEWS);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState(false);

  // New review form state
  const [authorName, setAuthorName] = useState('');
  const [authorLocation, setAuthorLocation] = useState('');
  const [authorAge, setAuthorAge] = useState('');
  const [authorRating, setAuthorRating] = useState(5);
  const [authorChamber, setAuthorChamber] = useState('dhanmondi');
  const [authorCondition, setAuthorCondition] = useState('');
  const [authorText, setAuthorText] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const filteredReviews =
    activeFilter === 'all'
      ? reviewsList
      : activeFilter === 'dhanmondi'
      ? reviewsList.filter((r) => r.chamber.en.toLowerCase().includes('dhanmondi'))
      : activeFilter === 'uttara'
      ? reviewsList.filter((r) => r.chamber.en.toLowerCase().includes('uttara'))
      : reviewsList.filter((r) => r.chamber.en.toLowerCase().includes('chattogram'));

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !authorText.trim()) return;

    const chamberObj = CHAMBERS.find((c) => c.id === authorChamber) || CHAMBERS[0];

    const newRev: PatientReview = {
      id: `rev-${Date.now()}`,
      name: {
        en: authorName,
        bn: authorName,
      },
      location: {
        en: authorLocation || 'Dhaka, Bangladesh',
        bn: authorLocation || 'ঢাকা, বাংলাদেশ',
      },
      age: authorAge ? Number(authorAge) : 45,
      rating: authorRating,
      date: {
        en: 'Just now',
        bn: 'এইমাত্র',
      },
      condition: {
        en: authorCondition || 'Cardiovascular Consultation',
        bn: authorCondition || 'হৃদরোগ ও মেডিসিন পরামর্শ',
      },
      chamber: {
        en: chamberObj.name.en,
        bn: chamberObj.name.bn,
      },
      review: {
        en: authorText,
        bn: authorText,
      },
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setModalOpen(false);
      setAuthorName('');
      setAuthorLocation('');
      setAuthorAge('');
      setAuthorCondition('');
      setAuthorText('');
    }, 1800);
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-semibold text-teal-800 tracking-wider uppercase mb-2">
              {lang === 'en' ? 'Patient Testimonials' : 'রোগীদের অভিজ্ঞতা ও মতামত'}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              {lang === 'en'
                ? 'What Patients Say About Their Chamber Consultations'
                : 'চিকিৎসাসেবা ও চেম্বার অভিজ্ঞতা নিয়ে রোগীদের মূল্যায়ন'}
            </h2>
            <div className="h-1 w-16 bg-teal-600 rounded-full mt-4" />
          </div>

          {/* Add Review Button */}
          <button
            onClick={() => setModalOpen(true)}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-teal-900 bg-white hover:bg-teal-50 border border-teal-300 rounded-xl shadow-2xs transition-colors cursor-pointer self-start md:self-auto shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4 text-teal-700" />
            <span>{lang === 'en' ? 'Share Your Feedback' : 'আপনার মতামত লিখুন'}</span>
          </button>
        </div>

        {/* Aggregated Satisfaction Bar (Anti-slop: clean tabular numerals) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
              <Star className="w-7 h-7 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold text-slate-900 tabular-nums">4.9</span>
                <span className="text-xs text-slate-500 font-medium">/ 5.0</span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                {lang === 'en' ? 'Overall Consultation Rating' : 'সার্বিক পরামর্শ রেটিং'}
              </p>
            </div>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Heart className="w-7 h-7 text-teal-600" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 tabular-nums">98%</div>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                {lang === 'en' ? 'Patient Listening & Empathy' : 'মনোযোগ ও আন্তরিক পরামর্শ'}
              </p>
            </div>
          </div>

          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
              <ThumbsUp className="w-7 h-7 text-sky-600" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 tabular-nums">
                {reviewsList.length}+
              </div>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                {lang === 'en' ? 'Verified Chamber Reviews' : 'যাচাইকৃত চেম্বার রিভিউ'}
              </p>
            </div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-fit mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'en' ? 'All Reviews' : 'সকল মতামত'}
          </button>
          <button
            onClick={() => setActiveFilter('dhanmondi')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'dhanmondi'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'en' ? 'Dhanmondi' : 'ধানমন্ডি'}
          </button>
          <button
            onClick={() => setActiveFilter('uttara')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'uttara'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'en' ? 'Uttara' : 'উত্তরা'}
          </button>
          <button
            onClick={() => setActiveFilter('chattogram')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'chattogram'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'en' ? 'Chattogram' : 'চট্টগ্রাম'}
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Verified Consultation Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-teal-800 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-teal-600" />
                    <span>{lang === 'en' ? 'Verified Patient' : 'যাচাইকৃত রোগী'}</span>
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 italic">
                  "{rev.review[lang]}"
                </p>

                {/* Condition Tag */}
                <div className="mb-4 text-xs font-medium text-teal-700">
                  <span className="text-slate-500 font-normal">
                    {lang === 'en' ? 'Consulted for: ' : 'চিকিৎসা বিষয়: '}
                  </span>
                  <span>{rev.condition[lang]}</span>
                </div>
              </div>

              {/* Patient Attribution Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    {rev.name[lang]}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                    <span>{rev.location[lang]}</span>
                    <span>·</span>
                    <span>{rev.age}y</span>
                  </div>
                </div>

                <div className="text-right text-[11px] text-slate-400">
                  <div>{rev.chamber[lang]}</div>
                  <div>{rev.date[lang]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Portfolio Transparency Note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <span>
            {lang === 'en'
              ? 'Sample patient feedback presented for fictional demonstration portfolio.'
              : 'কাল্পনিক পোর্টফোলিও প্রদর্শনীর উদ্দেশ্যে নমুনা রোগীর প্রতিক্রিয়া উপস্থাপিত।'}
          </span>
        </div>

      </div>

      {/* Share Feedback Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedFeedback ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'en' ? 'Thank You for Your Feedback!' : 'আপনার মতামতের জন্য ধন্যবাদ!'}
                </h3>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  {lang === 'en'
                    ? 'Your review has been successfully recorded in the portfolio demo.'
                    : 'আপনার মতামতটি প্রদর্শনী পোর্টফোলিওতে সফলভাবে যুক্ত হয়েছে।'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {lang === 'en' ? 'Share Your Chamber Experience' : 'আপনার চেম্বার অভিজ্ঞতা শেয়ার করুন'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === 'en'
                      ? 'Help other patients understand Dr. Shariful Alam’s consultation style and care quality.'
                      : 'অন্যান্য রোগীদের সুবিধার্থে আপনার মূল্যবান অভিজ্ঞতা জানান।'}
                  </p>
                </div>

                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'en' ? 'Rating' : 'রেটিং'}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setAuthorRating(star)}
                        className="p-1 cursor-pointer focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= authorRating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300'
                          } transition-colors`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-2">
                      {authorRating} / 5 Stars
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'Your Name *' : 'আপনার নাম *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder={lang === 'en' ? 'e.g. Mahbub Hasan' : 'যেমন: মাহবুব হাসান'}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'City / Area' : 'এলাকা / শহর'}
                    </label>
                    <input
                      type="text"
                      value={authorLocation}
                      onChange={(e) => setAuthorLocation(e.target.value)}
                      placeholder={lang === 'en' ? 'e.g. Dhanmondi, Dhaka' : 'যেমন: ধানমন্ডি, ঢাকা'}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'Chamber Visited' : 'কোন চেম্বারে গিয়েছিলেন'}
                    </label>
                    <select
                      value={authorChamber}
                      onChange={(e) => setAuthorChamber(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    >
                      {CHAMBERS.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.location[lang]} - {c.name[lang]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'Health Concern / Condition' : 'চিকিৎসা বিষয়'}
                    </label>
                    <input
                      type="text"
                      value={authorCondition}
                      onChange={(e) => setAuthorCondition(e.target.value)}
                      placeholder={lang === 'en' ? 'e.g. High blood pressure' : 'যেমন: উচ্চ রক্তচাপ'}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'en' ? 'Your Experience / Review *' : 'আপনার মতামত লিখুন *'}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={authorText}
                    onChange={(e) => setAuthorText(e.target.value)}
                    placeholder={
                      lang === 'en'
                        ? 'Describe your consultation experience, the doctor’s listening, and serial timing...'
                        : 'ডাক্তারের পরামর্শ, মনোযোগ দিয়ে শোনার ধরন ও চেম্বার অভিজ্ঞতা নিয়ে লিখুন...'
                    }
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                  >
                    {lang === 'en' ? 'Cancel' : 'বাতিল'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    {lang === 'en' ? 'Submit Review' : 'মতামত প্রকাশ করুন'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
