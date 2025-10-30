"use client";

import Image from "next/image";
import { Card } from "react-bootstrap";
import Link from "next/link";
// import "./MovieCard.scss"; // İhtiyaç halinde stil dosyası oluşturabilirsiniz

export const MovieCard = ({ movie }) => {
  // Backend'den gelen MovieResponse DTO'sunu kullanıyoruz
  const { title, summary, images, slug, id } = movie;

  // MovieMapper'da 'images' alanı olarak eklenmişti
  // 'featured' olanı veya ilk resmi poster olarak kullan
  const poster = images?.find(img => img.featured) || images?.[0];
  
  // API'den gelen base64 verisini kullan (ImageMapper'daki 'data' alanı)
  const imageUrl = poster ? `data:${poster.fileType};base64,${poster.data}` : "/img/movie/movie.jpeg"; // Varsayılan resim
  
  // PDF M09'a göre film detay sayfası için link
  // Backend Movie entity'sinde 'slug' alanı var
  const detailUrl = `/movie/${slug || id}`; // 'movie' klasörünüz zaten var

  return (
    <Card className="h-100 shadow-sm movie-card">
      <Link href={detailUrl}>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={500}
          className="card-img-top"
          style={{ objectFit: "cover", height: "300px" }}
        />
      </Link>
      <Card.Body>
        <Card.Title as="h5">
          <Link href={detailUrl} className="text-dark text-decoration-none">
            {title}
          </Link>
        </Card.Title>
        <Card.Text className="text-muted small">
          {summary ? summary.substring(0, 100) + "..." : "Açıklama mevcut değil."}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
         <Link href={detailUrl} className="btn btn-primary w-100">
            Detaylar
         </Link>
      </Card.Footer>
    </Card>
  );
};