import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      content: "8 (928) 387-87-92",
      link: "tel:89283878792",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "8 (928) 387-87-92",
      link: "https://wa.me/79283878792",
    },
    {
      icon: MapPin,
      title: "Адрес",
      content: "Ставропольский край, г. Светлоград, ул. Калинина 28",
      link: null,
    },
    {
      icon: Clock,
      title: "Часы работы",
      content: "Пн-Пт: 9:00 - 18:00\nСб: 9:00 - 14:00\nВс: Выходной",
      link: null,
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Контакты
          </h1>
          <p className="text-xl text-muted-foreground">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-primary hover:text-primary/80 transition-colors whitespace-pre-line"
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Appointment Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Записаться на прием
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      placeholder="Опишите вашу проблему или пожелания..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <Card>
          <CardContent className="p-0">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.8!2d45.33!3d45.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDE5JzQ4LjAiTiA0NcKwMTknNDguMCJF!5e0!3m2!1sru!2sru!4v1234567890!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Местоположение клиники на карте"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Quick Contact */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Нужна консультация?</h2>
              <p className="text-lg mb-6 opacity-90">
                Позвоните нам или напишите в WhatsApp — мы ответим на все ваши вопросы
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:89283878792">
                  <Button size="lg" variant="secondary">
                    Позвонить сейчас
                  </Button>
                </a>
                <a href="https://wa.me/79283878792" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Написать в WhatsApp
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
