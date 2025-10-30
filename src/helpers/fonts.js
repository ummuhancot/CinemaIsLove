import { Poppins, Roboto_Condensed, Montserrat } from 'next/font/google';


export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  variable: '--font-family-base', 
});

export const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-family-heading', 
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  variable: '--font-family-secondary', 
});