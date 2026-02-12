import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";

const PoliticaReembolso = () => (
  <>
    <Header />
    <main className="pt-24 pb-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">
          ← Voltar ao início
        </Link>
        <h1 className="text-3xl font-bold text-foreground mb-2">Política de Reembolso</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: fevereiro de 2025</p>

        <section className="space-y-4 text-foreground">
          <h2 className="text-xl font-semibold mt-8">1. Direito ao reembolso</h2>
          <p>
            Oferecemos reembolso para compras do BlockerX quando a solicitação for feita dentro do prazo e nas condições descritas nesta política. O objetivo é garantir sua satisfação com a compra.
          </p>

          <h2 className="text-xl font-semibold mt-8">2. Prazo para solicitar</h2>
          <p>
            Você pode solicitar o reembolso em até <strong>7 (sete) dias</strong> a contar da data da compra. Após esse período, não serão aceitas solicitações de reembolso, salvo disposição legal em contrário (ex.: direito do consumidor aplicável).
          </p>

          <h2 className="text-xl font-semibold mt-8">3. Como solicitar</h2>
          <p>
            Envie sua solicitação de reembolso pelo mesmo canal usado no suporte: contato ou reportar bug (link disponível no rodapé do site). Informe o e-mail utilizado na compra e, se possível, o comprovante ou identificador da transação. Responderemos em até 5 dias úteis.
          </p>

          <h2 className="text-xl font-semibold mt-8">4. Processamento</h2>
          <p>
            Após a aprovação do reembolso, o valor será devolvido pelo mesmo meio de pagamento utilizado na compra, em conformidade com as regras da operadora (cartão, PIX etc.). O prazo para o valor aparecer na sua fatura ou conta pode levar até 10 dias úteis.
          </p>

          <h2 className="text-xl font-semibold mt-8">5. Acesso após reembolso</h2>
          <p>
            Após o reembolso ser processado, o acesso à versão paga do BlockerX será revogado. A extensão poderá continuar sendo usada em modo limitado ou conforme a oferta gratuita, se houver.
          </p>

          <h2 className="text-xl font-semibold mt-8">6. Exceções</h2>
          <p>
            Reservamo-nos o direito de recusar reembolsos em casos de suspeita de fraude, uso indevido ou múltiplas compras e reembolsos repetidos. Em caso de dúvida, entre em contato para analisarmos seu caso.
          </p>

          <h2 className="text-xl font-semibold mt-8">7. Contato</h2>
          <p>
            Dúvidas sobre reembolsos: <a href="https://x.com/britreal75" target="_blank" rel="noopener noreferrer" className="text-primary underline">@britreal75 no X</a>.
          </p>
        </section>
      </div>
    </main>
    <FooterSection />
  </>
);

export default PoliticaReembolso;
