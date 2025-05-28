import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Globe, Code } from "lucide-react";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";
import { Project } from "../types";
import AnimatedText from "../components/common/AnimatedText";

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);

    // Find the project by id
    const foundProject = projects.find((p) => p.id === id) || null;
    setProject(foundProject);

    if (foundProject && foundProject.content?.gallery?.length > 0) {
      setActiveImage(foundProject.content.gallery[0]);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-48 bg-gray-300 dark:bg-black rounded mb-4"></div>
          <div className="h-4 w-64 bg-gray-200 dark:bg-black rounded"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Project not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/projects">
            <Button variant="primary">
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-4xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar
                size={16}
                className="mr-2 text-teal-600 dark:text-teal-500"
              />
              <span>{project.date}</span>
            </div>

            {project.clientName && (
              <div className="flex items-center">
                <User
                  size={16}
                  className="mr-2 text-teal-600 dark:text-teal-500"
                />
                <span>Client: {project.clientName}</span>
              </div>
            )}

            {project.projectUrl && (
              <div className="flex items-center">
                <Globe
                  size={16}
                  className="mr-2 text-teal-600 dark:text-teal-500"
                />
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-600 dark:hover:text-teal-500 transition-colors"
                >
                  Visit Project
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Project Images */}
        {project.content?.gallery && (
          <div className="mb-12">
            {/* Main Image */}
            <div className="bg-gray-100 dark:bg-black rounded-xl overflow-hidden mb-4 aspect-video">
              <img
                src={activeImage || project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Gallery */}
            {project.content.gallery.length > 1 && (
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {project.content.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(image)}
                    className={`
                      aspect-video rounded-lg overflow-hidden border-2 transition-all
                      ${
                        activeImage === image
                          ? "border-teal-600 dark:border-teal-500 shadow-md"
                          : "border-transparent hover:border-gray-300 dark:hover:border-gray-700"
                      }
                    `}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Project Content */}
        {project.content && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              {/* Overview */}
              <section className="mb-12">
                <AnimatedText
                  text="Project Overview"
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                />
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {project.content.overview}
                </p>
              </section>

              {/* Challenge */}
              <section className="mb-12">
                <AnimatedText
                  text="The Challenge"
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                />
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {project.content.challenge}
                </p>
              </section>

              {/* Solution */}
              <section className="mb-12">
                <AnimatedText
                  text="The Solution"
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                />
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {project.content.solution}
                </p>
              </section>

              {/* Results */}
              {project.content.results && (
                <section className="mb-12">
                  <AnimatedText
                    text="Results"
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                  />
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {project.content.results}
                  </p>
                </section>
              )}
            </div>

            <div>
              {/* Technologies */}
              <div className="bg-gray-50 dark:bg-black rounded-xl p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Code
                    size={20}
                    className="mr-2 text-teal-600 dark:text-teal-500"
                  />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.content.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-teal-600 dark:bg-teal-700 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">
                  Interested in working together?
                </h3>
                <p className="mb-4 text-teal-100">
                  Let's discuss how I can help with your next project.
                </p>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-teal-600"
                    fullWidth
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
