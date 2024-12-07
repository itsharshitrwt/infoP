
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Coffee } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable code is my passion'
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user experiences'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Web Performance',
    description: 'Optimizing for the best possible user experience'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Problem Solving',
    description: 'Finding elegant solutions to complex problems'
  }
];

export function AboutMe() {
  return (
    <section className="py-20 px-8 bg-gradient-to-b from-black to-white" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-500 mb-6">About Me</h2>
          <p className="text-xl text-green-500 max-w-3xl mx-auto">
            I'm a passionate developer with a love for creating sustainable and scalable solutions.
            When I'm not coding, you'll find me exploring nature and finding inspiration in its patterns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-green-500">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-500 mb-2">{skill.title}</h3>
              <p className="text-green-500">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}