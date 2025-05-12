import BlurText from "./BlurText";

const Hero = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-3">
            <BlurText

                text="Hello, This is Sahith"

                delay={150}

                animateBy="words"

                direction="top"


                className="md:text-6xl text-4xl mb-8 font-bold font-sans  "

            />
            <BlurText className="opacity-85 font-mono text-white font-medium text-center md:text-3xl" direction="bottom" text="I like building things for web" />
        </div>
    )
}

export default Hero;