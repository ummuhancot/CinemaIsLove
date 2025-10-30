"use client";

import { Row, Col } from "react-bootstrap";
import { MovieCard } from "./MovieCard.jsx"; // 1. Adımda oluşturduğumuz component

export const MovieList = ({ movies }) => {
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <Col key={movie.id}>
            {/* Her film için MovieCard component'ini render ediyoruz */}
            <MovieCard movie={movie} />
          </Col>
        ))
      ) : (
        <Col>
          <p>Gösterilecek film bulunamadı.</p>
        </Col>
      )}
    </Row>
  );
};