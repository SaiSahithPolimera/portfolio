
const Navbar = ({ options, selection, setSelection }) => {
    return (
        <div className="sticky z-10  rounded-2xl bg-gradient-to-tr opacity-60 from-white via-violet-300 to-violet-100  origin-center animate-fade-in-bouncedown">
            <ul className="flex gap-3 justify-center items-center self-end p-2 rounded-2xl">
                {
                    options.map((option) => <li className={`relative z-1 block cursor-pointer px-2 py-1 text-base text-black font-semibold ${option === selection ? ` rounded-lg transition ease-in-out duration-500 bg-black text-white opacity-90` : ""} `} key={option} onClick={() => { setSelection(option); scrollTo(options.indexOf(selection) + 1) }}>{option}</li>)
                }
            </ul>
        </div>
    )
}


export default Navbar