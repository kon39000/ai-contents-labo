import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// ブログ記事取得用のクエリ
export const blogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    author->{
      name,
      image
    },
    categories[]->{
      title
    },
    "readTime": round(length(pt::text(body)) / 5 / 200 )
  }
`

export const blogPostQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    body,
    author->{
      name,
      bio,
      image
    },
    categories[]->{
      title
    },
    "readTime": round(length(pt::text(body)) / 5 / 200 )
  }
`

export const categoriesQuery = `
  *[_type == "category"] {
    _id,
    title,
    description,
    "postCount": count(*[_type == "blogPost" && references(^._id)])
  }
`