import { useState } from "react";
import { Phone, MapPin, Star, Clock, Camera, Heart, Users, Sparkles, Check, Instagram, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

import hero from "@/assets/hero-studio.jpg";
import hallWhite from "@/assets/hall-white.jpg";
import hallLoft from "@/assets/hall-loft.jpg";
import hallDark from "@/assets/hall-dark.jpg";
import hallScandi from "@/assets/hall-scandi.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const halls = [
  { name: "Зал «Свет»", desc: "Циклорама 6×4 м, импульсный и постоянный свет", price: "от 1 200 ₽/час", img: hallWhite },
  { name: "Зал «Лофт»", desc: "Кирпич, винтаж, большое окно с северным светом", price: "от 1 500 ₽/час", img: hallLoft },
  { name: "Зал «Ноир»", desc: "Тёмные стены, кинематографичный свет, шторы", price: "от 1 400 ₽/час", img: hallDark },
  { name: "Зал «Сканди»", desc: "Тёплые тона, дневной свет, растения", price: "от 1 300 ₽/час", img: hallScandi },
];

const services = [
  { icon: Camera, title: "Аренда залов", text: "Самостоятельные съёмки. Свет, фоны и реквизит включены." },
  { icon: Heart, title: "Семейные съёмки", text: "Тёплые кадры с фотографом студии. Подарочные сертификаты." },
  { icon: Users, title: "Контент для бизнеса", text: "Предметка, lookbook, рилсы. Быстрый монтаж по запросу." },
  { icon: Sparkles, title: "Lovestory и портреты", text: "Атмосферные съёмки в любом из 4 залов." },
];

const reviews = [
  { name: "Анна К.", text: "Очень уютно! Снимали семейную фотосессию в зале «Сканди» — кадры будто из журнала. Обязательно вернёмся.", stars: 5 },
  { name: "Дмитрий В.", text: "Бронировал «Лофт» под клип. Свет, звук, всё на месте. Администратор помог за 2 минуты.", stars: 5 },
  { name: "Marina Studio", text: "Снимаем здесь контент уже полгода. Чисто, тепло, всегда есть нужный реквизит.", stars: 5 },
];

const process = [
  { step: "01", title: "Выбираете зал", text: "Смотрите интерьеры и часы на сайте или в Яндекс Картах." },
  { step: "02", title: "Оставляете заявку", text: "Через форму или WhatsApp — ответим в течение 15 минут." },
  { step: "03", title: "Подтверждаем бронь", text: "Отправляем чек-лист и схему проезда. Предоплата 30%." },
  { step: "04", title: "Снимаете в кайф", text: "Встречаем, показываем свет, помогаем по технике." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", description: "Мы перезвоним в течение 15 минут." });
      return;
    }
    toast({ title: "Заявка отправлена ✓", description: "Свяжемся с вами в ближайшее время." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="container mx-auto flex items-center justify-between py-5">
          <a href="#" className="flex items-center gap-2 text-primary-foreground">
            <span className="font-display text-2xl font-bold">Lucky</span>
            <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] opacity-80">Фотостудия</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/90">
            <a href="#halls" className="hover:text-primary-foreground transition">Залы</a>
            <a href="#portfolio" className="hover:text-primary-foreground transition">Портфолио</a>
            <a href="#process" className="hover:text-primary-foreground transition">Как забронировать</a>
            <a href="#contact" className="hover:text-primary-foreground transition">Контакты</a>
          </nav>
          <a href="tel:+74951234567" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary-foreground">
            <Phone className="w-4 h-4" /> +7 (495) 123-45-67
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img src={hero} alt="Интерьер фотостудии Lucky" width={1600} height={1100} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="container mx-auto relative z-10 pb-16 pt-32 text-primary-foreground">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 text-xs uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
              Открыто сегодня до 23:00
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              Тёплая фотостудия<br />в самом центре города
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mb-8">
              4 уникальных зала, профессиональный свет и атмосфера, в которой получаются живые кадры. Бронь за 2 минуты.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#contact">
                <Button size="lg" className="bg-gradient-warm hover:opacity-95 text-primary-foreground border-0 shadow-soft h-14 px-8 text-base">
                  Забронировать съёмку
                </Button>
              </a>
              <a href="#halls">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 h-14 px-8 text-base">
                  Посмотреть залы
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary-glow text-primary-glow" />)}</div>
                <span className="font-semibold">4,9</span>
                <span className="text-primary-foreground/80">· 312 отзывов на Яндекс Картах</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Clock className="w-4 h-4" /> Ежедневно 09:00–23:00
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container mx-auto py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: "7 лет", l: "на рынке" },
            { v: "4 зала", l: "разных стилей" },
            { v: "12 000+", l: "съёмок проведено" },
            { v: "4,9 ★", l: "Яндекс Карты" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-bold text-primary">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="uppercase text-xs tracking-[0.2em] text-accent font-semibold mb-3">Услуги</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы делаем</h2>
            <p className="text-muted-foreground text-lg">От самостоятельной аренды до съёмки под ключ — выбирайте формат под задачу.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="p-7 rounded-2xl bg-card border border-border shadow-card hover:shadow-soft transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-warm flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HALLS */}
      <section id="halls" className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="uppercase text-xs tracking-[0.2em] text-accent font-semibold mb-3">Залы</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">4 атмосферы под разные задачи</h2>
              <p className="text-muted-foreground text-lg">Каждый зал — со своим характером, светом и реквизитом. Бронируйте по часам.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {halls.map((h) => (
              <article key={h.name} className="group rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-soft transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={h.img} alt={h.name} loading="lazy" width={1200} height={900} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-1">{h.name}</h3>
                    <p className="text-sm text-muted-foreground">{h.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-primary font-semibold whitespace-nowrap">{h.price}</div>
                    <a href="#contact" className="text-xs text-accent hover:underline mt-1 inline-block">Забронировать →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="uppercase text-xs tracking-[0.2em] text-accent font-semibold mb-3">Портфолио</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как выглядят кадры из Lucky</h2>
            <p className="text-muted-foreground text-lg">Реальные съёмки наших гостей и студийных фотографов.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="row-span-2 aspect-[3/4] md:aspect-auto rounded-xl overflow-hidden">
              <img src={portfolio1} alt="Портретная съёмка" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-1 md:col-span-2 aspect-[4/3] rounded-xl overflow-hidden">
              <img src={portfolio2} alt="Семейная съёмка" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="row-span-2 aspect-[3/4] md:aspect-auto rounded-xl overflow-hidden">
              <img src={portfolio3} alt="Fashion съёмка" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-1 md:col-span-2 aspect-[4/3] rounded-xl overflow-hidden bg-gradient-warm flex items-center justify-center p-8">
              <div className="text-center text-primary-foreground">
                <p className="font-display text-3xl md:text-4xl font-bold leading-tight mb-3">Больше работ — в Instagram</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">
                  <Instagram className="w-4 h-4" /> @lucky.studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="uppercase text-xs tracking-[0.2em] text-accent font-semibold mb-3">Отзывы</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Нам доверяют</h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              <MapPin className="w-4 h-4" /> Все отзывы на Яндекс Картах
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="p-7 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex mb-4">{[...Array(r.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
                <p className="text-foreground/90 leading-relaxed mb-5">«{r.text}»</p>
                <div className="text-sm font-semibold">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="uppercase text-xs tracking-[0.2em] text-accent font-semibold mb-3">Как забронировать</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Просто и быстро</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <div key={p.step} className="relative p-7 rounded-2xl border border-border bg-card">
                <div className="font-display text-5xl font-bold text-gradient-warm mb-4">{p.step}</div>
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / FORM */}
      <section id="contact" className="py-20 md:py-28 bg-foreground text-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase text-xs tracking-[0.2em] text-primary-glow font-semibold mb-3">Контакты</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Забронировать зал</h2>
            <p className="text-background/70 text-lg mb-10 max-w-md">Оставьте заявку — администратор перезвонит за 15 минут, поможет выбрать зал и время.</p>

            <div className="space-y-5 mb-10">
              <a href="tel:+74951234567" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-gradient-warm transition"><Phone className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs text-background/60">Телефон</div>
                  <div className="font-semibold">+7 (495) 123-45-67</div>
                </div>
              </a>
              <a href="https://wa.me/74951234567" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-gradient-warm transition"><MessageCircle className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs text-background/60">WhatsApp · Telegram</div>
                  <div className="font-semibold">Ответим за 15 минут</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center"><MapPin className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs text-background/60">Адрес</div>
                  <div className="font-semibold">Москва, ул. Студийная, 7 · 2 этаж</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center"><Clock className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs text-background/60">Часы работы</div>
                  <div className="font-semibold">Ежедневно 09:00 – 23:00</div>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm text-background/70">
              {["Бесплатная парковка во дворе", "Гримёрка и зона отдыха", "Реквизит и фоны включены"].map(t => (
                <div key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-primary-glow" /> {t}</div>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="p-7 md:p-9 rounded-2xl bg-background text-foreground shadow-soft">
            <h3 className="font-display text-2xl font-bold mb-1">Оставить заявку</h3>
            <p className="text-sm text-muted-foreground mb-6">Перезвоним в течение 15 минут</p>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Ваше имя</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Анна" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Телефон</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" type="tel" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Зал, дата, комментарий</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Например: Зал «Лофт», суббота, 14:00, нужна вешалка" rows={3} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-warm hover:opacity-95 text-primary-foreground border-0 h-14 text-base">
                <Send className="w-4 h-4 mr-2" /> Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-foreground text-background/60 border-t border-background/10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>© {new Date().getFullYear()} Фотостудия Lucky. Все права защищены.</div>
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-background">Lucky</span>
            <span>· уютная студия в центре</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
