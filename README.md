# All Aboard Ohio – Dev Program Homepage

Public-facing homepage for the [All Aboard Ohio Dev Program](https://github.com/all-aboard-ohio).

## Running Locally

**Requirements:** Node.js 16+ (or Python 3 as an alternative — see below)

### Option A — Node.js (recommended)

```bash
npm start
```

Then open **http://localhost:3000** in your browser.

> The first run downloads `serve` automatically via `npx`; no separate install step needed.

### Option B — Python

```bash
python3 -m http.server 3000
```

Then open **http://localhost:3000** in your browser.

## Project Structure

```
aao_dev_homepage/
├── index.html   # Main homepage
├── styles.css   # Site styles
├── package.json # npm scripts (local dev server)
└── README.md
```
