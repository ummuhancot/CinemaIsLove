import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/index.scss";
import "@/styles/global.scss";
import { config } from "@/helpers/config";
import { Topbar } from "@/components/common/header/Topbar";
import {MainMenuBar} from "@/components/common/header/MainMenuBar";


export const metadata = {
  title: {
    template: `%s | ${config.project.name}`,
    default: `${config.project.name} - ${config.project.slogan}`,
  },
  description: config.project.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <MainMenuBar />
        {children}
      </body>
    </html>
  );
}
