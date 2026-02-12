import { CHECKOUT_URL } from "@/lib/constants";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => (
  <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-20 px-4">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-primary text-sm font-medium">
          ✅ Compatível com Chrome e Microsoft Edge
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
          Bloqueie distrações e mantenha seu foco
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Extensão poderosa que bloqueia automaticamente sites adultos, redes sociais, jogos de azar e jogos. Recupere seu tempo e produtividade.
        </p>

        <span className="inline-block px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-semibold">
          🎉 Apenas R$ 5,90 - Pagamento único!
        </span>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity">
            Comprar agora por R$ 5,90
          </a>
          <a href="#funcionalidades" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors">
            Ver funcionalidades
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-lg rounded-[1.75rem] overflow-hidden gradient-bg p-6 sm:p-8 shadow-xl ring-1 ring-primary/10 border border-primary/5">
          <div className="rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-inner">
            <img
              src={heroMockup}
              alt="Interface da extensão BlockerX - categorias de bloqueio e sites personalizados"
              className="w-full h-auto rounded-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
