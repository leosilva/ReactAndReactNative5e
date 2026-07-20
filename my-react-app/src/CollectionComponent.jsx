const array = ["First", "Second", "Third"];

const object = {
    first: 1,
    second: 2,
    third: 3
};

export default function CollectionComponent() {
    return (
        <section>
            <h1>Array</h1>
            <ul>
                {array.map((i) => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
            <h1>Object</h1>
            <ul>
                {Object.entries(object).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
        </section>
    );
}
