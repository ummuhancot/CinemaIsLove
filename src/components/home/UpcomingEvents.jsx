// import { Container } from "react-bootstrap";
// import { SectionTitle } from "../common/section-title/SectionTitle";
// import events from "@/helpers/data/events.json";
// import { UpcomingEventsCarousel } from "./UpcomingEventsCarousel";

// export const UpcomingEvents = () => {
//   //* tarihe göre alıyor burda objeleri
//   const upcomingEvents = events.filter(
//     (event) => new Date(`${event.date} ${event.time}`) > new Date()
//   );

//   return (
//     <Container>
//       <SectionTitle>Upcoming Movies</SectionTitle>
//       <UpcomingEventsCarousel upcomingEvents={upcomingEvents} />
//     </Container>
//   );
// };


import { Container } from "react-bootstrap";
import { SectionTitle } from "../common/section-title/SectionTitle";
// import events from "@/helpers/data/events.json"; // ARTIK STATİK VERİ KULLANMIYORUZ
import { UpcomingEventsCarousel } from "./UpcomingEventsCarousel";

// 1. Bileşen artık 'upcomingEvents' prop'unu alıyor
export const UpcomingEvents = ({ upcomingEvents }) => {

  // 2. Statik filtrelemeyi (events.filter(...)) kaldırdık, çünkü API zaten doğru veriyi getiriyor.
  //

  return (
    <Container>
      <SectionTitle>Upcoming Movies</SectionTitle>
      
      {/* 3. API'den gelen veriyi (veya hata durumunda boş array) Carousel'e iletiyoruz */}
      <UpcomingEventsCarousel upcomingEvents={upcomingEvents || []} />
    </Container>
  );
};