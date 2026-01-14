import fs from 'fs'
import path from 'path'
import type { Project, SiteSettings } from '@/types'

const contentDirectory = path.join(process.cwd(), 'content')
const projectsDirectory = path.join(contentDirectory, 'projects')

export async function getProjects(): Promise<Project[]> {
  try {
    const fileNames = fs.readdirSync(projectsDirectory)
    const projects = fileNames
      .filter((fileName) => fileName.endsWith('.json'))
      .map((fileName) => {
        const filePath = path.join(projectsDirectory, fileName)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(fileContents) as Project
      })

    // Sort by order (ascending) or creation order
    return projects.sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order
      }
      return 0
    })
  } catch (error) {
    console.error('Error reading projects:', error)
    return []
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const allProjects = await getProjects()
    return allProjects.filter((project) => project.featured === true)
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(projectsDirectory, `${slug}.json`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents) as Project
  } catch (error) {
    console.error('Error fetching project by slug:', error)
    return null
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const filePath = path.join(contentDirectory, 'settings.json')

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents) as SiteSettings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}
