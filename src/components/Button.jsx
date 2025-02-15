import Icons from "./Icons";

const Button = ({ link, buttonType, name }) => {
    if (!link) return null;

    const isLive = buttonType === "live";
    const buttonText = name || (isLive ? "View Live" : "Repo");

    return (
        <a href={link} target="_blank" rel="noreferrer noopener">
            <button className="flex gap-2 flex-row items-center border-2 p-2 rounded-xl hover:bg-black hover:text-white ease-in duration-150 hover:border-black z-10 cursor-pointer">
                {buttonType && Icons[buttonType.toLowerCase()]}
                <span>{buttonText}</span>
            </button>
        </a>
    );
};

export default Button;