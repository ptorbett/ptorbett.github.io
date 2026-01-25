import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Patrick Torbett",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: null,
    locale: "en-US",
    baseUrl: "ptorbett.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "published",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Bitter",
        body: "Source Serif 4",
        code: "Courier Prime",
      },
      colors: {
        lightMode: {
          light: "#F5EDD8",           // Aged paper
          lightgray: "#E6D9BC",       // Tan/khaki
          gray: "#8B7355",            // Warm brown
          darkgray: "#5C4033",        // Medium brown
          dark: "#2C1810",            // Dark brown
          secondary: "#1B4D2E",       // Forest green
          tertiary: "#BE2633",        // Scout red
          highlight: "rgba(27, 77, 46, 0.12)",
          textHighlight: "#F5D77A",   // Gold highlight
        },
        darkMode: {
          light: "#2C2416",           // Dark paper
          lightgray: "#3D3225",       // Dark tan
          gray: "#8B7355",            // Warm brown
          darkgray: "#D4C4A8",        // Light tan
          dark: "#F5EDD8",            // Cream
          secondary: "#6B9E78",       // Muted green
          tertiary: "#D4574A",        // Muted red
          highlight: "rgba(107, 158, 120, 0.15)",
          textHighlight: "#5C4033",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
