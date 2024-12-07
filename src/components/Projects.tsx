import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Ownspace',
    description: 'A full-featured e-commerce solution with real-time inventory management',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    github: 'https://github.com/itsharshitrwt/Ownspace',
    live: 'https://ownspace.vercel.app/'
  },
  {
    title: 'GreenPulse',
    description: 'Collaborative task management tool with real-time updates',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d',
    github: 'https://github.com/itsharshitrwt/GreenPulse-HackFrost',
    live: 'https://greenpulse-ashy.vercel.app/'
  },
  {
    title: 'Brief',
    description: 'Real-time weather monitoring with interactive maps',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    github: 'https://github.com/itsharshitrwt/Brief',
    live: 'https://briefai.vercel.app/'
  },
  {
    title: 'GearVaue',
    description: 'Expense tracking app with advanced visualization and analytics',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
    github: 'https://github.com/itsharshitrwt/GearValue',
  },
  {
    title: 'GO-WeatherProject',
    description: 'Photo editing app with AI enhancements for creative professionals',
    image: 'https://images.unsplash.com/photo-1545239705-59dc1f0c1d52',
    github: 'https://github.com/itsharshitrwt/goweatherproject',
  },
  {
    title: 'PranaPulse',
    description: 'Fitness planner with custom workout routines and tracking',
    image: 'https://images.unsplash.com/photo-1515808845130-74c5dc882c77',
    live: 'https://pranapulse.vercel.app/'
  }
];

export function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-20 px-8 bg-[#121615]">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-12">
        My <span className="bg-green-500 text-black px-2">Projects</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 border-4 border-green-500 mx-auto group"
            style={{ width: '250px', height: '250px' }} // Set circular dimensions
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl brightness-75 group-hover:brightness-50 transition-all duration-500"
            />
            {/* Hidden box that appears on hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 px-4">{project.description}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-green-500 hover:text-white"
                >
                  <Github className="w-5 h-5" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-green-500 hover:text-white"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "View More Projects" Section */}
      <div className="text-center mt-8">
        <button
          onClick={() => setShowMore(!showMore)}
          className="inline-flex items-center gap-2 text-green-500 hover:text-white font-bold text-lg"
        >
          {showMore ? (
            <>
              <ChevronUp className="w-6 h-6" /> Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-6 h-6" /> View More Projects
            </>
          )}
        </button>
      </div>

      {showMore && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.slice(3).map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 border-4 border-transparent mx-auto group"
              style={{ width: '250px', height: '250px' }} // Set circular dimensions for the additional projects
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl brightness-75 group-hover:brightness-50 transition-all duration-500"
              />
              {/* Hidden box that appears on hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 px-4">{project.description}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-green-500 hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-green-500 hover:text-white"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

