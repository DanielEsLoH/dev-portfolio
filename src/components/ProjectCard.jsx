import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import { FiGithub } from 'react-icons/fi';

const ProjectCard = ({project, index, isDarkMode}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isInteractionReady, setIsInteractionReady] = useState(false);

  const handleCardClick = (e) => {
    if (showOverlay) return;
    e.preventDefault();
    setShowOverlay(true);
    // Delay making links interactive to prevent immediate click on mobile
    setTimeout(() => setIsInteractionReady(true), 100);
    setTimeout(() => {
      setShowOverlay(false);
      setIsInteractionReady(false);
    }, 5000);
  }
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return <motion.div
    variants={cardVariants}
    whileHover={{
      y: -8,
      transition: { duration: 0.3, ease: 'easeOut'},
    }}
    className='group relative'
    onClick={handleCardClick}
  >
    <div
      className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
        isDarkMode
        ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10'
        : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-500/10'
      } backdrop-blur-sm`}
    >
      {/* Project Image */}
      <div className='relative overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105'
        />

        {/* Featured Badge */}
        {project.featured && (
          <div className='absolute top-4 left-4'>
            <span className='bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium'>
              Featured
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className='absolute top-4 right-4'>
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              isDarkMode
                ? 'bg-gray-800/80 text-gray-300'
                : 'bg-white/80 text-gray-700'
            } backdrop-blur-sm`}
          >
            {project.category}
          </span>
        </div>

        {/* Hover Overlay with CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showOverlay ? 1 : 0 }}
          className='absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4'
          style={{ pointerEvents: showOverlay ? 'auto' : 'none' }}
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={() => setShowOverlay(true)}
          onMouseLeave={() => setShowOverlay(false)}
        >
          <motion.a
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: showOverlay ? 1 : 0.8,
              opacity: showOverlay ? 1 : 0
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: isInteractionReady ? 'auto' : 'none' }}
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors'
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </motion.a>

          <motion.a
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: showOverlay ? 1 : 0.8,
              opacity: showOverlay ? 1 : 0
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            style={{ pointerEvents: isInteractionReady ? 'auto' : 'none' }}
            className={`border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-all`}
          >
            <FiGithub size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className='p-6'>
        <h3 className='text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors'>
          {project.title}
        </h3>

        <p
          className={`text-sm leading-relaxed mb-4 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className='flex flex-wrap gap-2'>
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`text-xs px-3 py-1 rounded-full ${
                isDarkMode
                  ? 'bg-gray-800 text-gray-300'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
};

export default ProjectCard