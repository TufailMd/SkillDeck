export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export type CourseRow = Course;

/** Database type map used by the Supabase client */
export interface Database {
  public: {
    Tables: {
      courses: {
        Row: CourseRow;
        Insert: Omit<CourseRow, "id" | "created_at">;
        Update: Partial<Omit<CourseRow, "id" | "created_at">>;
      };
    };
  };
}
