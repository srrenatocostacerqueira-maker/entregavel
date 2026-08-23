import type { CSSProperties, ReactNode } from "react";
import { BONUS_ITEMS, HOWTO_STEPS, FLOW, IMAGES, INTRO_EMPHASIS, INTRO_PARAGRAPHS, CONCLUSION_LINES } from "../../data/devocional";
import { useReveal } from "../../hooks";
import {
  IconArrowRight,
  IconBook,
  IconCandle,
  IconCheck,
  IconChevronRight,
  IconClock,
  IconCompass,
  IconHeart,
  IconHouse,
  IconSprout,
  OliveBranch,
} from "../Icons";

const EMPHASIS_ICONS: Record<string, (p: { className?: string }) => ReactNode> = {
  arrow: (p) => <IconArrowRight {...p} />,
  book: (p) => <IconBook {...p} />,
  clock: (p) => <IconClock {...p} />,
  compass: (p) => <IconCompass {...p} />,
  heart: (p) => <IconHeart {...p} />,
  house: (p) => <IconHouse {...p} />,
  candle: (p) => <IconCandle {...p} />,
};

const FLOW_ICONS: Record<string, (p: { className?: string }) => ReactNode> = {
  book: (p) => <IconBook {...p} />,
  compass: (p) => <IconCompass {...p} />,
  sprout: (p) => <IconSprout {...p} />,
  candle: (p) => <IconCandle {...p} />,
};

const BONUS_ICONS: Record<string, (p: { className?: string }) => ReactNode> = {
  book: (p) => <IconBook {...p} />,
  check: (p) => <IconCheck {...p} />,
  sprout: (p) => <IconSprout {...p} />,
};

export function PageHead({ kicker, title }: { kicker: string; title: ReactNode }) {
  return (
    <header>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gold" />
        <p className="smallcaps text-gold">{kicker}</p>
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-[2.35rem]">
        {title}
      </h2>
      <div className="hairline-gold mt-6" />
    </header>
  );
}

export function SectionLabel({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-gold/50 bg-cream text-pine">
        {icon}
      </span>
      <p className="smallcaps text-pine">{children}</p>
      <span className="h-px flex-1 bg-ink/10" />
    </div>
  );
}

/* ------------------------------------------------ PÁGINA 1 — CAPA */
export function CoverPage() {
  return (
    <div className="p-5 sm:p-9">
      <div className="border border-gold/50 p-1.5">
        <div className="border border-gold/25 px-5 py-9 text-center sm:px-10 sm:py-12">
          <OliveBranch className="mx-auto w-36 text-pine/60" />
          <p className="smallcaps mt-6 text-gold">Devocional prático · 7 dias</p>
          <h2 className="mx-auto mt-5 max-w-md font-display text-3xl font-semibold leading-tight text-ink sm:text-[2.3rem]">
            7 Conselhos de Paulo <span className="italic text-pine">para ter mais paz</span> dentro de casa
          </h2>
          <div className="hairline-gold mx-auto mt-7 w-32" />
          <div className="mx-auto mt-9 w-40 overflow-hidden rounded-t-full ring-1 ring-gold/40 sm:w-44">
            <img
              src={IMAGES.capa}
              alt="Bíblia aberta sobre a mesa, sob a luz dourada da manhã"
              loading="lazy"
              className="h-52 w-full object-cover sm:h-56"
              draggable={false}
            />
          </div>
          <p className="mx-auto mt-9 max-w-sm font-display text-lg italic leading-snug text-ink-soft">
            Um devocional prático de 7 dias para levar a Palavra para as situações reais do cotidiano.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["Efésios", "Romanos", "Gálatas", "Filipenses"].map((l) => (
              <span key={l} className="smallcaps rounded-full border border-pine/25 px-3 py-1 text-[9px] text-pine">
                {l}
              </span>
            ))}
          </div>
          <p className="smallcaps mt-10 inline-flex items-center gap-1.5 text-[9px] text-ink-soft/80">
            Vire a página para começar <IconChevronRight className="h-3.5 w-3.5" />
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------ PÁGINA 2 — INTRODUÇÃO */
export function IntroPage() {
  return (
    <div className="p-5 sm:p-9">
      <PageHead kicker="Página 2 · Introdução" title={<>A paz que começa <em className="italic text-pine">dentro de casa</em></>} />

      <div className="mt-7 space-y-5">
        {INTRO_PARAGRAPHS.map((p, i) => (
          <p
            key={i}
            className={`text-[15.5px] leading-relaxed text-ink-soft ${i === 0 ? "drop-cap text-ink" : ""}`}
          >
            {p}
          </p>
        ))}
      </div>

      <div className="mt-8 rounded-md border border-ink/10 bg-cream/80 p-5 sm:p-6">
        <p className="text-sm font-bold text-ink">
          Sete frentes onde a Palavra encontra o seu dia a dia:
        </p>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {INTRO_EMPHASIS.map((e) => {
            const render = EMPHASIS_ICONS[e.icon];
            return (
              <li
                key={e.word}
                className="flex items-center gap-2 rounded-full border border-gold/40 bg-paper px-3.5 py-2 text-sm font-semibold text-ink transition-colors duration-300 hover:border-gold hover:bg-sand/60"
              >
                <span className="text-pine">{render({ className: "h-4 w-4" })}</span>
                {e.word}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-8 border-l-2 border-pine bg-sand/50 p-5">
        <p className="text-sm italic leading-relaxed text-ink-soft">
          As passagens citadas neste devocional são de Paulo (cartas aos Efésios, Romanos, Gálatas,
          Colossenses e Filipenses), no texto de João Ferreira de Almeida, com referência para você
          conferir na sua Bíblia. As aplicações ao cotidiano são <strong className="not-italic text-ink">reflexões práticas</strong> —
          não citações literais do apóstolo.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------ PÁGINA 3 — COMO USAR */
export function HowToPage() {
  return (
    <div className="p-5 sm:p-9">
      <PageHead kicker="Página 3 · Guia" title={<>Como usar <em className="italic text-pine">este devocional</em></>} />

      <p className="mt-7 text-[15.5px] leading-relaxed text-ink-soft">
        Reserve de <strong className="text-ink">10 a 15 minutos por dia</strong>. Pode ser cedo, antes de a casa acordar,
        ou à noite, quando o dia desacelera. O importante não é o horário — é a constância. Siga os
        cinco passos:
      </p>

      <ol className="relative mt-8 space-y-6 before:absolute before:bottom-4 before:left-[1.05rem] before:top-4 before:w-px before:bg-gold/40">
        {HOWTO_STEPS.map((s, i) => (
          <li key={s.title} className="relative flex gap-4">
            <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pine font-display text-base italic text-cream ring-4 ring-paper">
              {i + 1}
            </span>
            <div className="pt-1">
              <p className="font-bold text-ink">{s.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <p className="smallcaps text-gold">O caminho de cada dia</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-0">
          {FLOW.map((f, i) => {
            const render = FLOW_ICONS[f.icon];
            return (
              <div key={f.label} className="contents">
                <div className="rounded-md border border-pine/20 bg-cream p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-pine/40 hover:shadow-md">
                  <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-pine text-cream">
                    {render({ className: "h-5 w-5" })}
                  </span>
                  <p className="smallcaps mt-3 text-[10px] text-ink">{f.label}</p>
                </div>
                {i < FLOW.length - 1 && (
                  <IconArrowRight className="hidden h-5 w-5 shrink-0 text-gold sm:mx-2 sm:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 rounded-md bg-pine p-6 text-cream">
        <p className="smallcaps text-gold-soft">Dica para aproveitar mais</p>
        <p className="mt-3 text-[15px] leading-relaxed text-cream/90">
          Você pode fazer este devocional sozinho, com seu cônjuge ou em família. Se fizerem juntos,
          cada um responde à pergunta no seu espaço — sem julgamentos, só partilha.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------ PÁGINA 12 — CONCLUSÃO */
export function ConclusionPage({ onRestart }: { onRestart: () => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <div className="p-5 sm:p-9">
      <PageHead kicker="Página 12 · Conclusão" title={<>Um novo começo, <em className="italic text-pine">uma atitude por vez</em></>} />

      <div ref={ref} className={`mt-9 ${visible ? "is-visible" : ""}`}>
        <blockquote className="font-display text-ink">
          <span className="line-mask text-[1.65rem] font-semibold leading-tight sm:text-3xl">
            <span style={{ "--d": "0ms" } as CSSProperties}>{CONCLUSION_LINES[0]}</span>
          </span>
          <span className="mt-6 block space-y-1.5">
            {CONCLUSION_LINES.slice(1, 5).map((l, i) => (
              <span key={l} className="line-mask text-xl text-pine sm:text-2xl">
                <span style={{ "--d": `${180 + i * 140}ms` } as CSSProperties} className="flex items-center gap-3">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                  <em className="italic">{l}</em>
                </span>
              </span>
            ))}
          </span>
          <span className="line-mask mt-7 text-lg italic text-ink-soft sm:text-xl">
            <span style={{ "--d": "800ms" } as CSSProperties}>{CONCLUSION_LINES[5]}</span>
          </span>
        </blockquote>
      </div>

      <div className="mt-11">
        <p className="smallcaps text-gold">Continue sua jornada</p>
        <ul className="mt-5 space-y-4">
          {BONUS_ITEMS.map((b) => {
            const render = BONUS_ICONS[b.icon];
            return (
              <li key={b.title} className="flex items-start gap-4 rounded-md border border-ink/10 bg-cream/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-md">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/50 bg-paper text-pine">
                  {render({ className: "h-5 w-5" })}
                </span>
                <div>
                  <p className="font-bold text-ink">{b.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{b.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-11 border-y border-gold/40 py-7 text-center">
        <p className="font-display text-xl italic leading-snug text-ink sm:text-2xl">
          “E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos
          sentimentos em Cristo Jesus.”
        </p>
        <p className="smallcaps mt-4 text-gold">Filipenses 4:7</p>
      </div>

      <div className="mt-9 text-center">
        <button
          type="button"
          onClick={onRestart}
          className="group inline-flex items-center gap-3 rounded-md bg-pine px-7 py-3.5 font-bold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-deep hover:shadow-lg"
        >
          <IconBook className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6" />
          Reler o devocional desde a capa
        </button>
      </div>
    </div>
  );
}
