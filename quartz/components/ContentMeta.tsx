import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

interface ExperienceFrontmatter {
  company?: string
  location?: string
  startDate?: string
  endDate?: string
  team?: string
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text
    const slug = fileData.slug ?? ""
    const frontmatter = fileData.frontmatter as ExperienceFrontmatter | undefined

    // Check if this is an experience page (but not the index)
    const isExperiencePage = slug.startsWith("experience/") && slug !== "experience/index"

    if (text) {
      // Experience page: show company, location, date range
      if (isExperiencePage && frontmatter) {
        const company = frontmatter.company
        const team = frontmatter.team
        const location = frontmatter.location
        const startDate = frontmatter.startDate
        const endDate = frontmatter.endDate ?? "Present"

        return (
          <div class={classNames(displayClass, "content-meta", "experience-meta")}>
            {company && (
              <p class="experience-company-line">
                <span class="experience-company">{company}</span>
                {team && <span class="experience-team"> · {team}</span>}
              </p>
            )}
            <p class="experience-details">
              {location && <span class="experience-location">{location}</span>}
              {location && startDate && <span class="experience-separator"> · </span>}
              {startDate && (
                <span class="experience-dates">{startDate} — {endDate}</span>
              )}
            </p>
          </div>
        )
      }

      // Regular page: show date and reading time
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
