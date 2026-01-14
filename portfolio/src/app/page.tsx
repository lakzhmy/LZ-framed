import { getFeaturedProjects, getSiteSettings } from '@/lib/content'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'

export default async function Home() {
  const [projects, settings] = await Promise.all([
    getFeaturedProjects(),
    getSiteSettings(),
  ])

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            {settings?.authorName || 'LAKZHMY'}
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 mb-8">
            {settings?.authorBio || 'Industrial Designer'}
          </p>
          <p className="text-lg font-light text-gray-500 max-w-2xl">
            {settings?.description ||
              'A meticulously crafted minimal portfolio designed for the modern creator.'}
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      {projects.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light tracking-tight">
              Featured Works
            </h2>
            <Link
              href="/works"
              className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="border-t border-gray-200 pt-12">
          <p className="text-sm font-light text-gray-500 mb-4">Get in touch</p>
          {settings?.email && (
            <a
              href={`mailto:${settings.email}`}
              className="text-2xl font-light hover:opacity-70 transition-opacity"
            >
              {settings.email}
            </a>
          )}
        </div>
      </section>
    </main>
  )
}
