import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";

const TermosUso = () => (
  <>
    <Header />
    <main className="pt-24 pb-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">
          ← Voltar ao início
        </Link>
        <h1 className="text-3xl font-bold text-foreground mb-2">Termos de Uso</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: fevereiro de 2025</p>

        <section className="space-y-4 text-foreground">
          <h2 className="text-xl font-semibold mt-8">1. Aceitação</h2>
          <p>
            Ao acessar este site ou utilizar a extensão BlockerX, você concorda com estes Termos de Uso. Se não concordar, não utilize o site nem a extensão.
          </p>

          <h2 className="text-xl font-semibold mt-8">2. Descrição do serviço</h2>
          <p>
            O BlockerX é uma extensão de navegador que permite bloquear categorias de conteúdo (conteúdo adulto, redes sociais, jogos de azar, jogos) e sites personalizados. O uso é de responsabilidade do usuário, em conformidade com as leis aplicáveis.
          </p>

          <h2 className="text-xl font-semibold mt-8">3. Uso permitido</h2>
          <p>
            Você concorda em usar o BlockerX e este site apenas para fins lícitos. É proibido utilizar o serviço para burlar políticas de terceiros, praticar atividades ilegais ou prejudicar outros usuários ou sistemas.
          </p>

          <h2 className="text-xl font-semibold mt-8">4. Licença e propriedade</h2>
          <p>
            O BlockerX, incluindo marca, interface e conteúdo desta página, é de propriedade do desenvolvedor. A compra concede licença de uso pessoal, não exclusiva e não transferível, conforme o ofertado no momento da compra.
          </p>

          <h2 className="text-xl font-semibold mt-8">5. Pagamento e acesso</h2>
          <p>
            O pagamento é processado por terceiros. O acesso à versão paga é concedido após confirmação do pagamento. Reembolsos estão sujeitos à nossa Política de Reembolso.
          </p>

          <h2 className="text-xl font-semibold mt-8">6. Isenção de garantias</h2>
          <p>
            O BlockerX é oferecido &quot;como está&quot;. Não garantimos que a extensão funcionará ininterruptamente em todos os navegadores ou cenários. O uso é por sua conta e risco dentro do permitido por lei.
          </p>

          <h2 className="text-xl font-semibold mt-8">7. Limitação de responsabilidade</h2>
          <p>
            Na máxima extensão permitida por lei, não seremos responsáveis por danos indiretos, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso do BlockerX ou deste site.
          </p>

          <h2 className="text-xl font-semibold mt-8">8. Alterações</h2>
          <p>
            Podemos alterar estes termos a qualquer momento. Alterações significativas serão comunicadas por meio desta página. O uso continuado após as alterações constitui aceite dos novos termos.
          </p>

          <h2 className="text-xl font-semibold mt-8">9. Contato</h2>
          <p>
            Dúvidas sobre estes termos: <a href="https://x.com/britreal75" target="_blank" rel="noopener noreferrer" className="text-primary underline">@britreal75 no X</a>.
          </p>
        </section>
      </div>
    </main>
    <FooterSection />
  </>
);

export default TermosUso;
