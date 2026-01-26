import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const QuickSignals: QuartzComponent = ({}: QuartzComponentProps) => {
  return (
    <section class="quick-signals">
      <div class="signals-grid">
        <div class="signal-card">
          <h3 class="signal-title">My experience</h3>
          <p class="signal-content">
            Building production systems with focus on reliability and performance
          </p>
        </div>
        <div class="signal-card">
          <h3 class="signal-title">My focus</h3>
          <p class="signal-content">
            Distributed systems, backend development, and developer tooling
          </p>
        </div>
        <div class="signal-card">
          <h3 class="signal-title">My strengths</h3>
          <p class="signal-content">
            Problem solving, clear communication, and collaborative engineering
          </p>
        </div>
      </div>
    </section>
  )
}

QuickSignals.css = `
.quick-signals {
  padding: 2rem 0;
  margin: 2rem 0;
  border-top: 1px solid var(--lightgray);
  border-bottom: 1px solid var(--lightgray);
}

.signals-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.signal-card {
  text-align: center;
}

.signal-title {
  font-family: var(--headerFont);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.75rem;
}

.signal-content {
  font-size: 1rem;
  color: var(--darkgray);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .signals-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .signal-card {
    padding: 1rem 0;
    border-bottom: 1px solid var(--lightgray);
  }

  .signal-card:last-child {
    border-bottom: none;
  }
}
`

export default (() => QuickSignals) satisfies QuartzComponentConstructor
