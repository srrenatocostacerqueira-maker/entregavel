import { THUMBS } from "../data/devocional";
import { IconSpark } from "./Icons";
import { Reveal } from "./Reveal";

const SCRIM =
  "linear-gradient(180deg, rgba(24,34,26,0.78) 0%, rgba(24,34,26,0.22) 32%, rgba(24,34,26,0.12) 55%, rgba(24,34,26,0.85) 100%)";

function ThumbOne() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-5 text-center">
      <div>
        <span className="smallcaps inline-block rounded-full border border-cream/60 px-3 py-1 text-[8px] text-cream/90">
          Devocional · 7 dias
        </span>
        <h3 className="mt-5 text-[1.7rem] font-extrabold uppercase leading-[0.98] tracking-tight text-cream [text-shadow:0_2px_18px_rgba(20,28,20,0.85)]">
          Sua casa está perdendo{" "}
          <span className="text-gold-soft">a paz?</span>
        </h3>
      </div>
      <div>
        <div className="hairline-gold mx-auto mb-3 w-16" />
        <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-cream">7 Conselhos de Paulo</p>
        <p className="mt-1 text-[11px] font-medium italic text-cream/85">para ter mais paz dentro de casa</p>
      </div>
    </div>
  );
}

function ThumbTwo() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-between p-5 text-center">
      <span className="smallcaps rounded-full border border-cream/50 px-3 py-1 text-[8px] text-cream/90">
        Baseado nas cartas de Paulo
      </span>
      <div className="-mt-4">
        <p
          className="font-display text-[9.2rem] font-black italic leading-[0.8] text-cream"
          style={{ textShadow: "0 4px 0 rgba(176,141,74,0.55), 0 18px 40px rgba(15,22,16,0.7)" }}
        >
          7
        </p>
        <p className="mt-2 text-lg font-extrabold uppercase tracking-[0.42em] text-gold-soft [text-shadow:0_2px_10px_rgba(15,22,16,0.8)]">
          Conselhos
        </p>
      </div>
      <div>
        <p className="text-sm font-extrabold uppercase leading-snug tracking-[0.06em] text-cream">
          Para ter mais paz <br /> dentro de casa
        </p>
        <p className="smallcaps mt-2 text-[8px] text-cream/70">Devocional prático · 7 dias</p>
      </div>
    </div>
  );
}

function ThumbThree() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-5 text-center">
      <div>
        <p className="smallcaps text-gold-soft [text-shadow:0_1px_8px_rgba(20,28,20,0.8)]">Devocional prático</p>
        <h3 className="mt-3 text-[1.55rem] font-extrabold uppercase leading-[1.02] tracking-tight text-cream [text-shadow:0_2px_16px_rgba(20,28,20,0.9)]">
          Como aplicar Paulo no cotidiano
        </h3>
        <p className="mt-2 font-display text-sm italic text-cream/85 [text-shadow:0_1px_8px_rgba(20,28,20,0.8)]">
          da Palavra para a vida real da sua casa
        </p>
      </div>
      <div className="rounded-md border border-cream/20 bg-pine-deep/85 px-4 py-3 backdrop-blur-[2px]">
        <p className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-cream">7 Conselhos de Paulo</p>
        <p className="mt-0.5 text-[10px] italic text-cream/80">para ter mais paz dentro de casa</p>
      </div>
    </div>
  );
}

const OVERLAYS = [ThumbOne, ThumbTwo, ThumbThree];

export function Thumbnails() {
  return (
    <section id="divulgacao" className="relative overflow-hidden bg-pine-deep py-20 text-cream sm:py-24">
      {/* luz suave no topo da seção */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 50% -10%, rgba(201,164,92,0.14), transparent 60%), radial-gradient(700px 500px at 100% 100%, rgba(44,70,54,0.5), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-10 select-none font-display text-[24vw] font-black italic leading-none text-cream/[0.03] lg:text-[15rem]"
      >
        7
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gold-soft" />
                <p className="smallcaps text-gold-soft">Material de divulgação</p>
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
                Thumbnails verticais <em className="italic text-gold-soft">· 9:16</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-sm text-sm leading-relaxed text-cream/70">
              Três conceitos distintos de composição, com o mesmo DNA visual da oferta — prontos
              para stories, reels e anúncios. Sem pessoas reais, sem depoimentos inventados.
            </p>
          </Reveal>
        </div>

        <div className="snap-row -mx-5 mt-14 flex gap-7 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
          {THUMBS.map((t, i) => {
            const Overlay = OVERLAYS[i];
            return (
              <Reveal key={t.concept} delay={i * 130} className="w-[260px] shrink-0 sm:w-[290px] lg:w-auto">
                <figure className="group">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg shadow-[0_35px_70px_-25px_rgba(0,0,0,0.65)] ring-1 ring-cream/15 transition-transform duration-500 hover:-translate-y-2.5">
                    <img
                      src={t.image}
                      alt={`Thumbnail ${i + 1}: ${t.hook}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                      draggable={false}
                    />
                    <div className="absolute inset-0" style={{ background: SCRIM }} aria-hidden="true" />
                    <Overlay />
                  </div>
                  <figcaption className="mt-5">
                    <p className="smallcaps flex items-center gap-2 text-gold-soft">
                      <IconSpark className="h-3 w-3" />
                      {t.concept} · {t.tag}
                    </p>
                    <p className="mt-2 font-display text-lg italic text-cream/95">Gancho: {t.hook}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/60">{t.note}</p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
