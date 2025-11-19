import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Дарья Калашникова | Персональный фитнес-тренер",
  description: "Персональные и онлайн тренировки с Дарьей Калашниковой. Программы для похудения, набора массы и поддержания формы. КМС по легкой атлетике, сертифицированный тренер.",
  keywords: [
    "тренер",
    "фитнес-тренер",
    "персональный тренер",
    "онлайн тренировки",
    "тренировки в Тбилиси",
    "похудение",
    "набор мышечной массы",
    "поддержание формы",
    "Дарья Калашникова",
    "Калашникова",
    "Тренировки",
    "Фитнес",
    "Офлайн",
    "онлайн",
    "Похудение",
    "Питание",
    "Растяжка",
    "Силовые",
    "Онлайн Консультация",
    "фитнес в Тбилиси",
    "тренер в Тбилиси",
    "персональный тренер в Тбилиси",
    "консультация по питанию",
    "онлайн-тренер",
    "Реабилитация после травм",
    "Коррекция осанки",
    "Протрузии",
    "грыжи",
    "Сердечная недостаточность",
    "Варикоз",
    "Диабет",
    "Работа с ограничениями по здоровью",
    "Сила и выносливость",
    "Силовой тренинг",
    "Функциональный тренинг",
    "Мягкие виды фитнеса",
    "Стретчинг",
    "Восстановление после родов",
    "Нутрициология",
    "КМС по лёгкой атлетике"
  ],
  authors: [{ name: "Дарья Калашникова" }],
  creator: "Дарья Калашникова",
  publisher: "Дарья Калашникова",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://trainer.ge",
    siteName: "Дарья Калашникова | Персональный фитнес-тренер",
    title: "Дарья Калашникова | Персональный фитнес-тренер",
    description: "Персональные и онлайн тренировки с Дарьей Калашниковой. Программы для похудения, набора массы и поддержания формы.",
    images: [
      {
        url: "/13.jpg",
        width: 1200,
        height: 630,
        alt: "Дарья Калашникова",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Дарья Калашникова | Персональный фитнес-тренер",
    description: "Персональные и онлайн тренировки с Дарьей Калашниковой",
    images: ["/6.webp"],
    creator: "@kalashnikovadaaa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://trainer.ge",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Дарья Калашникова" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VLJQ92L64Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VLJQ92L64Q');
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
