const steps = [
  { num: "1", icon: "💳", title: "Compre por R$ 5,90", desc: "Pagamento único e seguro" },
  { num: "2", icon: "📥", title: "Baixe e instale", desc: "Receba o link após pagamento" },
  { num: "3", icon: "⚙️", title: "Configure e use", desc: "Ative bloqueios e mantenha o foco para sempre" },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="section-padding bg-muted">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">Como funciona</h2>
      <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s) => (
          <div key={s.num} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl mb-4">{s.icon}</div>
            <span className="text-xs font-bold text-primary mb-1">PASSO {s.num}</span>
            <h3 className="text-lg font-semibold text-foreground mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
