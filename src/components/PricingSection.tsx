import { Check } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

const included = [
  "Bloqueio de conteúdo adulto",
  "Bloqueio de redes sociais",
  "Bloqueio de jogos de azar",
  "Bloqueio de jogos",
  "Sites personalizados ilimitados",
  "Suporte por e-mail",
  "Sem mensalidades ou taxas extras",
];

const PricingSection = () => (
  <section id="preco" className="section-padding gradient-bg-strong">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Investimento único, benefícios para toda vida</h2>
      <p className="text-muted-foreground mb-10">Sem mensalidades, sem taxas ocultas</p>

      <div className="max-w-xl mx-auto bg-card rounded-2xl border-[3px] border-primary p-8 md:p-10 card-shadow relative">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold">
          💎 MELHOR OFERTA
        </span>

        <h3 className="text-xl font-semibold text-foreground mt-2 mb-1">BlockerX - Versão Completa</h3>
        <p className="text-muted-foreground line-through text-sm mb-1">R$ 49,90</p>
        <p className="text-6xl font-bold text-primary mb-1">R$ 5,90</p>
        <p className="text-sm text-muted-foreground mb-8">Pagamento único - Acesso vitalício</p>

        <ul className="text-left space-y-3 mb-8">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-muted">🔒 Pagamento seguro</span>
          <span className="px-3 py-1 rounded-full bg-muted">💯 Satisfação garantida</span>
        </div>

        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="block w-full py-4 rounded-xl bg-primary text-primary-foreground text-lg font-bold hover:opacity-90 transition-opacity animate-pulse-btn text-center">
          COMPRAR AGORA POR R$ 5,90
        </a>

        <div className="mt-6 space-y-1 text-sm text-muted-foreground">
          <p>Mais de 10.000 usuários já melhoraram seu foco</p>
          <p>⭐⭐⭐⭐⭐ 4.8/5 - Avaliação dos usuários</p>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
