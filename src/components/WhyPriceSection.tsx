const cards = [
  { icon: "💰", title: "Preço justo", desc: "Acreditamos que produtividade não deveria custar caro. Um café custa mais!" },
  { icon: "🎯", title: "Sem complicação", desc: "Sem planos mensais, sem renovações. Comprou, é seu para sempre!" },
  { icon: "🚀", title: "Simples e eficaz", desc: "Foco no que importa: bloquear distrações de forma rápida e direta" },
];

const WhyPriceSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">Por que apenas R$ 5,90?</h2>
      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {cards.map((c) => (
          <div key={c.title} className="bg-card border border-border rounded-xl p-6 card-shadow">
            <div className="text-3xl mb-3">{c.icon}</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyPriceSection;
