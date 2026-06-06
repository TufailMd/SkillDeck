export interface Course {
  id: number;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export interface Activity {
  id: number;
  week_offset: number;
  day_offset: number;
  contribution_count: number;
  created_at: string;
}

export type CourseRow = Course;
export type ActivityRow = Activity;

/** Database type map used by the Supabase client */
export interface Database {
  public: {
    Tables: {
      courses: {
        Row: CourseRow;
        Insert: Omit<CourseRow, "id" | "created_at">;
        Update: Partial<Omit<CourseRow, "id" | "created_at">>;
      };
      activity: {
        Row: ActivityRow;
        Insert: Omit<ActivityRow, "id" | "created_at">;
        Update: Partial<Omit<ActivityRow, "id" | "created_at">>;
      };
    };
  };
}
