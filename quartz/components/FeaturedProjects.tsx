import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"

interface ProjectFrontmatter {
  title?: string
  featured?: boolean
  problem?: string
  solution?: string
  result?: string
  tags?: string[]
}

const FeaturedProjects: QuartzComponent = ({ allFiles, fileData }: QuartzComponentProps) => {
  const projects = allFiles
    .filter((file: QuartzPluginData) => {
      const slug = file.slug ?? ""
      const frontmatter = file.frontmatter as ProjectFrontmatter | undefined
      return slug.startsWith("projects/") && slug !== "projects/index" && frontmatter?.featured === true
    })
    .slice(0, 3)

  if (projects.length === 0) {
    return null
  }

  return (
    <section class="featured-projects">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        {projects.map((project: QuartzPluginData) => {
          const frontmatter = project.frontmatter as ProjectFrontmatter
          const title = frontmatter?.title ?? "Untitled Project"
          const problem = frontmatter?.problem ?? ""
          const solution = frontmatter?.solution ?? ""
          const result = frontmatter?.result ?? ""
          const tags = frontmatter?.tags ?? []

          return (
            <a href={resolveRelative(fileData.slug!, project.slug!)} class="project-card">
              <h3 class="project-title">{title}</h3>
              {problem && (
                <div class="project-detail">
                  <span class="detail-label">Problem:</span>
                  <span class="detail-text">{problem}</span>
                </div>
              )}
              {solution && (
                <div class="project-detail">
                  <span class="detail-label">Solution:</span>
                  <span class="detail-text">{solution}</span>
                </div>
              )}
              {result && (
                <div class="project-detail">
                  <span class="detail-label">Result:</span>
                  <span class="detail-text result">{result}</span>
                </div>
              )}
              {tags.length > 0 && (
                <div class="project-tags">
                  {tags.slice(0, 3).map((tag: string) => (
                    <span class="project-tag">{tag}</span>
                  ))}
                </div>
              )}
            </a>
          )
        })}
      </div>
      <div class="section-more">
        <a href={resolveRelative(fileData.slug!, "projects")}>View all projects →</a>
      </div>
    </section>
  )
}

FeaturedProjects.css = `
.featured-projects {
  padding: 3rem 0;
}

.section-title {
  font-family: var(--headerFont);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dark);
  margin: 0 0 1.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.project-card {
  display: block;
  padding: 1.5rem;
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.project-card:hover {
  border-color: var(--gray);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.project-title {
  font-family: var(--headerFont);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dark);
  margin: 0 0 1rem;
}

.project-detail {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.detail-label {
  color: var(--gray);
  font-weight: 500;
}

.detail-text {
  color: var(--darkgray);
  margin-left: 0.25rem;
}

.detail-text.result {
  color: var(--dark);
  font-weight: 500;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.project-tag {
  font-size: 0.75rem;
  color: var(--gray);
  background: var(--lightgray);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.section-more {
  margin-top: 1.5rem;
  text-align: center;
}

.section-more a {
  color: var(--secondary);
  text-decoration: none;
  font-size: 0.95rem;
}

.section-more a:hover {
  text-decoration: underline;
}
`

export default (() => FeaturedProjects) satisfies QuartzComponentConstructor
