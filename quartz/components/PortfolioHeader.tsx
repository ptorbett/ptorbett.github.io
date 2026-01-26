import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PortfolioHeader: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? "Patrick Torbett"
  const baseDir = pathToRoot(fileData.slug!)
  // Ensure baseDir ends with / for proper path joining
  const base = baseDir === "." ? "./" : baseDir.endsWith("/") ? baseDir : baseDir + "/"

  return (
    <header class={classNames(displayClass, "portfolio-header")}>
      <div class="header-content">
        <a href={base} class="site-title">{title}</a>
        <nav class="header-nav">
          <a href={`${base}about`} class="nav-link">About</a>
          <a href={`${base}experience`} class="nav-link">Experience</a>
          <a href={`${base}writing`} class="nav-link">Writing</a>
          <a href={`${base}resume.pdf`} class="nav-link" target="_blank" rel="noopener">Resume</a>
          <a href="https://github.com/ptorbett" class="nav-link external" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ptorbett" class="nav-link external" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
    </header>
  )
}

PortfolioHeader.css = `
.portfolio-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: transparent;
  border-bottom: none;
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.header-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.site-title {
  font-family: var(--headerFont);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dark);
  text-decoration: none;
}

.site-title:hover {
  color: var(--secondary);
}

.header-nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
}

.nav-link {
  font-size: 0.9rem;
  color: var(--darkgray);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--dark);
}

.nav-link.external::after {
  content: "";
  display: inline-block;
  width: 0.65rem;
  height: 0.65rem;
  margin-left: 0.25rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/%3E%3Cpolyline points='15,3 21,3 21,9'/%3E%3Cline x1='10' y1='14' x2='21' y2='3'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
}

@media (max-width: 600px) {
  .header-content {
    justify-content: center;
    text-align: center;
  }

  .header-nav {
    justify-content: center;
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.85rem;
  }
}
`

export default (() => PortfolioHeader) satisfies QuartzComponentConstructor
