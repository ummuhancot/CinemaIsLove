import { appConfig } from "@/helpers/config";
import "@/styles/index.scss"; 
import "@/styles/global.scss"; 
import { Topbar } from "@/components/common/header/Topbar"; 
import { MainMenuBar } from "@/components/common/header/MainMenuBar";
import { Footer } from "@/components/common/footer/footer";
import { montserrat, poppins, roboto_condensed, roboto_condensed as robotoCondensed,  } from "@/helpers/fonts";
import { MantineProvider } from "@mantine/core";


export const metadata = {
  title: {
    template: `%s | ${appConfig.project.name}`,
    default: `${appConfig.project.name} - ${appConfig.project.slogan}`,
  },
  description: appConfig.project.description,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_condensed.variable} ${montserrat.variable}`}
    >
      <body>
        <MantineProvider>
          <Topbar />
          <div className="cinema">
            <MainMenuBar/></div>
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}