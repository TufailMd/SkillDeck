CREATE TABLE IF NOT EXISTS courses (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  title      text        NOT NULL,
  progress   integer     NOT NULL CHECK (progress >= 0 AND progress <= 100),
  icon_name  text        NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access"
  ON courses FOR SELECT USING (true);

INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns',      75, 'Code2'),
  ('Next.js Architecture',         60, 'Layers'),
  ('System Design Fundamentals',   45, 'Network'),
  ('TypeScript Deep Dive',         85, 'FileCode');
