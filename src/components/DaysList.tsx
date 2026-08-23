import { DAYS } from "../data/devocional";
import { IconArrowRight } from "./Icons";
import { Reveal } from "./Reveal";

export function DaysList({ onOpen }: { onOpen: (pageIndex: number) => void }) {
  return (
    <section id="dias" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold" />
                <p className="smallcaps text-gold">O percurso</p>
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold text-ink sm:text-5xl">
                Sete dias, <em className="italic text-pine">sete conselhos</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
              Toque em um dia para abrir direto na leitura. Cada dia segue o mesmo caminho:
              conselho, reflexão, ação e oração.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          {DAYS.map((d, i) => (
            <Reveal key={d.day} delay={i * 70}>
              <button
                type="button"
                onClick={() => onOpen(3 + i)}
                className={`group grid w-full grid-cols-[3.4rem_1fr_auto] items-center gap-4 py-5 text-left transition-colors duration-300 hover:bg-paper/70 sm:gap-7 sm:px-4 ${
                  i > 0 ? "border-t border-ink/10" : ""
                } ${i === DAYS.length - 1 ? "border-b border-ink/10" : ""}`}
              >
                <span className="font-display text-3xl font-medium italic text-gold/80 transition-colors duration-300 group-hover:text-gold sm:text-4xl">
                  {String(d.day).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-xl font-semibold leading-snug text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:text-pine sm:text-2xl">
                    {d.title}
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">
                    {d.focus} · <span className="italic">{d.verse.ref}</span>
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="smallcaps hidden whitespace-nowrap rounded-full border border-gold/50 px-3.5 py-1.5 text-[10px] text-gold transition-colors duration-300 group-hover:border-gold lg:block">
                    {d.verse.ref}
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/20 text-ink transition-all duration-300 group-hover:border-pine group-hover:bg-pine group-hover:text-cream">
                    <IconArrowRight className="h-4.5 w-4.5" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
