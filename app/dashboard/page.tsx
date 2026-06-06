import { Suspense } from "react";

import ActivityTile from "@/components/bento/ActivityTile";
import BentoGrid from "@/components/bento/BentoGrid";
import CourseSkeletonRow from "@/components/bento/CourseSkeletonRow";
import HeroTile from "@/components/bento/HeroTile";

import CoursesList from "./courses-list";

function DashboardPage() {
  return (
    <BentoGrid>
      <HeroTile name="TruCoder" date="Thursday, June 2026" streakDays={14} />

      <section aria-label="Active Courses" className="md:col-span-12">
        <Suspense fallback={<CourseSkeletonRow />}>
          <CoursesList />
        </Suspense>
      </section>

      <ActivityTile />
    </BentoGrid>
  );
}
export default DashboardPage;
