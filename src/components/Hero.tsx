import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';


export function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 p-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 relative"
      >
        <div className="absolute inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-700 mt-20 rounded-2xl blur opacity-70" />
        <motion.img
          src="https://i.pinimg.com/736x/b6/53/b7/b653b7973924ad2f48f3aaa4299430ed.jpg"
          alt="Developer workspace"
          className="w-[90%] md:h-[500px] h-[320px] object-cover rounded-2xl relative mx-auto mt-20"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Building<span className='bg-green-500'>the future</span> of web
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Full Stack Developer crafting exceptional digital experiences with modern technologies
          and innovative solutions.
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { icon: <Github className="w-6 h-6" />, href: 'https://github.com' },
            { icon: <Linkedin className="w-6 h-6" />, href: 'https://linkedin.com' },
            { icon: <Mail className="w-6 h-6" />, href: 'mailto:contact@example.com' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="p-2 bg-[#1A1A1A] border border-emerald-500/20 rounded-full hover:border-emerald-500/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        
        <motion.div 
          className="flex gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 1 }} 
        >
          <motion.a 
            href="https://drive.google.com/file/d/1cw996QF5ZVbIQfkmPfIp6V_hjgAZpEZe/view?usp=drivesdk" 
            className="px-6 py-3 bg-black border 2 border-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            My Resume
          </motion.a>
          
          <motion.a 
            href="mailto:harshit77dev@gmail.com" 
            className="px-6 py-3  bg-black border 2 border-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}