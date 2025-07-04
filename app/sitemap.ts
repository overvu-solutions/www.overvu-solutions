import { MetadataRoute } from 'next'
import { getSortedPostsData } from '../lib/blogs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://prefixtree.xyz'
  
  // Get all blog posts
  const posts = getSortedPostsData()
  
  // Create blog post URLs
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return [...staticPages, ...blogPosts]
}
