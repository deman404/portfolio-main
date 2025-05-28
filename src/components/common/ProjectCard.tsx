import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import Card from '../ui/Card';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card 
      hoverEffect 
      className="h-full flex flex-col group"
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <div className="mb-2">
          <span className="text-sm font-medium text-teal-600 dark:text-teal-500">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        
        <Link 
          to={`/projects/${project.id}`}
          className="inline-flex items-center text-teal-600 dark:text-teal-500 font-medium hover:text-teal-700 dark:hover:text-teal-400 transition-colors group-hover:gap-1.5"
          aria-label={`View ${project.title} project details`}
        >
          View Project 
          <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;