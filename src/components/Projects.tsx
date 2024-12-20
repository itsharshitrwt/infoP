import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Ownspace',
    description: 'A full-featured Chat Application that allows real time messaging',
    image: 'https://static.vecteezy.com/system/resources/previews/014/664/394/non_2x/chat-bot-symbol-and-logo-icon-vector.jpg',
    github: 'https://github.com/itsharshitrwt/Ownspace',
    live: 'https://ownspace.vercel.app/'
  },
  {
    title: 'GreenPulse',
    description: 'Application designed for environmental protection, lets you tarck your carbon footprints live',
    image: 'https://png.pngtree.com/template/20190309/ourmid/pngtree-go-green-illustration-icon-image_64510.jpg',
    github: 'https://github.com/itsharshitrwt/GreenPulse-HackFrost',
    live: 'https://greenpulse-ashy.vercel.app/'
  },
  {
    title: 'Brief',
    description: 'Real-time youtube video to transcript converter',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/918/424/small/abstract-colorful-audio-wave-in-circle-logo-sign-symbol-icon-vector.jpg',
    github: 'https://github.com/itsharshitrwt/Brief',
    live: 'https://briefai.vercel.app/'
  },
  {
    title: 'GearVaue',
    description: 'App that uses Linear regression to predict your vehicles price',
    image: 'https://img.freepik.com/premium-vector/rent-car-logo-design-concept-vector-art-illustration_761413-36213.jpg?semt=ais_hybrid',
    github: 'https://github.com/itsharshitrwt/GearValue',
  },
  {
    title: 'GO-WeatherProject',
    description: 'A Weather based app made using golang',
    image: 'https://images-platform.99static.com//fCmzbJuxyBYJ9DwSuvzB1aAK5VQ=/0x0:1024x1024/fit-in/500x500/99designs-contests-attachments/148/148568/attachment_148568717',
    github: 'https://github.com/itsharshitrwt/goweatherproject',
  },
  {
    title: 'PranaPulse',
    description: 'Fitness App that lets you select yoga poses and keep tracks of your health',
    image: 'https://t3.ftcdn.net/jpg/03/89/30/64/360_F_389306425_zAsiEURL3pnvNC3gPotVFrz5whXzMsiB.jpg',
    live: 'https://pranapulse.vercel.app/'
  }
];

export function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-20 px-8 bg-[#121615]">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
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

