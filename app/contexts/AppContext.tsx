// contexts/AppContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar";
type Theme = "dark" | "light";

type AppContextType = {
    lang: Lang;
    theme: Theme;
    isDark: boolean;
    isRtl: boolean;
    toggleLang: () => void;
    toggleTheme: () => void;
    t: (en: string, ar: string) => string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("ar");
    const [theme, setTheme] = useState<Theme>("dark");

    const isDark = theme === "dark";
    const isRtl = lang === "ar";

    const toggleLang = () => setLang(lang === "en" ? "ar" : "en");
    const toggleTheme = () => setTheme(isDark ? "light" : "dark");

    // Helper for translations
    const t = (en: string, ar: string) => (lang === "en" ? en : ar);

    return (
        <AppContext.Provider
            value={{
                lang,
                theme,
                isDark,
                isRtl,
                toggleLang,
                toggleTheme,
                t,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useApp must be used within an AppProvider");
    }
    return context;
}