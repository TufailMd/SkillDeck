import SkeletonTile from "./SkeletonTile";

function CourseSkeletonRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <SkeletonTile key={i} className="h-52" />
      ))}
    </div>
  );
}

export default CourseSkeletonRow;
