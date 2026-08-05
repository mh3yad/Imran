import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type Lang = "en" | "ar";

type SiteHeaderProps = {
  lang: Lang;
  isDark: boolean;
  onLangToggle: () => void;
  onThemeToggle: () => void;
};

export default function SiteHeader({
  lang,
  isDark,
  onLangToggle,
  onThemeToggle,
}: SiteHeaderProps) {
  const router = useRouter();
  const iconBtnBorder = isDark ? "border-slate-700 text-slate-300 hover:border-slate-500"
    : "border-slate-300 text-slate-600 hover:border-slate-400";

  return (
    <header className="flex items-center justify-between px-8 md:px-16 py-6 max-w-[1600px] mx-auto">
      <div className="flex items-center gap-2">
        <button
          onClick={() => router.back()}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50`}          aria-label="Go back"
        >
        </button>
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-tight cursor-pointer">
            IMRAN
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onLangToggle}
          className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-semibold transition-colors ${iconBtnBorder}`}
        >
          {lang === "en" ? "AR" : "EN"}
        </button>
        <button
          onClick={onThemeToggle}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${iconBtnBorder}`}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <a
          href="https://wa.me/201013712185?text= عاوز أبدأ في البرمجة" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
          className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-[0_0_24px_-6px_rgba(37,99,235,0.7)] bg-green-600 text-white hover:bg-green-500"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
