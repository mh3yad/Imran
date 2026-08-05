"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import ContactFooter from "./components/ContactFooter";
import SiteHeader from "./components/SiteHeader";

type Lang = "en" | "ar";
type Theme = "dark" | "light";

const copy = {
  en: {
    login: "Login",
    enroll: "contact on whatsapp",
    heading: "Start  your Journey from scratch",
    paragraph:
      "want to learn programming, puzzled where to start ...  don't worry, where are with you step by step",
    checklist: [
      "programming basics ✔",
      "web basics ✔",
      "practical learning ✔",
    ],
    startRoute: "Start Your Journey",
    viewPrograms: "View Programs",
    skills: ["C++", "Vue", "Laravel"],
  },
  ar: {
    login: "تسجيل الدخول",
    enroll: "كلمنا علي الواتس",
    heading: " ابدأ رحلتك في البرمجة من الصفر   ",
    paragraph:
      "لو نفسك تدخل مجال البرمجة ومش عارف تبدأ منين   ...      متقلقش خالص احنا معاك خطوة بخطوة مع بعض  ",
    checklist: [
      " أساسيات البرمجة ✔",
      "  أساسيات الويب ✔",
      "تطبيق عملي ✔"
    ],
    startRoute: "ابدأ رحلتك",
    viewPrograms: "تصفح المسارات",
    skills: ["C++", "Vue", "Laravel"],
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");
  const [theme, setTheme] = useState<Theme>("dark");

  const t = copy[lang];
  const isDark = theme === "dark";
  const isRtl = lang === "ar";

  const bg = isDark ? "bg-[#080b14]" : "bg-white";
  const text = isDark ? "text-white" : "text-[#0b1220]";
  const subText = isDark ? "text-slate-400" : "text-slate-600";
  const border = isDark ? "border-slate-800" : "border-slate-200";

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen ${bg} ${text} overflow-hidden relative transition-colors duration-300`}
    >
      {/* subtle top gradient line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <SiteHeader
        lang={lang}
        isDark={isDark}
        onLangToggle={() => setLang(lang === "en" ? "ar" : "en")}
        onThemeToggle={() => setTheme(isDark ? "light" : "dark")}
      />

      {/* Hero */}
      <section className="max-w-[1600px] mx-auto px-8 md:px-16 pt-8 pb-20 grid lg:grid-cols-2 gap-16 items-start">
        {/* Text column */}
        <div className={isRtl ? "lg:order-1 text-right" : ""}>
         

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[2] tracking-tight mb-8 ">
            {t.heading}
          </h1>

          <p className={`${subText} text-lg leading-relaxed max-w-xl mb-8 ${isRtl ? "mr-0 ml-auto " : ""}`}>
            {t.paragraph}
          </p>

          <ul className="space-y-4 mb-10">
            {t.checklist.map((item) => (
              <li key={item} className={`flex items-center gap-3 ${isRtl ? "flex-row-right " : ""}`}>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/15 text-blue-400 shrink-0">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className={isDark ? "text-slate-200" : "text-slate-700"}>{item}</span>
              </li>
            ))}
          </ul>

          <div className={`flex flex-wrap items-center gap-4 mb-10 ${isRtl ? "flex-row-right" : ""}`}>
            <Link
              href="/courses"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors font-semibold text-white shadow-[0_0_30px_-8px_rgba(37,99,235,0.8)]"
            >
              {t.viewPrograms}
              <Sparkles size={16} />
            </Link>
          </div>

          <hr className={`${border} mb-8`} />

         
        </div>

        {/* Code + terminal mock column (always dark, like the reference) */}
        <div className={`flex flex-col gap-6 ${isRtl ? "lg:order-2" : ""}`}>
          <div className="rounded-2xl border border-slate-800 bg-[#0d1220] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#0f1526]">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-slate-500 font-mono">app.js — Imran Academy</span>
            </div>
            <pre className="p-6 text-[13px] leading-7 font-mono overflow-x-auto text-left" dir="ltr">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">developer</span>{" "}
                <span className="text-slate-400">=</span> {"{"}
                {"\n"}  <span className="text-sky-300">name</span>
                <span className="text-slate-400">:</span>{" "}
                <span className="text-emerald-400">&quot;You&quot;</span>
                <span className="text-slate-400">,</span>
                {"\n"}  <span className="text-sky-300">skills</span>
                <span className="text-slate-400">:</span> [
                <span className="text-emerald-400">&quot;{t.skills[0]}&quot;</span>
                <span className="text-slate-400">,</span>{" "}
                <span className="text-emerald-400">&quot;{t.skills[1]}&quot;</span>
                <span className="text-slate-400">,</span>{" "}
                <span className="text-emerald-400">&quot;{t.skills[2]}&quot;</span>]
                <span className="text-slate-400">,</span>
              </code>
            </pre>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#0d1220] overflow-hidden shadow-2xl">
            <div className="px-4 py-3 border-b border-slate-800 bg-[#0f1526]">
              <span className="text-xs text-slate-500 font-mono">Terminal</span>
            </div>
            <pre className="p-6 text-[13px] leading-7 font-mono text-left" dir="ltr">
              <code>
                <span className="text-slate-500">$</span>{" "}
                <span className="text-slate-200">php artisan serve</span>
                {"\n"}
                <span className="text-emerald-400">✓ Development server is ready</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <ContactFooter isDark={isDark} lang={lang} />

     
    </main>
  );
}