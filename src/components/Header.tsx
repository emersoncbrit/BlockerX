import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Preço", href: "#preco" },
  { label: "Como Usar", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card header-shadow">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <img src={logo} alt="BlockerX" className="w-8 h-8" /> <span>BlockerX</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          Comprar por R$ 5,90
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
              {item.label}
            </a>
          ))}
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="mt-2 block text-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
            Comprar por R$ 5,90
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
