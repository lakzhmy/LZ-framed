import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types'
import { urlFor } from '@/lib/sanity'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = project.coverImage
    ? urlFor(project.coverImage.asset).width(800).height(600).url()
    : '/placeholder.jpg'

  return (
    <Link
      href={`/project/${project.slug.current}`}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
        {project.coverImage && (
          <Image
            src={imageUrl}
            alt={project.coverImage.alt || project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-light tracking-tight">{project.title}</h3>
        {project.category && (
          <p className="text-sm text-gray-500 font-light">{project.category}</p>
        )}
        {project.description && (
          <p className="text-sm text-gray-600 font-light line-clamp-2">
            {project.description}
          </p>
        )}
      </div>
    </Link>
  )
}
