
import { NextResponse } from "next/server"
import Parser from "rss-parser"

export const revalidate = 1800

const parser = new Parser({
  timeout: 10000,
  headers: {
    "User-Agent": "GreekRootAI-News/1.0",
  },
})

const feeds = [
  {
    name: "Google News",
    url: "https://news.google.com/rss/search?q=artificial+intelligence+AI+when%3A7d&hl=en-US&gl=US&ceid=US:en",
  },
  {
    name: "TechCrunch",
    url: "https://techcrunch.com/category/artificial-intelligence/feed/",
  },
]

function getCategory(title: string) {
  const text = title.toLowerCase()

  if (/agent|automation|workflow/.test(text)) return "AI Agents"
  if (/startup|funding|business|company/.test(text)) return "Startups"
  if (/research|science|study|discovery/.test(text)) return "Research"
  if (/model|gpt|claude|gemini|llm/.test(text)) return "AI Models"

  return "AI News"
}

export async function GET() {
  const results = await Promise.allSettled(
    feeds.map(async (feed) => {
      const parsed = await parser.parseURL(feed.url)

      return (parsed.items || []).map((item) => ({
        id: item.guid || item.link || item.title || "",
        title: item.title || "AI News Update",
        description:
          item.contentSnippet ||
          item.content ||
          "Read the original article for more details.",
        url: item.link || "",
        publishedAt: item.isoDate || item.pubDate || null,
        source: feed.name,
        category: getCategory(item.title || ""),
      }))
    })
  )

  const articles = results
    .filter(
      (
        result
      ): result is PromiseFulfilledResult<
        {
          id: string
          title: string
          description: string
          url: string
          publishedAt: string | null
          source: string
          category: string
        }[]
      > => result.status === "fulfilled"
    )
    .flatMap((result) => result.value)
    .filter((item) => item.title && item.url)
    .sort((a, b) => {
      const dateA = a.publishedAt
        ? new Date(a.publishedAt).getTime()
        : 0

      const dateB = b.publishedAt
        ? new Date(b.publishedAt).getTime()
        : 0

      return dateB - dateA
    })

  const uniqueArticles = Array.from(
    new Map(
      articles.map((article) => [
        article.url,
        article,
      ])
    ).values()
  )

  return NextResponse.json(
    {
      articles: uniqueArticles.slice(0, 40),
      updatedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control":
          "public, s-maxage=1800, stale-while-revalidate=3600",
      },
    }
  )
}