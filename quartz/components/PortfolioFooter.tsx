import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const PortfolioFooter: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const year = new Date().getFullYear()
  const title = cfg?.pageTitle ?? "Patrick Torbett"

  return (
    <footer class="portfolio-footer">
      <div class="footer-content">
        <p class="footer-text">
          &copy; {year} {title}
        </p>
        <div class="footer-links">
          <a href="https://github.com/ptorbett" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span class="separator">·</span>
          <a href="https://linkedin.com/in/ptorbett" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

PortfolioFooter.css = `
.portfolio-footer {
  margin-top: 4rem;
  padding: 2rem 0;
  border-top: 1px solid var(--lightgray);
}

.footer-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-text {
  color: var(--gray);
  font-size: 0.875rem;
  margin: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links a {
  color: var(--gray);
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--dark);
}

.footer-links .separator {
  color: var(--lightgray);
}

@media (max-width: 600px) {
  .footer-content {
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
}
`

export default (() => PortfolioFooter) satisfies QuartzComponentConstructor
