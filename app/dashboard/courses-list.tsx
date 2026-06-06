import CourseCard from "@/components/bento/CourseCard";
import createClient from "@/lib/supabase/server";
import type { Course } from "@/lib/supabase/types";

async function CoursesList() {
  const supabase = await createClient();

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);

  const safeCourses: Course[] = courses ?? [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      {safeCourses.map((course, index) => (
        <CourseCard
          key={course.id}
          course={course}
          animationDelay={index * 0.1}
        />
      ))}
    </div>
  );
}

export default CoursesList;
