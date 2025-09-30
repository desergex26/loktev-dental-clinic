import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/about", label: "О клинике" },
    { to: "/doctors", label: "Врачи" },
    { to: "/licenses", label: "Лицензии" },
    { to: "/services", label: "Услуги и цены" },
    { to: "/reviews", label: "Отзывы" },
    { to: "/contacts", label: "Контакты" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-2xl text-primary-foreground font-bold">ЗК</span>
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-lg text-foreground">Зубная клиника Локтева</div>
              <div className="text-xs text-muted-foreground">Стоматология в Светлограде</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:89283878792" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">8 (928) 387-87-92</span>
            </a>
            <Link to="/contacts">
              <Button size="lg">Записаться на прием</Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:89283878792"
              className="flex items-center justify-center space-x-2 px-4 py-3 text-primary font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>8 (928) 387-87-92</span>
            </a>
            <Link to="/contacts" onClick={() => setIsOpen(false)}>
              <Button className="w-full" size="lg">
                Записаться на прием
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
