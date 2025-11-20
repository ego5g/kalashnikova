'use client';
export default function ReviewsPage() {
    return (
        <section className="py-10 sm:py-16 bg-white dark:bg-black">
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
    );
}
