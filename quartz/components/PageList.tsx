import { FullSlug, isFolderPath, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date as DateComponent, getDate } from "./Date"
import { QuartzComponent, QuartzComponentProps } from "./types"
import { GlobalConfiguration } from "../cfg"

export type SortFn = (f1: QuartzPluginData, f2: QuartzPluginData) => number

// Parse YYYY, YYYY-MM, or YYYY-MM-DD format to Date
function parseYearMonth(dateStr: string): globalThis.Date | null {
  if (!dateStr) return null
  const parts = dateStr.split("-")
  if (parts.length >= 1) {
    const year = parseInt(parts[0])
    if (isNaN(year)) return null
    const month = parts.length >= 2 ? parseInt(parts[1]) - 1 : 0 // JS months are 0-indexed, default to January
    const day = parts.length >= 3 ? parseInt(parts[2]) : 1
    return new Date(year, month, day)
  }
  return null
}

export function byDateAndAlphabetical(cfg: GlobalConfiguration): SortFn {
  return (f1, f2) => {
    // Sort by date/alphabetical
    if (f1.dates && f2.dates) {
      // sort descending
      return getDate(cfg, f2)!.getTime() - getDate(cfg, f1)!.getTime()
    } else if (f1.dates && !f2.dates) {
      // prioritize files with dates
      return -1
    } else if (!f1.dates && f2.dates) {
      return 1
    }

    // otherwise, sort lexographically by title
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}

export function byExperienceDate(): SortFn {
  return (f1, f2) => {
    // Sort by startDate from frontmatter, descending (most recent first)
    const f1Start = parseYearMonth(f1.frontmatter?.startDate as string)
    const f2Start = parseYearMonth(f2.frontmatter?.startDate as string)

    if (f1Start && f2Start) {
      return f2Start.getTime() - f1Start.getTime()
    } else if (f1Start && !f2Start) {
      return -1
    } else if (!f1Start && f2Start) {
      return 1
    }

    // Fallback to title
    const f1Title = f1.frontmatter?.title?.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title?.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}

export function byDateAndAlphabeticalFolderFirst(cfg: GlobalConfiguration): SortFn {
  return (f1, f2) => {
    // Sort folders first
    const f1IsFolder = isFolderPath(f1.slug ?? "")
    const f2IsFolder = isFolderPath(f2.slug ?? "")
    if (f1IsFolder && !f2IsFolder) return -1
    if (!f1IsFolder && f2IsFolder) return 1

    // If both are folders or both are files, sort by date/alphabetical
    if (f1.dates && f2.dates) {
      // sort descending
      return getDate(cfg, f2)!.getTime() - getDate(cfg, f1)!.getTime()
    } else if (f1.dates && !f2.dates) {
      // prioritize files with dates
      return -1
    } else if (!f1.dates && f2.dates) {
      return 1
    }

    // otherwise, sort lexographically by title
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}

type Props = {
  limit?: number
  sort?: SortFn
} & QuartzComponentProps

export const PageList: QuartzComponent = ({ cfg, fileData, allFiles, limit, sort }: Props) => {
  const currentSlug = fileData.slug ?? ""
  const isExperienceFolder = currentSlug.startsWith("experience")

  // Use experience date sorting for experience folder
  const sorter = sort ?? (isExperienceFolder ? byExperienceDate() : byDateAndAlphabeticalFolderFirst(cfg))
  let list = allFiles.sort(sorter)
  if (limit) {
    list = list.slice(0, limit)
  }

  return (
    <ul class="section-ul">
      {list.map((page) => {
        const title = page.frontmatter?.title
        const tags = (page.frontmatter?.tags ?? []).slice().sort((a, b) => a.localeCompare(b))
        const pageSlug = page.slug ?? ""
        const isExperiencePage = pageSlug.startsWith("experience/") && !pageSlug.endsWith("/index")

        // For experience pages, show startDate - endDate and company/team
        const startDate = page.frontmatter?.startDate as string | undefined
        const endDate = (page.frontmatter?.endDate as string | undefined) ?? "Present"
        const company = page.frontmatter?.company as string | undefined
        const team = page.frontmatter?.team as string | undefined
        const description = page.frontmatter?.description as string | undefined

        return (
          <li class="section-li">
            <div class="section">
              <p class="meta">
                {isExperiencePage && startDate ? (
                  <span>{startDate} — {endDate}</span>
                ) : (
                  page.dates && <DateComponent date={getDate(cfg, page)!} locale={cfg.locale} />
                )}
              </p>
              <div class="desc">
                <h3>
                  <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                    {title}
                  </a>
                </h3>
                {isExperiencePage && (company || team) && (
                  <p class="item-description">
                    {company}{team && ` · ${team}`}
                  </p>
                )}
                {!isExperiencePage && description && (
                  <p class="item-description">{description}</p>
                )}
              </div>
              <ul class="tags">
                {tags.map((tag) => (
                  <li>
                    <a
                      class="internal tag-link"
                      href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
                    >
                      {tag}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

PageList.css = `
.section h3 {
  margin: 0;
}

.section > .tags {
  margin: 0;
}
`
