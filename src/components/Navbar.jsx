import { useState } from "react"

const Navbar = () => {
    const options = ["About", "Projects", "Experience", "Contact"]
    const [selection, setSelection] = useState(options[0]);
    return (
        <div className="backdrop-blur-2xl rounded-2xl backdrop-brightness-95 w-fit justify-center self-center origin-center justify-self-center">
            <ul className="flex gap-3 justify-center items-center self-end p-2 rounded-2xl relative">
                {
                    options.map((option) => <li className={`relative z-10 block cursor-pointer px-2 py-1 text-base text-white font-semibold ${option === selection ? ` rounded-lg transition ease-out duration-300 mix-blend-screen bg-zinc-900 opacity-90` : ""} `} key={option} onClick={() => setSelection(option)}>{option}</li>)
                }
            </ul>
        </div>
    )
}


export default Navbar