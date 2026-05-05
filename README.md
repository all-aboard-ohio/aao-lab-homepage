# All Aboard Ohio Developer Program — Landing Page

Public-facing landing page for [dev.allaboardohio.org](https://dev.allaboardohio.org), built with **React + Vite + Tailwind CSS**.

## About

This site serves as the home base for the All Aboard Ohio Developer Program — a volunteer-driven initiative building open-source tools that advocate for passenger rail in Ohio. The page introduces the project suite, explains why civic tech matters, and recruits developers, students, and professors to contribute.

## Sections

| Section | Description |
|---|---|
| **Hero** | Vision statement and primary calls to action |
| **Project Gallery** | Cards for each app (Economic Impact Calculator, Route Mapper, News Bot, Member Dashboard) with status badges |
| **Why This Matters** | "Code is Advocacy" pitch for program managers, government officials, the public, and developers |
| **Community & Academic Outreach** | Slack invite link + student/professor callouts |
| **Dev Docs** | Searchable, react-markdown-rendered documentation on GitHub templates, tool stack, contributing guidelines, and architecture |
| **Footer** | Links to allaboardohio.org and project disclaimer |

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** (custom color palette + typography)
- **react-markdown** + **remark-gfm** — renders documentation from JS content objects
- **lucide-react** — icons throughout the UI
- **@tailwindcss/typography** — prose styling for rendered markdown

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
  components/       # UI sections (Header, Hero, ProjectGallery, etc.)
  data/
    projects.js     # Project tile definitions and status colors
    docs.js         # Documentation content (title, excerpt, markdown body)
  App.jsx
  main.jsx
  index.css
```

## Contributing

Open an issue or pull request. Join the [AAO Slack](https://join.slack.com/t/all-aboard-ohio/shared_invite/zt-3wgj180pu-eWAJoGn4_6~y9YHR9Lq3qA) (#dev-resources) for coordination.

---

*Part of the All Aboard Ohio Developer Program. Developer projects are volunteer-contributed and do not necessarily represent the official viewpoints or policy positions of All Aboard Ohio.*

