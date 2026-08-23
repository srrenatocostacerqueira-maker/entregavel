import { useState } from "react";
import { CHECKLIST_ITEMS, DAYS } from "../../data/devocional";
import { useLocalStorage } from "../../hooks";
import { IconCheck } from "../Icons";
import { PageHead } from "./pages";

export function ChecklistPage() {
  const [checks, setChecks] = useLocalStorage<Record<string, boolean>>("paz7-checklist-v1", {});
  const [active, setActive] = useState(1);

  const total = DAYS.length * CHECKLIST_ITEMS.length;
  const done = Object.values(checks).filter(Boolean).length;
  const dayDone = (d: number) => CHECKLIST_ITEMS.filter((_, i) => checks[`${d}-${i}`]).length;

  const toggle = (d: number, i: number) => {
    const key = `${d}-${i}`;
    setChecks({ ...checks, [key]: !checks[key] });
  };

  const clearAll = () => {
    if (window.confirm("Limpar todo o checklist dos 7 dias?")) setChecks({});
  };

  const activeDay = DAYS[active - 1];

  return (
    <div className="p-5 sm:p-9">
      <PageHead kicker="Página 11 · Acompanhamento" title={<>Checklist <em className="italic text-pine">dos 7 dias</em></>} />

      <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft">
        Marque cada passo concluído e acompanhe sua jornada. O progresso fica salvo neste
        dispositivo — volte a ele sempre que quiser.
      </p>

      {/* progresso geral */}
      <div className="mt-7 flex items-center gap-4">
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-sand">
          <div
            className="h-full rounded-full bg-gold transition-all duration-700 ease-out"
            style={{ width: `${(done / total) * 100}%` }}
          />
        </div>
        <p className="whitespace-nowrap font-display text-lg italic text-pine">
          {done} <span className="text-ink-soft">de {total}</span>
        </p>
      </div>

      {/* seletor de dias */}
      <div className="mt-7 flex flex-wrap gap-2">
        {DAYS.map((d) => {
          const k = dayDone(d.day);
          const full = k === CHECKLIST_ITEMS.length;
          const isActive = active === d.day;
          return (
            <button
              key={d.day}
              type="button"
              onClick={() => setActive(d.day)}
              className={`flex items-center gap-2 rounded-md border px-3.5 py-2 text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "border-pine bg-pine text-cream shadow-md"
                  : "border-ink/15 bg-paper text-ink hover:border-gold"
              }`}
            >
              Dia {d.day}
              <span className={`flex items-center gap-1 text-[11px] font-semibold ${isActive ? "text-gold-soft" : full ? "text-pine" : "text-ink-soft/70"}`}>
                {full && <IconCheck className="h-3 w-3" />}
                {k}/{CHECKLIST_ITEMS.length}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 font-display text-lg italic text-ink">
        Dia {activeDay.day} — {activeDay.title}
      </p>

      {/* itens */}
      <ul className="mt-4 space-y-2.5">
        {CHECKLIST_ITEMS.map((item, i) => {
          const checked = Boolean(checks[`${active}-${i}`]);
          return (
            <li key={item}>
              <button
                type="button"
                role="checkbox"
                aria-checked={checked}
                onClick={() => toggle(active, i)}
                className={`flex w-full items-center gap-4 rounded-md border p-4 text-left transition-all duration-300 ${
                  checked
                    ? "border-pine/40 bg-pine/[0.07]"
                    : "border-ink/12 bg-paper hover:border-gold/60 hover:bg-cream/70"
                }`}
              >
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded border-2 transition-colors duration-300 ${
                    checked ? "border-pine bg-pine text-cream" : "border-ink/30 bg-paper"
                  }`}
                >
                  {checked && <IconCheck className="anim-check-pop h-4 w-4" />}
                </span>
                <span
                  className={`text-[15.5px] font-medium transition-colors duration-300 ${
                    checked ? "text-ink-soft/75 line-through decoration-gold/70" : "text-ink"
                  }`}
                >
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {done === total && (
        <div className="mt-6 rounded-md bg-gold/15 p-5 text-center">
          <p className="font-display text-xl italic text-pine">
            Você completou os 7 dias. Que a paz continue florescendo na sua casa.
          </p>
        </div>
      )}

      <div className="mt-7 flex items-center justify-between gap-4">
        <p className="text-xs italic text-ink-soft/70">Repita os 5 passos em cada um dos sete dias.</p>
        <button
          type="button"
          onClick={clearAll}
          className="text-xs font-bold text-ink-soft underline decoration-gold/60 underline-offset-4 transition-colors hover:text-pine"
        >
          Limpar checklist
        </button>
      </div>
    </div>
  );
}
