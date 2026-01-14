export interface Project {
  _id: string
  title: string
  slug: string
  description: string
  coverImage?: string
  images?: Array<{
    url: string
    alt?: string
    caption?: string
  }>
  category?: string
  year?: number
  client?: string
  role?: string
  content?: string
  tags?: string[]
  featured?: boolean
  order?: number
}

export interface SiteSettings {
  title: string
  description: string
  authorName: string
  authorBio: string
  email: string
  socialLinks?: {
    linkedin?: string
    behance?: string
    dribbble?: string
    instagram?: string
  }
}
