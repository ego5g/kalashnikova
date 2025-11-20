'use client';
export default function ProgramsPage() {
    return (
        <section className="py-10 sm:py-16 bg-white dark:bg-black">
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
    );
}
