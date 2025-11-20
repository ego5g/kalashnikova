'use client';
import { SVGProps } from 'react';

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

export default function AboutPage() {
    return (
        <section className="py-10 sm:py-16 bg-gray-50 dark:bg-black">
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
    );
}
