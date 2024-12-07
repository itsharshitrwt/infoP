
import { motion } from 'framer-motion';

import { GradientText } from './ui/GradientText';

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Next.js', 'TailwindCSS',
  'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GraphQL'
];

export function TechStack() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[#1A1A1A]/50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className='text-green-500'>Tech Stack</span>
        </h2>
      </motion.div>

      <div className="overflow-hidden relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-[#1A1A1A] border border-emerald-500/10 rounded-lg min-w-max"
            >
              <span className="text-lg font-semibold text-green-500">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}