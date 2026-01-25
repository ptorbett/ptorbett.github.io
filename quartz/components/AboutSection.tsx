import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const AboutSection: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <section class="about-section">
      <h2 class="section-title">About</h2>
      <div class="about-content">
        <p>
          I'm a software engineer passionate about building systems that are reliable,
          maintainable, and a joy to work with. I believe in writing clear code,
          thoughtful documentation, and making pragmatic engineering decisions.
        </p>
        <p>
          When I'm not coding, you can find me reading technical blogs,
          contributing to open source, or exploring new programming languages and tools.
        </p>
      </div>
      <a href={`${baseDir}about`} class="about-link">Learn more about me →</a>
    </section>
  )
}

AboutSection.css = `
.about-section {
  padding: 3rem 0;
  border-top: 1px solid var(--lightgray);
}

.about-content {
  max-width: 650px;
}

.about-content p {
  font-size: 1rem;
  color: var(--darkgray);
  line-height: 1.8;
  margin: 0 0 1rem;
}

.about-content p:last-child {
  margin-bottom: 1.5rem;
}

.about-link {
  color: var(--secondary);
  text-decoration: none;
  font-size: 0.95rem;
}

.about-link:hover {
  text-decoration: underline;
}
`

export default (() => AboutSection) satisfies QuartzComponentConstructor
