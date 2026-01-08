import { client } from '../../sanity/client'
import type { Project, SiteSettings } from '@/types'
import { createImageUrlBuilder } from '@sanity/image-url'

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getProjects(): Promise<Project[]> {
  try {
    const query = `*[_type == "project"] | order(order asc, _createdAt desc) {
      _id,
      title,
      slug,
      description,
      coverImage {
        asset->{
          _ref,
          url
        },
        alt
      },
      category,
      year,
      featured,
      order
    }`

    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const query = `*[_type == "project" && featured == true] | order(order asc, _createdAt desc) {
      _id,
      title,
      slug,
      description,
      coverImage {
        asset->{
          _ref,
          url
        },
        alt
      },
      category,
      year
    }`

    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const query = `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      coverImage {
        asset->{
          _ref,
          url
        },
        alt
      },
      images[] {
        asset->{
          _ref,
          url
        },
        alt,
        caption
      },
      category,
      year,
      client,
      role,
      content,
      tags
    }`

    return await client.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching project by slug:', error)
    return null
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const query = `*[_type == "siteSettings"][0] {
      title,
      description,
      authorName,
      authorBio,
      email,
      socialLinks
    }`

    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}
