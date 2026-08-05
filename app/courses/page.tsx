"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ContactFooter from "../components/ContactFooter";
import SiteHeader from "../components/SiteHeader";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { coursesData } from '../../data/courses'

type Lang = "en" | "ar";
type Theme = "dark" | "light";

type Course = {
  tag: { en: string; ar: string };
  title: { en: string; ar: string };
  category: { en: string; ar: string };
  image: { ref: string };
};



const copy = {
  en: {
    heading: "Our Programs",
    subheading: "Build your future with professional educational programs",
    viewDetails: "View Details",
    next: "Next",
    prev: "Previous",
    whatsapp: "WhatsApp",
  },
  ar: {
    heading: "برامجنا",
    subheading: "ابنِ مستقبلك مع برامج تعليمية احترافية",
    viewDetails: "عرض التفاصيل",
    next: "التالي",
    prev: "السابق",
    whatsapp: "واتساب",
  },
};

export default function ProgramsPage() {
  const [lang, setLang] = useState<Lang>("ar");
  const [theme, setTheme] = useState<Theme>("dark");

  const t = copy[lang];
  const isDark = theme === "dark";
  const isRtl = lang === "ar";

  const bg = isDark ? "bg-[#080b14]" : "bg-white";
  const text = isDark ? "text-white" : "text-[#0b1220]";
  const subText = isDark ? "text-slate-400" : "text-slate-600";
  const border = isDark ? "border-slate-800" : "border-slate-200";
  const cardBg = isDark ? "bg-[#0d1220]" : "bg-slate-50";
  const NextArrow = isRtl ? ChevronRight : ChevronLeft;
  const PrevArrow = isRtl ? ChevronLeft : ChevronRight;
  const DetailArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen ${bg} ${text} transition-colors duration-300`}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <SiteHeader
        lang={lang}
        isDark={isDark}
        onLangToggle={() => setLang(lang === "en" ? "ar" : "en")}
        onThemeToggle={() => setTheme(isDark ? "light" : "dark")}
      />

      {/* Page title */}
      <header
        className={`border-b ${border} ${isDark
            ? "bg-gradient-to-l from-[#0d1220] to-[#080b14]"
            : "bg-gradient-to-l from-slate-50 to-white"
          }`}
      >
        <div
          className={`max-w-[1600px] mx-auto px-8 md:px-16 py-10 ${isRtl ? "text-right" : "text-left"
            }`}
        >
          <h1 className="text-4xl font-extrabold mb-2">{t.heading}</h1>
          <p className={subText}>{t.subheading}</p>
        </div>
      </header>

      {/* Course grid */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <div
            key={course.title.en}
            className={`rounded-2xl overflow-hidden border ${border} ${cardBg} flex flex-col`}
          >
            {/* Illustration area (always light, like the reference) */}
            <div
              className={`relative h-40 bg-gradient-to-br from-slate-100 via-slate-200 to-indigo-100  flex items-start justify-between ${isRtl ? "text-right" : "text-left"
                }`}
            >
                  <img src={course.image.ref} alt={course.title[lang]} className="w-full h-full object-cover" />
            </div>

            {/* Content area */}
            <div className={`p-5 flex-1 flex flex-col ${isRtl ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block ${isRtl ? "self-end" : "self-start"
                  } text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-4`}
              >
                {course.tag[lang]}
              </span>
              <h4 className="font-bold text-lg mb-5">{course.title[lang]}</h4>
              <Link
                href={`/courses/${course.id}`}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors font-semibold text-white shadow-[0_0_30px_-8px_rgba(37,99,235,0.8)]"
              >
                {t.viewDetails}
                <Sparkles size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <ContactFooter isDark={isDark} lang={lang} />
    </main>
  );
}
