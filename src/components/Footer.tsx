import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Зубная клиника Локтева</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Современная стоматологическая клиника с опытными врачами и новейшим оборудованием
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Навигация</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                О клинике
              </Link>
              <Link to="/doctors" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Врачи
              </Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Услуги и цены
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:89283878792" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>8 (928) 387-87-92</span>
              </a>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ставропольский край, г. Светлоград, ул. Калинина 28</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Часы работы</h3>
            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mt-0.5" />
              <div>
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 9:00 - 14:00</p>
                <p>Вс: Выходной</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Зубная клиника Локтева. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
