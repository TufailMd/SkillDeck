CREATE TABLE IF NOT EXISTS courses (
     id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     title TEXT NOT NULL,
     progress BIGINT NOT NULL DEFAULT 0,
     icon_name TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );

   ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

   CREATE POLICY "courses_read_public" ON courses
     FOR SELECT TO PUBLIC
     USING (true);

   CREATE TABLE IF NOT EXISTS activity (
     id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     week_offset BIGINT NOT NULL,
     day_offset BIGINT NOT NULL,
     contribution_count BIGINT NOT NULL DEFAULT 0,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );

   ALTER TABLE activity ENABLE ROW LEVEL SECURITY;

   CREATE POLICY "activity_read_public" ON activity
     FOR SELECT TO PUBLIC
     USING (true);
   
   INSERT INTO courses (title, progress, icon_name) VALUES
     ('Advanced TypeScript', 85, 'BookOpen'),
     ('React Performance', 60, 'Zap'),
     ('Database Design', 92, 'Database'),
     ('System Design', 45, 'Layers');

  INSERT INTO activity (week_offset, day_offset, contribution_count) VALUES
  -- Week 0
  (0, 0, 4), (0, 1, 8), (0, 2, 12), (0, 3, 0), (0, 4, 5), (0, 5, 2), (0, 6, 0),
  -- Week 1
  (1, 0, 10), (1, 1, 15), (1, 2, 9), (1, 3, 14), (1, 4, 7), (1, 5, 0), (1, 6, 1),
  -- Week 2
  (2, 0, 7), (2, 1, 0), (2, 2, 13), (2, 3, 8), (2, 4, 11), (2, 5, 3), (2, 6, 0),
  -- Week 3
  (3, 0, 0), (3, 1, 6), (3, 2, 14), (3, 3, 18), (3, 4, 9), (3, 5, 4), (3, 6, 0),
  -- Week 4
  (4, 0, 5), (4, 1, 11), (4, 2, 3), (4, 3, 0), (4, 4, 12), (4, 5, 8), (4, 6, 2),
  -- Week 5 (High productivity week)
  (5, 0, 15), (5, 1, 22), (5, 2, 19), (5, 3, 13), (5, 4, 16), (5, 5, 5), (5, 6, 0),
  -- Week 6
  (6, 0, 8), (6, 1, 4), (6, 2, 0), (6, 3, 7), (6, 4, 11), (6, 5, 1), (6, 6, 0),
  -- Week 7
  (7, 0, 3), (7, 1, 12), (7, 2, 15), (7, 3, 9), (7, 4, 0), (7, 5, 6), (7, 6, 4),
  -- Week 8
  (8, 0, 9), (8, 1, 14), (8, 2, 11), (8, 3, 16), (8, 4, 10), (8, 5, 0), (8, 6, 0),
  -- Week 9 (Lighter week)
  (9, 0, 2), (9, 1, 5), (9, 2, 4), (9, 3, 0), (9, 4, 3), (9, 5, 1), (9, 6, 0),
  -- Week 10
  (10, 0, 6), (10, 1, 13), (10, 2, 17), (10, 3, 8), (10, 4, 12), (10, 5, 3), (10, 6, 1),
  -- Week 11
  (11, 0, 11), (11, 1, 9), (11, 2, 14), (11, 3, 21), (11, 4, 7), (11, 5, 0), (11, 6, 0);