import { Poppins, Roboto_Condensed, Montserrat } from 'next/font/google';

/* Mevcut src/styles/index.scss dosyanızdaki fontları ve 
  CSS değişkenlerini (variable) temel alıyoruz.
*/

// Ana (Base) Font: Poppins
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // index.scss'ten alındı
  variable: '--font-family-base', // index.scss'teki CSS değişkeni
});

// Başlık (Heading) Fontu: Roboto Condensed
export const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'], // index.scss'ten alındı
  variable: '--font-family-heading', // index.scss'teki CSS değişkeni
});

// İkincil (Secondary) Font: Montserrat
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // index.scss'ten alındı
  variable: '--font-family-secondary', // index.scss'teki CSS değişkeni
});