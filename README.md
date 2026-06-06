# SkillDeck

A futuristic, animated Student Learning Dashboard built with Next.js 14 and real-time data fetching.

[![Next.js 14](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E?style=flat-square&logo=supabase)](https://supabase.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)

SkillDeck is a modern, performance-first learning dashboard that visualizes student progress through an elegantly animated Bento Grid interface. Built for developers who believe animations should be performant and data should load instantly—no loading waterfalls, no client-side fetch delays.

---

## ✨ Features

- **Dark Mode Bento Grid Layout** — Modular, responsive grid system with six specialized tiles (Hero, Activity, Course Cards)
- **Server Component Data Fetching** — Live course data via Next.js RSC with zero client-side loading flicker
- **Spring Physics Animations** — Staggered entrance with Framer Motion spring timing (0.08s per child, 25fps smoothness)
- **Animated Progress Bars** — Progress values animate from 0 to target on mount with custom cubic bezier easing
- **Contribution Heatmap Activity Tile** — Visual representation of student engagement patterns over time
- **Collapsible Navigation** — Sidebar with `layoutId` pill animations that morph smoothly between states
- **Adaptive Navigation** — Desktop sidebar → tablet icon-only nav → mobile bottom nav (CSS only, zero JS overhead)
- **Skeleton Loading States** — Shimmer animations for graceful data fetching with CourseSkeletonRow components
- **Error Boundaries** — Built-in error.tsx with retry logic and helpful user feedback
- **Type-Safe Data Contracts** — Full TypeScript coverage with Supabase type generation

---

## 🛠️ Tech Stack

| Technology        | Purpose                                    | Version |
| ----------------- | ------------------------------------------ | ------- |
| **Next.js**       | Full-stack framework with App Router       | 14.0+   |
| **TypeScript**    | Type-safe development                      | 5.3+    |
| **Supabase**      | PostgreSQL database & auth                 | Latest  |
| **@supabase/ssr** | Server-side auth utilities                 | 0.3.0+  |
| **Framer Motion** | Animation library (transform/opacity only) | 11.0+   |
| **Tailwind CSS**  | Utility-first CSS framework                | 4.0+    |
| **Lucide React**  | Icon library (tree-shaken)                 | 0.3+    |
| **PostCSS**       | CSS processing pipeline                    | 8.4+    |

---

## 📁 Project Structure

```
SkillDeck/
├── app/
│   ├── layout.tsx                 # Root layout with fonts, globals, metadata
│   ├── page.tsx                   # Landing page (optional hero or redirect)
│   ├── globals.css                # Tailwind directives + custom CSS variables
│   ├── dashboard/
│   │   ├── page.tsx               # Dashboard entry point (RSC)
│   │   ├── layout.tsx             # Dashboard layout with Sidebar + BottomNav
│   │   ├── courses-list.tsx       # Course cards list component
│   │   ├── loading.tsx            # Granular loading state (suspense fallback)
│   │   └── error.tsx              # Error boundary with retry button
│   └── fonts/                     # Custom font files (Geist Sans/Mono)
│
├── components/
│   ├── bento/
│   │   ├── BentoGrid.tsx          # Main grid wrapper with Framer Motion stagger
│   │   ├── HeroTile.tsx           # Welcome hero tile (greeting + stats)
│   │   ├── ActivityTile.tsx       # Contribution heatmap (7-week activity chart)
│   │   ├── CourseCard.tsx         # Single course card with progress bar
│   │   ├── CourseSkeletonRow.tsx  # Shimmer skeleton for loading state
│   │   └── SkeletonTile.tsx       # Reusable skeleton tile component
│   ├── layout/
│   │   ├── Sidebar.tsx            # Collapsible left sidebar (desktop)
│   │   ├── SidebarNavItem.tsx     # Individual nav item with layoutId pill
│   │   └── BottomNav.tsx          # Mobile bottom navigation bar
│   └── ui/
│       ├── GlowCard.tsx           # Base card with hover glow effect + scale animation
│       ├── AnimatedProgressBar.tsx # Progress bar with spring animation 0→value
│       └── DynamicIcon.tsx        # Dynamic icon renderer with tree-shaken lookup
│
├── lib/
│   └── supabase/
│       ├── server.ts             # Supabase client config (SSR)
│       └── types.ts              # Auto-generated TypeScript types from schema
│
├── supabase/
│   └── seed.sql                  # Initial data migration (CREATE TABLE + RLS + INSERT)
│
├── public/
│   ├── icons/                    # SVG icon assets
│   └── images/                   # Image assets
│
├── .env.example                  # Environment template
├── .env.local                    # ⚠️ Gitignored — secrets keys
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── tsconfig.json                 # TypeScript compiler options
├── eslint.config.mjs             # ESLint rules
├── package.json                  # Dependencies & scripts
├── package-lock.json             # Locked versions
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** (LTS recommended)
- **npm 9+** or **pnpm 8+**
- A free [Supabase](https://supabase.com) account
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TufailMd/SkillDeck.git
   cd SkillDeck
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Supabase credentials.

### Supabase Setup

1. **Create a free Supabase project**
   - Go to [supabase.com](https://supabase.com) → Sign up → New project
   - Note your **Project URL** and **Anon Key**

2. **Run the database migration**
   - Open the SQL Editor in your Supabase dashboard
   - Paste and execute the following SQL:

   ```sql
   -- Create courses table
   CREATE TABLE IF NOT EXISTS courses (
     id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     title TEXT NOT NULL,
     progress BIGINT NOT NULL DEFAULT 0,
     icon_name TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );

   -- Enable Row Level Security (RLS)
   ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

   -- Create public read-only policy (demo only — add auth in production)
   CREATE POLICY "courses_read_public" ON courses
     FOR SELECT TO PUBLIC
     USING (true);

   -- Create activity table for contribution heatmap
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
   ```

3. **Seed initial data**
   - Execute the following INSERT statements:

   ```sql
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
   ```

4. **Copy credentials to .env.local**
   - From the Supabase dashboard, copy your Project URL and Anon Key

### Environment Variables

Create a `.env.local` file (copy from `.env.example`) with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

⚠️ **Never commit `.env.local` to version control.** It contains secrets.

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Architecture Decisions

### Why Server Components for Data Fetching?

Next.js Server Components allow us to fetch course data at build time and on-demand without exposing queries to the client. This eliminates loading waterfalls (fetch → render → fetch child data) and prevents the dreaded "white flash of unstyled content" when hydration completes. Security is improved because API keys never leave the server, and performance is optimized because data is serialized directly into HTML.

### Why Granular Suspense Over Page-Level Loading States?

The Hero and Activity tiles render immediately from cache, while course cards suspend independently. This gives users **progressive disclosure**—critical information appears in ~100ms, while enrichment content (course list) can take 300-500ms without creating a blocking loading skeleton. Page-level `loading.tsx` would freeze the entire dashboard until all data is ready, defeating the purpose of RSC.

### Why Framer Motion `layoutId` for Sidebar Navigation?

The sidebar pill animation (active nav item highlight) needs to morph smoothly as the user clicks. Using Framer's `layoutId` creates a "shared layout" animation that reuses the same DOM element's bounding box—no state juggling, no ref chasing. The pill seamlessly follows the cursor without 60+ lines of imperative animation code. This is cheaper than manual transform calculations and feels more natural because it respects physics (spring damping).

### Why Explicit Icon Map Over Wildcard Lucide Import?

Lucide React ships 1400+ icons. A wildcard import (`import * as Icons from 'lucide-react'`) bundles all of them into your JS bundle (~80KB gzipped). Our explicit map in `DynamicIcon.tsx` tree-shakes to only the icons we use (4–6 icons = ~2KB). This difference compounds across hundreds of components and hurts Core Web Vitals (FCP, LCP).

---

## 📐 Animation System

SkillDeck uses **three animation layers**, all powered by Framer Motion with transform/opacity only (zero layout shifts):

1. **Entrance Animations (BentoGrid)**
   - Tiles stagger in with `staggerChildren: 0.08` (80ms per child)
   - Each tile uses spring timing: `{ stiffness: 100, damping: 25, mass: 1 }`
   - Visual effect: smooth wave across the grid, feels premium

2. **Interaction Animations (GlowCard)**
   - On hover: `scale: 1.02, boxShadow: glow` with spring physics
   - Stiffness 300, damping 20 → crisp, snappy feel (not floaty)
   - Subtly guides user attention without feeling overdone

3. **Progress Animations (AnimatedProgressBar)**
   - Progress value animates from 0 to target on mount
   - Custom cubic-bezier: `cubic-bezier(0.34, 1.56, 0.64, 1)` (slight overshoot)
   - Runs for 1.2s, feels tangible without being distracting

**Performance Note:** All animations use `transform` and `opacity` (GPU-accelerated). No width, height, or layout-triggering properties animate. Result: 60fps on mobile, zero jank.

---

## 🗄️ Database Schema

### Courses Table

| Column       | Type      | Constraints                 | Example               |
| ------------ | --------- | --------------------------- | --------------------- |
| `id`         | BIGINT    | PRIMARY KEY, auto-increment | 1                     |
| `title`      | TEXT      | NOT NULL                    | "Advanced TypeScript" |
| `progress`   | BIGINT    | DEFAULT 0                   | 85                    |
| `icon_name`  | TEXT      | NOT NULL                    | "BookOpen"            |
| `created_at` | TIMESTAMP | DEFAULT NOW()               | 2024-01-15 10:30:00   |

### Activity Table (Heatmap)

| Column               | Type      | Constraints                 | Example             |
| -------------------- | --------- | --------------------------- | ------------------- |
| `id`                 | BIGINT    | PRIMARY KEY, auto-increment | 1                   |
| `week_offset`        | BIGINT    | NOT NULL                    | 0                   |
| `day_offset`         | BIGINT    | NOT NULL                    | 2                   |
| `contribution_count` | BIGINT    | DEFAULT 0                   | 12                  |
| `created_at`         | TIMESTAMP | DEFAULT NOW()               | 2024-01-15 10:30:00 |

### Seed Data (Sample)

| Title               | Progress | Icon Name |
| ------------------- | -------- | --------- |
| Advanced TypeScript | 85       | BookOpen  |
| React Performance   | 60       | Zap       |
| Database Design     | 92       | Database  |
| System Design       | 45       | Layers    |

---

## 📱 Responsive Breakpoints

| Breakpoint              | Layout                   | Navigation          | Grid Columns   |
| ----------------------- | ------------------------ | ------------------- | -------------- |
| Mobile (`< 640px`)      | Full-width single column | Bottom nav bar      | 1 col          |
| Tablet (`640px–1024px`) | Icon sidebar (vertical)  | Icon-only sidebar   | 2 cols         |
| Desktop (`≥ 1024px`)    | Full sidebar with labels | Collapsible sidebar | 3 cols (Bento) |

- **CSS-only responsive** via Tailwind's `hidden md:block` and `lg:grid-cols-3` utilities
- **Zero layout shift** when transitioning between breakpoints
- **Sidebar collapse** animates smoothly via Framer Motion on desktop

---

## 🚢 Deployment (Vercel + Supabase)

### Deploy to Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit: SkillDeck v1.0"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" → Select your SkillDeck repo
   - Vercel auto-detects Next.js and configures the build

3. **Add Environment Variables**
   - In Vercel project settings → "Environment Variables"
   - Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Re-deploy to apply changes

4. **Deploy**
   - Vercel auto-deploys on `git push` to main
   - Your site is live at `https://your-project.vercel.app`

### Security Note

The current Supabase RLS policy (`courses_read_public`) allows anyone to read course data with no authentication. **This is fine for a demo**, but in production, enable **row-level security with auth**:

```sql
CREATE POLICY "courses_read_auth" ON courses
  FOR SELECT TO authenticated
  USING (true);
```

Then add a sign-in flow in your Next.js app to guard the dashboard.

---

| Criterion                            | Weight | Implementation                                                                                                                             | Key Files                                                                                                                               |
| ------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Data Architecture & Next.js RSC**  | 30%    | Course data fetched server-side; zero client waterfalls; `courses` state never touches client JS                                           | app/dashboard/page.tsx, components/bento/courses-list.tsx, lib/supabase/server.ts                                                       |
| **Framer Motion Proficiency**        | 30%    | Staggered entrance + spring physics; layoutId sidebar animations; animated progress bars; zero layout shifts                               | components/bento/BentoGrid.tsx, components/ui/GlowCard.tsx, components/ui/AnimatedProgressBar.tsx, components/layout/SidebarNavItem.tsx |
| **Code Quality & Types**             | 20%    | Full TypeScript coverage; Supabase auto-generated types; error boundaries; proper suspense fallbacks                                       | lib/supabase/types.ts, app/dashboard/error.tsx, components/bento/CourseSkeletonRow.tsx                                                  |
| **Visual Fidelity & Responsiveness** | 20%    | Dark mode Bento Grid; adaptive nav (sidebar → icons → bottom bar); CSS-only responsive; Tailwind v4 utilities; accessibility (ARIA labels) | app/globals.css, components/layout/Sidebar.tsx, components/layout/BottomNav.tsx, tailwind.config.ts                                     |

---

## 📝 License

This project is provided as-is for educational purposes. Feel free to use, modify, and build upon it.

---

Built with ❤️ by Tufail as part of a frontend internship challenge
