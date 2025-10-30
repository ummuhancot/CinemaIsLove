import { Slider } from "@/components/home/Slider"; // Mevcut Slider component'i
import { Spacer } from "@/components/common/spacer/Spacer"; // Mevcut Spacer component'i
import { MovieList } from "@/components/movies/MovieList"; // Oluşturduğumuz MovieList component'i
import { getMoviesInTheaters } from "@/services/movieService"; // Oluşturduğumuz movieService
import { Container } from "react-bootstrap";

/**
 * Bu ana sayfa, sunucu tarafında (Server Component) çalışarak
 * vizyondaki filmleri API'den çeker.
 */
export default async function Home() {
  
  let movies = [];
  try {
    // 1. Backend'den vizyondaki filmleri çek (PDF M04)
    // MovieController -> /api/movies/in-theaters
    // Sadece ilk 8 filmi ana sayfada göstermek için size=8 kullandık.
    const response = await getMoviesInTheaters(0, 8, "releaseDate", "DESC");
    
    // Spring Boot Pageable yanıtı .content içindedir
    movies = response.data.content;
  } catch (error) {
    console.error("Ana sayfa filmleri çekilemedi:", error.message);
  }

  return (
    <>
      {/* 1. Slider Component'i */}
      <Slider /> 
      
      <Spacer /> {/* 120px boşluk */}

      {/* 2. Vizyondaki Filmler Bölümü */}
      <Container>
        <h2 className="mb-4">Vizyondaki Filmler</h2>
        <MovieList movies={movies} />
      </Container>
      
      <Spacer />
      
      {/* Buraya gelecekte "Yakında" (M05) veya "Etkinlikler" (Events.jsx) bölümleri eklenebilir. */}
    </>
  );
}