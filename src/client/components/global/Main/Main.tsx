/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Main.css"

export default function Main(props:any) {
    return (
        <main id={"MainContent"} className={props.className}>
            {props.children}
        </main>
    );
}