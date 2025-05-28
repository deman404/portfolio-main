import React from 'react';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          {skill.name}
        </h3>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-teal-600 dark:bg-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${skill.level}%`,
            transitionDelay: '200ms'
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;