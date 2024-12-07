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
  },
  {
    title: 'SnapForge',
    description: 'Photo editing app with AI enhancements for creative professionals',
    image: 'https://images.unsplash.com/photo-1545239705-59dc1f0c1d52',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Trackify',
    description: 'Expense tracking app with advanced visualization and analytics',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'FitFlex',
    description: 'Fitness planner with custom workout routines and tracking',
    image: 'https://images.unsplash.com/photo-1515808845130-74c5dc882c77',
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

export function Projects() {
  return (
    <section className="py-20 px-8 bg-black">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-12">
        My <span className="bg-green-500 text-black px-2">Projects</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-green-500 rounded-xl shadow-lg overflow-hidden transform hover:-rotate-3 hover:scale-105 transition-transform duration-500"
            style={{ width: '95%', margin: 'auto' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover brightness-75 hover:brightness-100 transition-all duration-500"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-black mb-2">
                {project.title}
              </h3>
              <p className="text-gray-800 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-black hover:text-white"
                >
                  <Github className="w-5 h-5" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-black hover:text-white"
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
