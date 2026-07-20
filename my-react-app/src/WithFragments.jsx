export default function WithFragments() {
    return (
        // React.Fragment (<>) is used to group multiple elements without adding extra nodes to the DOM
        <>
            <h1>With Fragments</h1>
            <p>Does not have any unused DOM elements.</p>
        </>
    );
}