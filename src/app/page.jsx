import { Spacer } from "@/components/common/spacer/Spacer";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";


export default function Home() {
  return (
    <div>
      <Spacer/>

      <UpcomingEvents/>
      <Spacer />
      <FeaturedCourses/>
    </div>
  );
}
