import { getProjectBySlug, getProjects } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'
import Link from 'next/link'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = await getProjects()

  // Return empty array if no projects (prevents build errors)
  if (!projects || projects.length === 0) {
    return []
  }

  return projects.map((project) => ({
    slug: project.slug.current,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - LAKZHMY`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const coverImageUrl = project.coverImage
    ? urlFor(project.coverImage.asset).width(1600).height(900).url()
    : null

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Image */}
      {coverImageUrl && (
        <section className="w-full h-[60vh] relative bg-gray-100">
          <Image
            src={coverImageUrl}
            alt={project.coverImage?.alt || project.title}
            fill
            className="object-cover"
            priority
          />
        </section>
      )}

      {/* Project Header */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/works"
          className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors mb-8 inline-block"
        >
          ← Back to works
        </Link>

        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-8 text-sm font-light border-b border-gray-200 pb-8 mb-8">
          {project.year && (
            <div>
              <p className="text-gray-500 mb-1">Year</p>
              <p>{project.year}</p>
            </div>
          )}
          {project.client && (
            <div>
              <p className="text-gray-500 mb-1">Client</p>
              <p>{project.client}</p>
            </div>
          )}
          {project.role && (
            <div>
              <p className="text-gray-500 mb-1">Role</p>
              <p>{project.role}</p>
            </div>
          )}
          {project.category && (
            <div>
              <p className="text-gray-500 mb-1">Category</p>
              <p>{project.category}</p>
            </div>
          )}
        </div>

        <div className="prose prose-lg max-w-none font-light">
          <p className="text-xl leading-relaxed text-gray-700">
            {project.description}
          </p>

          {project.content && (
            <div className="mt-8">
              <PortableText value={project.content} />
            </div>
          )}
        </div>

        {project.tags && project.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-sm font-light rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Project Images Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="space-y-12">
            {project.images.map((image, index) => {
              const imageUrl = urlFor(image.asset).width(1600).url()
              return (
                <div key={index} className="space-y-4">
                  <div className="relative w-full aspect-video bg-gray-100">
                    <Image
                      src={imageUrl}
                      alt={image.alt || `${project.title} image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {image.caption && (
                    <p className="text-sm font-light text-gray-500 text-center">
                      {image.caption}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}
    </main>
  )
}
