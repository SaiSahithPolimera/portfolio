import Button from "../components/Button"

const ConnectWithMe = () => {
    return (
        <section className='min-h-screen flex-col gap-12 flex items-center justify-center'>
                <h2 className="text-black text-4xl font-extrabold">Connect with me</h2>
            <div className="flex flex-col gap-3 items-center">
                <Button link={`https://www.linkedin.com/in/saisahithpolimera/`} name={'LinkedIn'} buttonType={'Linkedin'} />
                <Button link={`mailto:saisahithpolimera769@gmail.com`} name={'Gmail'} buttonType={'Gmail'} />
            </div>
        </section>
    )
}

export default ConnectWithMe;