import { useState } from "react";

const Navbar = () => {
    const items = [
        {
            label: "About",
            link: "#home"
        },
        {
            label: "Projects",
            link: "#projects"
        },
        {
            label: "Experience",
            link: "#experience"
        },
        {
            label: "Connect with me",
            link: "#connect"
        },
        {
            label: "Blog",
            link: "#blog"
        },
    ]
    const [selectedOption, setSelection] = useState(items[0].label);

    const handleLinkClick = (e, item) => {
        e.preventDefault();
        setSelection(item.label);

        const targetId = item.link.substring(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            if (item.link === "#home" && targetId === "home") { 
                 window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            console.warn(`Element with ID '${targetId}' not found.`);
        }
    };

    return (
        <div className="md:w-full  flex items-center justify-center">
            <ul className=" fixed z-50 mt-20 flex gap-4 p-2  rounded-2xl backdrop-blur-xl border-2 border-stone-800 bg-slate-600/10 animate-fadeinbouncedown">
                {
                    items.map((item) => (
                        <a
                            href={item.link}
                            className={`md:py-2 md:px-3 p-1 rounded-lg md:text-base text-white text-xs transition-colors duration-300 hover:bg-stone-700/30 ${item.label === selectedOption ? 'bg-stone-600/30 text-white' : 'text-stone-300'}`}
                            onClick={(e) => handleLinkClick(e, item)}
                            key={item.label}
                        >
                            <li>{item.label}</li>
                        </a>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar