"use client";

import { useState } from "react";
import { Form, Button, Alert, Spinner, Row, Col } from "react-bootstrap";
import { register } from "@/services/authService"; // 1. Adım: authService'i import et
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // package.json'da olduğu için import ediyoruz

export const RegisterForm = () => {
  // Backend'deki RegisterRequest DTO'suna göre state tanımlıyoruz
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phoneNumber: "",
    birthDate: "",
    gender: "", // Cinsiyet (MALE, FEMALE, OTHER)
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 2. Adım: authService üzerinden kayıt isteği at
      // Endpoint: /api/register (AuthenticationController)
      await register(formData);

      // 3. Adım: Başarılı kayıt bildirimi
      Swal.fire({
        title: "Kayıt Başarılı!",
        text: "Giriş sayfasına yönlendiriliyorsunuz.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      // 4. Adım: Login sayfasına yönlendir
      setTimeout(() => {
        router.push("/login"); // Mevcut login sayfanız
      }, 2000);

    } catch (err) {
      // 5. Adım: Hata yönetimi
      let errorMessage = "Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.";
      
      // Backend'den gelen Conflict (409) hatalarını yakala
      if (err.response && err.response.status === 409) {
        // ErrorMessages.java dosyasındaki mesajlar
        if (err.response.data?.message?.includes("Email already exists")) {
          errorMessage = "Bu e-posta adresi zaten kayıtlı.";
        } else if (err.response.data?.message?.includes("Phone already exists")) {
          errorMessage = "Bu telefon numarası zaten kayıtlı.";
        }
      } else if (err.response && err.response.data?.message) {
         errorMessage = err.response.data.message;
      }
      
      setError(errorMessage);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="registerName">
            <Form.Label>Ad</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={50}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="registerSurname">
            <Form.Label>Soyad</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={50}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="registerEmail">
        <Form.Label>Email Adresi</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerPassword">
        <Form.Label>Şifre</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={8}
          maxLength={30}
        />
        <Form.Text className="text-muted">
          Şifreniz en az 8 karakter, 1 büyük harf, 1 küçük harf, 1 rakam ve 1 özel karakter içermelidir.
        </Form.Text>
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="registerPhoneNumber">
            <Form.Label>Telefon Numarası</Form.Label>
            <Form.Control
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="(555) 111-2233" // DTO'daki format
            />
          </Form.Group>
        </Col>
        <Col md={6}>
           <Form.Group className="mb-3" controlId="registerBirthDate">
            <Form.Label>Doğum Tarihi</Form.Label>
            <Form.Control
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="registerGender">
        <Form.Label>Cinsiyet</Form.Label>
        <Form.Select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Seçiniz...</option>
          <option value="MALE">Erkek</option> {/* */}
          <option value="FEMALE">Kadın</option> {/* */}
          <option value="OTHER">Diğer</option> {/* */}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading} className="mt-3">
        {loading ? <Spinner as="span" animation="border" size="sm" /> : "Kayıt Ol"}
      </Button>
    </Form>
  );
};

/*Bu component (src/components/auth/RegisterForm.jsx),
 backend'deki RegisterRequest DTO'sunun gerektirdiği tüm alanları 
 (name, surname, email, password, phoneNumber, birthDate, gender) 
 iceren bir form oluşturur ve 
 authService'i kullanarak kayıt işlemini gerçekleştirir.*/