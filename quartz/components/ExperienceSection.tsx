import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"

interface ExperienceFrontmatter {
  title?: string
  company?: string
  location?: string
  startDate?: string
  endDate?: string
  highlights?: string[]
  featured?: boolean
}

const ExperienceSection: QuartzComponent = ({ allFiles, fileData }: QuartzComponentProps) => {
  const experiences = allFiles
    .filter((file: QuartzPluginData) => {
      const slug = file.slug ?? ""
      return slug.startsWith("experience/") && slug !== "experience/index"
    })
    .sort((a: QuartzPluginData, b: QuartzPluginData) => {
      // Sort by start date descending (most recent first)
      const aDate = (a.frontmatter as ExperienceFrontmatter)?.startDate ?? ""
      const bDate = (b.frontmatter as ExperienceFrontmatter)?.startDate ?? ""
      return bDate.localeCompare(aDate)
    })
    .slice(0, 4)

  if (experiences.length === 0) {
    return null
  }

  return (
    <section class="experience-section">
      <h2 class="section-title">Experience</h2>
      <div class="experience-timeline">
        {experiences.map((exp: QuartzPluginData) => {
          const frontmatter = exp.frontmatter as ExperienceFrontmatter
          const title = frontmatter?.title ?? "Role"
          const company = frontmatter?.company ?? ""
          const location = frontmatter?.location ?? ""
          const startDate = frontmatter?.startDate ?? ""
          const endDate = frontmatter?.endDate ?? "Present"
          const highlights = frontmatter?.highlights ?? []

          return (
            <a href={resolveRelative(fileData.slug!, exp.slug!)} class="experience-card">
              <div class="experience-marker"></div>
              <div class="experience-content">
                <div class="experience-header">
                  <h3 class="experience-title">{title}</h3>
                  <span class="experience-dates">{startDate} — {endDate}</span>
                </div>
                <div class="experience-company">
                  {company}
                  {location && <span class="experience-location"> · {location}</span>}
                </div>
                {highlights.length > 0 && (
                  <ul class="experience-highlights">
                    {highlights.slice(0, 2).map((highlight: string) => (
                      <li>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </a>
          )
        })}
      </div>
      <div class="section-more">
        <a href={resolveRelative(fileData.slug!, "experience")}>View full experience →</a>
      </div>
    </section>
  )
}

ExperienceSection.css = `
.experience-section {
  padding: 3rem 0;
}

.experience-timeline {
  position: relative;
  padding-left: 1.5rem;
}

/* Timeline line */
.experience-timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: linear-gradient(
    180deg,
    var(--secondary) 0%,
    var(--lightgray) 100%
  );
}

.experience-card {
  display: block;
  position: relative;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.experience-card:last-child {
  margin-bottom: 0;
}

.experience-card:hover {
  border-color: var(--gray);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Timeline marker dot */
.experience-marker {
  position: absolute;
  left: -1.5rem;
  top: 1.5rem;
  width: 10px;
  height: 10px;
  background: var(--secondary);
  border: 2px solid var(--light);
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 2px var(--secondary);
}

.experience-card:hover .experience-marker {
  background: var(--tertiary);
  box-shadow: 0 0 0 2px var(--tertiary);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.experience-title {
  font-family: var(--headerFont);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark);
  margin: 0;
}

.experience-dates {
  font-size: 0.8rem;
  color: var(--gray);
  white-space: nowrap;
}

.experience-company {
  font-size: 0.95rem;
  color: var(--secondary);
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.experience-location {
  color: var(--gray);
  font-weight: 400;
}

.experience-highlights {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.875rem;
  color: var(--darkgray);
  line-height: 1.6;
}

.experience-highlights li {
  margin-bottom: 0.25rem;
}

.experience-highlights li:last-child {
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .experience-header {
    flex-direction: column;
    gap: 0.25rem;
  }

  .experience-dates {
    font-size: 0.75rem;
  }
}
`

export default (() => ExperienceSection) satisfies QuartzComponentConstructor
