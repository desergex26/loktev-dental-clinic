import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            О нашей клинике
          </h1>
          <p className="text-xl text-muted-foreground">
            Профессиональная стоматология в Светлограде с 2010 года
          </p>
        </div>

        {/* History */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">История клиники</h2>
              <div className="prose max-w-none text-muted-foreground">
                <p className="text-lg mb-4">
                  Зубная клиника Локтева была основана в 2010 году с целью предоставления качественных стоматологических услуг жителям Светлограда и Петровского района. За годы работы мы завоевали доверие тысяч пациентов благодаря профессионализму наших специалистов и индивидуальному подходу к каждому.
                </p>
                <p className="text-lg mb-4">
                  Наша клиника оснащена современным стоматологическим оборудованием ведущих производителей. Мы постоянно следим за новинками в области стоматологии и внедряем передовые технологии лечения.
                </p>
                <p className="text-lg">
                  Команда клиники состоит из опытных врачей-стоматологов различных специализаций, что позволяет нам оказывать полный спектр стоматологических услуг под одной крышей.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Забота</h3>
                <p className="text-muted-foreground">
                  Бережное отношение к каждому пациенту и безболезненное лечение
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Качество</h3>
                <p className="text-muted-foreground">
                  Высокие стандарты лечения и использование качественных материалов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Профессионализм</h3>
                <p className="text-muted-foreground">
                  Опытные врачи с постоянным повышением квалификации
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Результат</h3>
                <p className="text-muted-foreground">
                  Гарантия на все виды работ и долговечность результата
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission */}
        <section>
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Наша миссия</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Мы стремимся сделать качественную стоматологическую помощь доступной для каждого жителя Светлограда. Наша цель — не просто лечить зубы, а дарить людям здоровые улыбки и уверенность в себе. Мы верим, что каждый пациент заслуживает индивидуального внимания и профессионального подхода.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
