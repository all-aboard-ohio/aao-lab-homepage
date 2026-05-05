export const docs = [
  {
    id: 1,
    title: "Getting Started with GitHub Templates",
    excerpt:
      "Learn how to fork and use the official AAO project templates to jumpstart your contribution.",
    content: `# Getting Started with GitHub Templates

## Overview

All Aboard Ohio maintains a set of GitHub repository templates designed to give developers a head start on contributing to our tools. Each template includes:

- Pre-configured project structure
- README with project context and goals
- Issue templates for bugs, features, and questions
- GitHub Actions CI/CD pipeline stubs
- Contribution guidelines (CONTRIBUTING.md)
- Code of conduct (CODE_OF_CONDUCT.md)

## How to Use a Template

1. Visit the [All Aboard Ohio GitHub organization](https://github.com/all-aboard-ohio).
2. Browse the repositories marked with a **Template** badge.
3. Click **"Use this template"** → **"Create a new repository"**.
4. Name your repo, set visibility, and click **Create**.
5. Clone your new repository locally:

\`\`\`bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
\`\`\`

6. Follow the project-specific README for setup instructions.

## Submitting Your Work

When your feature or bug fix is ready, open a Pull Request against the upstream AAO repository. Our maintainers review all contributions within 5 business days.
`,
  },
  {
    id: 2,
    title: "Developer Resources & Tool Stack",
    excerpt:
      "An overview of the recommended tech stack, external APIs, and data sources used across AAO projects.",
    content: `# Developer Resources & Tool Stack

## Recommended Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite, Tailwind CSS |
| Backend | Node.js / FastAPI (Python) |
| Database | PostgreSQL / Supabase |
| Mapping | Mapbox GL JS / Leaflet |
| CI/CD | GitHub Actions |
| Hosting | Vercel / Railway |

## External Data Sources

- **ODOT Open Data** — Ohio Department of Transportation datasets (traffic counts, infrastructure).
- **US Bureau of Transportation Statistics** — National passenger rail ridership data.
- **US Census TIGER/Line** — Geospatial boundaries for counties, cities, and statistical areas.
- **OpenStreetMap** — Base map tiles and rail network geometry.
- **GovTrack / LegiScan** — Legislative tracking for state and federal rail bills.

## Environment Variables

All AAO projects use a \`.env.local\` file (gitignored) for secrets:

\`\`\`
VITE_MAPBOX_TOKEN=your_mapbox_token
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

Request API keys from the #dev-resources channel in the [AAO Slack](https://join.slack.com/t/all-aboard-ohio/shared_invite/zt-3wgj180pu-eWAJoGn4_6~y9YHR9Lq3qA).
`,
  },
  {
    id: 3,
    title: "Contributing Guidelines",
    excerpt:
      "How to open issues, submit pull requests, and follow the code review process for AAO projects.",
    content: `# Contributing Guidelines

## Code of Conduct

All contributors are expected to follow our [Code of Conduct](https://github.com/all-aboard-ohio). Be respectful, inclusive, and constructive.

## Opening an Issue

Before writing code, open a GitHub Issue to describe what you want to build or fix. Use the appropriate issue template:

- 🐛 **Bug Report** — Something is broken.
- ✨ **Feature Request** — A new capability you'd like to see.
- 📖 **Documentation** — Improvements to docs or READMEs.
- 💬 **Discussion** — General questions or ideas.

## Pull Request Process

1. **Branch naming**: \`feature/<short-description>\`, \`fix/<short-description>\`, \`docs/<short-description>\`
2. **Commit style**: Use [Conventional Commits](https://www.conventionalcommits.org/) — e.g., \`feat: add ridership chart component\`
3. **Tests**: Include unit tests for new logic. Use Vitest for React projects.
4. **PR description**: Link the related issue, describe what changed, and attach screenshots if UI is affected.
5. **Review**: At least one maintainer approval is required before merge.

## Branch Protection

The \`main\` branch is protected. All changes must come through a PR. Direct pushes are not permitted.
`,
  },
  {
    id: 4,
    title: "Academic & Capstone Project Guide",
    excerpt:
      "Resources for professors and students who want to use AAO challenges as course projects or capstone assignments.",
    content: `# Academic & Capstone Project Guide

## Using AAO Challenges in Your Classroom

All Aboard Ohio Developer Program challenges are designed to be real-world problems with meaningful civic impact — making them ideal for:

- **Capstone projects** (CS, Data Science, Urban Planning, Public Policy)
- **Senior design courses**
- **Hackathons and project fairs**
- **Independent study**

## How It Works

1. **Browse** the [Project Gallery](#projects) to find a challenge that fits your course learning objectives.
2. **Contact us** via the AAO Slack (#education channel) to register your class or project team.
3. **Fork** the relevant GitHub template repository.
4. **Build** — your team works on the project as a class assignment.
5. **Present** — demo your work to AAO stakeholders (optional but encouraged!).
6. **Publish** — with your permission, outstanding submissions may be incorporated into production.

## What Students Gain

- Real production experience with civic-impact software
- A portfolio piece with a public GitHub repo
- Mentorship from AAO maintainers and volunteer engineers
- Letters of recommendation available for top contributors

## For Professors

We're happy to co-design a semester-long project rubric tailored to your course. Reach out to us at **dev@allaboardohio.org** or via Slack.
`,
  },
  {
    id: 5,
    title: "Architecture & Design Patterns",
    excerpt:
      "Recommended architecture patterns, component design principles, and state management approaches.",
    content: `# Architecture & Design Patterns

## Frontend Architecture

AAO React projects follow a **feature-based folder structure**:

\`\`\`
src/
  components/     # Shared UI components
  features/       # Feature-specific modules (each with own components, hooks, utils)
  data/           # Static data, constants, mock fixtures
  hooks/          # Shared custom React hooks
  utils/          # Pure utility functions
  App.jsx
  main.jsx
\`\`\`

## Component Design Principles

- **Small and focused**: Each component does one thing well.
- **Props over global state**: Prefer prop drilling for simple trees; use Context or Zustand only when state is truly global.
- **Accessible by default**: Use semantic HTML (\`<nav>\`, \`<main>\`, \`<section>\`, \`<article>\`) and ARIA attributes where needed.
- **Responsive**: Mobile-first Tailwind classes (\`sm:\`, \`md:\`, \`lg:\` breakpoints).

## State Management

| Use Case | Recommended Approach |
|---|---|
| UI state (modals, toggles) | \`useState\` |
| Async server data | \`useEffect\` + \`useState\` or React Query |
| Cross-component state | React Context |
| Complex global state | Zustand |

## API Design

Backend services should follow REST conventions. Use \`/api/v1/\` prefixes and return consistent JSON shapes:

\`\`\`json
{
  "data": { ... },
  "meta": { "page": 1, "total": 100 },
  "error": null
}
\`\`\`
`,
  },
];
