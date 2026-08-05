// app/courses/[courseId]/page.tsx
"use client";

import { Play } from "lucide-react";
import { useApp } from "../../contexts/AppContext";
import AppLayout from "../../components/AppLayout";
import { coursesData } from '../../../data/courses'

// Get course data based on ID
function getCourse(id: string) {
    return coursesData.find(course => course.id === parseInt(id))
}

export default function CatalogDetailPage({ params }: { params: { courseId: string } }) {
    const course = getCourse(params.courseId);
    const { lang, isDark, isRtl, t } = useApp();

    // Show 404 if course not found
    if (!course) {
        return (
            <AppLayout>
                <div className="text-center py-20">
                    <h1 className="text-4xl font-bold mb-4">
                        {t("Course not found", "الكورس غير موجود")}
                    </h1>
                    <p className="text-slate-400">
                        {t("The course you're looking for doesn't exist.", "الكورس الذي تبحث عنه غير موجود.")}
                    </p>
                </div>
            </AppLayout>
        );
    }

    const badge = isDark ? "text-blue-300" : "text-blue-800";
    const text = isDark ? "text-white" : "text-[#0b1220]";
    const bg = isDark ? "bg-[#080b14]" : "bg-white";

    return (
        <AppLayout showFooter={true}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                {/* Left column */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Title card */}
                    <div className={`rounded-2xl border border-slate-800 ${bg} ${text} p-6`}>
                        <span className="inline-block text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5 mb-4">
                            {course.title[lang]}
                        </span>
                        <h1 className="text-2xl font-bold">{course.title[lang]}</h1>
                    </div>

                    {/* Description card */}
                    <div className={`rounded-2xl border border-slate-800 ${bg} ${text} p-6 md:p-8`}>
                        <p className="text-xl text-right">{course.Description}</p>
                        <br />
                        <h3 className={`text-right font-semibold mb-4 ${text}`}>
                            {t("مدة الكورس", "مدة الكورس")} : {course.length}
                        </h3>
                        <h3 className={`text-right font-semibold mb-4 ${text}`}>
                            : {t("المحتوي", "المحتوي")}
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
                                            <span className={`text-sm text-left font-medium`}>{item.title}</span>

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
                                                    <li key={topicIndex} className={`flex items-center gap-3 text-sm hover:text-slate-200 transition-colors ${text}`}>
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
                <div className="flex flex-col gap-6">
                    <a
                        href={`https://wa.me/201038430690?text=عاوز أسجل في كورس ال ${course.title.en}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                        className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors font-semibold text-white text-center"
                    >
                        {t("Register Now", "التسجيل الآن")}
                    </a>
                    <img
                        src={course.image.ref}
                        alt={course.title[lang]}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </AppLayout>
    );
}