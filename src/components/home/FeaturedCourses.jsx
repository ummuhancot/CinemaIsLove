// import { SectionTitle } from "../common/section-title/SectionTitle";
// import { Courses } from "@/app/courses/Courses";

// export const FeaturedCourses = () => {
//   return (
//     <div className="featured-courses bg content-section">
//       <SectionTitle>Movies At Cinemas </SectionTitle>
//       <Courses featured={true} />
//     </div>
//   );
// };



import { SectionTitle } from "../common/section-title/SectionTitle";
import { Courses } from "@/app/courses/Courses";

// 1. Bileşen artık 'courses' prop'unu alıyor (page.jsx'den gönderilecek)
export const FeaturedCourses = ({ courses }) => {
  return (
    <div className="featured-courses bg content-section">
      <SectionTitle>Movies At Cinemas </SectionTitle>
      
      {/* 2. 'featured' prop'u yerine doğrudan API'den gelen listeyi iletiyoruz */}
      <Courses coursesData={courses || []} />
    </div>
  );
};