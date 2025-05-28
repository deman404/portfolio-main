import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import SkillBar from '../components/common/SkillBar';
import Button from '../components/ui/Button';
import { skills, experiences, education } from '../data/skills';
import AnimatedText from '../components/common/AnimatedText';

const AboutPage: React.FC = () => {
  const developmentSkills = skills.filter(skill => skill.category === 'development');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const toolSkills = skills.filter(skill => skill.category === 'tools');

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience creating
                  digital solutions that solve real-world problems. My journey in development
                  began with a curiosity about how technology can improve people's lives, and
                  that remains my driving motivation today.
                </p>
                <p>
                  I specialize in building modern web and mobile applications using React,
                  Node.js, and TypeScript. My approach combines technical expertise with an
                  eye for design and a focus on user experience. Every project is an opportunity
                  to create something that's not only functional but also intuitive and enjoyable to use.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring emerging technologies, contributing to
                  open-source projects, and sharing knowledge with the development community.
                  I believe in continuous learning and staying adaptable in an ever-evolving
                  technological landscape.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="primary">
                    Get In Touch
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/profile.png" 
                  alt="Portrait" 
                  className="w-full h-auto"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white px-6 py-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 md:mb-24">
          <SectionHeading 
            title="My Skills" 
            subtitle="A comprehensive overview of my technical expertise and proficiency levels."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Development Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Development
              </h3>
              <div className="space-y-4">
                {developmentSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            
            {/* Design Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Design
              </h3>
              <div className="space-y-4">
                {designSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            
            {/* Tools & Other Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Tools & Other
              </h3>
              <div className="space-y-4">
                {toolSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16 md:mb-24">
          <SectionHeading 
            title="Experience" 
            subtitle="My professional journey and previous roles."
          />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <AnimatedText
                    text={exp.position}
                    className="text-xl font-semibold text-gray-900 dark:text-white"
                  />
                  <div className="text-teal-600 dark:text-teal-500 font-medium mt-1 md:mt-0">
                    {exp.duration}
                  </div>
                </div>
                <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {exp.company}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <SectionHeading 
            title="Education" 
            subtitle="My academic background and qualifications."
          />
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <AnimatedText
                    text={edu.degree}
                    className="text-xl font-semibold text-gray-900 dark:text-white"
                  />
                  <div className="text-teal-600 dark:text-teal-500 font-medium mt-1 md:mt-0">
                    {edu.duration}
                  </div>
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-300">
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;