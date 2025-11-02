import "@/styles/index.scss"; 
import "@/styles/global.scss";
import { config } from "@/helpers/config"; 
import { Topbar } from "@/components/common/header/Topbar"; 
import { MainMenuBar } from "@/components/common/header/MainMenuBar";
import { Footer } from "@/components/common/footer/footer";
import { montserrat, poppins, roboto_condensed, roboto_condensed as robotoCondensed,  } from "@/helpers/fonts";


export const metadata = {
  title: {
    template: `%s | ${config.project.name}`,
    default: `${config.project.name} - ${config.project.slogan}`,
  },
  description: config.project.description,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_condensed.variable} ${montserrat.variable}`}>
      <body>
        <Topbar />
        <MainMenuBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}