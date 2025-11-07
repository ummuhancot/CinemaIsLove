// import { Spacer } from "@/components/common/spacer/Spacer";
// import { FeaturedCourses } from "@/components/home/FeaturedCourses";
// import { UpcomingEvents } from "@/components/home/UpcomingEvents";


// export default function Home() {
//   return (
//     <div>
//       <Spacer/>

//       <UpcomingEvents/>
//       <Spacer />
//       <FeaturedCourses/>
//     </div>
//   );
// }


import { Spacer } from "@/components/common/spacer/Spacer";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";

// 1. movieService'i import ediyoruz
import { movieService } from "@/services/movieService.js";

// 2. Ana sayfa bileşenini 'async' yapıyoruz
export default async function Home() {

  // 3. API'den verileri çekiyoruz
  let upcomingEventsData = [];
  let inTheatersData = null; // Bu bir Page<T> objesi olacak

  try {
    // PDF M05: Yakında gelecek filmleri çek (ilk 10 tane)
    upcomingEventsData = await movieService.getComingSoon(0, 10); 
  } catch (err) {
    console.error("UpcomingEvents (M05) hatası:", err.message);
    // Hata durumunda bile sayfa çalışsın diye boş array atıyoruz
    upcomingEventsData = [];
  }

  try {
    // PDF M04: Vizyondakileri çek (ilk 10 tane)
    inTheatersData = await movieService.getInTheaters(0, 10);
  } catch (err) {
    console.error("InTheaters (M04) hatası:", err.message);
    // Hata durumunda bile sayfa çalışsın diye null atıyoruz
    inTheatersData = null;
  }

  // 4. Verileri alt bileşenlere prop olarak iletiyoruz
  return (
    <div>
      <Spacer/>
      
      {/* Eskiden: <UpcomingEvents/> (kendi içinde statik data okuyordu)
        Şimdi: API'den çektiğimiz veriyi (upcomingEventsData) prop olarak veriyoruz.
      */}
      <UpcomingEvents upcomingEvents={upcomingEventsData} />
      
      <Spacer />

      {/* Eskiden: <FeaturedCourses/> (kendi içinde statik data okuyordu)
        Şimdi: API'den çektiğimiz veriyi (Page objesinin content'ini) veriyoruz.
      */}
      <FeaturedCourses courses={inTheatersData?.content || []} />
    </div>
  );
}
