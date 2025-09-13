import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Zap",
      title: "Аварийные вызовы 24/7",
      description: "Экстренный выезд электрика в любое время суток при авариях",
      price: "от 2000₽"
    },
    {
      icon: "Settings",
      title: "Электромонтажные работы",
      description: "Полный комплекс работ по электромонтажу в жилых и коммерческих помещениях",
      price: "от 500₽/м²"
    },
    {
      icon: "Home",
      title: "Замена проводки",
      description: "Демонтаж старой и монтаж новой электропроводки с гарантией",
      price: "от 800₽/м²"
    },
    {
      icon: "Lightbulb",
      title: "Установка освещения",
      description: "Монтаж люстр, светильников, LED-подсветки любой сложности",
      price: "от 300₽/точка"
    },
    {
      icon: "Power",
      title: "Электрощиты и автоматика",
      description: "Сборка и монтаж электрощитов, установка защитной автоматики",
      price: "от 3000₽"
    },
    {
      icon: "Shield",
      title: "Заземление и УЗО",
      description: "Устройство заземления, установка УЗО и дифавтоматов",
      price: "от 1500₽"
    }
  ];

  const portfolio = [
    {
      image: "/img/e03552e5-b042-42c3-8200-15ddfd55c7e4.jpg",
      title: "Электрощит в офисном здании",
      description: "Монтаж распределительного щита на 48 модулей"
    },
    {
      image: "/img/1ab2de7c-97fc-4373-b7ff-ffe2e1757053.jpg",
      title: "Аварийный вызов ночью",
      description: "Восстановление электроснабжения жилого дома"
    },
    {
      image: "/img/c7a0e305-1fa3-46d2-8c7a-712b3f28c44f.jpg",
      title: "Проводка в квартире",
      description: "Полная замена электропроводки в 3-комнатной квартире"
    }
  ];

  const reviews = [
    {
      name: "Михаил Петров",
      rating: 5,
      text: "Приехали ночью по аварийному вызову. Быстро нашли и устранили короткое замыкание. Профессионалы!"
    },
    {
      name: "Анна Сидорова",
      rating: 5,
      text: "Делали полную замену проводки в квартире. Работали аккуратно, убирали за собой. Очень довольны результатом."
    },
    {
      name: "Дмитрий Козлов",
      rating: 5,
      text: "Установили электрощит в офисе. Все сделано качественно, с документами и гарантией. Рекомендую!"
    }
  ];

  return (
    <div className="min-h-screen font-open-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-orange-500 to-secondary text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6 animate-fade-in">
            Электромонтаж в Таганроге
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Профессиональные услуги электрика • Аварийные вызовы 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 hover-scale">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (863) 000-00-00
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Заказать звонок
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Icon name="Clock" size={20} />
            <span>Работаем круглосуточно</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-roboto font-bold text-center mb-12 text-gray-800">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary rounded-lg">
                      <Icon name={service.icon} size={24} className="text-white" />
                    </div>
                    <Badge variant="secondary" className="text-primary font-semibold">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-roboto font-bold text-center mb-12 text-gray-800">
            Наши работы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-roboto font-bold text-center mb-12 text-gray-800">
            Прайс-лист
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Основные услуги</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Аварийный выезд (24/7)</span>
                  <Badge variant="secondary">от 2000₽</Badge>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Замена автоматического выключателя</span>
                  <Badge variant="secondary">от 500₽</Badge>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Установка розетки/выключателя</span>
                  <Badge variant="secondary">от 300₽</Badge>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Монтаж люстры</span>
                  <Badge variant="secondary">от 800₽</Badge>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Прокладка кабеля (за метр)</span>
                  <Badge variant="secondary">от 150₽</Badge>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span>Сборка электрощита</span>
                  <Badge variant="secondary">от 3000₽</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-roboto font-bold text-center mb-12 text-gray-800">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-scale hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    "{review.text}"
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 px-4 bg-secondary text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-roboto font-bold text-center mb-12">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={24} />
                <div>
                  <p className="font-semibold text-lg">+7 (863) 000-00-00</p>
                  <p className="opacity-80">Круглосуточно</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={24} />
                <div>
                  <p className="font-semibold">info@elektrik-taganrog.ru</p>
                  <p className="opacity-80">Ответим в течение часа</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={24} />
                <div>
                  <p className="font-semibold">г. Таганрог</p>
                  <p className="opacity-80">Выезд по всему городу</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Экстренный вызов</h3>
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="AlertTriangle" size={24} className="text-yellow-400" />
                  <span className="text-xl font-semibold">24/7 Аварийная служба</span>
                </div>
                <p className="mb-4 opacity-90">
                  При авариях, коротком замыкании, отключении электричества
                </p>
                <Button size="lg" variant="outline" className="w-full text-secondary border-white hover:bg-white hover:text-secondary">
                  Вызвать экстренно
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4 text-lg font-roboto font-medium">
            Электромонтаж в Таганроге
          </p>
          <Separator className="my-4 bg-gray-600" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="opacity-80">
              © 2024 Услуги электрика в Таганроге. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                Политика конфиденциальности
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                Условия использования
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}