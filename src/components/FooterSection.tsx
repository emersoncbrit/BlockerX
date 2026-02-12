import { Link } from "react-router-dom";

const FooterSection = () => (
  <footer className="bg-footer text-footer-foreground py-16 px-4">
    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
      <div>
        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Links</h4>
        <ul className="space-y-2 text-sm opacity-80">
          <li><a href="#inicio" className="hover:opacity-100 transition-opacity">Início</a></li>
          <li><a href="#funcionalidades" className="hover:opacity-100 transition-opacity">Funcionalidades</a></li>
          <li><a href="#preco" className="hover:opacity-100 transition-opacity">Preço</a></li>
          <li><a href="#como-funciona" className="hover:opacity-100 transition-opacity">Tutorial</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Suporte</h4>
        <ul className="space-y-2 text-sm opacity-80">
          <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
          <li><a href="#" className="hover:opacity-100 transition-opacity">Central de Ajuda</a></li>
          <li><a href="https://x.com/britreal75" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Contato</a></li>
          <li><a href="https://x.com/britreal75" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Reportar Bug</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h4>
        <ul className="space-y-2 text-sm opacity-80">
          <li><Link to="/politica-de-privacidade" className="hover:opacity-100 transition-opacity">Política de Privacidade</Link></li>
          <li><Link to="/termos-de-uso" className="hover:opacity-100 transition-opacity">Termos de Uso</Link></li>
          <li><Link to="/politica-de-reembolso" className="hover:opacity-100 transition-opacity">Política de Reembolso</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Social</h4>
        <ul className="space-y-2 text-sm opacity-80">
          <li><a href="https://x.com/britreal75" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">X (Twitter)</a></li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto border-t border-footer-foreground/20 pt-8 text-center text-sm opacity-70">
      <p>© 2024 BlockerX - Todos os direitos reservados</p>
      <p className="mt-1">Desenvolvido por <a href="https://x.com/britreal75" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-90 transition-opacity">@britreal75</a> para sua produtividade</p>
    </div>
  </footer>
);

export default FooterSection;
