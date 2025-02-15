import blogImage from "../assets/blogAdmin.png";
import fileNestImage from "../assets/fileNest.png";
import pyMessengerImage from "../assets/pyMessenger.png";
import Card from "../components/Card";
const Projects = () => {
    const projectDetails = [
        {
            imgSrc: blogImage,
            title: "Blog CMS",
            description: `This is a CMS for my personal blog. This tool is developed with react and tailwind and powered by 
                          a self-coded RESTful blog written in Express.`,
            technologies: ["react", "tailwind"],
            liveLink: "https://console-log-admin.vercel.app",
            repoLink: "https://github.com/SaiSahithPolimera/console-log-admin"
        },
        {
            imgSrc: fileNestImage,
            title: "File Nest",
            description: `File nest is a minimal personal storage service. It allows users to share the media and 
            documents with others by allowing them to create time-limited links with a maximum period of 7 days.`,
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
        <section className="flex flex-col gap-6 px-12 py-4 min-h-screen mt-12">
            <h2 className="text-2xl font-bold text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projectDetails.map((project) => <Card key={project.title} title={project.title} imgSrc={project.imgSrc} description={project.description} liveLink={project.liveLink} repoLink={project.repoLink} technologies={project.technologies} />)}
            </div>
        </section>
    )
}

export default Projects;