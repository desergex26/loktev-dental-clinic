import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, User } from "lucide-react";
import { toast } from "sonner";

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    review: "",
  });

  const reviews = [
    {
      name: "Мария Петрова",
      date: "15 января 2025",
      rating: 5,
      text: "Замечательная клиника! Обращалась к Виктору Алексеевичу для лечения кариеса. Все прошло быстро и совершенно безболезненно. Очень благодарна за профессионализм и внимательное отношение. Рекомендую всем!",
    },
    {
      name: "Александр Иванов",
      date: "10 января 2025",
      rating: 5,
      text: "Делал протезирование у Ольги Владимировны. Результат превзошел все ожидания! Коронки выглядят естественно, никакого дискомфорта. Цены адекватные, сервис на высоте. Спасибо большое!",
    },
    {
      name: "Елена Смирнова",
      date: "28 декабря 2024",
      rating: 5,
      text: "Удаляла зуб мудрости у Леонида Викторовича. Очень боялась, но врач успокоил и все объяснил. Операция прошла быстро, никаких осложнений не было. Профессионал своего дела!",
    },
    {
      name: "Сергей Козлов",
      date: "20 декабря 2024",
      rating: 5,
      text: "Отличная клиника с современным оборудованием. Делал профессиональную чистку зубов - очень доволен результатом. Персонал вежливый, цены разумные. Буду обращаться еще!",
    },
    {
      name: "Наталья Волкова",
      date: "15 декабря 2024",
      rating: 5,
      text: "Огромное спасибо врачам клиники! Лечила пульпит - все прошло отлично. Клиника очень чистая, атмосфера приятная. Рекомендую знакомым и родственникам!",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо за ваш отзыв! Он будет опубликован после модерации.");
    setFormData({ name: "", email: "", rating: 5, review: "" });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "fill-secondary text-secondary" : "text-muted"
        }`}
      />
    ));
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Отзывы пациентов
          </h1>
          <p className="text-xl text-muted-foreground">
            Мнения наших пациентов о качестве лечения
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-muted-foreground">{review.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Review Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Оставить отзыв
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
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label>Оценка *</Label>
                    <div className="flex space-x-1 mt-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, rating: index + 1 })
                          }
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-8 h-8 cursor-pointer transition-colors ${
                              index < formData.rating
                                ? "fill-secondary text-secondary"
                                : "text-muted hover:text-secondary"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="review">Ваш отзыв *</Label>
                    <Textarea
                      id="review"
                      value={formData.review}
                      onChange={(e) =>
                        setFormData({ ...formData, review: e.target.value })
                      }
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
