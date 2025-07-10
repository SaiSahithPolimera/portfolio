const projectsData = [
    {
        id: 1,
        title: 'Great-interview',
        description: 'A platform designed to help developers with interview preparation by providing curated interview experiences summarized with LLMs with over 150 DSA questions and system design problems.',
        imageUrl: '/great-interview.png',
        githubUrl: 'https://github.com/SaiSahithPolimera/great-interview',
        demoUrl: 'https://great-interview.vercel.app/',
        type: 'fullstack',
        technologies: ['Express JS', 'Supabase', 'React JS', 'Gemini API', 'Tailwind CSS']
    },
    {
        id: 2,
        title: 'Console-log Blog API',
        description: 'A RESTful API built for my personal blog with secure authentication, CRUD operations, and a self-coded content management system.',
        imageUrl: '/console-blog.png',
        githubUrl: 'https://github.com/SaiSahithPolimera/console-log-api',
        demoUrl: 'https://console-log-blog.vercel.app/',
        technologies: ['Express JS', 'PostgreSQL', 'Passport.js', 'Prisma', 'JWT'],
        type: 'backend'
    },
    {
        id: 3,
        title: 'File-Nest',
        description: 'A minimal personal cloud storage service that enables users to upload, manage, and access their files from anywhere with time-limited sharing.',
        imageUrl: '/file-nest.png',
        githubUrl: 'https://github.com/SaiSahithPolimera/file-nest',
        demoUrl: 'https://file-nest.onrender.com/',
        technologies: ['Express JS', 'EJS', 'PostgreSQL', 'Supabase', 'Prisma'],
        type: 'fullstack'
    },
    {
        id: 4,
        title: 'Smart blind stick',
        description: 'An Arduino-based navigation aid designed to help blind individuals travel independently with ultrasonic obstacle detection and emergency GPS tracking.',
        imageUrl: null,
        githubUrl: 'https://github.com/SaiSahithPolimera/smart-Blind-Stick',
        technologies: ['Arduino', 'C++', 'GPS', 'GSM'],
        type: 'IOT'
    },
    {
        id: 5,
        title: 'Python Messenger',
        description: 'A real-time messaging application built with Python featuring multi-threading capabilities for handling multiple simultaneous clients.',
        imageUrl: null,
        githubUrl: 'https://github.com/SaiSahithPolimera/SimplePyMessenger',
        technologies: ['Python', 'Tkinter', 'Socket Programming'],
        type: 'desktop'
    },
];

const GithubIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.417 4.86 20.164 8.84 21.486C9.485 21.602 9.72 21.22 9.72 20.898C9.72 20.608 9.71 19.71 9.705 18.75C7.05 19.24 6.45 17.98 6.185 17.34C6.05 17.035 5.52 16.19 5.145 15.97C4.845 15.79 4.31 15.27 5.135 15.26C5.91 15.25 6.52 15.97 6.73 16.29C7.6 17.78 9.14 17.32 9.76 17.04C9.845 16.41 10.11 15.97 10.4 15.71C8.29 15.47 6.05 14.68 6.05 11.2C6.05 10.06 6.445 9.13 7.085 8.41C6.98 8.17 6.63 7.11 7.185 5.62C7.185 5.62 7.975 5.365 9.75 6.67C10.5 6.46 11.25 6.36 12 6.36C12.75 6.36 13.5 6.46 14.25 6.67C16.025 5.365 16.815 5.62 16.815 5.62C17.37 7.11 17.02 8.17 16.915 8.41C17.555 9.13 17.95 10.06 17.95 11.2C17.95 14.69 15.71 15.47 13.6 15.71C13.955 16.03 14.25 16.66 14.25 17.61C14.25 19.01 14.235 20.13 14.235 20.5C14.235 20.82 14.47 21.19 15.125 21.076C19.14 19.834 22 16.187 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" />
    </svg>
);

const Projects = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <section>
                <h2 className="section-heading mb-8">Personal Projects</h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card flex flex-col"
                        >
                            {project.imageUrl && (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="project-image w-full h-40 object-cover"
                                />
                            )}
                            <div className="p-4 flex flex-col">
                                <div className="flex items-start justify-between mb-2 gap-2">
                                    <h3 className="font-semibold text-sm flex-1">{project.title}</h3>
                                    <div className="flex-shrink-0">
                                        {project.type === 'hardware' && (
                                            <span className="project-badge project-badge-hardware">Hardware</span>
                                        )}
                                        {project.type === 'fullstack' && (
                                            <span className="project-badge bg-green-50 dark:bg-green-500/20 dark:text-white text-green-700 border border-green-200">Full Stack</span>
                                        )}
                                        {project.type === 'backend' && (
                                            <span className="project-badge bg-purple-50 dark:bg-purple-600/20 dark:text-white text-purple-700 border border-purple-200">Backend API</span>
                                        )}
                                        {project.type === 'desktop' && (
                                            <span className="project-badge bg-orange-50 dark:bg-orange-500/20 dark:text-white text-orange-700 border border-orange-200">Desktop</span>
                                        )}
                                        {project.type === 'IOT' && (
                                            <span className="project-badge bg-blue-50 dark:bg-blue-500/20 dark:text-white text-blue-700 border border-blue-200">IoT</span>
                                        )}
                                    </div>
                                </div>

                                <p className="text-neutral-600 mb-3 text-xs tracking-wide leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="project-tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-500 hover:text-black dark:text-[#8b949e] dark:hover:text-white transition-colors duration-300"
                                        title="View source code"
                                    >
                                        <GithubIcon />
                                    </a>
                                    {project.demoUrl && <a
                                        href={project.demoUrl}
                                        className="btn-secondary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.type === 'hardware' || project.type === 'IOT' ? 'View Project' :
                                            project.type === 'desktop' ? 'View Code' : 'Visit'}
                                    </a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
