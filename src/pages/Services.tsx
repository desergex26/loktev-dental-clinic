import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все услуги" },
    { id: "therapy", name: "Терапевтическая стоматология" },
    { id: "orthopedics", name: "Ортопедия" },
    { id: "prosthetics", name: "Протезирование" },
    { id: "surgery", name: "Хирургия" },
    { id: "xray", name: "Рентген-диагностика" },
  ];

  const services = [
    // Терапевтическая стоматология
    { category: "therapy", name: "Консультация стоматолога-терапевта", price: "500" },
    { category: "therapy", name: "Лечение кариеса (1 поверхность)", price: "2 500" },
    { category: "therapy", name: "Лечение кариеса (2 поверхности)", price: "3 200" },
    { category: "therapy", name: "Лечение кариеса (3 поверхности)", price: "4 000" },
    { category: "therapy", name: "Лечение пульпита (1 канал)", price: "3 500" },
    { category: "therapy", name: "Лечение пульпита (2 канала)", price: "5 500" },
    { category: "therapy", name: "Лечение пульпита (3 канала)", price: "7 500" },
    { category: "therapy", name: "Лечение периодонтита (1 канал)", price: "4 000" },
    { category: "therapy", name: "Профессиональная гигиена полости рта", price: "3 000" },
    { category: "therapy", name: "Отбеливание зубов", price: "12 000" },
    
    // Ортопедия
    { category: "orthopedics", name: "Консультация стоматолога-ортопеда", price: "500" },
    { category: "orthopedics", name: "Коронка металлокерамическая", price: "8 000" },
    { category: "orthopedics", name: "Коронка керамическая", price: "15 000" },
    { category: "orthopedics", name: "Коронка из диоксида циркония", price: "18 000" },
    { category: "orthopedics", name: "Винир керамический", price: "20 000" },
    
    // Протезирование
    { category: "prosthetics", name: "Съемный протез полный", price: "25 000" },
    { category: "prosthetics", name: "Съемный протез частичный", price: "18 000" },
    { category: "prosthetics", name: "Бюгельный протез", price: "35 000" },
    { category: "prosthetics", name: "Протезирование на имплантах (коронка)", price: "30 000" },
    { category: "prosthetics", name: "Мостовидный протез (3 единицы)", price: "24 000" },
    
    // Хирургия
    { category: "surgery", name: "Консультация хирурга-стоматолога", price: "500" },
    { category: "surgery", name: "Удаление зуба простое", price: "2 000" },
    { category: "surgery", name: "Удаление зуба сложное", price: "3 500" },
    { category: "surgery", name: "Удаление зуба мудрости", price: "5 000" },
    { category: "surgery", name: "Имплантация зуба", price: "35 000" },
    { category: "surgery", name: "Костная пластика", price: "20 000" },
    
    // Рентген
    { category: "xray", name: "Прицельный снимок", price: "400" },
    { category: "xray", name: "Панорамный снимок (ОПТГ)", price: "1 200" },
    { category: "xray", name: "Компьютерная томография (КТ)", price: "2 500" },
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Услуги и цены
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Прозрачное ценообразование и качественное лечение
          </p>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Поиск услуги..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {filteredServices.length > 0 ? (
                  filteredServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-foreground flex-1">{service.name}</span>
                      <span className="text-primary font-semibold whitespace-nowrap ml-4">
                        {service.price} ₽
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="p-12 text-center text-muted-foreground">
                    Услуги не найдены. Попробуйте изменить параметры поиска.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Note */}
          <div className="mt-8 text-center">
            <Card className="bg-muted">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Обратите внимание:</strong> Указанные цены являются ориентировочными. Точная стоимость лечения определяется после консультации и осмотра врачом. Окончательная цена зависит от сложности случая и выбранных материалов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
