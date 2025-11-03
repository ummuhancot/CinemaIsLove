import { SectionTitle } from "../common/section-title/SectionTitle";
import { Courses } from "@/app/courses/Courses";

export const FeaturedCourses = () => {
  return (
    <div className="featured-courses bg content-section">
      <SectionTitle>Movies At Cinemas </SectionTitle>
      <Courses featured={true} />
    </div>
  );
};
