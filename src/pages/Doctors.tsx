import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      name: "Локтев Виктор Алексеевич",
      position: "Главный врач, стоматолог-терапевт",
      experience: "Более 25 лет опыта работы",
      education: "Ставропольская государственная медицинская академия, 1995",
      specialization: [
        "Лечение кариеса и его осложнений",
        "Эндодонтическое лечение",
        "Эстетическая реставрация зубов",
        "Профилактика стоматологических заболеваний",
      ],
      certificates: "Высшая квалификационная категория, сертификаты по терапевтической стоматологии",
    },
    {
      name: "Локтева Ольга Владимировна",
      position: "Стоматолог-ортопед",
      experience: "Более 20 лет опыта работы",
      education: "Ставропольская государственная медицинская академия, 2000",
      specialization: [
        "Несъемное протезирование (коронки, мосты)",
        "Съемное протезирование",
        "Бюгельное протезирование",
        "Протезирование на имплантах",
      ],
      certificates: "Первая квалификационная категория, сертификаты по ортопедической стоматологии",
    },
    {
      name: "Локтев Леонид Викторович",
      position: "Хирург-стоматолог",
      experience: "Более 15 лет опыта работы",
      education: "Ставропольская государственная медицинская академия, 2008",
      specialization: [
        "Удаление зубов любой сложности",
        "Имплантация зубов",
        "Костная пластика",
        "Лечение заболеваний пародонта",
      ],
      certificates: "Сертификаты по хирургической стоматологии и имплантологии",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Наши врачи
          </h1>
          <p className="text-xl text-muted-foreground">
            Опытные специалисты с высшей квалификацией
          </p>
        </div>

        {/* Doctors List */}
        <div className="space-y-12">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Photo placeholder */}
                  <div className="lg:col-span-1">
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                          <span className="text-4xl font-bold text-primary">
                            {doctor.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">Фото врача</p>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                      {doctor.name}
                    </h2>
                    <p className="text-lg text-primary font-semibold mb-6">
                      {doctor.position}
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-3">
                        <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1 text-foreground">Опыт работы</h3>
                          <p className="text-muted-foreground">{doctor.experience}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1 text-foreground">Образование</h3>
                          <p className="text-muted-foreground">{doctor.education}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-1 text-foreground">Квалификация</h3>
                          <p className="text-muted-foreground">{doctor.certificates}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3 text-foreground">Специализация:</h3>
                        <ul className="space-y-2">
                          {doctor.specialization.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
