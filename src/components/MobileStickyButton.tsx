import { CHECKOUT_URL } from "@/lib/constants";

const MobileStickyButton = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-card/90 backdrop-blur-sm border-t border-border">
    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3.5 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
      Comprar por R$ 5,90
    </a>
  </div>
);

export default MobileStickyButton;
