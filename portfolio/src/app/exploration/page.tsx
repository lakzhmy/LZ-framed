import { getProjects } from '@/lib/sanity'
import ProjectCard from '@/components/ProjectCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exploration - LAKZHMY',
  description: 'Design explorations and experimental work',
}

export const revalidate = 60

export default async function ExplorationPage() {
  const projects = await getProjects()

  // Filter for exploration/experimental projects if you add a category
  const explorationProjects = projects.filter(
    (p) => p.category === 'exploration' || p.category === 'experimental'
  )

  return (
    <main className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Exploration
          </h1>
          <p className="text-lg font-light text-gray-500 max-w-2xl">
            Experimental projects and creative explorations beyond client work.
          </p>
        </div>

        {explorationProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {explorationProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 font-light">
              No exploration projects yet. Add projects with category &quot;exploration&quot; through the{' '}
              <a href="/studio" className="underline hover:opacity-70">
                CMS
              </a>
              .
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
