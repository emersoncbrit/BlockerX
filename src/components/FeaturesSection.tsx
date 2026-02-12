const features = [
  { icon: "🛡️", title: "Bloqueio Inteligente", desc: "Bloqueie automaticamente 4 categorias: conteúdo adulto, redes sociais, jogos de azar e jogos" },
  { icon: "✅", title: "4 Categorias Principais", desc: "Conteúdo Adulto • Redes Sociais • Jogos de Azar • Jogos" },
  { icon: "🎯", title: "Sites Personalizados", desc: "Adicione manualmente qualquer site que você quer bloquear (ilimitados)" },
];

const FeaturesSection = () => (
  <section id="funcionalidades" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-primary text-sm font-medium mb-4">
          ✨ Tudo incluído por R$ 5,90
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Funcionalidades</h2>
        <p className="text-muted-foreground">Tudo o que você precisa para manter o foco</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="bg-card border border-accent/25 rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
