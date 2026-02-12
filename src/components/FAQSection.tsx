import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Quanto custa o BlockerX?", a: "Apenas R$ 5,90 em pagamento único. Sem mensalidades ou taxas extras." },
  { q: "Preciso pagar todo mês?", a: "NÃO! É pagamento único. Você paga R$ 5,90 uma vez e usa para sempre." },
  { q: "Como recebo a extensão após pagar?", a: "Após o pagamento, você recebe um link para download e instruções de instalação." },
  { q: "Funciona no Chrome e Edge?", a: "Sim! Compatível com ambos os navegadores." },
  { q: "Posso instalar em mais de um computador?", a: "Sim! Sem limite de instalações." },
  { q: "Como instalo o BlockerX?", a: "Após comprar, você recebe instruções detalhadas. É simples e rápido." },
  { q: "Meus dados são privados?", a: "Sim! Tudo fica salvo localmente no seu navegador." },
  { q: "Tem garantia?", a: "Sim! 7 dias de garantia. Não gostou? Devolvemos seu dinheiro." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-card">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-10">Dúvidas frequentes</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 data-[state=open]:bg-muted/50">
            <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-4">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
