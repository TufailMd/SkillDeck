import ActivityTile from "@/components/bento/ActivityTile";
import createClient from "@/lib/supabase/server";
import type { Activity } from "@/lib/supabase/types";

async function ActivityData() {
  const supabase = await createClient();

  const { data: activities, error } = await supabase
    .from("activity")
    .select("*")
    .order("week_offset", { ascending: true })
    .order("day_offset", { ascending: true });

  if (error) throw new Error(error.message);

  const safeActivities: Activity[] = activities ?? [];

  // Convert activity records to heatmap data (84 cells: 12 weeks × 7 days)
  // The heatmap is indexed as: [day * 12 + week]
  const heatmapData = new Array(84).fill(0);

  safeActivities.forEach((activity) => {
    const index = activity.day_offset * 12 + activity.week_offset;
    if (index >= 0 && index < 84) {
      // Normalize contribution count to 0-4 intensity level
      heatmapData[index] = Math.min(
        4,
        Math.floor(activity.contribution_count / 4)
      );
    }
  });

  return <ActivityTile heatmapData={heatmapData} />;
}

export default ActivityData;
