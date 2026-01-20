import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Hospital Annual Report Generation System",
      description: "🎓 Final Year Project: An intelligent automated system for generating comprehensive hospital annual reports. Features advanced data analytics, statistical analysis, automated report compilation from hospital data, customizable report templates, and streamlined compliance reporting. Built to transform complex healthcare data into professional annual documentation.",

      technologies: ["Spring Boot", "React", "MySQL", "PDF Generation", "CI/CD", "Docker", "AWS"],
      image:
        "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-600 to-purple-600",
      demoUrl: "http://nindt.duckdns.org/",
      githubUrl: "https://github.com/Dilshan2002104-cpu/hospital-annual-report-generation-system-final-year-project",
    },
    {
      title: "employee leave management system",
      description:
        "A robust employee leave management system built with React and Spring Boot. Features include secure login, leave request handling, department-level approvals, and role-based access control.",
      technologies: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-green-400 to-blue-500",
      demoUrl: "http://itum-elms.duckdns.org/",
      githubUrl: "https://github.com/Dilshan2002104-cpu/Dilshan2002104-cpu-employee-leave-management-system",
    },
    {
      title: "Forever ecommerce application",
      description: "A modern and responsive eCommerce frontend built with React. Features include dynamic product listings, category-based browsing, shopping cart functionality, and seamless user navigation. Implemented with automated CI/CD pipeline for continuous deployment and enhanced development workflow.",

      technologies: ["react", "CI/CD"],
      image:
        "/react.JPG",
      gradient: "from-purple-400 to-pink-500",
      demoUrl: "http://forever-ecommerce.duckdns.org/",
      githubUrl: "https://github.com/Dilshan2002104-cpu/E-Commerce-using-react",
    },
    {
      title: "Conference management system",
      description: "A comprehensive web application for managing academic and research conferences, built using the MERN stack. Key features include user registration, paper submission and review workflows, session scheduling, and real-time notifications to streamline conference coordination.",

      technologies: ["node", "mongodb", "react"],
      image:
        "/conference.JPG",
      gradient: "from-orange-400 to-red-500",
      demoUrl: "#",
      githubUrl: "https://github.com/Dilshan2002104-cpu/conference-manager",
    },
    {
      title: "Smart Study Buddy",
      description: "🤖 An AI-powered study assistant that transforms PDFs and YouTube videos into interactive learning experiences. Features include intelligent summarization using Google Gemini 2.0, AI-powered Q&A, auto-generated flashcards, adaptive quizzes, and separate dashboards for managing study materials. Built with microservices architecture for scalability.",

      technologies: ["React", "Spring Boot", "Python", "FastAPI", "Google Gemini AI", "Firebase", "Java"],
      image:
        "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-indigo-500 to-purple-600",
      demoUrl: "#",
      githubUrl: "https://github.com/Dilshan2002104-cpu/Smart-Study-Buddy",
    },
    {
      title: "Data Analyst AI Agent",
      description: "🧠 Intelligent multi-agent AI platform powered by Google Gemini 2.0 Flash. Features 4 specialized agents: Orchestrator, CSV Analyst, SQL Agent, and Report Writer. Analyze data from CSV files and SQL databases using natural language queries. Auto-generates charts, insights, and professional PDF reports with embedded visualizations and data tables.",

      technologies: ["React", "Spring Boot", "Python", "Flask", "Google Gemini AI", "Firebase", "Pandas", "ReportLab"],
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-cyan-500 to-blue-600",
      demoUrl: "#",
      githubUrl: "https://github.com/Dilshan2002104-cpu/Data-analyst-ai-agent",
    },
    {
      title: "OpenCV Circuit Wire Router",
      description: "🔌 Intelligent circuit wire drawing tool with AI-powered smart routing. Uses computer vision techniques including A* pathfinding, Manhattan routing, adaptive thresholding, and morphological operations. Features obstacle detection for hand-drawn circuits, automatic component avoidance, optimized path generation, and interactive GUI with zoom/pan capabilities.",

      technologies: ["Python", "OpenCV", "NumPy", "Tkinter", "Computer Vision", "A* Algorithm"],
      image:
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-green-500 to-teal-600",
      demoUrl: "#",
      githubUrl: "https://github.com/Dilshan2002104-cpu/OpenCV-algorithm",
    },
    {
      title: "Movie Review App",
      description: "🎬 Full-stack movie browsing and review platform with responsive design. Features comprehensive movie details, user review submission system, REST API integration, MongoDB data persistence, and React Router navigation. Built with Spring Boot backend and React frontend, demonstrating clean separation of concerns and modern web development practices.",

      technologies: ["React", "Spring Boot", "MongoDB", "Axios", "REST API", "Java"],
      image:
        "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-red-500 to-pink-600",
      demoUrl: "#",
      githubUrl: "https://github.com/Dilshan2002104-cpu/Movie-Review-App",
    },
    {
      title: "P2P File Sharing System",
      description: "📁 Peer-to-peer file sharing application using WebRTC for direct browser-to-browser transfers. Features file chunking (256KB), SHA-256 hash verification, multi-peer downloading, WebSocket signaling, IndexedDB storage for resumable downloads, and real-time progress tracking. Built with React, Spring Boot, and PostgreSQL for metadata management.",

      technologies: ["React", "Spring Boot", "WebRTC", "PostgreSQL", "WebSocket", "IndexedDB"],
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-violet-500 to-purple-600",
      demoUrl: "#",
      githubUrl: "https://github.com/Dilshan2002104-cpu/File-Sharing-System",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.githubUrl}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
