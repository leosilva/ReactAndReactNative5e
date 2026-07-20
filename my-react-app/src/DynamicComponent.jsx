const enabled = false;
const text = "A Button";
const placeholder = "input value...";
const size = 50;

export default function DynamicComponent() {
    return (
        <section>
            <button disabled={!enabled}>{text}</button>
            <input placeholder={placeholder} size={size} />
        </section>
    )
}