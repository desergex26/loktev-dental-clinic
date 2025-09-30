import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Award, Users, Heart, Shield, Clock } from "lucide-react";

const Home = () => {
  const advantages = [
    {
      icon: Award,
      title: "Современное оборудование",
      description: "Новейшее стоматологическое оборудование европейского качества",
    },
    {
      icon: Users,
      title: "Индивидуальный подход",
      description: "Персональный план лечения для каждого пациента",
    },
    {
      icon: Heart,
      title: "Опытные специалисты",
      description: "Сертифицированные врачи с многолетним опытом работы",
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Лицензированная клиника с гарантией на все виды работ",
    },
    {
      icon: Clock,
      title: "Удобный график",
      description: "Работаем 6 дней в неделю для вашего удобства",
    },
  ];

  const services = [
    "Терапевтическая стоматология",
    "Ортопедическая стоматология",
    "Хирургическая стоматология",
    "Протезирование зубов",
    "Рентген-диагностика",
    "Профилактика и гигиена",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Зубная клиника Локтева
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Ваша улыбка — наша забота
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Современная стоматологическая клиника в Светлограде. Профессиональное лечение зубов с использованием передового оборудования и индивидуальным подходом к каждому пациенту.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacts">
                <Button size="lg" className="w-full sm:w-auto text-base px-8">
                  Записаться на прием
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
                  Услуги и цены
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <advantage.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Наши услуги
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted hover:bg-muted/70 transition-colors">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Посмотреть все услуги и цены
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Запишитесь на консультацию
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Позвоните нам или оставьте заявку на сайте. Мы перезвоним в течение 15 минут и подберем удобное время для визита.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:89283878792">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Позвонить сейчас
              </Button>
            </a>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Записаться онлайн
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
