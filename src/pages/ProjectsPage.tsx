import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/common/ProjectCard';
import FilterButtons from '../components/common/FilterButtons';
import { projects } from '../data/projects';

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFiltering, setIsFiltering] = useState(false);

  // Extract unique categories from projects
  const categories = [...new Set(projects.map(project => project.category))];

  useEffect(() => {
    setIsFiltering(true);
    
    // Small delay for animation effect
    const timer = setTimeout(() => {
      if (activeCategory === 'all') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.category === activeCategory));
      }
      
      setIsFiltering(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Projects" 
          subtitle="Explore my portfolio of projects across various domains and technologies."
        />
        
        <FilterButtons 
          categories={categories} 
          activeCategory={activeCategory} 
          onChange={setActiveCategory} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`transition-all duration-500 ${isFiltering ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && !isFiltering && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              No projects found in this category
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;