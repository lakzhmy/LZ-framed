export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  coverImage?: {
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }
  images?: Array<{
    asset: {
      _ref: string
      url: string
    }
    alt?: string
    caption?: string
  }>
  category?: string
  year?: number
  client?: string
  role?: string
  content?: any[]
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
