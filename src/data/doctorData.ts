export type Language = 'en' | 'bn';

export interface Chamber {
  id: string;
  name: { en: string; bn: string };
  location: { en: string; bn: string };
  address: { en: string; bn: string };
  room: { en: string; bn: string };
  days: { en: string; bn: string };
  time: { en: string; bn: string };
  feeNew: { en: string; bn: string };
  feeFollowup: { en: string; bn: string };
  phone: string;
  whatsapp: string;
  mapQuery: string;
  badge: { en: string; bn: string };
}

export interface Specialty {
  id: string;
  title: { en: string; bn: string };
  shortDesc: { en: string; bn: string };
  symptoms: { en: string[]; bn: string[] };
  diagnosticTools: { en: string; bn: string };
}

export interface Qualification {
  degree: string;
  institution: { en: string; bn: string };
  year: string;
  fictionalTag: { en: string; bn: string };
  description: { en: string; bn: string };
}

export interface ExperienceItem {
  role: { en: string; bn: string };
  hospital: { en: string; bn: string };
  period: { en: string; bn: string };
  details: { en: string; bn: string };
}

export interface PatientReview {
  id: string;
  name: { en: string; bn: string };
  location: { en: string; bn: string };
  age: number;
  rating: number;
  date: { en: string; bn: string };
  condition: { en: string; bn: string };
  chamber: { en: string; bn: string };
  review: { en: string; bn: string };
}

export const DOCTOR_IMAGES = {
  portrait: '/src/assets/images/doctor_profile_portrait_1793542448994.jpg',
  chamber: '/src/assets/images/doctor_chamber_interior_1793542450203.jpg',
  consultation: '/src/assets/images/medical_cardiology_consultation_1793542449505.jpg',
};

export const DOCTOR_PROFILE = {
  name: {
    en: 'Dr. Shariful Alam',
    bn: 'ডাঃ শরিফুল আলম',
  },
  designation: {
    en: 'Senior Consultant Physician & Clinical Cardiologist',
    bn: 'সিনিয়র কনসালট্যান্ট ফিজিশিয়ান ও ক্লিনিক্যাল কার্ডিওলজিস্ট',
  },
  degrees: {
    en: 'MBBS, FCPS (Medicine), MD (Cardiology), MACP (USA)',
    bn: 'এমবিবিএস, এফসিপিএস (মেডিসিন), এমডি (কার্ডিওলজি), এমএসিপি (ইউএসএ)',
  },
  bmdcReg: {
    en: 'BMDC Reg. No: A-58492 (Fictional Placeholder)',
    bn: 'বিএমডিসি রেজি. নং: এ-৫৮৪৯২ (কাল্পনিক প্লেসহোল্ডার)',
  },
  experienceYears: 14,
  patientsTreated: '25,000+',
  primaryHospital: {
    en: 'National Heart & General Medical Centre (Fictional), Dhaka',
    bn: 'ন্যাশনাল হার্ট অ্যান্ড জেনারেল মেডিকেল সেন্টার (কাল্পনিক), ঢাকা',
  },
  tagline: {
    en: 'Evidence-guided, compassionate clinical care for cardiovascular health and complex adult medicine.',
    bn: 'হৃদরোগ ও জটিল প্রাপ্তবয়স্ক মেডিসিনের জন্য আধুনিক ও সহানুভূতিশীল চিকিৎসাসেবা।',
  },
};

export const CHAMBERS: Chamber[] = [
  {
    id: 'dhanmondi',
    name: {
      en: 'Dhanmondi Diagnostic & Consultation Centre',
      bn: 'ধানমন্ডি ডায়াগনস্টিক অ্যান্ড কনসালটেশন সেন্টার',
    },
    location: {
      en: 'Dhanmondi, Dhaka',
      bn: 'ধানমন্ডি, ঢাকা',
    },
    address: {
      en: 'House 24, Road 8/A (Near Lake Park), Dhanmondi, Dhaka - 1209',
      bn: 'বাড়ি ২৪, রোড ৮/এ (লেক পার্কের নিকটে), ধানমন্ডি, ঢাকা - ১২০৯',
    },
    room: {
      en: 'Room 304, Level 3 (Lift Available)',
      bn: 'রুম ৩০৪, ৩য় তলা (লিফট সুবিধা)',
    },
    days: {
      en: 'Saturday – Wednesday',
      bn: 'শনিবার – বুধবার',
    },
    time: {
      en: '5:30 PM – 9:30 PM',
      bn: 'সন্ধ্যা ৫:৩০ – রাত ৯:৩০',
    },
    feeNew: {
      en: 'BDT 1,200',
      bn: '১,২০০ টাকা',
    },
    feeFollowup: {
      en: 'BDT 800 (within 30 days)',
      bn: '৮০০ টাকা (৩০ দিনের মধ্যে)',
    },
    phone: '+880 1711-000000',
    whatsapp: '8801711000000',
    mapQuery: 'Dhanmondi+Road+8A+Dhaka',
    badge: {
      en: 'Main Evening Chamber',
      bn: 'মূল সান্ধ্যকালীন চেম্বার',
    },
  },
  {
    id: 'uttara',
    name: {
      en: 'Uttara Specialized Care Hospital',
      bn: 'উত্তরা স্পেশালাইজড কেয়ার হসপিটাল',
    },
    location: {
      en: 'Uttara, Dhaka',
      bn: 'উত্তরা, ঢাকা',
    },
    address: {
      en: 'Plot 18, Rabindra Sarani, Sector 7, Uttara Model Town, Dhaka - 1230',
      bn: 'প্লট ১৮, রবীন্দ্র সরণি, সেক্টর ৭, উত্তরা মডেল টাউন, ঢাকা - ১২৩০',
    },
    room: {
      en: 'Consultation Suite 210, Level 2',
      bn: 'কনসালটেশন স্যুট ২১০, ২য় তলা',
    },
    days: {
      en: 'Thursday & Friday',
      bn: 'বৃহস্পতিবার ও শুক্রবার',
    },
    time: {
      en: 'Thu: 5:00 PM – 9:00 PM | Fri: 10:00 AM – 1:00 PM',
      bn: 'বৃহস্পতি: ৫:০০ – রাত ৯:০০ | শুক্র: সকাল ১০:০০ – দুপুর ১:০০',
    },
    feeNew: {
      en: 'BDT 1,200',
      bn: '১,২০০ টাকা',
    },
    feeFollowup: {
      en: 'BDT 800 (within 30 days)',
      bn: '৮০০ টাকা (৩০ দিনের মধ্যে)',
    },
    phone: '+880 1912-000000',
    whatsapp: '8801912000000',
    mapQuery: 'Uttara+Sector+7+Rabindra+Sarani+Dhaka',
    badge: {
      en: 'Weekend & Morning Session',
      bn: 'সাপ্তাহিক ছুটি ও সকালের সেশন',
    },
  },
  {
    id: 'chattogram',
    name: {
      en: 'Chattogram Metropolitan Medical Suite',
      bn: 'চট্টগ্রাম মেট্রোপলিটন মেডিকেল স্যুট',
    },
    location: {
      en: 'GEC Circle, Chattogram',
      bn: 'জিইসি মোড়, চট্টগ্রাম',
    },
    address: {
      en: '44 O.R. Nizam Road, Near GEC Circle, Chattogram - 4000',
      bn: '৪৪ ও.আর. নিজাম রোড, জিইসি মোড়ের নিকট, চট্টগ্রাম - ৪০০০',
    },
    room: {
      en: 'Executive Doctor Chamber 4, Level 4',
      bn: 'এক্সিকিউটিভ ডক্টরস চেম্বার ৪, ৪র্থ তলা',
    },
    days: {
      en: 'Fortnightly (2nd & 4th Friday of each month)',
      bn: 'পাক্ষিক (প্রতি মাসের ২য় ও ৪র্থ শুক্রবার)',
    },
    time: {
      en: '3:30 PM – 8:30 PM',
      bn: 'বিকাল ৩:৩০ – রাত ৮:৩০',
    },
    feeNew: {
      en: 'BDT 1,500',
      bn: '১,৫০০ টাকা',
    },
    feeFollowup: {
      en: 'BDT 1,000 (within 30 days)',
      bn: '১,০০০ টাকা (৩০ দিনের মধ্যে)',
    },
    phone: '+880 1819-000000',
    whatsapp: '8801819000000',
    mapQuery: 'OR+Nizam+Road+GEC+Circle+Chattogram',
    badge: {
      en: 'Fortnightly Visiting Consultant',
      bn: 'পাক্ষিক ভিজিটিং কনসালট্যান্ট',
    },
  },
];

export const SPECIALTIES: Specialty[] = [
  {
    id: 'hypertension',
    title: {
      en: 'Hypertension & Blood Pressure Control',
      bn: 'উচ্চ রক্তচাপ ও ব্লাড প্রেসার নিয়ন্ত্রণ',
    },
    shortDesc: {
      en: 'Personalized protocol to stabilize persistent high blood pressure, prevent hypertensive crisis, and protect kidney and vessel health.',
      bn: 'নিয়মিত রক্তচাপ পর্যবেক্ষণ, কিডনি ও রক্তনালী সুরক্ষায় আধুনিক চিকিৎসা প্রোটোকল।',
    },
    symptoms: {
      en: ['Recurrent morning headaches', 'Occasional dizziness or neck stiffness', 'Labile blood pressure readings'],
      bn: ['ঘন ঘন সকালের মাথাব্যথা', 'মাঝে মাঝে মাথা ঘোরা বা ঘাড়ের টান', 'অনিয়মিত রক্তচাপ ওঠানামা'],
    },
    diagnosticTools: {
      en: '24-hour Ambulatory BP Monitoring (ABPM), renal doppler, lipid profile',
      bn: '২৪ ঘণ্টার এম্বুলেটরি বিপি পর্যবেক্ষণ, লিপিড প্রোফাইল পরীক্ষা',
    },
  },
  {
    id: 'coronary',
    title: {
      en: 'Ischemic Heart Disease & Chest Pain',
      bn: 'ইস্কেমিক হৃদরোগ ও বুকে ব্যথার মূল্যায়ন',
    },
    shortDesc: {
      en: 'Thorough evaluation of exertion-induced chest tightness, coronary artery disease risk stratification, and post-angioplasty medical management.',
      bn: 'শারীরিক পরিশ্রমে বুকে চাপ, করোনারি ধমনী রোগের ঝুঁকি নিরূপণ ও ফলো-আপ পরামর্শ।',
    },
    symptoms: {
      en: ['Chest discomfort spreading to left arm/jaw', 'Shortness of breath upon walking', 'Sudden cold perspiration'],
      bn: ['বামে বা চোয়ালে ছড়িয়ে পড়া বুকের চাপ', 'হাঁটাহাঁটিতে শ্বাসকষ্ট', 'হঠাৎ অস্বাভাবিক ঘাম'],
    },
    diagnosticTools: {
      en: '12-lead ECG, Exercise Tolerance Test (ETT), Cardiac Enzymes',
      bn: '১২-লিড ইসিজি, ইটিটি পরীক্ষা ও কার্ডিয়াক মার্কার্স',
    },
  },
  {
    id: 'echo',
    title: {
      en: 'Echocardiography & Cardiac Function',
      bn: 'ইকোকার্ডিওগ্রাফি ও হার্ট ফাংশন পর্যবেক্ষণ',
    },
    shortDesc: {
      en: 'Non-invasive 2D & Color Doppler ultrasound to assess heart chamber dimensions, valve competency, and ejection fraction.',
      bn: 'হার্টের প্রকোষ্ঠ, ভালভের কার্যকারিতা ও ইজেকশন ফ্র্যাকশন পরীক্ষার রিপোর্ট বিশ্লেষণ।',
    },
    symptoms: {
      en: ['Swelling in feet or ankles', 'Difficulty lying flat at night', 'Unexplained fatigue'],
      bn: ['পা ফোলা বা পানি জমা', 'রাতে শুয়ে থাকতে শ্বাসকষ্ট', 'অস্বাভাবিক দুর্বলতা'],
    },
    diagnosticTools: {
      en: '2D Color Doppler Echo, NT-proBNP, Chest Radiograph',
      bn: '২ডি কালার ডপলার ইকো, রক্তে বিএনপি মাত্রা মূল্যায়ন',
    },
  },
  {
    id: 'arrhythmia',
    title: {
      en: 'Heart Rhythm Disturbances & Palpitation',
      bn: 'অনিয়মিত হৃদস্পন্দন ও বুক ধড়ফড়ানি',
    },
    shortDesc: {
      en: 'Investigating premature ventricular contractions, tachycardias, and intermittent heart fluttering with Holter monitoring.',
      bn: 'হার্টের অনিয়মিত স্পন্দন, অতিরিক্ত ধড়ফড় ও অস্থিরতার সঠিক কারণ নির্ণয় ও চিকিৎসা।',
    },
    symptoms: {
      en: ['Skipped beats sensation', 'Sudden rapid racing heartbeat', 'Lightheadedness during spells'],
      bn: ['বুকের মাঝে ড্রপ বা মিসড বিট অনুভূতি', 'হঠাৎ দ্রুত স্পন্দন শুরু হওয়া', 'মাথা হালকা অনুভূত হওয়া'],
    },
    diagnosticTools: {
      en: '24–48 Hour Holter ECG Monitoring, serum electrolytes, thyroid panel',
      bn: '২৪-৪৮ ঘণ্টার হোল্টার ইসিজি, থাইরয়েড ও ইলেকট্রোলাইট টেস্ট',
    },
  },
  {
    id: 'metabolic',
    title: {
      en: 'Diabetes & Cardiometabolic Wellness',
      bn: 'ডায়াবেটিস ও কার্ডিওমেটাবলিক নিয়ন্ত্রণ',
    },
    shortDesc: {
      en: 'Comprehensive lifestyle and medical protocol for co-existing type-2 diabetes, dyslipidemia (high cholesterol), and metabolic syndrome.',
      bn: 'ডায়াবেটিস, রক্তে অতিরিক্ত কোলেস্টেরল ও মেটাবলিক সিনড্রোমের সুষম সমন্বিত চিকিৎসা।',
    },
    symptoms: {
      en: ['Fluctuating blood sugar', 'Elevated LDL/Triglycerides', 'Gradual weight gain around waist'],
      bn: ['অনিয়ন্ত্রিত ব্লাড সুগার', 'উচ্চ ট্রাইগ্লিসারাইড ও এলডিএল', 'ওজন বৃদ্ধি ও ক্লান্তি'],
    },
    diagnosticTools: {
      en: 'HbA1c, Fasting Lipid Panel, Microalbuminuria, Carotid IMT',
      bn: 'এইচবিএওয়ানসি, পূর্ণাঙ্গ লিপিড প্যানেল ও কিডনি চেকআপ',
    },
  },
  {
    id: 'preventive',
    title: {
      en: 'Preventive Cardiac Health Check & Advice',
      bn: 'প্রতিরোধমূলক স্বাস্থ্য স্ক্রিনিং ও পরামর্শ',
    },
    shortDesc: {
      en: 'Proactive primary prevention strategies for individuals with a strong family history of premature heart disease.',
      bn: 'পারিবারিক হৃদরোগের ইতিহাস থাকলে অকাল ঝুঁকি এড়াতে আগাম চেকআপ ও খাদ্যভ্যাস নির্দেশিকা।',
    },
    symptoms: {
      en: ['Family history of heart attack before age 55', 'Sedentary desk lifestyle', 'Smoking cessation planning'],
      bn: ['পরিবারে অল্প বয়সে হৃদরোগের ইতিহাস', 'অলস জীবনযাপন ও কাজের চাপ', 'ধূমপান ত্যাগের প্রস্তুতি'],
    },
    diagnosticTools: {
      en: 'Comprehensive 10-Year ASCVD Risk Score, hs-CRP, Lifestyle Audit',
      bn: '১০ বছরের হৃদরোগ ঝুঁকি ক্যালকুলেশন ও জীবনধারা রূপরেখা',
    },
  },
];

export const QUALIFICATIONS: Qualification[] = [
  {
    degree: 'MBBS',
    institution: {
      en: 'Dhaka Medical College & Hospital (Fictional Representation)',
      bn: 'ঢাকা মেডিকেল কলেজ (কাল্পনিক উপস্থাপনা)',
    },
    year: '2010',
    fictionalTag: {
      en: 'Fictional Degree Placeholder',
      bn: 'কাল্পনিক ডিগ্রি প্লেসহোল্ডার',
    },
    description: {
      en: 'Comprehensive foundational medical education with rigorous clinical rotations in internal medicine and surgery.',
      bn: 'মেডিসিন ও সার্জারি বিভাগের পূর্ণাঙ্গ ক্লিনিক্যাল ট্রেনিং সহ মৌলিক চিকিৎসা বিজ্ঞান শিক্ষা।',
    },
  },
  {
    degree: 'FCPS (Medicine)',
    institution: {
      en: 'Bangladesh College of Physicians & Surgeons (BCPS - Fictional)',
      bn: 'বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস (কাল্পনিক)',
    },
    year: '2015',
    fictionalTag: {
      en: 'Fictional Fellowship Placeholder',
      bn: 'কাল্পনিক ফেলোশিপ প্লেসহোল্ডার',
    },
    description: {
      en: 'Post-graduate fellowship training focused on diagnostic acumen in multi-system adult diseases and critical care.',
      bn: 'প্রাপ্তবয়স্কদের জটিল ব্যাধি ও নিবিড় পরিচর্যা বিষয়ে উচ্চতর ফেলোশিপ ডিগ্রি।',
    },
  },
  {
    degree: 'MD (Cardiology)',
    institution: {
      en: 'National Institute of Cardiovascular Diseases (NICVD - Fictional)',
      bn: 'জাতীয় হৃদরোগ ইনস্টিটিউট (কাল্পনিক উপস্থাপনা)',
    },
    year: '2019',
    fictionalTag: {
      en: 'Fictional Specialty Placeholder',
      bn: 'কাল্পনিক স্পেশালিটি প্লেসহোল্ডার',
    },
    description: {
      en: 'Doctor of Medicine in Cardiology covering diagnostic cardiology, echocardiography, and inpatient coronary care.',
      bn: 'ক্লিনিক্যাল কার্ডিওলজি, ইকোকার্ডিওগ্রাফি ও সিসিইউ ম্যানেজমেন্টে উচ্চতর ডক্টরেট ডিগ্রি।',
    },
  },
  {
    degree: 'MACP (USA)',
    institution: {
      en: 'American College of Physicians (Fictional Affiliation)',
      bn: 'আমেরিকান কলেজ অব ফিজিশিয়ানস (কাল্পনিক অনুমোদন)',
    },
    year: '2021',
    fictionalTag: {
      en: 'International Member Placeholder',
      bn: 'আন্তর্জাতিক মেম্বার প্লেসহোল্ডার',
    },
    description: {
      en: 'Active member maintaining international clinical guidelines in internal medicine and preventive cardiology.',
      bn: 'আন্তর্জাতিক চিকিৎসা নির্দেশিকা ও চলমান চিকিৎসা গবেষণার সাথে সম্পৃক্ততা।',
    },
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    role: {
      en: 'Senior Consultant – Clinical Cardiology & Medicine',
      bn: 'সিনিয়র কনসালট্যান্ট – কার্ডিওলজি ও মেডিসিন',
    },
    hospital: {
      en: 'National Heart & General Medical Centre (Fictional), Dhaka',
      bn: 'ন্যাশনাল হার্ট অ্যান্ড জেনারেল মেডিকেল সেন্টার (কাল্পনিক), ঢাকা',
    },
    period: {
      en: '2021 – Present',
      bn: '২০২১ – বর্তমান',
    },
    details: {
      en: 'Leading daily outpatient clinics, inpatient rounds, and echocardiographic diagnostic assessments.',
      bn: 'দৈনিক বহির্বিভাগ ক্লিনিক, রোগী পর্যবেক্ষণ ও ইকোকার্ডিওগ্রাফি রিপোর্ট মূল্যায়নে নেতৃত্ব।',
    },
  },
  {
    role: {
      en: 'Associate Consultant – Internal Medicine',
      bn: 'অ্যাসোসিয়েট কনসালট্যান্ট – ইন্টারনাল মেডিসিন',
    },
    hospital: {
      en: 'City Care Specialized Hospital, Dhanmondi (Fictional)',
      bn: 'সিটি কেয়ার স্পেশালাইজড হসপিটাল, ধানমন্ডি (কাল্পনিক)',
    },
    period: {
      en: '2016 – 2021',
      bn: '২০১৬ – ২০২১',
    },
    details: {
      en: 'Managed complex diagnostic dilemmas, resistant hypertension, and acute medical admissions.',
      bn: 'জটিল রোগ নির্ণয়, অনিয়ন্ত্রিত উচ্চ রক্তচাপ ও তীব্র মেডিসিন কেস সফলভাবে পরিচালনা।',
    },
  },
  {
    role: {
      en: 'Resident Physician (Cardiology & CCU)',
      bn: 'রেসিডেন্ট ফিজিশিয়ান (কার্ডিওলজি ও সিসিইউ)',
    },
    hospital: {
      en: 'Apex Heart Hospital, Dhaka (Fictional)',
      bn: 'অ্যাপেক্স হার্ট হসপিটাল, ঢাকা (কাল্পনিক)',
    },
    period: {
      en: '2012 – 2016',
      bn: '২০১২ – ২০১৬',
    },
    details: {
      en: 'Provided round-the-clock intensive cardiac care management and non-invasive diagnostic interpretations.',
      bn: '২৪ ঘণ্টা করোনারি কেয়ার ইউনিটে জরুরি রোগী সেবা ও ইসিজি/ইকো বিশ্লেষণ।',
    },
  },
];

export const FAQS = [
  {
    q: {
      en: 'How do I confirm my chamber serial number?',
      bn: 'চেম্বারের সিরিয়াল নম্বর কীভাবে নিশ্চিত করব?',
    },
    a: {
      en: 'You can submit the online enquiry form on this website or call the dedicated chamber assistant directly. We also provide direct WhatsApp serial assistance for instant confirmation.',
      bn: 'আপনি এই ওয়েবসাইটের মাধ্যমে অনলাইন বুকিং ফর্ম পূরণ করতে পারেন অথবা চেম্বার হটলাইনে সরাসরি কল করতে পারেন। দ্রুত নিশ্চিতকরণের জন্য হোয়াটসঅ্যাপ সুবিধাও রয়েছে।',
    },
  },
  {
    q: {
      en: 'What documents should I bring to the consultation?',
      bn: 'সাক্ষাতের সময় সাথে কী কী কাগজপত্র আনা প্রয়োজন?',
    },
    a: {
      en: 'Please bring your previous medical prescriptions, recent blood work, ECG, Echocardiogram reports, and a list of your current daily medications.',
      bn: 'অনুগ্রহ করে আপনার পূর্ববর্তী প্রেসক্রিপশন, সাম্প্রতিক রক্ত পরীক্ষার রিপোর্ট, ইসিজি, ইকো রিপোর্ট এবং নিয়মিত সেবনকৃত ওষুধের তালিকা সাথে আনবেন।',
    },
  },
  {
    q: {
      en: 'Are emergency services available at the consultation chamber?',
      bn: 'চেম্বারে কি জরুরি সেবা পাওয়া যাবে?',
    },
    a: {
      en: 'No. The chambers are for scheduled outpatient consultations only. For medical emergencies (severe crushing chest pain, collapse, extreme breathlessness), please rush to the nearest emergency hospital department or dial 999.',
      bn: 'না। চেম্বারগুলো শুধুমাত্র নির্ধারিত বহির্বিভাগীয় পরামর্শের জন্য। তীব্র বুকে ব্যথা, শ্বাসকষ্ট বা যে কোনো জরুরি অবস্থায় অবিলম্বে নিকটস্থ হাসপাতালের ইমার্জেন্সিতে যান বা ৯৯৯ এ কল করুন।',
    },
  },
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'rev-1',
    name: {
      en: 'Md. Rafiqul Islam',
      bn: 'মোঃ রফিকুল ইসলাম',
    },
    location: {
      en: 'Dhanmondi, Dhaka',
      bn: 'ধানমন্ডি, ঢাকা',
    },
    age: 58,
    rating: 5,
    date: {
      en: '2 weeks ago',
      bn: '২ সপ্তাহ আগে',
    },
    condition: {
      en: 'Resistant Hypertension & Lifestyle Care',
      bn: 'অনিয়ন্ত্রিত উচ্চ রক্তচাপ ও লাইফস্টাইল কেয়ার',
    },
    chamber: {
      en: 'Dhanmondi Diagnostic Centre',
      bn: 'ধানমন্ডি চেম্বার',
    },
    review: {
      en: 'After 4 years of fluctuating blood pressure, Dr. Shariful took time to review my full medication history and reduced my unnecessary tablets. My BP is now stable at 120/80 with regular walking.',
      bn: 'দীর্ঘদিন ধরে প্রেসার ওঠা-নামা করছিল। ডাঃ শরিফুল খুব মনোযোগ দিয়ে পুরনো প্রেসক্রিপশন দেখে অপ্রয়োজনীয় ওষুধ কমিয়ে দিয়েছেন। এখন হাঁটাচলা ও নিয়মে রক্তচাপ স্বাভাবিক রয়েছে।',
    },
  },
  {
    id: 'rev-2',
    name: {
      en: 'Begum Rokeya Sultana',
      bn: 'বেগম রোকেয়া সুলতানা',
    },
    location: {
      en: 'Sector 7, Uttara, Dhaka',
      bn: 'সেক্টর ৭, উত্তরা, ঢাকা',
    },
    age: 64,
    rating: 5,
    date: {
      en: '1 month ago',
      bn: '১ মাস আগে',
    },
    condition: {
      en: 'Breathlessness & Palpitation Checkup',
      bn: 'শ্বাসকষ্ট ও বুক ধড়ফড়ানি পরীক্ষা',
    },
    chamber: {
      en: 'Uttara Specialized Hospital',
      bn: 'উত্তরা চেম্বার',
    },
    review: {
      en: 'I went with my daughter for palpitations and mild breathlessness. Doctor sir listened with so much patience and explained the echocardiogram report in simple everyday Bangla. Very gentle and respectful.',
      bn: 'বুক ধড়ফড়ানি নিয়ে মেয়ের সাথে উত্তরা চেম্বারে যাই। ডাক্তার স্যার অত্যন্ত যত্ন ও আন্তরিকতার সাথে কথা শুনেছেন এবং ইকো রিপোর্টটি খুব সহজ বাংলায় বুঝিয়ে দিয়েছেন। ওনার ব্যবহারে অনেক শান্তি পেয়েছি।',
    },
  },
  {
    id: 'rev-3',
    name: {
      en: 'Tanvir Ahmed Chowdhury',
      bn: 'তানভীর আহমেদ চৌধুরী',
    },
    location: {
      en: 'GEC Circle, Chattogram',
      bn: 'জিইসি মোড়, চট্টগ্রাম',
    },
    age: 44,
    rating: 5,
    date: {
      en: '3 weeks ago',
      bn: '৩ সপ্তাহ আগে',
    },
    condition: {
      en: 'Preventive Cardiac Health Check',
      bn: 'প্রতিরোধমূলক হার্ট চেকআপ',
    },
    chamber: {
      en: 'Chattogram Metropolitan Suite',
      bn: 'চট্টগ্রাম চেম্বার',
    },
    review: {
      en: 'Having a family history of premature heart attacks, I consulted him at the Chattogram clinic. His guidance on 10-year risk assessment, lipid control, and diet was clear, rational, and reassuring.',
      bn: 'পরিবারে হৃদরোগের ইতিহাস থাকায় চট্টগ্রামে স্যারের চেম্বারে পরামর্শ নেই। তিনি আতঙ্ক তৈরি না করে সুনির্দিষ্ট খাদ্যাভ্যাস ও কোলেস্টেরল নিয়ন্ত্রণের বৈজ্ঞানিক পরামর্শ দিয়েছেন।',
    },
  },
  {
    id: 'rev-4',
    name: {
      en: 'Farzana Yasmin',
      bn: 'ফারজানা ইয়াসমিন',
    },
    location: {
      en: 'Mirpur DOHS, Dhaka',
      bn: 'মিরপুর ডিওএইচএস, ঢাকা',
    },
    age: 36,
    rating: 5,
    date: {
      en: '1 month ago',
      bn: '১ মাস আগে',
    },
    condition: {
      en: 'Cardiometabolic & ECG Consultation',
      bn: 'কার্ডিওমেটাবলিক ও ইসিজি পরামর্শ',
    },
    chamber: {
      en: 'Dhanmondi Diagnostic Centre',
      bn: 'ধানমন্ডি চেম্বার',
    },
    review: {
      en: 'Serial management was surprisingly punctual. Dr. Shariful spent more than 20 minutes explaining how blood sugar affects micro-vessels. He did not order a single unnecessary test.',
      bn: 'সিরিয়াল ম্যানেজমেন্ট বেশ সময়নিষ্ঠ ছিল। ডাক্তার সাহেব ২০ মিনিটেরও বেশি সময় নিয়ে ডায়াবেটিস ও হৃদযন্ত্রের সম্পর্ক বুঝিয়ে দেন। কোনো অযথা টেস্ট দেননি, যা খুবই প্রশংসনীয়।',
    },
  },
  {
    id: 'rev-5',
    name: {
      en: 'Kazi M. Harun-ur-Rashid',
      bn: 'কাজী মোঃ হারুন-উর-রশীদ',
    },
    location: {
      en: 'Banani / Uttara, Dhaka',
      bn: 'বনানী / উত্তরা, ঢাকা',
    },
    age: 62,
    rating: 5,
    date: {
      en: '2 months ago',
      bn: '২ মাস আগে',
    },
    condition: {
      en: 'Post-Angioplasty Routine Follow-up',
      bn: 'পোস্ট-এনজিওপ্লাস্টি ফলো-আপ',
    },
    chamber: {
      en: 'Uttara Specialized Hospital',
      bn: 'উত্তরা চেম্বার',
    },
    review: {
      en: 'Came for routine follow-up after my heart stent procedure. He meticulously examined my pulse, heart sounds, and ECG, and safely adjusted my blood thinners. Highly recommended for cardiac patients.',
      bn: 'হার্টে রিং পরানোর পর রুটিন ফলো-আপের জন্য গিয়েছিলাম। তিনি অত্যন্ত নিখুঁতভাবে ইসিজি দেখে রক্তের পাতলা ওষুধের ডোজ সমন্বয় করেছেন। হৃদরোগীদের জন্য উনি অত্যন্ত নির্ভরযোগ্য চিকিৎসক।',
    },
  },
];

