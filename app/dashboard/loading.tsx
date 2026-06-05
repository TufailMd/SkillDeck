import SkeletonTile from "@/components/bento/SkeletonTile";

function DashboardLoading() {
  return (
    <div className="space-y-5">
      <SkeletonTile className="w-full h-48 md:h-52" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonTile key={i} className="h-52" />
        ))}
      </div>

      <SkeletonTile className="w-full h-64" />
    </div>
  );
}

export default DashboardLoading;
