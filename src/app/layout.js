import 'sweetalert2/dist/sweetalert2.min.css';

// Kullanılmayan Geist font importları kaldırıldı
import "@/styles/index.scss"; // Mevcut stil dosyası
import "@/styles/global.scss"; // Mevcut stil dosyası
import { config } from "@/helpers/config"; // Mevcut config
import { Topbar } from "@/components/common/header/Topbar"; // Mevcut component
import { MainMenuBar } from "@/components/common/header/MainMenuBar"; // Mevcut component
import { Footer } from "@/components/common/footer/footer"; // Mevcut component

// === YENİ FONT İMPORTLARI EKLENDİ ===
// src/helpers/fonts.js dosyasından fontları import ediyoruz
import { poppins, roboto_condensed, montserrat } from "@/helpers/fonts";
// ===================================

export const metadata = {
  title: {
    template: `%s | ${config.project.name}`,
    default: `${config.project.name} - ${config.project.slogan}`,
  },
  description: config.project.description,
};

export default function RootLayout({ children }) {
  return (
    // === <html> ETİKETİ GÜNCELLENDİ ===
    // Font değişkenleri buraya className olarak eklendi
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_condensed.variable} ${montserrat.variable}`}
    >
      {/* ================================== */}
      <body>
        <Topbar />
        <MainMenuBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}