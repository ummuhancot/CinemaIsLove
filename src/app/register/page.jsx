import { RegisterForm } from "@/components/auth/RegisterForm";
import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { Container, Row, Col } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <>
      <PageHeader title="Register" />
      <Spacer />
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {/* 1. Adım: Kayıt formunu burada render ediyoruz */}
            <RegisterForm />
          </Col>
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default RegisterPage;