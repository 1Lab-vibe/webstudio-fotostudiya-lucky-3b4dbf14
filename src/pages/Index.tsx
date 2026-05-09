import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Camera, Star, MapPin, Phone, Clock, Instagram, Send, Check, Sparkles } from "lucide-react";
import hero from "@/assets/hero-studio.jpg";
import hallCyc from "@/assets/hall-cyc.jpg";
import hallLoft from "@/assets/hall-loft.jpg";
import hallCozy from "@/assets/hall-cozy.jpg";
import hallDark from "@/assets/hall-dark.jpg";

const halls = [
  { name: "Циклорама", desc: "Белый бесшовный фон, идеален для предметки и каталогов", price: "1 500 ₽/час", img: hallCyc },
  { name: "Лофт", desc: "Кирпич, арочные окна, естественный свет до заката", price: "1 800 ₽/час", img: hallLoft },
  { name: "Уют", desc: "Тёплые тона, камин, мягкий дневной свет", price: "1 600 ₽/час", img: hallCozy },
  { name: "Чёрный зал", desc: "Глубокий чёрный фон для драматичных портретов", price: "1 700 ₽/час", img: hallDark },
];

const reviews = [
  { name: "Анна К.", text: "Снимали лукбук — свет божественный, администратор помог со всем. Точно вернёмся.", rating: 5 },
  { name: "Михаил Д.", text: "Бронировал за час, приехал — всё готово. Залы как на фото, без сюрпризов.", rating: 5 },
  { name: "Екатерина В.", text: "Атмосфера тёплая, есть кофе, переодевалка большая. Дети были в восторге от семейной съёмки.", rating: 5 },
];

const services = [
  { title: "Семейная съёмка", desc: "Зал «Уют» + ассистент по свету" },
  { title: "Lookbook и каталог", desc: "Циклорама, импульсный свет, реквизит" },
  { title: "Контент для соцсетей", desc: "Любой зал на 1 час, идеально для Reels" },
  { title: "Видео и подкасты", desc: "Тихие стены, петличка, монитор" },
];

const process = [
  "Выбираете зал и время на сайте",
  "Получаете подтверждение в WhatsApp за 5 минут",
  "Приезжаете — администратор встречает и показывает зал",
  "Снимаете. Свет и техника уже настроены",
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", hall: "", date: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка принята", description: "Мы перезвоним в течение 10 минут." });
    setForm({ name: "", phone: "", hall: "", date: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="container flex items-center justify-between py-5">
          <a href="#" className="flex items-center gap-2 text-primary-foreground">
            <Camera className="h-6 w-6" />
            <span className="font-display text-xl font-bold tracking-tight">Lucky</span>
          </a>
          <a href="tel:+74951234567" className="hidden md:flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm">
            <Phone className="h-4 w-4" /> +7 (495) 123-45-67
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img src={hero} alt="Интерьер фотостудии Lucky с тёплым закатным светом" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container relative z-10 pb-12 md:pb-20 pt-32">
          <div className="max-w-2xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur px-4 py-1.5 text-xs font-medium mb-6 border border-primary-foreground/20">
              <Sparkles className="h-3.5 w-3.5" /> 4 зала · открыто с 9:00 до 23:00
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-5 text-balance leading-[1.05]">
              Фотостудия, в которой хочется остаться
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl text-balance">
              Четыре атмосферных зала, профессиональный свет и тёплая команда. Бронирование занимает минуту.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base font-semibold rounded-full">
                <a href="#booking">Забронировать съёмку</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 backdrop-blur border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground h-14 px-8 text-base rounded-full">
                <a href="#halls">Посмотреть залы</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-foreground/85">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <span>4.9 · 312 отзывов на Яндекс Картах</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "8 лет", l: "на рынке" },
            { n: "12 000+", l: "съёмок проведено" },
            { n: "4.9", l: "★ Яндекс Карты" },
            { n: "5 мин", l: "до подтверждения" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">{s.n}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Halls */}
      <section id="halls" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">Залы</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-balance">Выберите атмосферу под вашу съёмку</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {halls.map((h) => (
              <article key={h.name} className="group rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-soft transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={h.img} alt={`Зал ${h.name}`} loading="lazy" width={1200} height={900} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-display text-2xl font-bold">{h.name}</h3>
                    <span className="text-accent font-semibold whitespace-nowrap">{h.price}</span>
                  </div>
                  <p className="text-muted-foreground">{h.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">Услуги</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-balance">Что мы снимаем чаще всего</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-card p-6 shadow-card border border-border/50">
                <Camera className="h-6 w-6 text-accent mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">Как это работает</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 text-balance">От заявки до съёмки — без лишних шагов</h2>
              <ol className="space-y-5">
                {process.map((p, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground font-display font-bold flex items-center justify-center">{i + 1}</div>
                    <p className="pt-2 text-lg">{p}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-soft">
              <img src={hallLoft} alt="Лофт-зал фотостудии Lucky" loading="lazy" width={1200} height={900} className="w-full h-full object-cover aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">Отзывы</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-balance">Что говорят гости студии</h2>
            </div>
            <div className="flex items-center gap-3 bg-card rounded-full px-5 py-3 shadow-card">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <span className="font-semibold">4.9</span>
              <span className="text-sm text-muted-foreground">на Яндекс Картах</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-card p-7 shadow-card border border-border/50">
                <div className="flex mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <p className="text-foreground/90 mb-5 leading-relaxed">«{r.text}»</p>
                <div className="font-semibold">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">Бронирование</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-balance">Забронируйте зал за минуту</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку — администратор подтвердит свободное время и пришлёт детали в WhatsApp в течение 10 минут.
              </p>
              <ul className="space-y-3">
                {["Без предоплаты для первой съёмки", "Перенос за 24 часа — бесплатно", "Чай, кофе и переодевалка включены"].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={submit} className="rounded-3xl bg-card p-7 md:p-10 shadow-soft border border-border/60 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Анна" className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="h-12 rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hall">Зал</Label>
                  <Input id="hall" value={form.hall} onChange={(e) => setForm({ ...form, hall: e.target.value })} placeholder="Любой" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Дата и время</Label>
                  <Input id="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="12 мая, 15:00" className="h-12 rounded-xl" />
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-base font-semibold">
                <Send className="h-4 w-4 mr-2" /> Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
            </form>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="h-6 w-6" />
              <span className="font-display text-2xl font-bold">Lucky</span>
            </div>
            <p className="text-primary-foreground/70 max-w-xs">Фотостудия с уютной атмосферой и профессиональным светом.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold mb-4">Контакты</h3>
            <a href="tel:+74951234567" className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent">
              <Phone className="h-4 w-4" /> +7 (495) 123-45-67
            </a>
            <a href="https://instagram.com" className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent">
              <Instagram className="h-4 w-4" /> @lucky.studio
            </a>
            <div className="flex items-start gap-3 text-primary-foreground/90">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <span>Москва, ул. Большая Новодмитровская, 36, стр. 2</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <Clock className="h-4 w-4" /> Ежедневно, 9:00 — 23:00
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Мы на карте</h3>
            <a href="https://yandex.ru/maps" target="_blank" rel="noopener" className="block rounded-2xl overflow-hidden bg-primary-foreground/10 aspect-[4/3] border border-primary-foreground/20 hover:border-accent transition-colors group">
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <MapPin className="h-8 w-8 mb-3 text-accent" />
                <div className="font-semibold mb-1">Открыть в Яндекс Картах</div>
                <div className="text-sm text-primary-foreground/70">312 отзывов · 4.9 ★</div>
              </div>
            </a>
          </div>
        </div>
        <div className="container mt-16 pt-8 border-t border-primary-foreground/15 text-sm text-primary-foreground/60 flex flex-wrap justify-between gap-4">
          <span>© 2026 Фотостудия Lucky</span>
          <span>Все права защищены</span>
        </div>
      </section>
    </div>
  );
};

export default Index;
