export default function ButtonWithEvent() {
    const handleClick = () => {
        console.log("Button clicked!")
    }

    return (
        <section>
            <button onClick={handleClick}>Click me</button>
        </section>
    )
}