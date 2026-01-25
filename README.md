# Patrick Torbett - Personal Portfolio

A professional portfolio website built with [Quartz v4](https://quartz.jzhao.xyz/), deployed to GitHub Pages.

## Local Development

### Prerequisites

- Node.js 22 or higher
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npx quartz build --serve
```

The site will be available at `http://localhost:8080`.

### Building

```bash
# Build for production
npx quartz build
```

Output is generated in the `public/` directory.

## Content Management

### Adding a New Project

Create a new file in `content/projects/`:

```markdown
---
title: Project Name
date: 2024-01-15
featured: true
problem: One-sentence problem statement
solution: One-sentence solution description
result: Quantified outcome
tags:
  - tag1
  - tag2
---

# Project Name

Full project description here...
```

Set `featured: true` to display on the homepage.

### Adding a Blog Post

Create a new file in `content/writing/`:

```markdown
---
title: Post Title
description: Hook sentence for previews
date: 2024-01-20
tags:
  - topic
draft: false
---

# Post Title

Post content here...
```

Set `draft: true` to hide from the site.

### Updating the About Page

Edit `content/about.md` directly.

## Customization

### Colors and Fonts

Edit `quartz.config.ts`:

- `theme.typography` - Header, body, and code fonts
- `theme.colors.lightMode` / `theme.colors.darkMode` - Color palette

### Components

Custom components are in `quartz/components/`:

| Component | Purpose |
|-----------|---------|
| `PortfolioHeader.tsx` | Navigation header |
| `PortfolioFooter.tsx` | Footer with links |
| `Hero.tsx` | Homepage hero section |
| `QuickSignals.tsx` | Experience/Focus/Strengths grid |
| `FeaturedProjects.tsx` | Featured project cards |
| `RecentWriting.tsx` | Recent blog posts |
| `AboutSection.tsx` | Brief about text |
| `ContactCTA.tsx` | Contact links |

### Styles

- `quartz/styles/custom.scss` - Portfolio-specific styles
- Component CSS is embedded in each `.tsx` file

## Deployment

The site automatically deploys to GitHub Pages when pushing to `main`.

### Manual Deployment

1. Go to repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch

The workflow in `.github/workflows/deploy.yml` handles the build and deployment.

## Project Structure

```
├── content/
│   ├── index.md              # Homepage
│   ├── about.md              # About page
│   ├── projects/
│   │   ├── index.md          # Projects listing
│   │   └── *.md              # Individual projects
│   └── writing/
│       ├── index.md          # Blog listing
│       └── *.md              # Blog posts
├── quartz/
│   ├── components/           # Custom React components
│   └── styles/
│       └── custom.scss       # Custom styles
├── quartz.config.ts          # Site configuration
├── quartz.layout.ts          # Page layouts
└── .github/workflows/
    └── deploy.yml            # GitHub Pages deployment
```

## License

Content is copyright Patrick Torbett. The Quartz framework is MIT licensed.
