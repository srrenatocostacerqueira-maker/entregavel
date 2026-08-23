import { useEffect, useState } from "react";
import { IconLeaf } from "./Icons";

const LINKS = [
  { href: "#devocional", label: "O devocional" },
  { href: "#dias", label: "Os 7 dias" },
  { href: "#divulgacao", label: "Divulgação" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/90 shadow-[0_10px_30px_-18px_rgba(36,27,19,0.35)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-pine text-cream transition-transform duration-500 group-hover:-rotate-6">
            <IconLeaf className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold italic text-ink">
              Paz em Casa
            </span>
            <span className="smallcaps mt-1 block text-[9px] text-gold">Devocional · 7 dias</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="navlink text-sm font-semibold text-ink-soft transition-colors hover:text-pine">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#devocional"
          className="rounded-md bg-pine px-4 py-2.5 text-sm font-bold text-cream shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-deep hover:shadow-lg"
        >
          Ler agora
        </a>
      </div>
    </header>
  );
}
