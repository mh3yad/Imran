// app/programs/page.tsx
"use client";

import { useApp } from "../contexts/AppContext";
import AppLayout from "../components/AppLayout";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { coursesData } from "../../data/courses";

export default function ProgramsPage() {
  const { lang, isDark, isRtl, t } = useApp();

  const border = isDark ? "border-slate-800" : "border-slate-200";
  const cardBg = isDark ? "bg-[#0d1220]" : "bg-slate-50";

  return (
    <AppLayout
      pageTitle={{
        en: "Our Programs",
        ar: "برامجنا",
      }}
      pageSubtitle={{
        en: "Build your future with professional educational programs",
        ar: "ابنِ مستقبلك مع برامج تعليمية احترافية",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <div
            key={course.title.en}
            className={`rounded-2xl overflow-hidden border ${border} ${cardBg} flex flex-col`}
          >
            {/* Course image */}
            <div className="relative h-40 bg-gradient-to-br from-slate-100 via-slate-200 to-indigo-100">
              <img
                src={course.image.ref}
                alt={course.title[lang]}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Course content */}
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
                {t("View Details", "عرض التفاصيل")}
                <Sparkles size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}