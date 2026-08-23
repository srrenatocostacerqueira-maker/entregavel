import { useEffect, useRef, useState } from "react";
import { DAYS, PAGES } from "../../data/devocional";
import { prefersReducedMotion, useOnScreen } from "../../hooks";
import { IconCheck, IconChevronLeft, IconChevronRight, IconList, IconX } from "../Icons";
import { Reveal } from "../Reveal";
import { ChecklistPage } from "./ChecklistPage";
import { DayPage } from "./DayPage";
import { ConclusionPage, CoverPage, HowToPage, IntroPage } from "./pages";

export function BookReader({ jump }: { jump: { page: number; n: number } }) {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [tocOpen, setTocOpen] = useState(false);
  const { ref: sectionRef, onScreen } = useOnScreen<HTMLElement>(0.05);
  const bookRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const mounted = useRef(false);
  const firstJump = useRef(true);

  const goTo = (target: number) => {
    const clamped = Math.max(0, Math.min(PAGES.length - 1, target));
    if (clamped === page) return;
    setDir(clamped > page ? 1 : -1);
    setPage(clamped);
  };

  /* salto vindo de fora (lista dos 7 dias) */
  useEffect(() => {
    if (firstJump.current) {
      firstJump.current = false;
      return;
    }
    goTo(jump.page);
    sectionRef.current?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jump.n]);

  /* ao virar a página, volta ao topo do livro */
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    bookRef.current?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }, [page]);

  /* teclado: setas navegam quando o livro está visível */
  useEffect(() => {
    if (!onScreen) return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "TEXTAREA" || t.tagName === "INPUT" || t.isContentEditable)) return;
      if (e.key === "ArrowRight") goTo(page + 1);
      else if (e.key === "ArrowLeft") goTo(page - 1);
      else if (e.key === "Escape") setTocOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScreen, page]);

  /* trava o scroll do body com o índice aberto */
  useEffect(() => {
    document.body.style.overflow = tocOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [tocOpen]);

  const isLast = page === PAGES.length - 1;

  const renderPage = () => {
    if (page === 0) return <CoverPage />;
    if (page === 1) return <IntroPage />;
    if (page === 2) return <HowToPage />;
    if (page >= 3 && page <= 9) return <DayPage day={DAYS[page - 3]} />;
    if (page === 10) return <ChecklistPage />;
    return <ConclusionPage onRestart={() => goTo(0)} />;
  };

  return (
    <section id="devocional" ref={sectionRef} className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold" />
                <p className="smallcaps text-gold">Leitura diária</p>
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold text-ink sm:text-5xl">
                O devocional, <em className="italic text-pine">página a página</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p className="hidden items-center gap-2 text-sm text-ink-soft sm:flex">
              Use as setas <kbd className="rounded border border-ink/20 bg-paper px-1.5 py-0.5 font-mono text-xs">←</kbd>
              <kbd className="rounded border border-ink/20 bg-paper px-1.5 py-0.5 font-mono text-xs">→</kbd>
              ou arraste para folhear
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div ref={bookRef} className="book-stage relative mx-auto mt-12 max-w-3xl scroll-mt-28">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-md bg-sand shadow-xl" aria-hidden="true" />
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-md bg-[#f1e9d4]" aria-hidden="true" />

            <div
              className="relative overflow-hidden rounded-md border border-ink/10 bg-paper shadow-[0_45px_100px_-40px_rgba(36,27,19,0.6)]"
              onTouchStart={(e) => {
                touchX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                if (Math.abs(dx) > 52) goTo(page + (dx < 0 ? 1 : -1));
                touchX.current = null;
              }}
            >
              {/* topo do livro */}
              <div className="flex items-center justify-between gap-3 border-b border-ink/10 px-5 py-3.5 sm:px-9">
                <p className="smallcaps text-[9px] text-gold sm:text-[10px]">
                  7 Conselhos de Paulo · Paz dentro de casa
                </p>
                <button
                  type="button"
                  onClick={() => setTocOpen(true)}
                  className="group flex shrink-0 items-center gap-2 rounded-md border border-ink/15 px-3 py-1.5 text-xs font-bold text-ink transition-colors hover:border-gold hover:text-pine"
                >
                  <IconList className="h-4 w-4 text-gold" />
                  Índice
                </button>
              </div>

              {/* progresso */}
              <div className="h-[3px] w-full bg-sand" aria-hidden="true">
                <div
                  className="h-full bg-gold transition-all duration-700 ease-out"
                  style={{ width: `${((page + 1) / PAGES.length) * 100}%` }}
                />
              </div>

              {/* página */}
              <div key={page} className={dir === 1 ? "page-anim-next" : "page-anim-prev"}>
                {renderPage()}
              </div>

              {/* controles */}
              <div className="flex items-center justify-between gap-3 border-t border-ink/10 px-5 py-4 sm:px-9">
                <button
                  type="button"
                  onClick={() => goTo(page - 1)}
                  disabled={page === 0}
                  className="flex items-center gap-2 rounded-md border border-ink/20 px-4 py-2.5 text-sm font-bold text-ink transition-all hover:border-gold hover:text-pine disabled:pointer-events-none disabled:opacity-30"
                >
                  <IconChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                <p className="smallcaps text-[10px] text-ink-soft">
                  Página {page + 1} <span className="text-gold">/ {PAGES.length}</span>
                </p>

                <button
                  type="button"
                  onClick={() => (isLast ? goTo(0) : goTo(page + 1))}
                  className={`flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold transition-all sm:px-5 ${
                    isLast
                      ? "bg-gold text-bark hover:bg-gold-soft"
                      : "bg-pine text-cream hover:bg-pine-deep"
                  }`}
                >
                  {isLast ? (
                    <>
                      <IconCheck className="h-4 w-4" /> Reler
                    </>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Próxima</span>
                      <IconChevronRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 text-center text-xs text-ink-soft/80">
            Suas reflexões e o checklist ficam salvos automaticamente neste dispositivo.
          </p>
        </Reveal>
      </div>

      {/* índice (TOC) */}
      {tocOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Índice do devocional">
          <button
            type="button"
            className="anim-fade absolute inset-0 w-full bg-pine-deep/60 backdrop-blur-[2px]"
            onClick={() => setTocOpen(false)}
            aria-label="Fechar índice"
          />
          <aside className="anim-slide-left absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper shadow-2xl">
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
              <div>
                <p className="smallcaps text-gold">Índice</p>
                <p className="mt-1 font-display text-2xl font-semibold text-ink">O devocional</p>
              </div>
              <button
                type="button"
                onClick={() => setTocOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-pine"
                aria-label="Fechar"
              >
                <IconX className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-4">
              {PAGES.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    goTo(i);
                    setTocOpen(false);
                  }}
                  className={`mb-1 flex w-full items-center gap-4 rounded-md px-4 py-3 text-left transition-colors ${
                    i === page ? "bg-pine text-cream" : "hover:bg-sand/60"
                  }`}
                >
                  <span className={`smallcaps w-7 shrink-0 text-[9px] ${i === page ? "text-gold-soft" : "text-gold"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">{p.label}</span>
                    {p.hint && (
                      <span className={`block text-xs italic ${i === page ? "text-cream/70" : "text-ink-soft"}`}>
                        {p.hint}
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </nav>
            <div className="border-t border-ink/10 px-6 py-4">
              <p className="text-xs leading-relaxed text-ink-soft">
                12 páginas · suas anotações e o checklist permanecem salvos neste dispositivo.
              </p>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
