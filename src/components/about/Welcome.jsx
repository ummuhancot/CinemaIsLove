import { config } from "@/helpers/config";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export const Welcome = () => {
  return (
    <Container>
      <Row className="g-5 space-between">
        <Col lg={6}>
          <Image
            src="/img/about/welcome.jpeg"
            width={900}
            height={700}
            alt={config.project.slogan}
            className="img-fluid "
          />
        </Col>

        </Row>
    </Container>
  );
};
