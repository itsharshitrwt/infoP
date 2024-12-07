
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Ownspace',
    description: 'A full-featured e-commerce solution with real-time inventory management',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'GreenPulse',
    description: 'Collaborative task management tool with real-time updates',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Brief',
    description: 'Real-time weather monitoring with interactive maps',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

export function Projects() {
  return (
    <section className="py-20 px-8">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        My <span className='bg-green-500'>Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
                >
                  <Github className="w-5 h-5" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}