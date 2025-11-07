// "use client";

// import Image from "next/image";
// import { Card } from "react-bootstrap";
// import "./event.card.scss";

// export const EventCard = (props) => {
//   const { title, time, location, image } = props;

//   return (
//     <Card className="event-card">
//       <Card.Body>
//         <Image
//           src={`/img/events/${image}`}
//           alt={title}
//           width={500}
//           height={320}
//           className="img-fluid rounded"
//         />
//         <Card.Subtitle>
//           <span>
//             <i className="pi pi-clock"></i>
//             {time}
//           </span>
//           <span>
//             <i className="pi pi-map-marker"></i>
//             {location}
//           </span>
//         </Card.Subtitle>
//         <Card.Title>{title}</Card.Title>
//       </Card.Body>
//     </Card>
//   );
// };


"use client";

import Image from "next/image";
import { Card } from "react-bootstrap";
import "./event.card.scss";
import moment from "moment"; // Tarih formatlama için moment'ı import ediyoruz

export const EventCard = (props) => {
  // 1. Prop'ları API verisine (MovieResponse) göre güncelliyoruz
  const { title, time, location, image } = props;

  // 2. Resim kaynağını belirliyoruz
  let imageSrc;
  if (image) {
    // API'den Base64 verisi geliyorsa (data:image/png;base64,...)
    imageSrc = image.startsWith("data:") ? image : `/img/events/${image}`;
  } else {
    // Eğer film resmi yoksa varsayılan bir resim (logo) kullan
    imageSrc = "/img/logo/logomeinmenu-dark.png";
  }

  // 3. Tarihi formatlıyoruz (örn: 15 Kas 2025)
  const formattedTime = time ? moment(time).format("DD MMM YYYY") : "TBA"; // TBA = Tarih Belli Değil

  return (
    <Card className="event-card">
      <Card.Body>
        {/* 4. Next/Image'i Base64 ile çalışacak şekilde güncelliyoruz */}
        <div className="img-container">
          <Image
            src={imageSrc}
            alt={title}
            fill // fill özelliği container'a yayılmasını sağlar
            style={{ objectFit: "cover" }} // objectFit resmin bozulmadan kaplamasını sağlar
            className="rounded"
            // Base64 kullanırken width/height yerine fill tercih edilir
          />
        </div>
        <Card.Subtitle>
          <span>
            <i className="pi pi-calendar"></i> {/* 'pi-clock' -> 'pi-calendar' */}
            {formattedTime} {/* 'time' -> 'formattedTime' */}
          </span>
          <span>
            <i className="pi pi-bookmark"></i> {/* 'pi-map-marker' -> 'pi-bookmark' (tür için) */}
            {location} {/* 'location' -> 'genre' (tür) olarak kullanılıyor */}
          </span>
        </Card.Subtitle>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};