import "./Main.css"

export default function Main(props) {
    return (
        <main id={"MainContent"} className={props.className}>
            {props.children}
        </main>
    );
}