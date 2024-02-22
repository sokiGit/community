import "./Header.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header id="GlobalHeader">
            <button id="HeaderHamburger" onClick={() => {
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
            <NavLink to="/login" id="HeaderProfile">
                <VscAccount width={""}/>
                <p>
                    Log in
                </p>
            </NavLink>
        </header>
    );
}