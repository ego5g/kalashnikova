'use client';

import { SVGProps } from "react";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-white font-sans">
      <main>
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
                  <a href="/programs" className="rounded-md bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-white font-semibold text-lg hover:opacity-90 transition-opacity">Выбрать программу</a>
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
        
        {/* Галерея */}
        <section className="py-4 sm:py-8 bg-gray-100 dark:bg-gray-900">
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
      </main>
    </div>
  );
}