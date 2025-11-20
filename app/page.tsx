'use client';

import { useState, useEffect, SVGProps } from 'react';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const NavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="block py-3 px-4 rounded-lg text-center text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 text-2xl font-medium"
  >
    {children}
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 bg-black/60 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="min-w-0">
              <a href="/" className="text-xl sm:text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-opacity">
                Дарья Калашникова
              </a>
            </div>

            <div className="flex items-center">
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#about" className="font-medium text-gray-300 hover:text-white transition-colors duration-200">О мне</a>
                <a href="#programs" className="font-medium text-gray-300 hover:text-white transition-colors duration-200">Программы</a>
                <a href="#reviews" className="font-medium text-gray-300 hover:text-white transition-colors duration-200">Отзывы</a>
                <a href="#contact" className="font-medium text-gray-300 hover:text-white transition-colors duration-200">Контакты</a>
              </nav>
              <div className="ml-4">
                <ThemeSwitcher />
              </div>
              <div className="md:hidden flex items-center ml-4">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
                  aria-expanded="false"
                >
                  <span className="sr-only">Открыть меню</span>
                  <svg className={`block h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-20 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-lg"
          onClick={closeMenu}
        ></div>
        <div className="relative flex flex-col items-center justify-center h-full p-8">
          <nav className="flex flex-col space-y-6 w-full max-w-xs">
            <NavLink href="#about" onClick={closeMenu}>О мне</NavLink>
            <NavLink href="#programs" onClick={closeMenu}>Программы</NavLink>
            <NavLink href="#reviews" onClick={closeMenu}>Отзывы</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Контакты</NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
  </svg>
);

const TelegramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 2 11 13"/>
    <path d="m22 2-7 20-4-9-9-4 20-7z"/>
  </svg>
);

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M20 6 9 17l-5-5"/>
    </svg>
);

const certifications = [
    { title: 'Диплом Училища олимпийского резерва', details: '2015 г.' },
    { title: 'Инструктор тренажерного зала', details: 'Учебный центр профессионалов фитнеса, 2018 г.' },
    { title: 'Персональный тренер', details: 'Учебный центр профессионалов фитнеса, 2019 г.' },
    { title: 'Нутрициология в фитнесе', details: 'Уральский институт фитнеса, 2019 г.' },
    { title: 'Коррекция осанки. Холистический подход', details: '2022 г.' },
    { title: 'Фитнес для беременных', details: '2022 г.' },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-white font-sans">
      <Header />
      <main className="pt-16">
        {/* Герой */}
        <section className="relative pt-10 pb-10 sm:pt-16 sm:pb-16 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  Тренировки с Дарьей Калашниковой
                </h1>
                <p className="mt-6 max-w-lg text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Разработанные мной программы позволяют прийти к желанным целям, делая путь максимально эффективным, интересным и безопасным для здоровья.
                </p>
                <div className="mt-8 flex justify-center md:justify-start gap-4">
                  <a href="#programs" className="rounded-md bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-white font-semibold text-lg hover:opacity-90 transition-opacity">Выбрать программу</a>
                </div>
              </div>
               <div className="md:w-1/2 flex justify-center">
                <img 
                  src="/1.jpg" 
                  alt="Дарья Калашникова" 
                  className="w-80 h-80 rounded-full object-cover shadow-2xl ring-4 ring-purple-500/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* О мне */}
        <section id="about" className="py-10 sm:py-16 bg-gray-50 dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">Обо мне</h2>
                    <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">10 лет в профессиональном спорте и 7 лет тренерской деятельности.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-purple-500/10 dark:border-purple-500/30 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <CheckIcon className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0"/>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{cert.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.details}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center h-full">
                       <img src="/9.jpeg" alt="About Daria" className="rounded-2xl shadow-2xl object-cover w-full max-w-sm sticky top-24"/>
                    </div>
                </div>
            </div>
        </section>

        {/* Image Divider */}
        <section className="py-10 sm:py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-lg">
                <img src="/4.jpg" alt="Training photo 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/5.jpeg" alt="Training photo 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="/6.webp" alt="Training photo 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
              </div>
            </div>
          </div>
        </section>

        {/* Программы */}
        <section id="programs" className="py-10 sm:py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">Программы тренировок</h2>
            </div>

            {/* Онлайн */}
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                <span className="border-b-2 border-purple-500 pb-2">Онлайн формат</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border border-purple-500/10 dark:border-purple-500/30 rounded-lg p-6 bg-gray-50 dark:bg-gray-800/50 flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Консультация</h4>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 flex-grow">Знакомство, определение цели, помощь в выборе формата.</p>
                  <p className="mt-6 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">БЕСПЛАТНО</p>
                </div>
                <div className="border border-purple-500/10 dark:border-purple-500/30 rounded-lg p-6 bg-gray-50 dark:bg-gray-800/50 flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Ведение (4/мес)</h4>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 flex-grow">Индивидуальный план, постановка техники.</p>
                  <p className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">$50</p>
                </div>
                <div className="border border-purple-500/10 dark:border-purple-500/30 rounded-lg p-6 bg-gray-50 dark:bg-gray-800/50 flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Ведение (8/мес)</h4>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 flex-grow">Индивидуальный план, постановка техники.</p>
                  <p className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">$90</p>
                </div>
                <div className="border border-purple-500/10 dark:border-purple-500/30 rounded-lg p-6 bg-gray-50 dark:bg-gray-800/50 flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Ведение (12/мес)</h4>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 flex-grow">Индивидуальный план, постановка техники.</p>
                  <p className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">$120</p>
                </div>
                <div className="border border-blue-500/10 dark:border-blue-500/30 rounded-lg p-6 bg-gray-50 dark:bg-gray-800/50 flex flex-col md:col-span-2">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Сопровождение (1 месяц)</h4>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 flex-grow">Разработка плана, 1 видео-тренировка в неделю, план на 2 самостоятельные тренировки, обратная связь.</p>
                  <p className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">$100</p>
                </div>
                <div className="border border-blue-500/10 dark:border-blue-500/30 rounded-lg p-6 bg-gray-50 dark:bg-gray-800/50 flex flex-col md:col-span-2">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">30-минутные тренировки (1 месяц)</h4>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 flex-grow">8 тренировок по 30 минут.</p>
                  <p className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">$65</p>
                </div>
              </div>
            </div>
            {/* Галерея */}
            <section id="gallery" className="py-4 sm:py-8 bg-gray-100 dark:bg-gray-900">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[10, 2, 3, 13].map((i) => (
                    <div key={i} className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                      <img 
                        src={`/${i}.jpg`} 
                        alt={`Тренировка ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Офлайн */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                <span className="border-b-2 border-blue-500 pb-2">Офлайн формат (Тбилиси)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="border border-blue-500/10 dark:border-blue-500/30 rounded-lg p-6 bg-gray-50 dark:bg-gray-800/50 flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Персональная тренировка</h4>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 flex-grow">Комплексный план с учетом ваших целей и здоровья. Парк Мзиури/Ваке.</p>
                  <p className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">$12 / тренировка</p>
                </div>
                <div className="border border-blue-500/10 dark:border-blue-500/30 rounded-lg p-6 bg-gray-50 dark:bg-gray-800/50 flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Тренировка в мини-группе</h4>
                  <p className="mt-3 text-gray-600 dark:text-gray-400 flex-grow">Комбинированные функциональные и силовые тренировки на открытом воздухе.</p>
                  <p className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">$50 / 8 тренировок</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Break */}
        <div className="py-10 sm:py-16 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto">
                     <img src="/photo.jpg" alt="Inspiration" className="rounded-2xl shadow-xl w-full object-cover"/>
                </div>
            </div>
        </div>

        {/* Отзывы */}
        <section id="reviews" className="py-10 sm:py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">Что говорят клиенты</h2>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg shadow-purple-500/10">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">«Я начала тренироваться после хирургической операции в онлайн-формате. Даша внимательно и постепенно наращивала физическую нагрузку. Спустя месяц мы дошли до 5 тренировок в неделю. Занятия проходят в приятной и ненавязчивой обстановке. Набор упражнений регулярно меняется и расширяется, что обеспечивает приятное разнообразие. Я достигла хорошей спортивной формы и не планирую останавливаться на достигнутом. Всем, кто хочет быть красивым и здоровым, очень рекомендую тренировки с Дашей!»</p>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">Марина</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg shadow-blue-500/10">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">«На мой взгляд, успех тренировки зависит на 50% от своей мотивации и на 50% от тренера. Очень многое зависит от общего настроя, вы с тренером должны быть на одной волне, заинтересованы в процессе и прогрессе. С самого первого занятия меня покорила Дарья своей вовлеченностью, терпением, внимательностью к технике выполнения, своей энергией и физической формой! Приятно смотреть и стремиться к лучшему на примере тренера. С помощью Дарьи я вернулась к регулярным тренировкам, пропускать не хочется, лень пропадает, появилась мотивация становиться лучше!»</p>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900 dark:text-white text-lg">Ирина</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section id="contact" className="py-10 sm:py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Контакты и соцсети</h2>
              <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">Готовы начать? Напишите мне, и мы обсудим детали.</p>
              <div className="mt-8">
                <a href="mailto:dashkaak47@gmail.com" className="inline-block rounded-md bg-white px-8 py-3 text-purple-600 font-semibold text-lg hover:bg-gray-100 transition-colors">Написать на почту</a>
              </div>
              <div className="flex justify-center gap-6 mt-8">
                <a href="https://www.instagram.com/kalashnikovadaaa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                  <InstagramIcon className="w-8 h-8" />
                </a>
                <a href="https://t.me/kalashadasha" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                  <TelegramIcon className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">Дарья Калашникова</p>
          <p className="text-gray-500 dark:text-gray-500 mt-2">Ваш персональный тренер</p>
          <div className="flex justify-center gap-6 my-6">
            <a href="https://www.instagram.com/kalashnikovadaaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <InstagramIcon className="w-7 h-7" />
            </a>
            <a href="https://t.me/kalashadasha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <TelegramIcon className="w-7 h-7" />
            </a>
            <a href="mailto:dashkaak47@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <MailIcon className="w-7 h-7" />
            </a>
          </div>
          <p className="text-gray-500">© 2025. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}