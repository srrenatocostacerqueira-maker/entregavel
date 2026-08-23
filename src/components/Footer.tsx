import { OliveBranch } from "./Icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bark text-cream/85">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <OliveBranch className="w-40 text-gold/60" />
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
              7 Conselhos de Paulo <span className="italic text-gold-soft">para ter mais paz</span> dentro de casa
            </h2>
            <p className="mt-5 max-w-md font-display text-lg italic leading-snug text-cream/70">
              “Tende paz com todos os homens.” — Romanos 12:18
            </p>
          </div>

          <div className="md:pt-16">
            <p className="smallcaps text-gold-soft">Sobre este material</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/65">
              Devocional prático de 7 dias. As citações bíblicas seguem o texto de João Ferreira de
              Almeida (domínio público), sempre com referência para conferência. As aplicações ao
              cotidiano são reflexões práticas inspiradas nas cartas de Paulo — não citações
              literais do apóstolo.
            </p>
            <nav className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold">
              <a href="#topo" className="navlink text-cream/80 transition-colors hover:text-cream">Início</a>
              <a href="#dias" className="navlink text-cream/80 transition-colors hover:text-cream">Os 7 dias</a>
              <a href="#devocional" className="navlink text-cream/80 transition-colors hover:text-cream">O devocional</a>
              <a href="#divulgacao" className="navlink text-cream/80 transition-colors hover:text-cream">Divulgação</a>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-7 text-xs text-cream/50">
          <p>© 2026 Paz em Casa · um devocional para o cotidiano.</p>
          <p className="italic">Feito para levar a Palavra para dentro de casa — uma atitude por vez.</p>
        </div>
      </div>
    </footer>
  );
}
