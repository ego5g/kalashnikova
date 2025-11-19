import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    url: "https://kalashnikovadaria.com",
    siteName: "Дарья Калашникова | Персональный фитнес-тренер",
    title: "Дарья Калашникова | Персональный фитнес-тренер",
    description: "Персональные и онлайн тренировки с Дарьей Калашниковой. Программы для похудения, набора массы и поддержания формы.",
    images: [
      {
        url: "https://kalashnikovadaria.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Дарья Калашникова",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Дарья Калашникова | Персональный фитнес-тренер",
    description: "Персональные и онлайн тренировки с Дарьей Калашниковой",
    images: ["https://kalashnikovadaria.com/og-image.jpg"],
    creator: "@kalashnikovadaaa",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
    canonical: "https://kalashnikovadaria.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Дарья Калашникова" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}