"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import ContactFooter from "../../components/ContactFooter";
import SiteHeader from "../../components/SiteHeader";
import { coursesData } from '../../../data/courses'
type Lang = "en" | "ar";
type Theme = "dark" | "light";

// Get course data based on ID
function getCourse(id) {
    return coursesData.find(course => course.id === parseInt(id))
}


export default function CatalogDetailPage(params) {
    const course = getCourse(params.params.courseId);


    // Show 404 if course not found
    if (!course) {
        return 404;
    }
    const [lang, setLang] = useState<Lang>("ar");
    const [theme, setTheme] = useState<Theme>("dark");

    const isDark = theme === "dark";
    const isRtl = lang === "ar";

    const bg = isDark ? "bg-[#080b14]" : "bg-white";
    const text = isDark ? "text-white" : "text-[#0b1220]";
    const badge = isDark ? "text-blue-300" : "text-blue-800"
    const subText = isDark ? "text-slate-400" : "text-slate-600";
    const border = isDark ? "border-slate-800" : "border-slate-200";

    return (
        <main
            className={`min-h-screen ${bg} ${text} overflow-hidden relative transition-colors duration-300`}>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            <SiteHeader
                lang={lang}
                isDark={isDark}
                onLangToggle={() => setLang(lang === "en" ? "ar" : "en")}
                onThemeToggle={() => setTheme(isDark ? "light" : "dark")}
            />

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                {/* Left column */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Title card */}
                    <div className={`rounded-2xl border border-slate-800 ${bg} ${text} p-6`}>
                        <span className="inline-block text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5 mb-4">
                            {course.title.en}
                        </span>
                        <h1 className="text-2xl font-bold">{course.title.en}</h1>
                    </div>

                    {/* Description card */}
                    <div className={`rounded-2xl border border-slate-800 ${bg} ${text} p-6 md:p-8`}>
                        <p className="text-xl  text-right">{course.Description}</p>
                        <br />
                        <h3 dir="rtl" className={`text-right  font-semibold mb-4  ${text}`}>
                            مدة الكورس : {course.length}
                        </h3>
                        <h3 dir="rtl" className={`text-right font-semibold mb-4 ${text}`}>
                            المحتوي:
                        </h3>
                        {Array.isArray(course.content) && (
                            <div className="space-y-4">
                                {course.content.map((item, index) => (
                                    <details
                                        key={index}
                                        className="group rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                                    >
                                        <summary className="flex items-center gap-3 p-4 cursor-pointer list-none">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xs text-blue-400 font-bold">
                                                {index + 1}
                                            </span>
                                            <span className={`text-sm ${text} font-medium`}>{item.title}</span>
                                            <span className={`ml-auto text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 ${badge}`}>
                                                {item.length}
                                            </span>
                                            <svg className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </summary>

                                        {/* Topics list */}
                                        <div className="px-4 pb-4">
                                            <ul className="space-y-2 border-t border-slate-700/30 pt-4">
                                                {item.topics.map((topic, topicIndex) => (
                                                    <li key={topicIndex} className={`flex items-center gap-3 text-sm  hover:text-slate-200 transition-colors ${text}`}>
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50 flex-shrink-0"></span>
                                                        <span>{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {/* Right column */}
                < div className="flex flex-col gap-6" >
                    <button className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors font-semibold text-white">
                        <a href={`https://wa.me/201013712185?text=عاوز أسجل في كورس ال ${course.title.en}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                            التسجيل الآن
                        </a>
                    </button>
                    <img src={course.image.ref} alt={course.title[lang]} className="w-full h-full object-cover" />
                </div >
            </div >
            <ContactFooter isDark={isDark} lang={lang} />
        </main >
    );
}