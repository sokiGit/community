import { RxHamburgerMenu } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";

export default function Header() {
    return (
        <header id="GlobalHeader">
            <button onClick={() => {
                const nav = document.getElementById("GlobalNavigation") as HTMLElement | null;
                if (nav) {
                    const state = (nav.getAttribute("data-open") == "true") ? "false" : "true"
                    nav.setAttribute("data-open", state)
                }
            }}>
                <RxHamburgerMenu />
            </button>
            <h2>
                soki's community website
            </h2>
            <a id="HeaderProfile">
                <VscAccount />
                Log in
            </a>
        </header>
    );
}