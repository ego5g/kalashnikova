'use client';

import { SVGProps } from "react";

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

export default function ContactPage() {
    return (
        <section className="py-10 sm:py-16 bg-gray-100 dark:bg-gray-900">
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
    );
}
