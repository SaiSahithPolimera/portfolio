import blogImage from "../assets/blogAdmin.png";
import fileNestImage from "../assets/fileNest.png";
import pyMessengerImage from "../assets/pyMessenger.png";
import Card from "../components/Card";

const Projects = () => {
    const projectDetails = [
        {
            imgSrc: blogImage,
            title: "Console log blog",
            description: `A full-stack blog application that features interactions such as liking and commenting on posts, with tag-based filtering for content discovery. 
                Optimized application performance by implementing caching for blog data, reducing redundant API calls and improving load times `,
            technologies: ["react", "tailwind"],
            liveLink: "https://console-log-blog.vercel.app",
            repoLink: "https://github.com/SaiSahithPolimera/console-log-client"
        },
        {
            imgSrc: fileNestImage,
            title: "File Nest",
            description: `A full stack file management system similar to Google Drive that features user-controlled uploads with access links for file sharing, allowing the generation of access links with customizable expiration periods of up to 7 days. `,
            technologies: ["node", "express", "postgres", "prisma", "supabase"],
            liveLink: "https://file-nest.onrender.com",
            repoLink: "https://github.com/SaiSahithPolimera/File-Nest"
        },
        {
            imgSrc: pyMessengerImage,
            title: "Py Messenger",
            technologies: ["python"],
            description: "Py messenger is a minimal messaging application that uses a sockets and multi-threading for handling multiple clients to communicate at the same time.",
            repoLink: "https://github.com/SaiSahithPolimera/SimplePyMessenger"
        },
        {
            imgSrc: "",
            title: "Smart blind stick",
            technologies: ["arduino"],
            description: "An IoT- based smart stick designed to assist visually impaired individuals by detecting obstacles and providing emergency assistance.",
            repoLink: "https://github.com/SaiSahithPolimera/SimplePyMessenger"
        },
    ]
    return (
        <section id="projects" className="flex flex-col gap-6 min-h-screen p-8">
            <h2 className="text-2xl font-bold text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-5">
                {projectDetails.map((project) => <Card key={project.title} title={project.title} imgSrc={project.imgSrc} description={project.description} liveLink={project.liveLink} repoLink={project.repoLink} technologies={project.technologies} />)}
            </div>
        </section>
    )
}

export default Projects;