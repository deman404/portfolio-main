import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/common/ProjectCard';
import TestimonialCard from '../components/common/TestimonialCard';
import AnimatedText from '../components/common/AnimatedText';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';

const HomePage: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-16">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Crafting <span className="text-teal-600 dark:text-teal-500">Digital Experiences</span> that Make an Impact
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-12">
              Full-stack developer specializing in creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  View My Work
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 ${
            showScrollIndicator ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll to explore</span>
          <div className="animate-bounce">
            <ArrowDown size={20} className="text-teal-600 dark:text-teal-500" />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900  items-center">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A selection of my recent work - each project represents a unique challenge solved with creativity and technical expertise."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button variant="secondary">
                View All Projects
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="My Services" 
            subtitle="I provide end-to-end solutions for digital products, from concept to deployment."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Building responsive, performant, and accessible websites and web applications.',
                icon: '🌐'
              },
              {
                title: 'Mobile Applications',
                description: 'Creating cross-platform mobile apps with React Native for iOS and Android.',
                icon: '📱'
              },
              {
                title: 'UI/UX Design',
                description: 'Designing intuitive and engaging user experiences that prioritize usability.',
                icon: '🎨'
              },
              {
                title: 'API Development',
                description: 'Building robust and scalable APIs to power your applications.',
                icon: '⚙️'
              },
              {
                title: 'Data Visualization',
                description: 'Transforming complex data into insightful and interactive visualizations.',
                icon: '📊'
              },
              {
                title: 'Technical Consultation',
                description: 'Providing expert advice on technology choices and implementation strategies.',
                icon: '💬'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="My Process" 
            subtitle="A thoughtful approach to turning ideas into reality through a proven methodology."
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-[2px] bg-teal-600/30 dark:bg-teal-500/30"></div>
              
              {/* Timeline Items */}
              {[
                {
                  title: 'Discovery',
                  description: 'Understanding your goals, requirements, and constraints through in-depth consultation.',
                },
                {
                  title: 'Strategy & Planning',
                  description: 'Developing a comprehensive plan with timeline, technical approach, and success metrics.',
                },
                {
                  title: 'Design & Prototyping',
                  description: 'Creating wireframes and interactive prototypes to visualize the solution before development.',
                },
                {
                  title: 'Development',
                  description: 'Building the solution with clean, maintainable code and regular progress updates.',
                },
                {
                  title: 'Testing & Refinement',
                  description: 'Rigorous testing across devices and implementing refinements based on feedback.',
                },
                {
                  title: 'Deployment & Support',
                  description: 'Launching the solution and providing ongoing support and maintenance as needed.',
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-12 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Circle */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-teal-600 dark:bg-teal-500 border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  {/* Content */}
                  <div className={`pl-12 md:pl-0 w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 1 ? 'md:text-right' : ''
                  }`}>
                    <AnimatedText
                      text={step.title}
                      className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                    />
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Client Testimonials" 
            subtitle="What clients say about working with me."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-teal-600 dark:bg-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your ideas to life?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project and create something exceptional together.
          </p>
          <Link to="/contact">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-teal-600 dark:hover:text-teal-800"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;