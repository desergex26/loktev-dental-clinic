import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Award, Shield } from "lucide-react";

const Licenses = () => {
  const documents = [
    {
      type: "Лицензия на медицинскую деятельность",
      description: "Лицензия на осуществление медицинской деятельности, выданная Министерством здравоохранения Ставропольского края",
      date: "Действует бессрочно",
      icon: Shield,
    },
    {
      type: "Диплом главного врача",
      description: "Диплом Локтева Виктора Алексеевича о высшем медицинском образовании по специальности 'Стоматология'",
      date: "Ставропольская государственная медицинская академия, 1995",
      icon: Award,
    },
    {
      type: "Сертификат стоматолога-терапевта",
      description: "Сертификат специалиста по терапевтической стоматологии, высшая квалификационная категория",
      date: "Продлен в 2023 году",
      icon: FileCheck,
    },
    {
      type: "Диплом стоматолога-ортопеда",
      description: "Диплом Локтевой Ольги Владимировны о высшем медицинском образовании по специальности 'Стоматология'",
      date: "Ставропольская государственная медицинская академия, 2000",
      icon: Award,
    },
    {
      type: "Сертификат стоматолога-ортопеда",
      description: "Сертификат специалиста по ортопедической стоматологии, первая квалификационная категория",
      date: "Продлен в 2023 году",
      icon: FileCheck,
    },
    {
      type: "Диплом хирурга-стоматолога",
      description: "Диплом Локтева Леонида Викторовича о высшем медицинском образовании по специальности 'Стоматология'",
      date: "Ставропольская государственная медицинская академия, 2008",
      icon: Award,
    },
    {
      type: "Сертификат хирурга-стоматолога",
      description: "Сертификат специалиста по хирургической стоматологии и имплантологии",
      date: "Продлен в 2024 году",
      icon: FileCheck,
    },
    {
      type: "Санитарно-эпидемиологическое заключение",
      description: "Заключение о соответствии санитарно-эпидемиологическим требованиям для медицинских организаций",
      date: "Действительно до 2026 года",
      icon: Shield,
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Лицензии и сертификаты
          </h1>
          <p className="text-xl text-muted-foreground">
            Все документы, подтверждающие нашу квалификацию и право на оказание медицинских услуг
          </p>
        </div>

        {/* Info Card */}
        <Card className="mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Наши гарантии</h2>
            <p className="text-muted-foreground mb-4">
              Зубная клиника Локтева работает в полном соответствии с законодательством Российской Федерации. Все наши врачи имеют высшее медицинское образование, действующие сертификаты специалистов и регулярно проходят курсы повышения квалификации.
            </p>
            <p className="text-muted-foreground">
              Клиника оснащена современным оборудованием, соответствует всем санитарно-эпидемиологическим требованиям. Мы гарантируем безопасность и качество оказываемых медицинских услуг.
            </p>
          </CardContent>
        </Card>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <doc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {doc.type}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {doc.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {doc.date}
                    </p>
                  </div>
                </div>

                {/* Document placeholder image */}
                <div className="mt-4 aspect-[4/3] rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <FileCheck className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Скан документа</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Оригиналы всех документов доступны для ознакомления в клинике
          </p>
        </div>
      </div>
    </div>
  );
};

export default Licenses;
