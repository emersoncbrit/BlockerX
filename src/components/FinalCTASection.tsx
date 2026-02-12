import { CHECKOUT_URL } from "@/lib/constants";

const FinalCTASection = () => (
  <section className="section-padding gradient-bg-strong text-center">
    <div className="container mx-auto max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recupere seu foco hoje</h2>
      <p className="text-muted-foreground mb-8">Junte-se a milhares de pessoas que já mudaram seus hábitos</p>
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-xl bg-primary text-primary-foreground text-lg font-bold hover:opacity-90 transition-opacity animate-pulse-btn">
        GARANTIR MINHA CÓPIA POR R$ 5,90
      </a>
      <p className="mt-6 text-sm text-muted-foreground">Pagamento único • Acesso vitalício</p>
    </div>
  </section>
);

export default FinalCTASection;
