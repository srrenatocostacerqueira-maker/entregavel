import { useRef, useState } from "react";
import type { DayContent } from "../../data/devocional";
import { useLocalStorage } from "../../hooks";
import {
  IconBook,
  IconCandle,
  IconCheck,
  IconHouse,
  IconLeaf,
  IconQuestion,
  IconSprout,
} from "../Icons";
import { SectionLabel } from "./pages";

function ReflectionBox({ id }: { id: string }) {
  const [value, setValue] = useLocalStorage<string>(`paz7-reflexao-${id}`, "");
  const [saving, setSaving] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const onChange = (v: string) => {
    setValue(v);
    setSaving(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setSaving(false), 1300);
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between gap-3">
        <p className="smallcaps text-[9.5px] text-ink-soft">Minha reflexão · seu espaço para escrever</p>
        {saving && (
          <p className="anim-saved flex items-center gap-1 text-[11px] font-bold text-pine">
            <IconCheck className="h-3.5 w-3.5" /> salvo
          </p>
        )}
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Escreva aqui, com sinceridade, o que Deus está falando com você hoje…"
        className="mt-2.5 w-full resize-y rounded-md border border-gold/40 bg-paper p-4 text-[15px] leading-relaxed text-ink outline-none transition-all placeholder:text-ink-soft/50 focus:border-gold focus:ring-2 focus:ring-gold/25"
      />
    </div>
  );
}

export function DayPage({ day }: { day: DayContent }) {
  return (
    <article className="relative overflow-hidden p-5 sm:p-9">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-1 select-none font-display text-[7.5rem] font-black italic leading-none text-pine/[0.06] sm:text-[10.5rem]"
      >
        {String(day.day).padStart(2, "0")}
      </span>

      {/* cabeçalho do dia */}
      <header className="relative">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <p className="smallcaps text-gold">Dia {day.day} de 7</p>
        </div>
        <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-ink sm:text-[2.35rem]">
          {day.title}
        </h2>
        <span className="smallcaps mt-4 inline-block rounded-full border border-gold/50 px-3.5 py-1.5 text-[9.5px] text-gold">
          Foco: {day.focus}
        </span>
      </header>

      {/* passagem */}
      <div className="relative mt-8 overflow-hidden rounded-lg bg-pine p-6 text-cream sm:p-8">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-7 left-3 select-none font-display text-[7rem] italic leading-none text-gold/20"
        >
          “
        </span>
        <p className="relative font-display text-xl italic leading-relaxed sm:text-[1.35rem]">
          “{day.verse.text}”
        </p>
        <p className="smallcaps relative mt-5 text-gold-soft">— {day.verse.ref}</p>
        {day.also && (
          <p className="relative mt-4 border-t border-cream/15 pt-4 text-sm italic leading-relaxed text-cream/75">
            Para meditar também: “{day.also.text}”{" "}
            <span className="smallcaps ml-1 not-italic text-gold-soft/90">({day.also.ref})</span>
          </p>
        )}
      </div>

      <div className="relative mt-10 space-y-9">
        {/* contexto */}
        <section>
          <SectionLabel icon={<IconBook className="h-4 w-4" />}>Contexto</SectionLabel>
          <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">{day.context}</p>
        </section>

        {/* situação */}
        <section>
          <SectionLabel icon={<IconHouse className="h-4 w-4" />}>Situação do cotidiano</SectionLabel>
          <div className="mt-4 rounded-md border-l-[3px] border-gold bg-sand/60 p-5">
            <p className="font-display text-lg italic leading-snug text-ink/85">{day.situation}</p>
          </div>
        </section>

        {/* reflexão */}
        <section>
          <SectionLabel icon={<IconLeaf className="h-4 w-4" />}>Reflexão</SectionLabel>
          <div className="mt-4 space-y-4">
            {day.reflection.map((p, i) => (
              <p
                key={i}
                className={`text-[15.5px] leading-relaxed text-ink-soft ${i === 0 ? "drop-cap text-ink" : ""}`}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* pergunta */}
        <section>
          <SectionLabel icon={<IconQuestion className="h-4 w-4" />}>Pergunta do dia</SectionLabel>
          <div className="mt-4 rounded-md border-[1.5px] border-gold/60 bg-[#fdfaf0] p-5">
            <p className="font-display text-lg italic leading-snug text-ink">“{day.question}”</p>
            <ReflectionBox id={`dia-${day.day}`} />
          </div>
        </section>

        {/* ação */}
        <section>
          <SectionLabel icon={<IconSprout className="h-4 w-4" />}>Ação de hoje</SectionLabel>
          <div className="relative mt-4 overflow-hidden rounded-md bg-pine p-5 text-cream sm:p-6">
            <IconSprout className="pointer-events-none absolute -bottom-4 -right-4 h-28 w-28 text-cream/[0.07]" />
            <p className="smallcaps text-gold-soft">Pequena ação · cabe no seu dia</p>
            <p className="relative mt-2.5 text-[15.5px] font-medium leading-relaxed text-cream/95">
              {day.action}
            </p>
          </div>
        </section>

        {/* oração */}
        <section>
          <SectionLabel icon={<IconCandle className="h-4 w-4" />}>Oração</SectionLabel>
          <div className="mt-4 rounded-md border border-gold/40 bg-cream/70 p-6 text-center sm:p-7">
            <IconCandle className="anim-flame mx-auto h-7 w-7 text-gold" />
            <p className="mx-auto mt-4 max-w-md font-display text-lg italic leading-relaxed text-ink/90">
              “{day.prayer}”
            </p>
          </div>
        </section>
      </div>

      {/* gancho do próximo dia */}
      <p className="smallcaps relative mt-10 text-center text-[9.5px] text-ink-soft/70">
        {day.day < 7 ? "Amanhã: um novo conselho espera você — mesma página, novo dia." : "Amanhã: marque seus passos no checklist dos 7 dias."}
      </p>
    </article>
  );
}
