"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = ()=> {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sol Kısım */}
        <div className="footer-section">
          <h2 className="logo">CineMax</h2>
          <p className="about">
            CineMax, en güncel vizyon filmleri, özel salon deneyimleri ve hızlı
            biletleme sistemiyle sinemayı yeniden tanımlar.
          </p>
        </div>

        {/* Hızlı Erişim */}
        <div className="footer-section">
          <h3>Hızlı Erişim</h3>
          <ul>
            <li>
              <a href="/">Ana Sayfa</a>
            </li>
            <li>
              <a href="/movies">Filmler</a>
            </li>
            <li>
              <a href="/halls">Salonlar</a>
            </li>
            <li>
              <a href="/contact">İletişim</a>
            </li>
          </ul>
        </div>

        {/* Yardım */}
        <div className="footer-section">
          <h3>Yardım</h3>
          <ul>
            <li>
              <a href="/faq">SSS</a>
            </li>
            <li>
              <a href="/support">Destek</a>
            </li>
            <li>
              <a href="/privacy">Gizlilik Politikası</a>
            </li>
            <li>
              <a href="/terms">Kullanım Şartları</a>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div className="footer-section">
          <h3>Bizi Takip Et</h3>
          <div className="social">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="copyright">
        © {new Date().getFullYear()} CineMax. Tüm hakları saklıdır. 🎥
        <br />
        Yozgat Merkez, | ☎️ +90 (354) 000 00 00
      </div>

      <style jsx>{`
        .footer {
          background: #111;
          color: #ccc;
          padding: 60px 20px 30px;
          border-top: 1px solid #333;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .footer-section h3 {
          color: #fff;
          margin-bottom: 10px;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 6px;
        }

        .footer-section ul li a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-section ul li a:hover {
          color: #f5c518;
        }

        .logo {
          color: #f5c518;
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .about {
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .social {
          display: flex;
          gap: 15px;
          margin-top: 8px;
        }

        .social a {
          color: #ccc;
          font-size: 1.1rem;
          transition: color 0.3s;
        }

        .social a:hover {
          color: #f5c518;
        }

        .copyright {
          text-align: center;
          color: #777;
          font-size: 0.85rem;
          margin-top: 40px;
          border-top: 1px solid #333;
          padding-top: 15px;
        }
      `}</style>
    </footer>
  );
}
