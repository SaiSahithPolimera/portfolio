import Button from "./Button";
import Icons from "./Icons";

const Card = ({ imgSrc, title, description, liveLink, repoLink, technologies }) => {
    return (
        <div className="px-4 py-4  grid md:grid-cols-card md:gap-8  backdrop-blur-3xl border-2 blur-l rounded-2xl relative items-center">
            <div className="flex flex-col justify-around gap-2 h-full items-center">
                {imgSrc ? <img src={imgSrc} className="w-32 rounded-xl border-black" /> : <div className="text-3xl">{'{ }'}</div>}
                <h2 className="font-bold text-lg">{title}</h2>
            </div>
            <div className="flex flex-col gap-3 items-center h-full justify-around">
                <p className="">{description}</p>
                {technologies && <ul className="md:justify-start justify-center flex gap-3 w-full flex-wrap">
                    {
                        technologies.map((technology) => <li className="backdrop-blur-lg p-1 rounded-lg bg-gradient-to-tr from-violet-300 via-purple-100 to-white" key={technology}>{Icons[technology]}</li>)
                    }
                </ul>
                }
                <div className="flex gap-2 flex-row">
                    <Button link={liveLink} buttonType={"live"} />
                    <Button link={repoLink} buttonType={""} />
                </div>
            </div>
        </div>
    )
}

export default Card;

