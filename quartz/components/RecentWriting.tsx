import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { byDateAndAlphabetical } from "./PageList"

interface WritingFrontmatter {
  title?: string
  description?: string
  date?: string
  tags?: string[]
}

const RecentWriting: QuartzComponent = ({ allFiles, fileData, cfg }: QuartzComponentProps) => {
  const posts = allFiles
    .filter((file: QuartzPluginData) => {
      const slug = file.slug ?? ""
      return slug.startsWith("writing/") && slug !== "writing/index"
    })
    .sort(byDateAndAlphabetical(cfg))
    .slice(0, 3)

  if (posts.length === 0) {
    return null
  }

  return (
    <section class="recent-writing">
      <h2 class="section-title">Recent Writing</h2>
      <div class="writing-list">
        {posts.map((post: QuartzPluginData) => {
          const frontmatter = post.frontmatter as WritingFrontmatter
          const title = frontmatter?.title ?? "Untitled"
          const description = frontmatter?.description ?? ""
          const date = getDate(cfg, post)

          return (
            <a href={resolveRelative(fileData.slug!, post.slug!)} class="writing-item">
              <div class="writing-header">
                <h3 class="writing-title">{title}</h3>
                {date && (
                  <span class="writing-date">
                    <Date date={date} locale={cfg.locale} />
                  </span>
                )}
              </div>
              {description && <p class="writing-description">{description}</p>}
            </a>
          )
        })}
      </div>
      <div class="section-more">
        <a href={resolveRelative(fileData.slug!, "writing")}>View all posts →</a>
      </div>
    </section>
  )
}

RecentWriting.css = `
.recent-writing {
  padding: 3rem 0;
  border-top: 1px solid var(--lightgray);
}

.writing-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.writing-item {
  display: block;
  padding: 1.25rem;
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.writing-item:hover {
  border-color: var(--gray);
}

.writing-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
}

.writing-title {
  font-family: var(--headerFont);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark);
  margin: 0;
}

.writing-date {
  font-size: 0.85rem;
  color: var(--gray);
  white-space: nowrap;
}

.writing-description {
  font-size: 0.95rem;
  color: var(--darkgray);
  line-height: 1.6;
  margin: 0.5rem 0 0;
}
`

export default (() => RecentWriting) satisfies QuartzComponentConstructor
