import type { ComponentType } from "react";
import { IMAGES, FLOW } from "../data/devocional";
import { IconArrowRight, IconSpark, IconBook, IconCompass, IconSprout, IconCandle, OliveBranch, RotatingBadge } from "./Icons";
import { Reveal } from "./Reveal";

const FLOW_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  book: IconBook,
  compass: IconCompass,
  sprout: IconSprout,
  candle: IconCandle,
};

export function Opening() {
  return (
    <section id="topo" className="relative overflow-hidden pb-16 pt-32 sm:pt-36">
      {/* palavra fantasma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[34vw] font-black italic leading-none text-pine/[0.05] lg:text-[19rem]"
      >
        paz
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* coluna editorial */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold" />
                <p className="smallcaps text-gold">Devocional bíblico · 7 dias</p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-[2.55rem] font-semibold leading-[1.04] text-ink sm:text-6xl xl:text-[4.1rem]">
                7 conselhos de Paulo para ter mais{" "}
                <em className="relative whitespace-nowrap text-pine">
                  paz
                  <svg viewBox="0 0 120 12" className="absolute -bottom-1 left-0 w-full text-gold/70" aria-hidden="true">
                    <path d="M3 9C30 3 80 3 117 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </em>{" "}
                dentro de casa.
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
                Um devocional prático de 7 dias para levar a Palavra para as situações reais do
                cotidiano — <strong className="font-semibold text-ink">conflitos, palavras duras, irritação, mágoas</strong> e
                recomeços dentro da sua própria casa.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#devocional"
                  className="group inline-flex items-center gap-3 rounded-md bg-pine px-7 py-4 font-bold text-cream shadow-[0_18px_40px_-16px_rgba(44,70,54,0.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-pine-deep hover:shadow-[0_26px_50px_-18px_rgba(30,51,39,0.8)]"
                >
                  Abrir o devocional
                  <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
                <a
                  href="#dias"
                  className="inline-flex items-center gap-2 rounded-md border border-ink/25 px-6 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-pine"
                >
                  Conhecer os 7 dias
                </a>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <ul className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-ink-soft">
                {["7 dias de leitura", "10–15 min por dia", "1 pequena ação diária"].map((t, i) => (
                  <li key={t} className="flex items-center gap-3">
                    {i > 0 && <IconSpark className="h-3 w-3 text-gold" />}
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={420}>
              <figure className="mt-10 max-w-md border-l-2 border-gold pl-5">
                <blockquote className="font-display text-lg italic leading-snug text-ink/85">
                  “E a paz de Deus, que excede todo o entendimento, guardará os vossos corações.”
                </blockquote>
                <figcaption className="smallcaps mt-3 text-gold">Filipenses 4:7</figcaption>
              </figure>
            </Reveal>
          </div>

          {/* livro */}
          <div className="lg:col-span-5">
            <Reveal delay={200} className="relative">
              <OliveBranch className="absolute -top-12 right-0 w-44 -rotate-6 text-pine/30 sm:w-56" />
              <div className="book-stage relative mx-auto w-[280px] sm:w-[330px]">
                <div className="absolute inset-0 translate-x-4 translate-y-5 rounded-l-sm rounded-r-lg bg-[#e0d3b2] shadow-xl" aria-hidden="true" />
                <div className="absolute inset-0 translate-x-2 translate-y-2.5 rounded-l-sm rounded-r-lg bg-[#eee4c9]" aria-hidden="true" />
                <div className="anim-float relative">
                  <div className="group relative overflow-hidden rounded-l-sm rounded-r-lg ring-1 ring-bark/25 shadow-[0_50px_90px_-28px_rgba(36,27,19,0.6)] transition-transform duration-700 ease-out lg:-rotate-3 lg:hover:rotate-0">
                    <img
                      src={IMAGES.capa}
                      alt="Capa do devocional: uma Bíblia aberta sobre a mesa, com luz dourada da manhã"
                      className="block w-full select-none"
                      draggable={false}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-between p-6 text-center sm:p-7">
                      <p className="smallcaps w-full pt-1 text-cream/95 [text-shadow:0_1px_10px_rgba(30,25,15,0.7)]">
                        Devocional prático · 7 dias
                      </p>
                      <div className="w-full pb-2">
                        <div className="hairline-gold mx-auto mb-4 w-28" />
                        <p className="font-display text-[1.65rem] font-medium leading-tight text-cream [text-shadow:0_2px_16px_rgba(30,25,15,0.75)]">
                          7 Conselhos de Paulo <span className="italic text-gold-soft">para ter mais paz</span> dentro de casa
                        </p>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-7 bg-gradient-to-r from-bark/45 to-transparent" aria-hidden="true" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-bark/25 to-transparent" aria-hidden="true" />
                  </div>
                </div>
                <RotatingBadge className="absolute -bottom-10 -left-8 h-28 w-28 drop-shadow-xl sm:h-32 sm:w-32" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* método */}
        <Reveal delay={120}>
          <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-5 rounded-lg border border-ink/10 bg-paper/80 px-6 py-6 shadow-[0_20px_50px_-30px_rgba(36,27,19,0.5)] sm:mt-24 sm:px-9">
            <p className="smallcaps text-pine">O método de cada dia</p>
            <div className="flex flex-1 flex-wrap items-center gap-x-5 gap-y-4">
              {FLOW.map((f, i) => {
                const Ic = FLOW_ICONS[f.icon];
                return (
                  <div key={f.label} className="flex items-center gap-5">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 bg-cream text-pine">
                        <Ic className="h-4.5 w-4.5" />
                      </span>
                      <span className="text-sm font-bold uppercase tracking-[0.14em] text-ink">{f.label}</span>
                    </div>
                    {i < FLOW.length - 1 && <IconArrowRight className="h-4 w-4 text-gold" />}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
