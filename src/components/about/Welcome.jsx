import { config } from "@/helpers/config";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export const Welcome = () => {
  return (
    <Container>
      <Row className="g-5 space-between">
        <Col lg={6}>
          <Image
            src="/img/about/welcome.jpg"
            width={900}
            height={700}
            alt={config.project.slogan}
            className="img-fluid "
          />
        </Col>

        <Col lg={6}>
          <h2 className="text-secondary">
            Welcome to the Ultimate Cinema Experience
          </h2>
          <p>
            Discover the magic of movies at the most loved cinema platform —
            where stories come alive on the big screen.
          </p>

          <ul>
            <li>
              Enjoy the latest blockbusters, indie gems, and timeless classics —
              all in one place.
            </li>
            <li>
              Immerse yourself in premium IMAX and 4DX halls designed for the
              perfect cinematic journey.
            </li>
            <li>
              Seamless online ticket booking and real-time showtimes at your
              fingertips.
            </li>
            <li>
              Join our community of movie lovers, rate films, and share your
              favorites. 🌟 Experience cinema the way it’s meant to be —
              emotional, immersive, unforgettable.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
