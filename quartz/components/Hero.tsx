import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Hero: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const title = cfg?.pageTitle ?? "Patrick Torbett"

  return (
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">{title}</h1>
        <p class="hero-role">Software Engineer</p>
        <p class="hero-tagline">
          I build reliable, scalable systems and enjoy solving complex technical challenges.
        </p>
        <div class="hero-ctas">
          <a href={`${baseDir}projects`} class="cta-primary">View Projects</a>
          <a href={`${baseDir}about`} class="cta-secondary">About Me</a>
        </div>
      </div>
    </section>
  )
}

Hero.css = `
.hero {
  padding: 4rem 0 3rem;
  text-align: center;
}

.hero-content {
  max-width: 650px;
  margin: 0 auto;
}

.hero-title {
  font-family: var(--headerFont);
  font-size: 3rem;
  font-weight: 700;
  color: var(--dark);
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
}

.hero-role {
  font-size: 1.25rem;
  color: var(--secondary);
  margin: 0 0 1.5rem;
  font-weight: 500;
}

.hero-tagline {
  font-size: 1.125rem;
  color: var(--darkgray);
  line-height: 1.7;
  margin: 0 0 2rem;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary,
.cta-secondary {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.cta-primary {
  background: var(--dark);
  color: var(--light);
}

.cta-primary:hover {
  background: var(--darkgray);
}

.cta-secondary {
  background: transparent;
  color: var(--dark);
  border: 1px solid var(--gray);
}

.cta-secondary:hover {
  background: var(--lightgray);
  border-color: var(--darkgray);
}

@media (max-width: 600px) {
  .hero {
    padding: 2rem 0;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-role {
    font-size: 1.1rem;
  }

  .hero-tagline {
    font-size: 1rem;
  }
}
`

export default (() => Hero) satisfies QuartzComponentConstructor
