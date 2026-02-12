import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";

const PoliticaPrivacidade = () => (
  <>
    <Header />
    <main className="pt-24 pb-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">
          ← Voltar ao início
        </Link>
        <h1 className="text-3xl font-bold text-foreground mb-2">Política de Privacidade</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: fevereiro de 2025</p>

        <section className="space-y-4 text-foreground">
          <h2 className="text-xl font-semibold mt-8">1. Introdução</h2>
          <p>
            O BlockerX (&quot;nós&quot;, &quot;nosso&quot;) respeita sua privacidade. Esta política descreve como tratamos as informações em relação à extensão de navegador BlockerX e à landing page.
          </p>

          <h2 className="text-xl font-semibold mt-8">2. Dados que coletamos</h2>
          <p>
            A extensão BlockerX armazena localmente no seu navegador apenas as preferências de bloqueio (categorias ativadas e lista de sites personalizados). Não enviamos essas configurações para nossos servidores. Em compras realizadas na página, o processamento de pagamento é feito por terceiros (gateway de pagamento), que podem coletar dados necessários à transação conforme suas próprias políticas.
          </p>

          <h2 className="text-xl font-semibold mt-8">3. Uso dos dados</h2>
          <p>
            Utilizamos dados de contato (ex.: e-mail) apenas para suporte, entrega de acesso ao produto e comunicações relacionadas à compra. Não vendemos nem compartilhamos seus dados com terceiros para marketing.
          </p>

          <h2 className="text-xl font-semibold mt-8">4. Cookies e tecnologias similares</h2>
          <p>
            A landing page pode utilizar cookies ou tecnologias similares para funcionamento básico do site e análise de acesso. O uso da extensão em si não depende de cookies em outros sites.
          </p>

          <h2 className="text-xl font-semibold mt-8">5. Seus direitos</h2>
          <p>
            Você pode, a qualquer momento, solicitar informações sobre os dados que mantemos ou solicitar correção/exclusão, dentro do permitido por lei. Para isso, entre em contato conosco pelo canal indicado no site (X / contato).
          </p>

          <h2 className="text-xl font-semibold mt-8">6. Alterações</h2>
          <p>
            Podemos atualizar esta política periodicamente. A data da última atualização será indicada no topo da página. O uso continuado do BlockerX ou do site após alterações constitui aceite da nova versão.
          </p>

          <h2 className="text-xl font-semibold mt-8">7. Contato</h2>
          <p>
            Dúvidas sobre esta política: entre em contato via <a href="https://x.com/britreal75" target="_blank" rel="noopener noreferrer" className="text-primary underline">@britreal75 no X</a>.
          </p>
        </section>
      </div>
    </main>
    <FooterSection />
  </>
);

export default PoliticaPrivacidade;
