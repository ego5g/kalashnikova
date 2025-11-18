import Image from 'next/image';
import { SVGProps } from 'react';

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
  </svg>
);

const TelegramIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        width={24} 
        height={24} 
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M22 2 11 13"/>
        <path d="m22 2-7 20-4-9-9-4 20-7z"/>
    </svg>
);

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-white">Дарья Калашникова</a>
            </div>
            <nav className="hidden md:flex md:space-x-8">
              <a href="#results" className="text-gray-300 hover:text-white transition-colors">Результаты</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">Обо мне</a>
              <a href="#programs" className="text-gray-300 hover:text-white transition-colors">Программы</a>
              <a href="#reviews" className="text-gray-300 hover:text-white transition-colors">Отзывы</a>
              <a href="#contact" className="rounded-md bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-white font-semibold">Выбрать</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-20 pb-10 sm:pt-32 sm:pb-20 overflow-hidden">
           <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  Тренировки с Дарьей Калашниковой
                </h1>
                <p className="mt-4 max-w-lg text-lg sm:text-xl text-gray-300">
                  Разработанные мной программы позволяют прийти к желанным целям, делая путь максимально эффективным, интересным и безопасным для здоровья.
                </p>
                <div className="mt-8 flex justify-center md:justify-start gap-4">
                    <a href="#programs" className="rounded-md bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-white font-semibold text-lg hover:opacity-90 transition-opacity">Выбрать</a>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <Image src="/photo.jpg" alt="Дарья Калашникова" width={400} height={400} className="rounded-full shadow-2xl mx-auto ring-4 ring-purple-500/50" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 sm:py-32 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-lg"><Image src="/1.jpg" alt="Тренировка" width={400} height={500} objectFit="cover" className="hover:scale-105 transition-transform duration-300"/></div>
              <div className="overflow-hidden rounded-lg"><Image src="/2.jpg" alt="Тренировка 2" width={400} height={500} objectFit="cover" className="hover:scale-105 transition-transform duration-300"/></div>
              <div className="overflow-hidden rounded-lg"><Image src="/3.jpg" alt="Тренировка 3" width={400} height={500} objectFit="cover" className="hover:scale-105 transition-transform duration-300"/></div>
              <div className="overflow-hidden rounded-lg"><Image src="/4.jpg" alt="Тренировка 4" width={400} height={500} objectFit="cover" className="hover:scale-105 transition-transform duration-300"/></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Обо мне</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Мой спортивный путь начался 17 лет назад</p>
                </div>
                <div className="mt-12 max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
                    <p>10 лет в профессиональном спорте (КМС по Легкой атлетике) и 7 лет тренерской деятельности.</p>
                    <ul className="mt-6 list-disc list-inside space-y-2">
                        <li>Диплом Училища олимпийского резерва, 2015 г.</li>
                        <li>Удостоверение Учебного центра профессионалов фитнеса - инструктор тренажерного зала, 2018 г.</li>
                        <li>Диплом о профессиональной переподготовке Учебного центра профессионалов фитнеса - персональный тренер, 2019 г.</li>
                        <li>Сертификат Уральского института фитнеса - курс «Нутрициология в фитнесе», 2019 г.</li>
                        <li>Курс «коррекция осанки. Холистический подход» 2022г</li>
                        <li>Курс « фитнес для беременных» 2022г</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 sm:py-32 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Программы тренировок</h2>
                </div>

                {/* Online */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-center text-white mb-10"><span className="border-b-2 border-purple-500 pb-2">Онлайн формат</span></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <div className="border border-purple-500/30 rounded-lg p-6 flex flex-col bg-gray-800/50">
                          <h4 className="text-xl font-bold text-white">Консультация</h4>
                          <p className="mt-2 text-gray-400 flex-grow">Знакомство, определение цели, помощь в выборе формата.</p>
                          <p className="mt-4 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">FREE</p>
                      </div>
                      <div className="border border-purple-500/30 rounded-lg p-6 flex flex-col bg-gray-800/50">
                          <h4 className="text-xl font-bold text-white">Ведение (4/мес)</h4>
                           <p className="mt-2 text-gray-400 flex-grow">Индивидуальный план, постановка техники.</p>
                          <p className="mt-4 text-3xl font-bold">$50</p>
                      </div>
                      <div className="border border-purple-500/30 rounded-lg p-6 flex flex-col bg-gray-800/50">
                          <h4 className="text-xl font-bold text-white">Ведение (8/мес)</h4>
                           <p className="mt-2 text-gray-400 flex-grow">Индивидуальный план, постановка техники.</p>
                          <p className="mt-4 text-3xl font-bold">$90</p>
                      </div>
                      <div className="border border-purple-500/30 rounded-lg p-6 flex flex-col bg-gray-800/50">
                          <h4 className="text-xl font-bold text-white">Ведение (12/мес)</h4>
                           <p className="mt-2 text-gray-400 flex-grow">Индивидуальный план, постановка техники.</p>
                          <p className="mt-4 text-3xl font-bold">$120</p>
                      </div>
                       <div className="border border-blue-500/30 rounded-lg p-6 flex flex-col md:col-span-2 bg-gray-800/50">
                          <h4 className="text-xl font-bold text-white">Сопровождение (1 месяц)</h4>
                          <p className="mt-2 text-gray-400 flex-grow">Разработка плана, 1 видео-тренировка в неделю, план на 2 самостоятельные тренировки, обратная связь.</p>
                          <p className="mt-4 text-3xl font-bold">$100</p>
                      </div>
                      <div className="border border-blue-500/30 rounded-lg p-6 flex flex-col md:col-span-2 bg-gray-800/50">
                          <h4 className="text-xl font-bold text-white">30-минутные тренировки (1 месяц)</h4>
                          <p className="mt-2 text-gray-400 flex-grow">8 тренировок по 30 минут.</p>
                          <p className="mt-4 text-3xl font-bold">$65</p>
                      </div>
                  </div>
                </div>

                {/* Offline */}
                 <div className="relative">
                     <div className="absolute -top-40 -right-40 w-96 h-96"><Image src="/3.jpg" alt="Декорация" layout="fill" objectFit="cover" className="opacity-10 blur-md" /></div>
                    <h3 className="text-3xl font-bold text-center text-white mb-10"><span className="border-b-2 border-blue-500 pb-2">Офлайн формат (Тбилиси)</span></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      <div className="border border-blue-500/30 rounded-lg p-6 flex flex-col bg-gray-800/50 backdrop-blur-sm">
                          <h4 className="text-xl font-bold text-white">Персональная тренировка</h4>
                          <p className="mt-2 text-gray-400 flex-grow">Комплексный план с учетом ваших целей и здоровья. Парк Мзиури/Ваке.</p>
                          <p className="mt-4 text-3xl font-bold">$12 / тренировка</p>
                      </div>
                      <div className="border border-blue-500/30 rounded-lg p-6 flex flex-col bg-gray-800/50 backdrop-blur-sm">
                          <h4 className="text-xl font-bold text-white">Тренировка в мини-группе</h4>
                          <p className="mt-2 text-gray-400 flex-grow">Комбинированные функциональные и силовые тренировки на открытом воздухе.</p>
                          <p className="mt-4 text-3xl font-bold">$50 / 8 тренировок</p>
                      </div>
                    </div>
                 </div>
            </div>
        </section>


        {/* Reviews Section */}
        <section id="reviews" className="py-20 sm:py-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Что говорят клиенты</h2>
                </div>
                <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Review 1 */}
                    <div className="bg-gray-900 p-8 rounded-xl shadow-lg shadow-purple-500/10">
                        <p className="text-gray-300">&quot;Я начала тренироваться после хирургической операции в онлайн-формате. Даша внимательно и постепенно наращивала физическую нагрузку. Спустя месяц мы дошли до 5ти тренировок в неделю. Занятия проходят в приятной и ненавязчивой обстановке. Набор упражнений регулярно меняется и расширяется, что обеспечивает приятное разнообразие. Я достигла хорошей спортивной формы и не планирую останавливаться на достигнутом. Всем, кто хочет быть красивым и здоровым очень рекомендую тренировки с Дашей!&quot;</p>
                        <div className="mt-6">
                            <p className="font-semibold text-white text-lg">Марина</p>
                        </div>
                    </div>
                    {/* Review 2 */}
                    <div className="bg-gray-900 p-8 rounded-xl shadow-lg shadow-blue-500/10">
                        <p className="text-gray-300">&quot;На мой взгляд, успех тренировки зависит на 50% от своей мотивации и на 50% от тренера. Очень многое зависит от общего настроя, вы с тренером должны быть на одной волне, заинтересованы в процессе и прогрессе. С самого первого занятия меня покорила Дарья! Своей вовлеченностью, терпением, внимательностью к технике выполнения, своей энергией и физической формой! Приятно смотреть и стремиться к лучшему на примере тренера. С помощью Дарьи я вернулась к регулярным тренировкам, пропускать не хочется, лень пропадает, появилась мотивация становиться лучше!&quot;</p>
                        <div className="mt-6">
                            <p className="font-semibold text-white text-lg">Ирина</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-32 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Контакты для связи и соц.сети</h2>
                <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Готовы начать? Напишите мне, и мы обсудим детали.</p>
                <div className="mt-8">
                    <a href="mailto:darya.kalashnikova.fitness@gmail.com" className="rounded-md bg-white px-8 py-3 text-purple-600 font-semibold text-lg hover:bg-gray-100 transition-colors">Написать на почту</a>
                </div>
                <div className="flex justify-center space-x-6 mt-8">
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

      {/* Footer */}
       <footer className="bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <p className="text-2xl font-bold text-white">Дарья Калашникова</p>
            <p className="text-gray-500">Ваш персональный тренер</p>
            <div className="flex justify-center space-x-6 my-4">
              <a href="https://www.instagram.com/kalashnikovadaaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon className="w-7 h-7" />
              </a>
              <a href="https://t.me/kalashadasha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <TelegramIcon className="w-7 h-7" />
              </a>
            </div>
            <p className="text-gray-500 mt-4">&copy; 2024. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
