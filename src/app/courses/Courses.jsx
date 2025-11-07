// import courses from "@/helpers/data/courses.json";
// import { Col, Container, Row } from "react-bootstrap";
// import { CourseCard } from "./CourseCard";

// export const Courses = ({ featured }) => {
//   let filteredCourses = featured
//     ? courses.filter((course) => course.featured)
//     : courses;

//   // ? ikinci yol bu
//   /*   
// ? let filteredCourses = courses; */

//   /* 
//  ? if (featured) {
//  ?   filteredCourses = courses.filter((item) => item.featured);
//   } */

//   return (
//     <Container>
//       <Row xs={1} md={2} lg={3} xxl={4} className="g-5">
//         {filteredCourses.map((item) => (
//           <Col key={item?.id}>
//             <CourseCard {...item} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };


// import courses from "@/helpers/data/courses.json"; // ARTIK STATİK VERİ KULLANMIYORUZ
import { Col, Container, Row } from "react-bootstrap";
import { CourseCard } from "./CourseCard";

// 1. Prop adı 'coursesData' olarak değiştirildi (prop çakışmasını önlemek için)
export const Courses = ({ coursesData }) => {
  
  // 2. Statik filtreleme ve veri okuma kaldırıldı
  // let filteredCourses = featured ? ... // BU SATIRLAR SİLİNDİ

  return (
    <Container>
      <Row xs={1} md={2} lg={3} xxl={4} className="g-5">
        
        {/* 3. Statik 'courses' yerine 'coursesData' prop'u map ediliyor */}
        {coursesData.map((item) => (
          <Col key={item?.id}>
            <CourseCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};