// "use client";

// import Image from "next/image";
// import React from "react";
// import { Card } from "react-bootstrap";
// import "./course-card.scss";

// export const CourseCard = (props) => {
//   const { title, user, comment, rating, image } = props;

//   return (
//     <Card className="course-card">
//       <Card.Body>
//         <div className="img-container">
//           <Image
//             src={`/img/courses/${image}`}
//             alt={title}
//             /*  width={400}
//             height={300} */

//             className="img-fluid rounded"
//             fill
//             // koyacaktık eger eşit olmayan fotoğraf olsaydı ve dışına bir div yapıcaktık ve classname ye img-container denicek ve width ve heigth i silmemiz gerekecek.
//           />
//         </div>
//         <Card.Title>{title}</Card.Title>
//       </Card.Body>
//       <Card.Footer>
//         <span>
//           <i className="pi pi-users"></i>
//           {user}
//         </span>
//         <span>
//           <i className="pi pi-wave-pulse"></i>
//           {rating}
//         </span>
//         <span>
//           <i className="pi pi-dollar"></i>
//           {comment}
//         </span>
//       </Card.Footer>
//     </Card>
//   );
// };


"use client";

import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import "./course-card.scss";

export const CourseCard = (props) => {
  // 1. Prop'ları API verisine (MovieResponse) göre güncelliyoruz
  // 'user', 'comment', 'rating' -> 'genre', 'status', 'rating' olarak eşleşecek
  const { title, genre, rating, images, status } = props;

  // 2. Resim kaynağını belirliyoruz
  const image = images?.[0]?.data; // API'den gelen ilk resmi (poster) al
  let imageSrc;

  if (image) {
    imageSrc = image.startsWith("data:") ? image : `/img/courses/${image}`; // Güvenlik kontrolü
  } else {
    imageSrc = "/img/logo/logomeinmenu-dark.png"; // Varsayılan resim
  }

  return (
    <Card className="course-card">
      <Card.Body>
        <div className="img-container">
          <Image
            src={imageSrc}
            alt={title}
            className="img-fluid rounded"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        {/* 3. Alanları API verisiyle güncelliyoruz */}
        <span>
          <i className="pi pi-bookmark"></i> {/* 'pi-users' -> 'pi-bookmark' (tür) */}
          {genre || "N/A"} {/* 'user' -> 'genre' */}
        </span>
        <span>
          <i className="pi pi-star"></i> {/* 'pi-wave-pulse' -> 'pi-star' (puan) */}
          {rating || "N/A"} {/* 'rating' -> 'rating' */}
        </span>
        <span>
          <i className="pi pi-tag"></i> {/* 'pi-dollar' -> 'pi-tag' (durum) */}
          {status || "In Theaters"} {/* 'comment' -> 'status' */}
        </span>
      </Card.Footer>
    </Card>
  );
};