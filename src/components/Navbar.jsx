const Navbar = ({ options, selection, setSelection }) => {
    return (
        <div className="sticky self-center justify-start md:w-auto z-10 rounded-2xl bg-gradient-to-tr opacity-60 from-white via-violet-300 to-violet-100 origin-center animate-fade-in-bouncedown">
            <ul className="flex md:gap-3 gap-3 justify-center items-center self-end p-2 rounded-2xl">
                {
                    options.map((option) => (
                        <li
                            className={`relative z-1 block cursor-pointer md:px-2 py-[2px] px-[4px] md:text-base text-sm text-black font-semibold 
                                ${option === selection ? 'rounded-lg transition ease-in-out duration-500 bg-black text-white opacity-90' : ''}`
                            }
                            key={option}
                            onClick={() => setSelection(option)}
                        >
                            {option}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar