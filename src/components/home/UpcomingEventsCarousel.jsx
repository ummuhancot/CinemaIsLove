// "use client";

// import { Carousel } from "primereact/carousel";
// import { EventCard } from "./EventCard";

// export const UpcomingEventsCarousel = ({ upcomingEvents }) => {
//   const responsiveOptions = [
//     {
//       breakpoint: "1400px",
//       numVisible: 3,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "1200px",
//       numVisible: 2,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "768",
//       numVisible: 2,
//       numScroll: 1,
//     },
//   ];

//   const itemTemplate = (item) => {
//     return (
//       <div className="p-2">
//         <EventCard {...item} />
//       </div>
//     );
//   };

//   return (
//     <Carousel
//       value={upcomingEvents}
//       numVisible={3}
//       numScroll={2}
//       itemTemplate={itemTemplate}
//       responsiveOptions={responsiveOptions}
//     />
//   );
// };


"use client";

import { Carousel } from "primereact/carousel";
import { EventCard } from "./EventCard";

export const UpcomingEventsCarousel = ({ upcomingEvents }) => {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1200px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "768px", // '768' -> '768px' (Daha net)
      numVisible: 2,
      numScroll: 1,
    },
    { 
      // Ekstra küçük ekranlar için yeni bir breakpoint ekliyoruz
      breakpoint: "576px",
      numVisible: 1,
      numScroll: 1,
    }
  ];

  // 1. itemTemplate'i 'movie' (MovieResponse) verisine göre güncelliyoruz
  const itemTemplate = (movie) => {
    
    // MovieResponse'dan gelen veriyi EventCard'ın beklediği prop'lara eşliyoruz
    const eventCardProps = {
      id: movie.id,
      title: movie.title,
      // API'den gelen ilk resmi (poster) alıyoruz
      image: movie.images?.[0]?.data, // Base64 data
      // API'de 'location' yok, 'genre' (tür) bilgisini kullanabiliriz
      location: movie.genre || "N/A", 
      // API'de 'time' yok, 'releaseDate' (vizyon tarihi) bilgisini kullanabiliriz
      time: movie.releaseDate, 
    };

    return (
      <div className="p-2">
        {/* Not: EventCard'ı da bu yeni prop'ları işleyecek şekilde güncelleyeceğiz */}
        <EventCard {...eventCardProps} />
      </div>
    );
  };

  return (
    <Carousel
      value={upcomingEvents}
      numVisible={3}
      numScroll={2} // Aynı anda 2 tane kaydır
      itemTemplate={itemTemplate}
      responsiveOptions={responsiveOptions}
    />
  );
};
