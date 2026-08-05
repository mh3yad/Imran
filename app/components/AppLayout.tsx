// components/AppLayout.tsx
"use client";

import { ReactNode } from "react";
import { useApp } from "../contexts/AppContext";
import SiteHeader from "./SiteHeader";
import ContactFooter from "./ContactFooter";

type AppLayoutProps = {
    children: ReactNode;
    showFooter?: boolean;
    pageTitle?: {
        en: string;
        ar: string;
    };
    pageSubtitle?: {
        en: string;
        ar: string;
    };
};

export default function AppLayout({
    children,
    showFooter = true,
    pageTitle,
    pageSubtitle,
}: AppLayoutProps) {
    const { lang, isDark, isRtl, t } = useApp();

    const bg = isDark ? "bg-[#080b14]" : "bg-white";
    const text = isDark ? "text-white" : "text-[#0b1220]";
    const subText = isDark ? "text-slate-400" : "text-slate-600";
    const border = isDark ? "border-slate-800" : "border-slate-200";

    return (
        <main
            dir={isRtl ? "rtl" : "ltr"}
            className={`min-h-screen ${bg} ${text} transition-colors duration-300`}
        >
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            <SiteHeader />

            {pageTitle && (
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
                        <h1 className="text-4xl font-extrabold mb-2">{t(pageTitle.en, pageTitle.ar)}</h1>
                        {pageSubtitle && (
                            <p className={subText}>{t(pageSubtitle.en, pageSubtitle.ar)}</p>
                        )}
                    </div>
                </header>
            )}

            <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-10">
                {children}
            </div>

            {showFooter && <ContactFooter />}
        </main>
    );
}